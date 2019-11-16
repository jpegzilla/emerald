// remember to remove this:
// window.localStorage.clear();
import "./../styles/main.min.css";

import {
  setComputedColors,
  geturlvars,
  disableScroll,
  enableScroll,
  locks,
  history,
  hexToRGBA,
  getContrastRatio,
  wcagLevels,
  FANCY_COLOR_NAMES
} from "./modules/utils.js";

import { STORAGE } from "./modules/paletteOperations.js";

import { addToPalette } from "./modules/paletteOperations.js";

import { openSettings } from "./modules/smUtils.js";

export const globalColors = {
  defbgRGB: null,
  deftxtRGB: null,
  defbgHex: null,
  deftxtHex: null,
  colorObject: null,
  globalTheme: null
};

export const firstPalette = { first: true };
let contrastRatiosSet = false;
let initialRandomize = true;
export const currentColorSetting = "background";
export const colorDisplay = document.getElementById("color-field");
export const colorName = document.getElementsByClassName("color-name")[0];
const contrastRatioDisplay = document.getElementById("contrast-ratio");
export const contrastRatioStringDisplay = document.getElementById(
  "contrast-ratio-string"
);
export const contrastRatioNumberDisplay = document.getElementById(
  "contrast-ratio-number"
);
const colorPicker = document.getElementsByClassName("color-picker")[0];
const bgColorPreview = document.getElementById("bg-color-preview");
const textColorPreview = document.getElementById("text-color-preview");
const bgColorAltPreview = document.getElementById("bg-color-alt-preview");
const textColorAltPreview = document.getElementById("text-color-alt-preview");

const swapColors = document.getElementById("swapColors");

const undo = document.getElementById("undo");
const redo = document.getElementById("redo");
const lockBg = document.getElementById("lockBackground");
const lockText = document.getElementById("lockText");

const paletteBarTemplate = document.getElementById("paletteBarTemplate");
const palettePigmentTemplate = document.getElementById(
  "palettePigmentTemplate"
);
const addNewPalette = document.getElementById("addNewPalette");
const bgSliders = Array.from(document.getElementsByClassName("colorInput"));
const txtSliders = Array.from(document.getElementsByClassName("colortxtInput"));

const randomParamsStart = document.getElementById("randomParamsStart");
const randomParamsEnd = document.getElementById("randomParamsEnd");
const themeSelect = document.getElementById("themeSelect");
const colorPaletteGenerationSwitch = document.getElementById(
  "paletteGenerationSettings"
);
const colorGenerationCount = document.getElementById("color-generation-count");

let colorPaletteGenerationSlider = document.getElementById(
  "generation-count-slider"
);
const colorFactorCount = document.getElementById(
  "color-generation-factor-count"
);
let colorSeperationFactorSlider = document.getElementById(
  "color-generation-factor"
);
let colorPaletteCount = 5;
let colorSeperationFactor = 10;

// initialize palette generation parameters
export const paletteGenParams = {
  setting: paletteGenerationSettings.children[0].innerText,
  count: colorPaletteCount,
  factor: colorSeperationFactor
};

const BODY = document.body;

let urlParams = geturlvars();

disableScroll();

window.onload = () => {
  setComputedColors(true);
  let preloader = document.getElementById("preloader");

  preloader.classList.add("hidden");
  BODY.classList.add("scroll");
  enableScroll();

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

  const hexCodeInput = document.getElementById("hex-code");

  const setCorrectedColor = () => {
    try {
      let color = hexToRGBA(hexCodeInput.value);
      let rgba = `rgb(${color.r}, ${color.g}, ${color.b})`;

      return currentColorSetting == "background"
        ? updateBG(rgba)
        : updateTxt(rgba);
    } catch (e) {
      return;
    }
  };

  // allow manual hex code entry
  hexCodeInput.addEventListener("change", () => setCorrectedColor());

  hexCodeInput.addEventListener("input", () => {
    const allowChars = /[^A-Fa-f0-9|^#]/gi;
    let hexCode = hexCodeInput.value;
    let invalidIndex = hexCode.search(allowChars);
    hexCodeInput.value = hexCodeInput.value.replace(/\s/, "");

    if (invalidIndex != -1) {
      hexCodeInput.value =
        hexCodeInput.value.substring(0, invalidIndex) +
        "0" +
        hexCodeInput.value.substring(invalidIndex + 1);

      setCorrectedColor();
    }

    if (hexCodeInput.value.indexOf("#") != 0) {
      hexCodeInput.value = "#";
    }

    if (
      hexCodeInput.value.indexOf("#", 1) != -1 &&
      hexCodeInput.value.indexOf("#", 1) != 0
    ) {
      hexCodeInput.value =
        "#" + hexCodeInput.value.substring(1).replace(/#/gim, "0");

      setCorrectedColor();
    }

    if (hexCodeInput.value.length == 7) setCorrectedColor();
  });

  bginputs.red.value = globalColors.defbgRGB.r;
  bginputs.green.value = globalColors.defbgRGB.g;
  bginputs.blue.value = globalColors.defbgRGB.b;

  txtinputs.red.value = globalColors.deftxtRGB.r;
  txtinputs.green.value = globalColors.deftxtRGB.g;
  txtinputs.blue.value = globalColors.deftxtRGB.b;

  // update colors and variables containing updated colors;
  const updateBG = (rgb, scc = true) => {
    colorDisplay.style.backgroundColor = rgb;
    bgColorPreview.style.backgroundColor = rgb;
    bgColorAltPreview.style.backgroundColor = rgb;
    bgSliders.forEach(inp => (inp.style.color = rgb));

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
    txtSliders.forEach(inp => (inp.style.color = rgb));

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

  const setPaletteGenParams = () => {
    const setting = colorPaletteGenerationSwitch.value;
    const count = parseInt(colorPaletteGenerationSlider.value);
    const factor = parseInt(colorSeperationFactorSlider.value);
    colorGenerationCount.textContent = count;
    colorFactorCount.textContent = factor;
    paletteGenParams.setting = setting;
    paletteGenParams.factor = factor;
    paletteGenParams.count = count;
  };

  colorPaletteGenerationSwitch.addEventListener("input", setPaletteGenParams);
  colorPaletteGenerationSlider.addEventListener("input", setPaletteGenParams);
  colorSeperationFactorSlider.addEventListener("input", setPaletteGenParams);

  if (
    STORAGE.getItem("darkMode") != undefined &&
    STORAGE.getItem("darkMode") == "false"
  ) {
    globalColors.globalTheme = "light";
    themeSelect.selectedIndex = 1;
    BODY.classList.remove("dark");
  } else {
    globalColors.globalTheme = "dark";
    themeSelect.selectedIndex = 0;
    BODY.classList.add("dark");
  }

  themeSelect.addEventListener("input", () => {
    if (themeSelect.value == "dark" && BODY.classList.contains("dark") == false)
      BODY.classList.add("dark");
    if (themeSelect.value == "light" && BODY.classList.contains("dark") == true)
      BODY.classList.remove("dark");

    if (BODY.classList.contains("dark")) STORAGE.setItem("darkMode", "true");
    else STORAGE.setItem("darkMode", "false");
  });

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];

    return color;
  };

  const setRandomColors = () => {
    if (locks.bgLocked && locks.textLocked) return false;

    if (history.colorHistory.length > 0 && initialRandomize == true) {
      initialRandomize = false;
      Array.from(document.getElementsByClassName("control-button")).forEach(
        elem => elem.classList.remove("disabled")
      );
    }

    let color1 =
      locks.bgLocked === true
        ? globalColors.colorObject.bg.hex
        : getRandomColor();
    let color2 =
      locks.textLocked === true
        ? globalColors.colorObject.text.hex
        : getRandomColor();

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
              try {
                setRandomColors();
              } catch (e) {
                CURRENT_ERR =
                  "there is no acceptable color combination for the current settings. please modify contrast ratio limit.";

                throw new RangeError(CURRENT_ERR);
              }
            } else if (finalRatios.includes(i)) {
              updateBG(nbgRGB, false);
              updateTxt(ntxtRGB, false);
              setComputedColors(true);
              break;
            }
          }
        }
      }
    } else {
      updateBG(nbgRGB, false);
      updateTxt(ntxtRGB, false);
      setComputedColors(true);
    }
  };

  BODY.onkeydown = e => {
    if (e.keyCode == 32 && document.activeElement == BODY) {
      e.preventDefault();
    }
  };

  BODY.onkeyup = e => {
    if (e.keyCode == 32 && document.activeElement == BODY) {
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
    bginputs.red.value = globalColors.colorObject.text.rgb.r;
    bginputs.green.value = globalColors.colorObject.text.rgb.g;
    bginputs.blue.value = globalColors.colorObject.text.rgb.b;
    txtinputs.red.value = globalColors.colorObject.bg.rgb.r;
    txtinputs.green.value = globalColors.colorObject.bg.rgb.g;
    txtinputs.blue.value = globalColors.colorObject.bg.rgb.b;

    let bRGB = `rgb(${bginputs.red.value}, ${bginputs.green.value}, ${
      bginputs.blue.value
    })`;

    let tRGB = `rgb(${txtinputs.red.value}, ${txtinputs.green.value}, ${
      txtinputs.blue.value
    })`;

    updateBG(bRGB, false);
    updateTxt(tRGB, false);

    setComputedColors(false);
  });

  // scrolling stuff

  document.addEventListener("scroll", () => {
    const colorControls = document.getElementById("color-controls");
    const header = document.getElementById("header");

    const getScrollTop = () => {
      if (typeof pageYOffset != "undefined") return pageYOffset;
      else {
        var B = BODY;
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

  // undo and redo stuff

  const changeColorHistory = delta => {
    if (history.colorHistory[history.colorHistoryIndex + delta] !== undefined) {
      // if (delta == -1) {
      //   colorHistory.splice(colorHistoryIndex, 1);
      // }

      history.colorHistoryIndex += delta;
      history.colorHistoryIndex =
        history.colorHistoryIndex < 0
          ? 0
          : history.colorHistoryIndex > history.colorHistory.length - 1
            ? history.colorHistory.length - 1
            : history.colorHistoryIndex;

      let color1RGB = hexToRGBA(
        history.colorHistory[history.colorHistoryIndex].bg.hex
      );
      let color2RGB = hexToRGBA(
        history.colorHistory[history.colorHistoryIndex].text.hex
      );

      let nbgRGB = `rgb(${color1RGB.r}, ${color1RGB.g}, ${color1RGB.b})`;
      let ntxtRGB = `rgb(${color2RGB.r}, ${color2RGB.g}, ${color2RGB.b})`;

      bginputs.red.value = globalColors.colorObject.bg.rgb.r;
      bginputs.green.value = globalColors.colorObject.bg.rgb.g;
      bginputs.blue.value = globalColors.colorObject.bg.rgb.b;
      txtinputs.red.value = globalColors.colorObject.text.rgb.r;
      txtinputs.green.value = globalColors.colorObject.text.rgb.g;
      txtinputs.blue.value = globalColors.colorObject.text.rgb.b;

      updateBG(nbgRGB, false);
      updateTxt(ntxtRGB, false);

      setComputedColors(false);
    }

    if (history.colorHistory[history.colorHistoryIndex + 1] == undefined) {
      redo.classList.add("disabled");
    } else {
      redo.classList.remove("disabled");
    }
    if (history.colorHistory[history.colorHistoryIndex - 1] == undefined) {
      undo.classList.add("disabled");
    } else {
      undo.classList.remove("disabled");
    }
  };

  undo.addEventListener("click", () => {
    changeColorHistory(-1);
  });
  redo.addEventListener("click", () => {
    changeColorHistory(1);
  });

  const OPENLOCK = "&#x1F513;";
  const CLOSELOCK = "&#x1F512;";

  const toggleLock = element => {
    let locked;
    if (element.innerHTML == "🔓") {
      locked = true;
      element.innerHTML = CLOSELOCK;
    } else {
      locked = false;
      element.innerHTML = OPENLOCK;
    }

    element == lockBg
      ? locked == true
        ? (locks.bgLocked = true)
        : (locks.bgLocked = false)
      : locked == true
        ? (locks.textLocked = true)
        : (locks.textLocked = false);

    if (locks.bgLocked) {
      for (let elem in bginputs) {
        bginputs[elem].disabled = true;
      }
    }
    if (!locks.bgLocked) {
      for (let elem in bginputs) {
        bginputs[elem].disabled = false;
      }
    }

    if (locks.textLocked) {
      for (let elem in txtinputs) {
        txtinputs[elem].disabled = true;
      }
    }
    if (!locks.textLocked) {
      for (let elem in txtinputs) {
        txtinputs[elem].disabled = false;
      }
    }
  };

  lockBg.addEventListener("click", () => toggleLock(lockBg));
  lockText.addEventListener("click", () => toggleLock(lockText));

  if (Object.entries(urlParams).length == 2) {
    console.log("[window] url parameters:", urlParams);
    let url = {
      bg: urlParams.bg,
      text: urlParams.text
    };

    let urlBgRGB = hexToRGBA(url.bg);
    let urlTextRGB = hexToRGBA(url.text);

    let nbgRGB = `rgb(${urlBgRGB.r}, ${urlBgRGB.g}, ${urlBgRGB.b})`;
    let ntxtRGB = `rgb(${urlTextRGB.r}, ${urlTextRGB.g}, ${urlTextRGB.b})`;

    updateBG(nbgRGB, false);
    updateTxt(ntxtRGB, false);

    setComputedColors(false);
  } else if (Object.entries(urlParams).length > 2) {
    throw new Error(
      "please provide 2 hex colors in url like this: jpegzilla.com/emerald?bg=color1&text=color2."
    );
  }
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
  setComputedColors(false);
});

showTextColor.addEventListener("click", () => {
  currentColorSetting = currentColorSetting == "text" ? "text" : "text";
  showTextColor.classList = "";
  showBackgroundColor.classList = "";
  showTextColor.classList.add("active");
  showBackgroundColor.classList.add("inactive");
  setComputedColors(false);
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

  FANCY_COLOR_NAMES.on = !FANCY_COLOR_NAMES.on;

  setComputedColors(false);
});
