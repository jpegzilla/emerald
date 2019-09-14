## welcome to emerald!

[emerald](https://jpegzilla.com/emerald) is pretty simple. I just made it mainly to combine three of my favorite color tools &mdash; [monochrome](https://monochrome.jxnblk.com/), [contrast-ratio](https://contrast-ratio.com/), and [coolors](https://coolors.co/app).

you can install this, by the way. [it's a pwa](https://en.wikipedia.org/wiki/Progressive_web_applications) &mdash; get it at [jpegzilla.com/emerald](https://jpegzilla.com/emerald).

things I'll be adding in the coming months / weeks:

- [x] palette exporting (as images, css, scss)
- [x] sharing color combinations through url params (easy enough)
- [ ] full palette generation and randomization (a feature that coolors has)...coming soon
- [x] preview extra shades of current colors
- [x] more compact view for sliders
- [ ] drag / drop to move pigments around in a palette (hard :(...)
- [x] refactor my *filthy, nasty* scss
- [x] settings (exclude certain color ranges, change randomization parameters...?)
- [x] show approximate css color name even if the css color isn't *exactly* the same (this is what I'm having trouble with, but sort of works)
- [ ] refactor my *gross* javascript
- [ ] add accessibility features such as simpler keyboard controls
- [ ] there are issues with re-rendering the palette export canvas at certain viewport breakpoints that I literally have no clue how to fix and I can't tell what's causing them. I might fix those someday
- [ ] make another color preview box that shows a nearby wcag aaa color combination
- [ ] refactoring to effectively use webpack
- [ ] just make it nicer to use on a phone

**patch notes: v0110 03092019**
- added more compact sliders
- fixed the look of the palettes
- made it easier to figure out where palettes are
- added randomization params (set contrast ratio range)
- added color swap button
- added palette operations: naming, deleting...exporting coming soon
- added color shade preview: shows 12 alternative shades of the current colors and their hex codes

**patch notes: v0111 10132019**
- added palette exporting. current options: image, css, scss
- made sliders prettier and other ui improvements
- added the ability to share color combinations through url. syntax: `jpegzilla.com/emerald?bg=#200e40&text=#d6a508` (pass colors as hex values). maybe entire palettes are next?
- improved performance
- improved layout on smaller screens
- added undo / redo buttons (stores previous color combinations) ((beta))
- added dark mode and set it on by default
- clicking on "add palette" no longer creates a palette with one empty pigment in it
- color palettes and settings like dark / light mode now persist through reloads via localstorage
