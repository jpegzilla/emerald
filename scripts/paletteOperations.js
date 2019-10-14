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
      a.rel = "noopener noreferrer";
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
        currentPalette--;
        PALETTES.splice(index, 1);
        if (PALETTES.length == 0) PALETTES = [[]];
        paletteTotalCount = PALETTES.length;
        if (currentPalette < 0) currentPalette = 0;
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
  PALETTES.forEach(palette => {
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
    paletteContainer.appendChild(paletteBar);

    deleteButton.addEventListener("click", () =>
      paletteControls(
        paletteBar,
        "remove",
        Array.from(paletteContainer.children).indexOf(paletteBar)
      )
    );

    exportButton.addEventListener("click", () =>
      paletteControls(
        paletteObject,
        "export",
        Array.from(paletteContainer.children).indexOf(paletteBar)
      )
    );

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

if (PALETTES && PALETTES.length > 0) {
  if (PALETTES[0].length != 0) loadSavedPalettes();
}
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

  if (alsoAddPigment == true) addPigment(newPaletteBar, bgHex, textHex, true);

  let exportButton = newPaletteBar.getElementsByClassName("export-palette")[0];
  let deleteButton = newPaletteBar.getElementsByClassName("remove-palette")[0];

  deleteButton.addEventListener("click", () => {
    // the index of removal has to be defined in this callback because otherwise,
    // the index won't update correctly every time a different 'remove' button is
    // clicked.

    paletteControls(
      newPaletteBar,
      "remove",
      Array.from(paletteContainer.children).indexOf(newPaletteBar)
    );
  });

  exportButton.addEventListener("click", () =>
    paletteControls(
      paletteObject,
      "export",
      Array.from(paletteContainer.children).indexOf(newPaletteBar)
    )
  );

  paletteTotalCount = PALETTES.length;
};

const addPigment = (paletteBar, bgHex, textHex, saveColor = false) => {
  let pigmentContainer = palettePigmentTemplate.cloneNode(true);

  pigmentContainer.children[0].style.backgroundColor = bgHex;
  pigmentContainer.children[1].style.backgroundColor = textHex;
  pigmentContainer.children[0].textContent = bgHex;
  pigmentContainer.children[1].textContent = textHex;

  let bgColor = hexToRGBA(bgHex);
  let textColor = hexToRGBA(textHex);

  if (saveColor == true) {
    let localColorObject = {
      bg: { hex: bgHex, rgb: bgColor },
      text: { hex: textHex, rgb: textColor }
    };

    if (PALETTES[currentPalette].length != 0) {
      currentPalette++;
      PALETTES.push([]);
    }

    PALETTES[currentPalette].push(localColorObject);
    savePaletteState();
  }

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
    addPigment(currentPaletteBar, bgHex, textHex);
  } else addNewPaletteBar(bgHex, textHex);

  savePaletteState();
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

addNewPalette.addEventListener("click", () =>
  addNewPaletteBar(colorObject.bg.hex, colorObject.text.hex)
);

// generate an entire palette from two colors
const makeFullPalette = () => {
  // the place where the new palette is going to go (unused?)
  // let index = PALETTES.length - 1;
  // let newPalette = PALETTES[index];

  // the amount of colors that need to be generated after the initial one
  let count = paletteGenParams.count;

  // rgb values of currently displayed colors
  let obgRGB = hexToRGBA(colorObject.bg.hex);
  let obtxtRGB = hexToRGBA(colorObject.text.hex);

  // arrays for putting the generated colors into
  let bgColors = [];
  let txtColors = [];

  bgColors.push(obgRGB);
  txtColors.push(obtxtRGB);

  // if color scheme generation setting is gradient
  // use the background color as one endpoint and the text color as the other.
  // generate the palette by interpolating between these two colors with eight steps.
  // in pigments, background color is on the left, text color is on the right.
  // keep that in mind when creating a gradient palette.

  if (paletteGenParams.setting == "gradient") {
    // create a fresh palette bar with the two current colors
    addNewPaletteBar(colorObject.bg.hex, colorObject.bg.hex);

    let interpolateColor1 = bgColors[0];
    let interpolateColor2 = txtColors[0];

    const interpolate = (color1, color2, steps) => {
      const interpolateColor = (color1, color2, factor) => {
        if (!factor) factor = 0.5;

        let result = color1.slice();
        for (let i = 0; i < 3; i++)
          result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));

        return result;
      };

      let stepFactor = 1 / (steps - 1),
        result = [];

      color1 = [...Object.values(color1)];
      color2 = [...Object.values(color2)];

      for (let i = 0; i < steps; i++) {
        result.push(interpolateColor(color1, color2, stepFactor * i));
      }

      return result;
    };

    let bgIntp = interpolate(
      interpolateColor1,
      interpolateColor2,
      paletteGenParams.count
    );
    for (let i = 1; i < bgIntp.length; i++) {
      let newBgColor = { r: bgIntp[i][0], g: bgIntp[i][1], b: bgIntp[i][2] };
      let newTxtColor = { r: bgIntp[i][0], g: bgIntp[i][1], b: bgIntp[i][2] };
      bgColors.push(newBgColor);
      txtColors.push(newTxtColor);
    }

    bgColors.forEach((color, i) => {
      if (i > 0) addColorToPalette(color, txtColors[i]);
    });
  }

  // color scheme generation setting is monochrome
  // then each generated pigment should have a background / text pigment
  // derived from the original pigments, but all using the same hue.

  // if color scheme generation setting is analogous, use shiftHue
  // to select new colors. if it's monochrome, then just use changeShade
  // with the hex values. use this logic to make sure colors don't get too dark:
  // for (let i = 1; i < 6; i++) {
  //   let newShadeBg, newShadeText;
  //
  //   newShadeBg = changeShade(bgAlts[i - 1], -15);
  //   newShadeText = changeShade(textAlts[i - 1], -15);
  //
  //   if (newShadeBg == "#000000") {
  //     newShadeBg = changeShade(bgAlts[0], 15);
  //     bgAlts.unshift(newShadeBg);
  //   } else bgAlts.push(newShadeBg);
  //
  //   if (newShadeText == "#000000") {
  //     newShadeText = changeShade(textAlts[0], 15);
  //     textAlts.unshift(newShadeText);
  //   } else textAlts.push(newShadeText);
  // }

  if (paletteGenParams.setting == "monochromatic") {
    // create a fresh palette bar with the two current colors
    addNewPaletteBar(colorObject.bg.hex, colorObject.bg.hex);

    for (let i = 1; i < count; i++) {
      let newBgColor = shiftSat(bgColors[i - 1], -paletteGenParams.factor);
      let newTxtColor = shiftSat(bgColors[i - 1], -paletteGenParams.factor);
      bgColors.push(newBgColor);
      txtColors.push(newTxtColor);
    }

    bgColors.forEach((color, i) => {
      if (i > 0) addColorToPalette(color, txtColors[i]);
    });
  }

  // for this function:
  // I need to take the relevant color (background or text)
  // and using that color's rgb values, I'll generate four
  // other colors that look nice with it, OR generate four
  // colors that are just similar to it (meaning nearly
  // adjacent rgb values).
  const generateNewColor = color => {
    // generate a color adjacent to the color argument
    // or complementary??
    // in fact, make a palette generation setting that
    // allows the user to choose whether to generate
    // gradient palettes or complementary color schemes.

    return;
  };

  if (paletteGenParams.setting == "analogous") {
    // adds a new palette bar, containing two colors
    addNewPaletteBar(colorObject.bg.hex, colorObject.text.hex);

    // for however many colors the user decides on in the settings, let's...
    for (let i = 1; i < count; i++) {
      // ...create colors based on the previous colors, and shift their hue by
      // whatever amount the user puts in the settings (10 degrees default)
      let newBgColor = shiftHue(bgColors[i - 1], paletteGenParams.factor);
      let newTxtColor = shiftHue(txtColors[i - 1], paletteGenParams.factor);

      // and then add them to a list of pigments to be displayed later
      bgColors.push(newBgColor);
      txtColors.push(newTxtColor);
    }

    // for each color in the generated list...
    bgColors.forEach((color, i) => {
      // except for the first one, add them all to the newly created palette
      if (i > 0) addColorToPalette(color, txtColors[i]);
    });
  }

  // save the palettes in localstorage
  savePaletteState();
};

document
  .getElementById("generate-palette")
  .addEventListener("click", () => makeFullPalette());
