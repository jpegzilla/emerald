// palette handling
const addToPalette = document.getElementById("add-to-palette");
const finalizeExportButton = document.getElementById("do-export");
const selectExportType = document.getElementById("selectExportType");
const exportTextContainer = document.getElementsByClassName(
  "export-item-container"
)[0];

let currentPaletteIndex;
let currentPaletteObject;

let exportType = selectExportType.value;
selectExportType.addEventListener("input", () => {
  exportType = selectExportType.value;
  Array.from(exportTextContainer.children).forEach(child =>
    child.classList.remove("active")
  );
  exportTextContainer.children[selectExportType.selectedIndex].classList.add(
    "active"
  );
});

let STORAGE = window.localStorage;

// remember to remove this:
// STORAGE.clear();

let PALETTES =
  STORAGE.getItem("palettes") == undefined
    ? [[]]
    : JSON.parse(STORAGE.getItem("palettes"));

let currentPalette = PALETTES.length - 1;
let paletteTotalCount = PALETTES.length;
let paletteHumanIndex = 1;

const savePaletteState = () => {
  let palettesToStore = JSON.stringify(PALETTES);
  localStorage.setItem("palettes", palettesToStore);
};

const paletteContainer = document.getElementsByClassName(
  "palette-container"
)[0];
const copiedNotification = document.getElementById("copiedNotification");

const makeStyles = (exportObject, type) => {
  let sassInfo = [];

  exportObject.palette.forEach((pigment, i) => {
    let bgName = toCamelCase(exportObject.colorNames[i].bg);
    let bgHex = pigment.bg.hex;

    let textName = toCamelCase(exportObject.colorNames[i].text);
    let textHex = pigment.text.hex;

    let swatch = {
      bg: { name: bgName, hex: bgHex },
      text: { name: textName, hex: textHex }
    };

    sassInfo.push(swatch);
  });

  let sassBgColors = [];
  let sassTextColors = [];

  for (let i = 0; i < sassInfo.length; i++) {
    let bgName = sassInfo[i].bg.name;
    let bgHex = sassInfo[i].bg.hex;

    let textName = sassInfo[i].text.name;
    let textHex = sassInfo[i].text.hex;

    sassBgColors.push({ name: bgName, hex: bgHex });

    sassTextColors.push({ name: textName, hex: textHex });
  }

  let finalArray = sassBgColors.concat(sassTextColors);
  finalArray.sort(propSort("name"));

  let colorInst = 0;

  finalArray.forEach((color, i) => {
    if (i > 0 && finalArray[i - 1].name == color.name) {
      colorInst++;
      finalArray[i].name += `-${colorInst}`;
    } else if (
      i > 0 &&
      finalArray[i - 1].name == color.name + `-${colorInst}`
    ) {
      colorInst++;
      finalArray[i].name += `-${colorInst}`;
    } else {
      colorInst = 0;
    }
  });

  let str1 = "";
  let str2 = "";

  if (type == "sass") {
    finalArray.forEach((color, i) => {
      if (finalArray.length - 1 == i) {
        return (str1 += "$" + color.name + ": " + color.hex);
      }
      return (str1 += "$" + color.name + ": " + color.hex + "\n");
    });
  }

  if (type == "css") {
    finalArray.forEach((color, i) => {
      if (finalArray.length - 1 == i) {
        return (str1 += "--" + color.name + ": " + color.hex);
      }
      return (str1 += "--" + color.name + ": " + color.hex + "\n");
    });
  }

  let rgbValues = finalArray.map(
    item =>
      `rgb(${hexToRGBA(item.hex).r}, ${hexToRGBA(item.hex).g}, ${
        hexToRGBA(item.hex).b
      })`
  );

  let rgbAlts = [];
  finalArray.forEach((item, i) => {
    let name = item.name;
    let rgb = rgbValues[i];
    rgbAlts.push({ name: name, rgb: rgb });
  });

  if (type == "sass") {
    rgbAlts.forEach((color, i) => {
      if (rgbAlts.length - 1 == i) {
        return (str2 += "$" + color.name + ": " + color.rgb);
      }
      return (str2 += "$" + color.name + ": " + color.rgb + "\n");
    });
  }

  if (type == "css") {
    rgbAlts.forEach((color, i) => {
      if (rgbAlts.length - 1 == i) {
        return (str2 += "--" + color.name + ": " + color.rgb);
      }
      return (str2 += "--" + color.name + ": " + color.rgb + "\n");
    });
  }

  let sassTemplate = `// hex colors

${str1}

// rgb colors

${str2}
  `;

  if (type == "sass") {
    exportTextContainer.children[0].textContent = sassTemplate;
  }
  if (type == "css") {
    exportTextContainer.children[1].textContent = sassTemplate;
  }
};

const makeExportContent = exportObject => {
  Array.from(exportTextContainer.children).forEach(child =>
    child.classList.remove("active")
  );
  // the two switches are seperated for a reason! remember!
  makeStyles(exportObject, "sass");
  makeStyles(exportObject, "css");

  if (
    !mobilecheck() &&
    window.matchMedia("(max-width: 900px)").matches == false
  ) {
    drawSwatches(exportObject);
  } else {
    if (
      window.matchMedia("(max-width: 900px)").matches == true ||
      mobilecheck() == true
    ) {
      drawSwatchesMobile(exportObject);
    } else {
      drawSwatches(exportObject);
    }
  }
  switch (exportType) {
    case "sass":
      exportTextContainer.children[0].classList.add("active");
      break;
    case "css":
      exportTextContainer.children[1].classList.add("active");
      break;
    case "image":
      exportTextContainer.children[2].classList.add("active");
      break;
  }
};

const exportPalette = (palette, index, openmodal = true) => {
  if (openmodal) openExportModal();

  // get all colors in the palette, then make some sort of export thing
  let exportingPalette = PALETTES[index];

  let wereColorsFancy = false;
  if (FANCY_COLOR_NAMES == false) {
    FANCY_COLOR_NAMES = true;
    wereColorsFancy = true;
    setColorNames();
  }

  let colorNames = [];

  for (var i = 0; i < exportingPalette.length; i++) {
    colorNames.push({
      bg: findNearestColor(exportingPalette[i].bg.hex),
      text: findNearestColor(exportingPalette[i].text.hex)
    });
  }

  let exportObject = {
    colorNames: colorNames,
    name: palette.name,
    palette: exportingPalette
  };

  if (!wereColorsFancy) {
    FANCY_COLOR_NAMES = false;
    setColorNames();
  }
  makeExportContent(exportObject);
};

finalizeExportButton.addEventListener("click", e => {
  let originalText = finalizeExportButton.textContent;
  switch (exportType) {
    case "sass":
      finalizeExportButton.textContent = "copied to clipboard!";
      copyContent(e, exportTextContainer.children[0], false);

      setTimeout(() => {
        finalizeExportButton.textContent = originalText;
      }, 2000);

      break;
    case "css":
      finalizeExportButton.textContent = "copied to clipboard!";
      copyContent(e, exportTextContainer.children[1]);

      setTimeout(() => {
        finalizeExportButton.textContent = originalText;
      }, 2000);
      break;
    case "image":
      const exportCanvas = document.getElementById("export-canvas");
      let dataURI = exportCanvas.toDataURL();

      let img = new Image();
      img.src = dataURI;

      // just view image

      // let win = window.open("");
      // win.document.write(img.outerHTML);

      // download image

      const a = document.createElement("a");
      a.href = dataURI;
      a.download = "emerald-palette.png";
      a.click();
      break;
  }
});

const paletteControls = (palette, operation, index) => {
  currentPaletteIndex = index;
  currentPaletteObject = palette;
  switch (operation) {
    case "remove":
      // animate the removal of palette bar
      palette.classList.add("hide");
      setTimeout(() => {
        paletteHumanIndex--;
        paletteTotalCount--;
        currentPalette--;
        PALETTES.splice(index, 1);
        savePaletteState();
        return palette.remove();
      }, 500);
      break;
    case "export":
      return exportPalette(palette, index);
    default:
      return;
  }
};

const copyContent = (e = null, element, showNotification = true) => {
  if (e != null) e.preventDefault();
  window.getSelection().selectAllChildren(element);
  document.execCommand("copy");
  if (showNotification) showCopyNotification();
  window.getSelection().removeAllRanges();
};

const setPigmentTextColor = pigmentContainer => {
  Array.from(pigmentContainer.children).forEach(child => {
    let f = child.style.backgroundColor.match(
      /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
    );

    let background = {
      r: f[1],
      g: f[2],
      b: f[3]
    };

    let contrast = Math.round(
      (parseInt(background.r) * 299 +
        parseInt(background.g) * 587 +
        parseInt(background.b) * 114) /
        1000
    );

    if (contrast > 125 && child.classList.contains("blackText") == false) {
      child.classList.add("blackText");
    } else if (
      contrast < 125 &&
      child.classList.contains("blackText") == true
    ) {
      child.classList.remove("blackText");
    }
  });
};

const loadSavedPalettes = () => {
  PALETTES.forEach((palette, i) => {
    let paletteBar = paletteBarTemplate.cloneNode(true);
    paletteBar.id = "";
    paletteBar.classList.add("palette-bar");
    paletteBar.classList.remove("empty");
    paletteBar.getElementsByClassName(
      "palette-number"
    )[0].textContent = `palette ${paletteHumanIndex}`;
    let paletteName = paletteBar.getElementsByClassName("palette-number")[0]
      .textContent;
    paletteHumanIndex++;

    let exportButton = paletteBar.getElementsByClassName("export-palette")[0];
    let deleteButton = paletteBar.getElementsByClassName("remove-palette")[0];

    let paletteObject = {
      name: paletteName,
      palette: paletteBar
    };

    deleteButton.addEventListener("click", () =>
      paletteControls(paletteBar, "remove", i)
    );

    exportButton.addEventListener("click", () =>
      paletteControls(paletteObject, "export", i)
    );

    paletteContainer.appendChild(paletteBar);

    palette.forEach(pigment => {
      let pigmentContainer = palettePigmentTemplate.cloneNode(true);
      pigmentContainer.children[0].style.backgroundColor = pigment.bg.hex;
      pigmentContainer.children[1].style.backgroundColor = pigment.text.hex;
      pigmentContainer.children[0].textContent = pigment.bg.hex;
      pigmentContainer.children[1].textContent = pigment.text.hex;

      setPigmentTextColor(pigmentContainer);

      pigmentContainer.children[0].addEventListener("click", e =>
        copyContent(e, pigmentContainer.children[0])
      );
      pigmentContainer.children[1].addEventListener("click", e =>
        copyContent(e, pigmentContainer.children[1])
      );

      pigmentContainer.id = "";
      pigmentContainer.classList.add("palette-pigment");

      paletteBar.appendChild(pigmentContainer);
    });
  });
};

if (PALETTES[0].length != 0) loadSavedPalettes();

const showCopyNotification = () => {
  copiedNotification.classList.add("copied");
  setTimeout(() => {
    copiedNotification.classList.remove("copied");
  }, 100);
};

const addNewPaletteBar = (bgHex, textHex, alsoAddPigment = true) => {
  let newPaletteBar = paletteBarTemplate.cloneNode(true);
  newPaletteBar.id = "";
  newPaletteBar.classList.add("palette-bar");
  newPaletteBar.classList.remove("empty");
  paletteContainer.appendChild(newPaletteBar);

  newPaletteBar.children[0].getElementsByClassName(
    "palette-number"
  )[0].innerText = `palette ${paletteHumanIndex}`;

  let paletteName = newPaletteBar.children[0].getElementsByClassName(
    "palette-number"
  )[0].innerText;

  let paletteObject = {
    name: paletteName,
    palette: newPaletteBar
  };

  paletteHumanIndex++;

  if (alsoAddPigment == true) addPigment(newPaletteBar, bgHex, textHex);

  let exportButton = newPaletteBar.getElementsByClassName("export-palette")[0];
  let deleteButton = newPaletteBar.getElementsByClassName("remove-palette")[0];

  deleteButton.addEventListener("click", () =>
    paletteControls(newPaletteBar, "remove", paletteTotalCount - 1)
  );

  exportButton.addEventListener("click", () =>
    paletteControls(paletteObject, "export", paletteTotalCount - 1)
  );

  if (PALETTES[0].length > 0) paletteTotalCount++;
};

const addPigment = (paletteBar, bgHex, textHex) => {
  let pigmentContainer = palettePigmentTemplate.cloneNode(true);

  pigmentContainer.children[0].style.backgroundColor = bgHex;
  pigmentContainer.children[1].style.backgroundColor = textHex;
  pigmentContainer.children[0].textContent = bgHex;
  pigmentContainer.children[1].textContent = textHex;

  setPigmentTextColor(pigmentContainer);

  pigmentContainer.children[0].addEventListener("click", e =>
    copyContent(e, pigmentContainer.children[0])
  );
  pigmentContainer.children[1].addEventListener("click", e =>
    copyContent(e, pigmentContainer.children[1])
  );

  pigmentContainer.id = "";
  pigmentContainer.classList.add("palette-pigment");

  paletteBar.appendChild(pigmentContainer);
};

const addColorToPalette = (bgColor, textColor) => {
  let pigment = palettePigmentTemplate.cloneNode(true);
  pigment.id = "";

  let bgHex = rgbToHex(bgColor.r, bgColor.g, bgColor.b);
  let textHex = rgbToHex(textColor.r, textColor.g, textColor.b);
  let currentPaletteBar = paletteContainer.children[paletteTotalCount - 1];

  let localColorObject = {
    bg: { hex: bgHex, rgb: bgColor },
    text: { hex: textHex, rgb: textColor }
  };

  if (PALETTES[currentPalette].length < 5) {
    PALETTES[currentPalette].push(localColorObject);
  } else {
    currentPalette++;
    PALETTES.push([]);
    PALETTES[currentPalette].push(localColorObject);
  }

  savePaletteState();

  if (currentPaletteBar.children.length < 6) {
    addPigment(currentPaletteBar, bgHex, textHex);
  } else {
    addNewPaletteBar(bgHex, textHex);
  }
};

addToPalette.addEventListener("click", () => {
  let bgColor = colorObject.bg.rgb;
  let textColor = colorObject.text.rgb;

  let bgHex = rgbToHex(bgColor.r, bgColor.g, bgColor.b);
  let textHex = rgbToHex(textColor.r, textColor.g, textColor.b);

  if (paletteContainer.children.length == 0)
    addNewPaletteBar(bgHex, textHex, false);

  addColorToPalette(bgColor, textColor);

  if (firstPalette == true) {
    scrollSmooth(window, "bottom");
    firstPalette = false;
  }
});

addNewPalette.addEventListener("click", () => addNewPaletteBar());
