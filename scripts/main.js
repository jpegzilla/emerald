let defbgRGB, deftxtRGB, defbgHex, deftxtHex, colorObject;
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
const addToPalette = document.getElementById("add-to-palette");
const paletteBarTemplate = document.getElementById("paletteBarTemplate");
const palettePigmentTemplate = document.getElementById(
  "palettePigmentTemplate"
);
const addNewPalette = document.getElementById("addNewPalette");
const sliders = Array.from(document.querySelectorAll('input[type="range"]'));

let urlParams = geturlvars();

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
  const updateBG = rgb => {
    colorDisplay.style.backgroundColor = rgb;
    bgColorPreview.style.backgroundColor = rgb;
    sliders.forEach(inp => (inp.style.color = rgb));

    setComputedColors();
  };

  const updateTxt = rgb => {
    colorName.style.color = rgb;
    contrastRatioDisplay.style.color = rgb;
    colorPicker.style.color = rgb;
    textColorPreview.style.backgroundColor = rgb;
    addToPalette.style.color = rgb;

    setComputedColors();
  };

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const setRandomColors = () => {
    let color1 = hexToRGBA(getRandomColor());
    let color2 = hexToRGBA(getRandomColor());

    let nbgRGB = `rgb(${color1.r}, ${color1.g}, ${color1.b})`;
    let ntxtRGB = `rgb(${color2.r}, ${color2.g}, ${color2.b})`;

    bginputs.red.value = color1.r;
    bginputs.green.value = color1.g;
    bginputs.blue.value = color1.b;

    txtinputs.red.value = color2.r;
    txtinputs.green.value = color2.g;
    txtinputs.blue.value = color2.b;

    updateBG(nbgRGB);
    updateTxt(ntxtRGB);
  };

  document.body.onkeydown = e => {
    if (e.keyCode == 32) {
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

    if (getScrollTop() > colorControls.offsetTop - 100) {
      header.classList.add("invert");
    } else if (
      getScrollTop() < colorControls.offsetTop - 100 &&
      header.classList.contains("invert")
    ) {
      header.classList.remove("invert");
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
    showColorPreviews.innerText == "small color previews: off"
      ? "small color previews: on"
      : "small color previews: off";

  if (showColorPreviews.innerText == "small color previews: on") {
    colorPreviews.classList.add("visible");
  } else if (showColorPreviews.innerText == "small color previews: off") {
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

// palette handling

let currentPalette = 0;
let paletteTotalCount = 0;
const paletteContainer = document.getElementsByClassName(
  "palette-container"
)[0];
const copiedNotification = document.getElementById("copiedNotification");

const addNewPaletteBar = () => {
  let newPaletteBar = paletteBarTemplate.cloneNode(true);
  newPaletteBar.classList.add("palette-bar");
  newPaletteBar.classList.add(`palette-${paletteContainer.children.length}`);
  paletteContainer.appendChild(newPaletteBar);
  currentPalette = paletteContainer.children.length - 1;
  paletteTotalCount++;
};

const addColorToPalette = (bgColor, textColor) => {
  let pigment = palettePigmentTemplate.cloneNode(true);
  let target = paletteContainer.children[currentPalette];
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
});

addNewPalette.addEventListener("click", () => {
  addNewPaletteBar();
});
