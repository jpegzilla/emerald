const documentTitle = document.title;

let FANCY_COLOR_NAMES = false;

let CURRENT_ERR = "";

const LUM_LOWER = 0.03928;
const LUM_DIVISOR_H = 12.92;
const LUM_DIVISOR_L = 1.055;
const LUM_ADDEND = 0.055;
const LUM_EXP = 2.4;

const LUM_COEFF = 0.2126;
const LUM_R_ADDEND = 0.7152;
const LUM_G_ADDEND = 0.0722;
const RGB_MAX = 255;

let colorHistory = [];
let colorHistoryIndex = 0;
let initialColorHistory = true;

let textLocked = false;
let bgLocked = false;

let initColors = { background: "#50c878", text: "#eaeaea" };

let currentColors = { background: "#50c878", text: "#eaeaea" };

const backgroundShades = document.getElementsByClassName(
  "bg-shades-container"
)[0];
const textShades = document.getElementsByClassName("text-shades-container")[0];

const objectFlip = obj => {
  const ret = {};
  Object.keys(obj).forEach(key => {
    ret[obj[key]] = key;
  });
  return ret;
};

let cssColorNames;

const setColorNames = () => {
  if (FANCY_COLOR_NAMES == true) {
    cssColorNames = objectFlip(colorLib);
  } else {
    cssColorNames = simpleColors;
  }
};

setColorNames();

// usage: hexToColorName(cssColorNames, "#ffffff")

const hexToColorName = (colors, hex) =>
  Object.keys(colors).find(key => colors[key] === hex);

const hexToRGBA = hex => {
  if (!hex || typeof hex != "string" || hex.length < 3) return false;
  if (hex.split("").indexOf("#") == 0) hex = hex.substring(1);

  const acceptableCharacters = /^(?:[0-9a-fA-F]{3,8})$/;

  if (!hex.match(acceptableCharacters))
    throw new Error(`parameter '${hex}' is not a valid hex color.`);

  if (hex.length == 6) {
    let rgb = parseInt(hex, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = rgb & 0xff;

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error("please enter rgb(a) values only between 0 and F.");
    }

    return { r, g, b };
  } else if (hex.length == 3) {
    hex.split("");
    hex = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]];
    hex = "0x" + hex.join("");
    let rgb = parseInt(hex, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = rgb & 0xff;

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error("please enter rgb(a) values only between 0 and F.");
    }

    return { r, g, b };
  } else if (hex.length == 8) {
    let a = hex.substring(6, 8);
    hex = hex.substring(0, 6);
    let rgb = parseInt(hex, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = rgb & 0xff;
    a = "0x" + a;
    a = parseInt(a);

    if (isNaN(a) || isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error("please enter rgb(a) values only between 0 and F.");
    }

    return { r, g, b, a };
  } else if (hex.length == 4) {
    let a = hex.substring(3, 4).split("");

    hex = hex.substring(0, 3).split("");
    hex = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]];
    hex = "0x" + hex.join("");

    a = [a[0], a[0]];
    a = "0x" + a.join("");
    a = parseInt(a);

    let rgb = parseInt(hex, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = rgb & 0xff;

    if (isNaN(a) || isNaN(r) || isNaN(g) || isNaN(b)) {
      throw new Error("please enter rgb(a) values only between 0 and F.");
    }

    return { r: r, g: g, b: b, a: a };
  } else {
    throw new Error(`parameter '${hex}' is not valid.`);
  }
};

const hslToRGB = (h, s, l) => {
  let r, g, b;

  if (s == 0) r = g = b = l;
  else {
    const hueToRGB = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;

    r = hueToRGB(p, q, h + 1 / 3);
    g = hueToRGB(p, q, h);
    b = hueToRGB(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};

// returns h, s, and l in the set [0, 1]
const rgbToDHSL = (r, g, b) => {
  (r /= 255), (g /= 255), (b /= 255);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) h = s = 0;
  else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h, s: s, l: l };
};

const rgbToHSL = (r, g, b) => {
  (r /= 255), (g /= 255), (b /= 255);

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  let l = (max + min) / 2;
  let s = 0;
  let h = 0;
  if (max != min) {
    if (l < 0.5) s = (max - min) / (max + min);
    else s = (max - min) / (2 - max - min);

    if (r == max) h = (g - b) / (max - min);
    else if (g == max) h = 2 + (b - r) / (max - min);
    else h = 4 + (r - g) / (max - min);
  }

  l = l * 100;
  s = s * 100;
  h = h * 60;
  if (h < 0) h += 360;

  return {
    h: h.toFixed(2),
    s: s.toFixed(2) + "%",
    l: l.toFixed(2) + "%"
  };
};

// rgb to NumberHSL
const rgbToNHSL = (r, g, b) => {
  (r /= 255), (g /= 255), (b /= 255);

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  let l = (max + min) / 2;
  let s = 0;
  let h = 0;
  if (max != min) {
    if (l < 0.5) s = (max - min) / (max + min);
    else s = (max - min) / (2 - max - min);

    if (r == max) h = (g - b) / (max - min);
    else if (g == max) h = 2 + (b - r) / (max - min);
    else h = 4 + (r - g) / (max - min);
  }

  l = l * 100;
  s = s * 100;
  h = h * 60;

  // if hue is less than zero, wrap it around to be back in range
  if (h < 0) h += 360;

  return {
    h: h,
    s: s,
    l: l
  };
};

// function to change color's hue
const shiftHue = (rgb, deg) => {
  let hsl = rgbToNHSL(rgb.r, rgb.g, rgb.b);

  if (deg > 100 || deg < 0)
    throw new RangeError(
      "amount of hue shifting in shiftHue must be within the range [0, 100]."
    );

  hsl.h += deg;
  if (hsl.h < 0) hsl.h += 360;
  if (hsl.h > 360) hsl.h -= 360;
  hsl.h /= 360;
  hsl.s /= 100;
  hsl.l /= 100;

  return hslToRGB(hsl.h, hsl.s, hsl.l);
};

// luminance calculation based on this:
// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
// which is also where these constants are from
const calculateLuminance = (r, g, b) => {
  const srgb = [r, g, b].map(val => val / 255);
  const [R, G, B] = srgb.map(
    val =>
      val <= LUM_LOWER
        ? val / LUM_DIVISOR_H
        : ((val + LUM_ADDEND) / LUM_DIVISOR_L) ** LUM_EXP
  );

  const L = LUM_COEFF * R + LUM_R_ADDEND * G + LUM_G_ADDEND * B;

  return L;
};

// best: 7:1 ratio (getContrastRatio returns 7)
const getContrastRatio = (text, bg) => {
  let txRGB = hexToRGBA(text);
  let bgRGB = hexToRGBA(bg);

  const lum1 = calculateLuminance(txRGB.r, txRGB.g, txRGB.b);
  const lum2 = calculateLuminance(bgRGB.r, bgRGB.g, bgRGB.b);

  const light = Math.max(lum1, lum2);
  const dark = Math.min(lum1, lum2);

  const contrast = (light + 0.05) / (dark + 0.05);
  const contrastNum = Math.floor(contrast * 100) / 100;

  const contrastString = `${(light + 0.05).toFixed(2)}:${(dark + 0.05).toFixed(
    2
  )}`;

  return { number: contrastNum, string: contrastString };
};

// change hex color shade by amount
const changeShade = (color, amount) => {
  let usePound = false;

  if (color[0] == "#") {
    color = color.slice(1);
    usePound = true;
  }

  let num = parseInt(color, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (
    (usePound ? "#" : "") +
    String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6)
  );
};

const rgbToHex = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`;

const hexDigits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];

const hex = num => {
  return isNaN(num)
    ? "00"
    : hexDigits[(num - (num % 16)) / 16] + hexDigits[num % 16];
};

const wcagLevels = {
  fail: {
    range: [0, 3]
  },
  "aa Large": {
    range: [3, 4.5]
  },
  aa: {
    range: [4.5, 7]
  },
  aaa: {
    range: [7, 22]
  }
};

let colorHexArray = Array.from(Object.values(cssColorNames));
let fancyColorHexArray = Array.from(Object.values(objectFlip(colorLib)));
let lastKnownClosestColor;

// findNearestColor finds the name in the color lib that is closest to the color
// supplies as an argument
const findNearestColor = hex => {
  if (typeof hex !== "string")
    throw new Error(
      `findNearestColor needs a hex color in string format. the parameter passed was type ${typeof hex}.`
    );
  let rgba1 = hexToRGBA(hex);
  let delta = FANCY_COLOR_NAMES == false ? 3 * 256 * 256 : 9 * 2332 * 2332;
  let rgba2, result;

  if (FANCY_COLOR_NAMES === false) {
    colorHexArray.forEach(colorInArray => {
      rgba2 = hexToRGBA(colorInArray);

      if (
        Math.pow(rgba2.r - rgba1.r, 2) +
          Math.pow(rgba2.g - rgba1.g, 2) +
          Math.pow(rgba2.b - rgba1.b, 2) <
        delta
      ) {
        delta =
          Math.pow(rgba2.r - rgba1.r, 2) +
          Math.pow(rgba2.g - rgba1.g, 2) +
          Math.pow(rgba2.b - rgba1.b, 2);

        lastKnownClosestColor = colorInArray;
        result = colorInArray;
      }
    });
  } else {
    fancyColorHexArray.forEach(colorInArray => {
      rgba2 = hexToRGBA(colorInArray);

      if (
        Math.pow(rgba2.r - rgba1.r, 2) +
          Math.pow(rgba2.g - rgba1.g, 2) +
          Math.pow(rgba2.b - rgba1.b, 2) <
        delta
      ) {
        delta =
          Math.pow(rgba2.r - rgba1.r, 2) +
          Math.pow(rgba2.g - rgba1.g, 2) +
          Math.pow(rgba2.b - rgba1.b, 2);

        lastKnownClosestColor = colorInArray;
        result = colorInArray;
      }
    });
  }

  let results;

  let colorToFind = result !== undefined ? result : lastKnownClosestColor;

  for (let key in cssColorNames)
    if (cssColorNames.hasOwnProperty(key))
      if (cssColorNames[key].indexOf(colorToFind) != -1) results = key;

  return results;
};

const findNearestAAAColor = (background, text, nearestTo = "text") => {
  // get current contrast ratio
  let currCr = getContrastRatio(text, background).number;
  // return same colors if it's already a ratio >= 7
  if (currCr >= 7) return { background: background, text: text };

  let nearestAAAColor;
  // get rgb values for background and foreground
  background = text.replace(/^\s*#|\s*$/g, "");
  text = text.replace(/^\s*#|\s*$/g, "");

  // function to change the brightness of a color

  const changeBrightness = (hex, percent) => {
    let r = parseInt(hex.substring(0, 2), 16),
      g = parseInt(hex.substring(2, 4), 16),
      b = parseInt(hex.substring(4), 16);

    return (
      "#" +
      (0 | ((1 << 8) + r + ((256 - r) * percent) / 100))
        .toString(16)
        .substring(1) +
      (0 | ((1 << 8) + g + ((256 - g) * percent) / 100))
        .toString(16)
        .substring(1) +
      (0 | ((1 << 8) + b + ((256 - b) * percent) / 100))
        .toString(16)
        .substring(1)
    );
  };

  changeBrightness(background, 10);

  // get brightness of both colors

  // if contrast ratio is not aaa... (nearestTo is the color that will be changed)

  while (currCr < 7) {
    break;
  }

  return nearestTo == "background"
    ? { background: nearestAAAColor, text: text }
    : { background: background, text: nearestAAAColor };
};

// this is a method for allowing the user to copy a color swatch's contents by clicking on it
const setColorSwatchListeners = () => {
  const copyColor = (element, e) => {
    e.preventDefault();
    window.getSelection().selectAllChildren(element);
    document.execCommand("copy");
  };

  Array.from(backgroundShades.children).forEach(element => {
    element.addEventListener("click", e => {
      copyColor(element, e);
    });
  });

  Array.from(textShades.children).forEach(element => {
    element.addEventListener("click", e => {
      copyColor(element, e);
    });
  });
};

setColorSwatchListeners();

// this is called to update global colors every time a color slider is changed
const setComputedColors = (pushToHistory = false) => {
  setColorNames();

  let bgrgb = getComputedStyle(colorDisplay).backgroundColor.match(
    /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
  );

  let txtrgb = getComputedStyle(colorName).color.match(
    /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
  );

  let f = bgrgb;

  let background = {
    r: f[1],
    g: f[2],
    b: f[3]
  };

  let brightness = Math.round(
    (parseInt(background.r) * 299 +
      parseInt(background.g) * 587 +
      parseInt(background.b) * 114) /
      1000
  );

  if (brightness > 125 && header.classList.contains("black") == false) {
    header.classList.add("black");
  } else if (brightness < 125 && header.classList.contains("black") == true) {
    header.classList.remove("black");
  }

  defbgRGB = { r: bgrgb[1], g: bgrgb[2], b: bgrgb[3] };
  defbgHex = rgbToHex(defbgRGB.r, defbgRGB.g, defbgRGB.b);

  deftxtRGB = { r: txtrgb[1], g: txtrgb[2], b: txtrgb[3] };
  deftxtHex = rgbToHex(deftxtRGB.r, deftxtRGB.g, deftxtRGB.b);

  let bgCssName = document.getElementById("css-name");

  let rBGVal = document.getElementById("redBGValue");
  let gBGVal = document.getElementById("greenBGValue");
  let bBGVal = document.getElementById("blueBGValue");

  let rtxtVal = document.getElementById("redtxtValue");
  let gtxtVal = document.getElementById("greentxtValue");
  let btxtVal = document.getElementById("bluetxtValue");

  let hexBGVal = document.getElementById("hex-code");
  let rgbBGVal = document.getElementById("rgb-code");
  let hslBGVal = document.getElementById("hsl-code");

  let hslVals = rgbToHSL(defbgRGB.r, defbgRGB.g, defbgRGB.b);
  let hsltxtVals = rgbToHSL(deftxtRGB.r, deftxtRGB.g, deftxtRGB.b);

  let currentContrast = getContrastRatio(deftxtHex, defbgHex);
  let contrastRatioNumber = currentContrast.number;
  let contrastRatioString = currentContrast.string;

  let bgColorName = hexToColorName(cssColorNames, defbgHex);
  let txtColorName = hexToColorName(cssColorNames, deftxtHex);

  if (currentColorSetting == "background") {
    hexBGVal.value = defbgHex;
    rgbBGVal.innerText = `rgb(${defbgRGB.r}, ${defbgRGB.g}, ${defbgRGB.b})`;
    hslBGVal.innerText = `hsl(${hslVals.h}, ${hslVals.s}, ${hslVals.l})`;

    bgCssName.innerText = bgColorName
      ? `color name (actual): ${bgColorName.toLowerCase()}`
      : `color name (closest): ${findNearestColor(defbgHex).toLowerCase()}`;
  } else if ((currentColorSetting = "text")) {
    hexBGVal.value = deftxtHex;
    rgbBGVal.innerText = `rgb(${deftxtRGB.r}, ${deftxtRGB.g}, ${deftxtRGB.b})`;
    hslBGVal.innerText = `hsl(${hsltxtVals.h}, ${hsltxtVals.s}, ${
      hsltxtVals.l
    })`;

    bgCssName.innerText = txtColorName
      ? `color name (actual): ${txtColorName.toLowerCase()}`
      : `color name (closest): ${findNearestColor(deftxtHex).toLowerCase()}`;
  }

  rBGVal.innerText = bgrgb[1];
  gBGVal.innerText = bgrgb[2];
  bBGVal.innerText = bgrgb[3];

  rtxtVal.innerText = txtrgb[1];
  gtxtVal.innerText = txtrgb[2];
  btxtVal.innerText = txtrgb[3];

  contrastRatioStringDisplay.innerText = `contrast ratio: ${contrastRatioString}`;

  for (let i in wcagLevels) {
    for (let j in wcagLevels[i]) {
      let levels = wcagLevels[i][j];
      if (
        contrastRatioNumber >= levels[0] &&
        contrastRatioNumber <= levels[1]
      ) {
        contrastRatioNumberDisplay.innerText = `wcag: ${contrastRatioNumber
          .toFixed(2)
          .toString()
          .padEnd(4, "0")
          .padStart(5, "0")} (${i.toUpperCase()})`;
      }
    }
  }

  let oldColorObject = colorObject;

  colorObject = {
    bg: { rgb: defbgRGB, hex: defbgHex },
    text: { rgb: deftxtRGB, hex: deftxtHex }
  };

  if (initialColorHistory == true && pushToHistory == true) {
    initialColorHistory = false;
    colorHistory.push(colorObject);
  }

  if (oldColorObject != undefined && pushToHistory == true) {
    colorHistory.push(colorObject);
    colorHistoryIndex++;
  }

  const bgAlts = [colorObject.bg.hex];
  const textAlts = [colorObject.text.hex];

  for (let i = 1; i < 6; i++) {
    let newShadeBg, newShadeText;

    newShadeBg = changeShade(bgAlts[i - 1], -15);
    newShadeText = changeShade(textAlts[i - 1], -15);

    if (newShadeBg == "#000000") {
      newShadeBg = changeShade(bgAlts[0], 15);
      bgAlts.unshift(newShadeBg);
    } else bgAlts.push(newShadeBg);

    if (newShadeText == "#000000") {
      newShadeText = changeShade(textAlts[0], 15);
      textAlts.unshift(newShadeText);
    } else textAlts.push(newShadeText);
  }

  // function determines the lightness of the background of the alternative shades
  // and uses that information to determine whether the text in the alternative
  // shade box should be black or white
  const manageBoxTextColor = box => {
    let f = getComputedStyle(box)["background-color"].match(
      /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
    );

    let background = {
      r: f[1],
      g: f[2],
      b: f[3]
    };

    let brightness = Math.round(
      (parseInt(background.r) * 299 +
        parseInt(background.g) * 587 +
        parseInt(background.b) * 114) /
        1000
    );

    if (brightness > 125 && box.classList.contains("blackText") == false) {
      box.classList.add("blackText");
      header.classList.add("black");
    } else if (
      brightness < 125 &&
      box.classList.contains("blackText") == true
    ) {
      box.classList.remove("blackText");
      header.classList.remove("black");
    }
  };

  Array.from(backgroundShades.children).forEach((box, i) => {
    box.style.backgroundColor = bgAlts[i];
    box.children[0].textContent = bgAlts[i].toString();
    manageBoxTextColor(box);
  });

  Array.from(textShades.children).forEach((box, i) => {
    box.style.backgroundColor = textAlts[i];
    box.children[0].textContent = textAlts[i].toString();
    manageBoxTextColor(box);
  });
};

const mobilecheck = () => {
  let check = false;
  (a => {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

// enable/disable scrolling

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

const preventDefault = e => {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
};

const preventDefaultForScrollKeys = e => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};

const disableScroll = () => {
  if (window.addEventListener)
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, {
    passive: false
  });
  window.onwheel = preventDefault;
  window.onmousewheel = document.onmousewheel = preventDefault;
  window.ontouchmove = preventDefault;
  document.onkeydown = preventDefaultForScrollKeys;
};

const enableScroll = () => {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  document.removeEventListener("wheel", preventDefault, {
    passive: false
  });
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
};

const selectText = element => {
  element = document.getElementById(element);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn("could not select text in element: unsupported browser.");
  }
};

const geturlvars = () => {
  let vars = {};
  let regex = /[?&]+([^=&]+)=([^&]*)/gi;
  window.location.href.replace(regex, (match, key, val) => (vars[key] = val));
  return vars;
};

const updateMessage = document.getElementById("updateMessage");
const triggerUpdate = document.getElementById("triggerUpdate");
const closeUpdateMessage = document.getElementById("closeUpdateMessage");

const showUpdateMessage = () => {
  updateMessage.classList.add("visible");

  triggerUpdate.addEventListener("click", () => location.reload(true));

  closeUpdateMessage.addEventListener("click", () =>
    updateMessage.classList.remove("visible")
  );
};

const scrollSmooth = (parent, target) => {
  if (target == "bottom") {
    parent.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.body.scrollHeight
    });
  } else if (target instanceof Node) {
    parent.scrollTo({
      behavior: "smooth",
      left: 0,
      top: target.offsetTop
    });
  }
};

const propSort = prop => {
  let order = 1;

  if (prop[0] === "-") {
    order = -1;
    prop = prop.substring(1);
  }

  return (a, b) =>
    order == -1
      ? b[prop].localeCompare(a[prop])
      : a[prop].localeCompare(b[prop]);
};

const toCamelCase = string =>
  string
    .replace(
      /(?:^\w|[A-Z]|\b\w)/g,
      (word, index) => (index == 0 ? word.toLowerCase() : word.toUpperCase())
    )
    .replace(/\s+/g, "");
