let defbgRGB, deftxtRGB, defbgHex, deftxtHex, colorObject;
let firstPalette = true;
let contrastRatiosSet = false;
let currentColorSetting = "background";
const colorDisplay = document.getElementById("color-field");
const colorName = document.getElementsByClassName("color-name")[0];
const contrastRatioDisplay = document.getElementById("contrast-ratio");
const contrastRatioStringDisplay = document.getElementById(
  "contrast-ratio-string"
);
const contrastRatioNumberDisplay = document.getElementById(
  "contrast-ratio-number"
);
const colorPicker = document.getElementsByClassName("color-picker")[0];
const bgColorPreview = document.getElementById("bg-color-preview");
const textColorPreview = document.getElementById("text-color-preview");
const bgColorAltPreview = document.getElementById("bg-color-alt-preview");
const textColorAltPreview = document.getElementById("text-color-alt-preview");
const addToPalette = document.getElementById("add-to-palette");
const openSettings = document.getElementById("open-settings");
const swapColors = document.getElementById("swapColors");
const paletteBarTemplate = document.getElementById("paletteBarTemplate");
const palettePigmentTemplate = document.getElementById(
  "palettePigmentTemplate"
);
const addNewPalette = document.getElementById("addNewPalette");
const sliders = Array.from(document.querySelectorAll('input[type="range"]'));

const modalContainer = document.getElementById("modal-container");
const randomParamsStart = document.getElementById("randomParamsStart");
const randomParamsEnd = document.getElementById("randomParamsEnd");
const closeButton = document.getElementById("close-button");

let urlParams = geturlvars();

if (urlParams) {
  console.log(urlParams);
}

disableScroll();

window.onload = () => {
  console.log("hello~ 🎨");
  setComputedColors();

  preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("hidden");
    document.body.classList.add("scroll");
    enableScroll();
  }, 1500);

  // set default color slider values:

  const bginputs = {
    red: document.getElementById("rInput"),
    green: document.getElementById("gInput"),
    blue: document.getElementById("bInput")
  };

  const txtinputs = {
    red: document.getElementById("trInput"),
    green: document.getElementById("tgInput"),
    blue: document.getElementById("tbInput")
  };

  bginputs.red.value = defbgRGB.r;
  bginputs.green.value = defbgRGB.g;
  bginputs.blue.value = defbgRGB.b;

  txtinputs.red.value = deftxtRGB.r;
  txtinputs.green.value = deftxtRGB.g;
  txtinputs.blue.value = deftxtRGB.b;

  // update colors and variables containing updated colors;
  const updateBG = (rgb, scc = true) => {
    colorDisplay.style.backgroundColor = rgb;
    bgColorPreview.style.backgroundColor = rgb;
    bgColorAltPreview.style.backgroundColor = rgb;
    sliders.forEach(inp => (inp.style.color = rgb));

    if (scc == true) setComputedColors();
  };

  const updateTxt = (rgb, scc = true) => {
    colorName.style.color = rgb;
    contrastRatioDisplay.style.color = rgb;
    colorPicker.style.color = rgb;
    textColorPreview.style.backgroundColor = rgb;
    textColorAltPreview.style.backgroundColor = rgb;
    addToPalette.style.color = rgb;
    openSettings.style.color = rgb;

    if (scc == true) setComputedColors();
  };

  let randomParams = { start: "fail", end: "aaa" };

  const setRandomParams = ({ start: start, end: end }) => {
    if (!start && !end) {
      randomParams.start = "fail";
      randomParams.end = "aaa";
    }
    if (start) randomParams.start = start;
    if (end) randomParams.end = end;
  };

  setRandomParams({ start: null, end: null });

  // makes sure user parameters are valid and fixes them if not, then sets them to the
  // randomParams object.
  const fixParams = () => {
    contrastRatiosSet = true;
    let valueStart = randomParamsStart.value;
    let valueEnd = randomParamsEnd.value;

    let allRatios = ["fail", "aa large", "aa", "aaa"];

    // if the starting parameter comes before the ending one
    if (allRatios.indexOf(valueStart) > allRatios.indexOf(valueEnd)) {
      let newEnd = valueStart;
      let newStart = valueEnd;

      randomParamsStart.value = allRatios[allRatios.indexOf(newStart)];
      randomParamsEnd.value = allRatios[allRatios.indexOf(newEnd)];

      valueEnd = newEnd;
      valueStart = newStart;
    }

    setRandomParams({ start: valueStart, end: valueEnd });
  };

  randomParamsStart.addEventListener("input", fixParams);

  randomParamsEnd.addEventListener("input", fixParams);

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];

    return color;
  };

  const setRandomColors = () => {
    let color1 = getRandomColor();
    let color2 = getRandomColor();

    let color1RGB = hexToRGBA(color1);
    let color2RGB = hexToRGBA(color2);

    let nbgRGB = `rgb(${color1RGB.r}, ${color1RGB.g}, ${color1RGB.b})`;
    let ntxtRGB = `rgb(${color2RGB.r}, ${color2RGB.g}, ${color2RGB.b})`;

    bginputs.red.value = color1RGB.r;
    bginputs.green.value = color1RGB.g;
    bginputs.blue.value = color1RGB.b;

    txtinputs.red.value = color2RGB.r;
    txtinputs.green.value = color2RGB.g;
    txtinputs.blue.value = color2RGB.b;

    if (contrastRatiosSet == true) {
      let currentContrast = getContrastRatio(color1, color2);
      let contrastRatioNumber = currentContrast.number;

      let acceptableRatios = [randomParams.start, randomParams.end];
      let allRatios = ["fail", "aa large", "aa", "aaa"];

      for (let i in wcagLevels) {
        for (let j in wcagLevels[i]) {
          let levels = wcagLevels[i][j];
          if (
            contrastRatioNumber >= levels[0] &&
            contrastRatioNumber <= levels[1]
          ) {
            let allRatiosCopy = [...allRatios];
            acceptableRatios = Array.from(new Set([...acceptableRatios]));

            const range = (start, end) => {
              return new Array(end - start + 1)
                .fill(undefined)
                .map((_, b) => b + start);
            };

            const startIndex = allRatiosCopy.indexOf(acceptableRatios[0]);
            const endIndex =
              allRatiosCopy.indexOf(acceptableRatios[1]) !== -1
                ? allRatiosCopy.indexOf(acceptableRatios[1])
                : startIndex;

            let itemsToGet = range(startIndex, endIndex);

            let finalRatios = itemsToGet.map(item => allRatios[item]);

            i = i.toLowerCase();

            if (finalRatios.includes(i) == false) {
              setRandomColors();
            } else if (finalRatios.includes(i)) {
              updateBG(nbgRGB);
              updateTxt(ntxtRGB);
              break;
            }
          }
        }
      }
    } else {
      updateBG(nbgRGB);
      updateTxt(ntxtRGB);
    }
  };

  document.body.onkeydown = e => {
    if (e.keyCode == 32 && document.activeElement == document.body) {
      e.preventDefault();
    }
  };

  document.body.onkeyup = e => {
    if (e.keyCode == 32 && document.activeElement == document.body) {
      e.preventDefault();

      if (document.getElementById("randomizeReminder")) {
        const randomizeReminder = document.getElementById("randomizeReminder");
        randomizeReminder.classList.add("hidden");
        setTimeout(() => randomizeReminder.remove(), 300);
      }

      setRandomColors();
    }
  };

  document
    .getElementById("randomize-mobile")
    .addEventListener("click", () => setRandomColors());

  for (let elem in bginputs) {
    if (bginputs.hasOwnProperty(elem)) {
      bginputs[elem].addEventListener("input", () => {
        let nRGB = `rgb(${bginputs.red.value}, ${bginputs.green.value}, ${
          bginputs.blue.value
        })`;
        updateBG(nRGB);
      });
    }
  }

  for (let elem in txtinputs) {
    if (txtinputs.hasOwnProperty(elem)) {
      txtinputs[elem].addEventListener("input", () => {
        let nRGB = `rgb(${txtinputs.red.value}, ${txtinputs.green.value}, ${
          txtinputs.blue.value
        })`;
        updateTxt(nRGB);
      });
    }
  }

  swapColors.addEventListener("click", () => {
    bginputs.red.value = colorObject.text.rgb.r;
    bginputs.green.value = colorObject.text.rgb.g;
    bginputs.blue.value = colorObject.text.rgb.b;
    txtinputs.red.value = colorObject.bg.rgb.r;
    txtinputs.green.value = colorObject.bg.rgb.g;
    txtinputs.blue.value = colorObject.bg.rgb.b;

    let bRGB = `rgb(${bginputs.red.value}, ${bginputs.green.value}, ${
      bginputs.blue.value
    })`;

    let tRGB = `rgb(${txtinputs.red.value}, ${txtinputs.green.value}, ${
      txtinputs.blue.value
    })`;

    updateBG(bRGB, false);
    updateTxt(tRGB, false);

    setComputedColors();
  });

  // scrolling stuff

  document.addEventListener("scroll", () => {
    const colorControls = document.getElementById("color-controls");
    const header = document.getElementById("header");

    const getScrollTop = () => {
      if (typeof pageYOffset != "undefined") return pageYOffset;
      else {
        var B = document.body;
        var D = document.documentElement;
        D = D.clientHeight ? D : B;
        return D.scrollTop;
      }
    };

    const altColorPreview = document.getElementsByClassName(
      "alt-color-display"
    )[0];

    if (getScrollTop() > colorControls.offsetTop - 100) {
      header.classList.add("invert");
      altColorPreview.classList.remove("hidden");
    } else if (
      getScrollTop() < colorControls.offsetTop - 100 &&
      header.classList.contains("invert")
    ) {
      header.classList.remove("invert");
      altColorPreview.classList.add("hidden");
    }
  });

  // pwa installation stuff
  let deferredPrompt;
  let store = window.localStorage;

  const showInstallPrompt = () => {
    deferredPrompt.prompt().catch(err => console.log(err.message));
    deferredPrompt.userChoice
      .then(choiceResult => {
        if (choiceResult.outcome === "accepted")
          store.setItem("installed", true);
        else store.setItem("installed", false);

        deferredPrompt = null;
      })
      .catch(err => console.log(err));
  };

  window.addEventListener("beforeinstallprompt", e => {
    deferredPrompt = e;
    document
      .getElementById("pwaInstallButton")
      .addEventListener("click", () => {
        showInstallPrompt();
      });
  });
};

const showBackgroundColor = document.getElementById("showBackgroundColor");
const showTextColor = document.getElementById("showTextColor");
const showColorPreviews = document.getElementById("showColorPreviews");
const showFancyColorNames = document.getElementById("showFancyColorNames");

showBackgroundColor.addEventListener("click", () => {
  currentColorSetting =
    currentColorSetting == "background" ? "background" : "background";
  showTextColor.classList = "";
  showBackgroundColor.classList = "";
  showTextColor.classList.add("inactive");
  showBackgroundColor.classList.add("active");
  setComputedColors();
});

showTextColor.addEventListener("click", () => {
  currentColorSetting = currentColorSetting == "text" ? "text" : "text";
  showTextColor.classList = "";
  showBackgroundColor.classList = "";
  showTextColor.classList.add("active");
  showBackgroundColor.classList.add("inactive");
  setComputedColors();
});

showColorPreviews.addEventListener("click", () => {
  const colorPreviews = document.getElementsByClassName("color-previews")[0];

  showColorPreviews.innerText =
    showColorPreviews.innerText == "color previews: off"
      ? "color previews: on"
      : "color previews: off";

  if (showColorPreviews.innerText == "color previews: on") {
    colorPreviews.classList.add("visible");
  } else if (showColorPreviews.innerText == "color previews: off") {
    colorPreviews.classList.remove("visible");
  }
});

showFancyColorNames.addEventListener("click", () => {
  showFancyColorNames.innerText =
    showFancyColorNames.innerText == "css color names"
      ? "fancy color names"
      : "css color names";

  if (FANCY_COLOR_NAMES == true) {
    FANCY_COLOR_NAMES = false;
  } else if (FANCY_COLOR_NAMES == false) {
    FANCY_COLOR_NAMES = true;
  }

  setComputedColors();
});

const closeModal = () => {
  return modalContainer.classList.contains("active")
    ? modalContainer.classList.remove("active")
    : false;
};

const openModal = () => {
  return modalContainer.classList.contains("active")
    ? false
    : modalContainer.classList.add("active");
};

modalContainer.addEventListener("click", e => {
  e.target == modalContainer ? closeModal() : false;
});

closeButton.addEventListener("click", closeModal, false);

openSettings.addEventListener("click", () => openModal());

// palette handling

let currentPalette = 0;
let paletteTotalCount = 0;
let paletteCountActual = 0;

const paletteContainer = document.getElementsByClassName(
  "palette-container"
)[0];
const copiedNotification = document.getElementById("copiedNotification");

const exportPalette = palette => {
  // get all colors in the palette, then make some sort of export thing
  let exportingPalette = document.getElementsByClassName(palette.class)[0];

  if (exportingPalette !== undefined) {
    let paletteName = exportingPalette.children[0].getElementsByTagName(
      "input"
    )[0].value;

    console.log("exporting");
  }
};

const paletteControls = (palette, operation) => {
  switch (operation) {
    case "remove":
      paletteCountActual--;
      // animate the removal of palette bar
      palette.classList.add("hide");
      setTimeout(() => {
        return palette.remove();
      }, 500);

    case "export":
      return exportPalette(palette);
    default:
      return;
  }
};

const addNewPaletteBar = () => {
  let newPaletteBar = paletteBarTemplate.cloneNode(true);
  newPaletteBar.id = "";
  newPaletteBar.classList.add("palette-bar");
  let selector = `palette-${paletteContainer.children.length}`;
  newPaletteBar.classList.add(selector);
  paletteContainer.appendChild(newPaletteBar);
  currentPalette = paletteContainer.children.length - 1;

  let paletteName = newPaletteBar.children[0].getElementsByTagName("input")[0];

  paletteName.value = `untitled palette ${paletteCountActual}`;

  paletteCountActual++;

  let barToAffect = newPaletteBar;

  let paletteObject = {
    element: barToAffect,
    class: selector
  };

  let exportButton = newPaletteBar.getElementsByClassName("export-palette")[0];
  let deleteButton = newPaletteBar.getElementsByClassName("remove-palette")[0];

  deleteButton.addEventListener("click", () =>
    paletteControls(barToAffect, "remove")
  );

  if (exportButton) {
    exportButton.addEventListener("click", () =>
      paletteControls(paletteObject, "export")
    );
  }

  paletteTotalCount++;
};

const addColorToPalette = (bgColor, textColor) => {
  let pigment = palettePigmentTemplate.cloneNode(true);
  pigment.id = "";
  let target = paletteContainer.children[currentPalette];
  target.classList.remove("empty");
  pigment.classList.add("palette-pigment");
  pigment.classList.add(`palette-${target.children.length}`);

  let bgPigment = pigment.children[0];
  let textPigment = pigment.children[1];

  const showCopyNotification = () => {
    copiedNotification.classList.add("copied");
    setTimeout(() => {
      copiedNotification.classList.remove("copied");
    }, 100);
  };

  bgPigment.addEventListener("click", e => {
    e.preventDefault();
    window.getSelection().selectAllChildren(bgPigment);
    document.execCommand("copy");
    showCopyNotification();
    window.getSelection().removeAllRanges();
  });

  textPigment.addEventListener("click", e => {
    e.preventDefault();
    window.getSelection().selectAllChildren(textPigment);
    document.execCommand("copy");
    showCopyNotification();
    window.getSelection().removeAllRanges();
  });

  bgPigment.innerText = rgbToHex(bgColor.r, bgColor.g, bgColor.b);
  textPigment.innerText = rgbToHex(textColor.r, textColor.g, textColor.b);

  bgPigment.style.backgroundColor = `rgb(${bgColor.r},${bgColor.g},${
    bgColor.b
  })`;
  textPigment.style.backgroundColor = `rgb(${textColor.r},${textColor.g},${
    textColor.b
  })`;

  if (target.children.length == 5) {
    addNewPaletteBar();
  }

  target.appendChild(pigment);
};

addToPalette.addEventListener("click", () => {
  let bgColor = colorObject.bg.rgb;
  let textColor = colorObject.text.rgb;

  if (paletteContainer.children.length == 0) addNewPaletteBar();

  addColorToPalette(bgColor, textColor);

  if (firstPalette == true) {
    scrollSmooth(window, "bottom");
    firstPalette = false;
  }
});

addNewPalette.addEventListener("click", () => {
  addNewPaletteBar();
});
