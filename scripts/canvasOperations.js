const exportCanvas = document.getElementById("export-canvas");
const DPI = window.devicePixelRatio;
const BLACK = "#030303";
const WHITE = "#eaeaea";
const exportNotice = `exported from jpegzilla.com/emerald on ${new Date().toDateString()}.`;
exportCanvas.width = exportCanvas.scrollWidth;
exportCanvas.height = exportCanvas.scrollHeight;

let currentExportObject;

let expCtx = exportCanvas.getContext("2d", { alpha: false });

// saltlines get all units
getAllUnits();

const fixDPI = () => {
  //get CSS height
  //the + prefix casts it to an integer
  //the slice method gets rid of "px"
  let height = +getComputedStyle(exportCanvas)
    .getPropertyValue("height")
    .slice(0, -2);
  //get CSS width
  let width = +getComputedStyle(exportCanvas)
    .getPropertyValue("width")
    .slice(0, -2);
  //scale the exportCanvas
  exportCanvas.setAttribute("height", height * DPI);
  exportCanvas.setAttribute("width", width * DPI);
};

const drawSwatches = exportObject => {
  currentExportObject = exportObject;
  fixDPI();

  let c = {
    width: exportCanvas.width,
    height: exportCanvas.height
  };

  let swatchCountTotal = exportObject.colorNames.length * 2;

  let REMGAP = 2 * 18;

  let swatchHeight = c.height / 2 - REMGAP;
  let swatchWidth = c.width / (swatchCountTotal / 2);

  let swatchStartPositionX = 0;
  let swatchStartPositionY = 0;

  for (var i = 0; i < exportObject.colorNames.length; i++) {
    let colorName = exportObject.colorNames[i];
    let colorValue = exportObject.palette[i];
    let textColor = "#FFFFFF";

    let bgr = hexToRGBA(colorValue.bg.hex).r,
      bgg = hexToRGBA(colorValue.bg.hex).g,
      bgb = hexToRGBA(colorValue.bg.hex).b;

    let contrast = Math.round(
      (parseInt(bgr) * 299 + parseInt(bgg) * 587 + parseInt(bgb) * 114) / 1000
    );

    if (contrast > 125) {
      textColor = "#000000";
    }

    expCtx.fillStyle = colorValue.bg.hex;
    expCtx.fillRect(
      swatchStartPositionX,
      swatchStartPositionY,
      swatchWidth,
      swatchHeight
    );

    expCtx.font = `${18 * 0.9}px "Share Tech Mono"`;
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(
      colorName.bg,
      swatchStartPositionX + 18,
      swatchStartPositionY + 18
    );

    expCtx.font = `${18 * 0.9}px "Share Tech Mono"`;
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(
      colorValue.bg.hex,
      swatchStartPositionX + 18,
      swatchStartPositionY + 18 * 1.5 + 10
    );

    swatchStartPositionY += swatchHeight;

    textColor = "#FFFFFF";

    let textr = hexToRGBA(colorValue.text.hex).r,
      textg = hexToRGBA(colorValue.text.hex).g,
      textb = hexToRGBA(colorValue.text.hex).b;

    contrast = Math.round(
      (parseInt(textr) * 299 + parseInt(textg) * 587 + parseInt(textb) * 114) /
        1000
    );

    if (contrast > 125) {
      textColor = "#000000";
    }

    expCtx.fillStyle = colorValue.text.hex;
    expCtx.fillRect(
      swatchStartPositionX,
      swatchStartPositionY,
      swatchWidth,
      swatchHeight
    );

    expCtx.font = `${18 * 0.9}px "Share Tech Mono"`;
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(
      colorName.text,
      swatchStartPositionX + 18,
      swatchStartPositionY + 18
    );
    expCtx.font = `${18 * 0.9}px "Share Tech Mono"`;
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(
      colorValue.text.hex,
      swatchStartPositionX + 18,
      swatchStartPositionY + 18 * 1.5 + 10
    );

    swatchStartPositionX += swatchWidth;
    swatchStartPositionY += swatchHeight;

    expCtx.fillStyle = globalTheme == "dark" ? BLACK : WHITE;
    expCtx.fillRect(0, swatchStartPositionY, c.width, REMGAP * 2);

    expCtx.font = `${18 * 1}px "Share Tech Mono"`;
    expCtx.textBaseline = "top";
    expCtx.fillStyle = globalTheme == "dark" ? WHITE : BLACK;
    expCtx.fillText(exportNotice, 18, swatchStartPositionY + 18 * 1.75);
    swatchStartPositionY = 0;
  }
};

const drawSwatchesMobile = exportObject => {
  currentExportObject = exportObject;
  fixDPI();

  let c = {
    width: exportCanvas.width,
    height: exportCanvas.height
  };

  let swatchCountTotal = exportObject.colorNames.length * 2;

  let swatchHeight = c.height / swatchCountTotal;
  let swatchWidth = c.width;

  let swatchStartPositionX = 0;
  let swatchStartPositionY = 0;

  for (var i = 0; i < exportObject.colorNames.length; i++) {
    let colorName = exportObject.colorNames[i];
    let colorValue = exportObject.palette[i];

    let textColor = "#FFFFFF";

    let bgr = hexToRGBA(colorValue.bg.hex).r,
      bgg = hexToRGBA(colorValue.bg.hex).g,
      bgb = hexToRGBA(colorValue.bg.hex).b;

    let contrast = Math.round(
      (parseInt(bgr) * 299 + parseInt(bgg) * 587 + parseInt(bgb) * 114) / 1000
    );

    if (contrast > 125) {
      textColor = "#000000";
    }

    expCtx.fillStyle = colorValue.bg.hex;
    expCtx.fillRect(
      swatchStartPositionX,
      swatchStartPositionY,
      swatchWidth,
      swatchHeight
    );

    expCtx.font = `${18 * 3.5}px "Share Tech Mono"`;
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(
      `${colorName.bg}: ${colorValue.bg.hex}`,
      swatchStartPositionX + 18 * 2,
      swatchStartPositionY + 18 * 3
    );
    swatchStartPositionY += swatchHeight;

    expCtx.fillStyle = colorValue.text.hex;
    expCtx.fillRect(
      swatchStartPositionX,
      swatchStartPositionY,
      swatchWidth,
      swatchHeight
    );

    textColor = "#FFFFFF";

    let textr = hexToRGBA(colorValue.text.hex).r,
      textg = hexToRGBA(colorValue.text.hex).g,
      textb = hexToRGBA(colorValue.text.hex).b;

    contrast = Math.round(
      (parseInt(textr) * 299 + parseInt(textg) * 587 + parseInt(textb) * 114) /
        1000
    );

    if (contrast > 125) {
      textColor = "#000000";
    }

    expCtx.font = `${18 * 3}px "Share Tech Mono"`;
    expCtx.textBaseline = "top";
    expCtx.fillStyle = textColor;
    expCtx.fillText(
      `${colorName.text}: ${colorValue.text.hex}`,
      swatchStartPositionX + 18 * 2,
      swatchStartPositionY + 18 * 3
    );

    swatchStartPositionY += swatchHeight;
  }
};

let mediaTiny = window.matchMedia("(max-width: 900px)");
let mediaSmall = window.matchMedia("(min-width: 1300px)");

mediaTiny.addListener(e => {
  if (e.matches) {
    expCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);
    drawSwatchesMobile(currentExportObject);
  } else {
    expCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);
    drawSwatches(currentExportObject);
  }
});

mediaSmall.addListener(e => {
  if (e.matches) {
    expCtx.clearRect(0, 0, exportCanvas.width, exportCanvas.height);
    drawSwatches(currentExportObject);
  }
});
