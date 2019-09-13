/**
 * @file JavaScript function library meant to provide JavaScript quicker and easier access to CSS units like VH, VMIN, CH, PC, etc.
 * @author jpegzilla
 */

// this may not work in Internet Explorer or Safari due to some ES6 techniques I used.
// initially created by jpegzilla, on March 18th, 2019.

// create variables for all units we'll define
let vh, vw, vmin, vmax, ch, pc, em, rem, inch, cm, ppi, diag, aspectRatio;
vh = window.innerHeight;
vw = window.innerWidth;

// create an empty object to put unit values in
let ruler = (r = {});

// create a function to do the pythagorean theorem for me
const py = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// create a function to reduce fractions for me
const reduce = f => {
  for (var i = f[0]; i > 0; i--) {
    if (0 == f[0] % i && 0 == f[1] % i) {
      var n = f[0] / i;
      var d = f[1] / i;
      return {
        n,
        d
      };
    }
  }
};

// method definitions for generating units
// call methods individually with 'new s.functionName'.
// when calling these methods in this way (like a constructor),
// the ruler object will be destructively(?) updated.

/**
 * saltlines main
 * @typedef {object} saltlines
 * @property {function} viewPortUnits gets viewport units
 * @property {function} rootFontSize gets root font size
 * @property {function} windowSizes gets window sizes
 * @property {function} physicalUnits gets physical dimensions of pixels
 * @property {function} unitList shows list of units
 */

/**
 * @type {saltlines}
 */
const saltlines = (s = {
  viewPortUnits: function() {
    if (vh > vw) {
      vmin = ruler.vmin = vw;
      vmax = ruler.vmax = vh;
    } else {
      vmin = ruler.vmin = vh;
      vmax = ruler.vmax = vw;
    }
    let one_vmin = (ruler.one_vmin = vmin / 100);
    let one_vmax = (ruler.one_vmax = vmax / 100);
    let one_vh = (ruler.one_vh = vh / 100);
    let one_vw = (ruler.one_vw = vw / 100);

    ruler.vh = vh;
    ruler.vw = vw;

    return {
      one_vmin,
      vmin,
      one_vh,
      one_vw,
      one_vmax,
      vmax,
      vh,
      vw
    };
  },

  rootFontSize: function() {
    let fs = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("font-size");
    fs = parseFloat(fs);
    let fspx = fs + "px";

    ruler.rootFontSize = fspx;
    ruler.rem = fs;

    return {
      rootFontSize: fspx,
      rem: fs
    };
  },

  windowSizes: function() {
    var fullWidth = (ruler.fullWidth = screen.width);
    var fullHeight = (ruler.fullHeight = screen.height);
    var windowWidth = (ruler.windowWidth = window.innerWidth);
    var windowHeight = (ruler.windowHeight = window.innerHeight);
    var windowDiag = py(windowWidth, windowHeight);
    windowDiag = windowDiag.toFixed(2);
    ruler.windowDiag = Number(windowDiag);

    aspectRatio = reduce([fullWidth, fullHeight]);
    ruler.aspectRatio = `${aspectRatio.n}:${aspectRatio.d}`;

    return {
      fullWidth,
      fullHeight,
      windowWidth,
      windowHeight,
      windowDiag,
      aspectRatio
    };
  },

  physicalUnits: function() {
    var newDiv = document.createElement("div");
    newDiv.style.cssText =
      "position: absolute;top: -1in;left: -1in;height: 1in;width: 1in;visibility: hidden;";
    newDiv.setAttribute("id", "inch");

    document.body.appendChild(newDiv);

    var fullWidth = screen.width;
    var fullHeight = screen.height;
    var ppix = (ruler.ppi = document.getElementById("inch").offsetWidth);
    var ppiy = document.getElementById("inch").offsetHeight;
    var inchHeight = fullHeight / ppiy;
    inchHeight = inchHeight.toFixed(2);
    inchHeight = ruler.inchHeight = Number(inchHeight);
    var inchWidth = fullWidth / ppix;
    inchWidth = inchWidth.toFixed(2);
    inchWidth = ruler.inchWidth = Number(inchWidth);
    var pt = ppix / 72;
    pt = pt.toFixed(2);
    ruler.pt = Number(pt);
    var pc = (ruler.pc = pt * 12);
    document.body.removeChild(newDiv);
    return {
      inchHeight,
      inchWidth,
      ppix,
      pt,
      pc
    };
  },

  unitList: function() {
    // if you're gonna console log a bunch of things,
    // at least make it look SORT OF good. that's what I always say.
    // sort of.
    console.groupCollapsed(
      "%clist of all units (click to expand):",
      "padding: 0 2em; background: inherit; color: inherit; font-size: 18px; font-family: Arial"
    );
    var arr = Object.keys(ruler);
    for (var i = 0; i < arr.length; i++) {
      console.log(
        `%c ${arr[i]}`,
        "margin-left: 24px; background: inherit; color: inherit; font-size: 12px; font-family: Courier"
      );
    }
    console.groupEnd();
  }
});

// executes every function in the saltlines object except the unitList function
function getAllUnits() {
  Object.values(s).map(value => {
    if (typeof value === "function" && value.name !== "unitList") {
      value.call();
    }
  });
}

// this function allows calling functions just by prepending a + sign.
// the urnary operator '+' is used by JavaScript to 'try' to convert things into numbers - but
// they are only converted if the item has a key valueOf...so, of course we have to modify the
// Function.prototype.valueOf() method so that calling a function like this
// +s.unitList
// will return the result of that function by just calling it simply with this.call().
// I actually don't know if this will cause conflicts with other things and it's definitely just
// meant to create syntactic sugar.
Function.prototype.valueOf = function() {
  this.call(this);
  return 0;
};

// gets every unit as soon as the page loads
window.onload = () => getAllUnits();

// update units on browser size change
window.addEventListener("resize", () => getAllUnits());
