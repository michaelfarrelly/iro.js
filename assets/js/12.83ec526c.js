(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{237:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"introduction",fn:function(){return[a("p",[t._v("A modern, SVG-based color picker widget for vanilla JavaScript.")])]},proxy:!0},{key:"feature-colors",fn:function(){return[a("p",[t._v("Work with colors in hex, RGB, HSV and HSL formats (plus kelvin temperatures!) in one simple, frictionless API.")])]},proxy:!0},{key:"feature-colors-example",fn:function(){return[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the color as an RGB string ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rgb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" colorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rgbString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// rgb = "{{ rgbString }}" ')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the color as a HSV object ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hsv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" colorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hsv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hsv = {{ rgbString }}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the color from a hex string ")]),t._v("\ncolorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#fff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the color from a temperature ")]),t._v("\ncolorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kelvin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0},{key:"feature-multicolor",fn:function(){return[a("p",[t._v("Add multiple colors to the same color picker for selecting color harmonies and themes.")])]},proxy:!0},{key:"feature-components",fn:function(){return[a("p",[t._v("Create the perfect color picker from a selection of pre-built UI components.")])]},proxy:!0},{key:"tutorial-iro-js",fn:function(){return[a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("h5",{attrs:{id:"install-from-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-from-npm"}},[t._v("#")]),t._v(" Install from NPM")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @jaames/iro --save\n")])])]),a("p",[t._v("Then if you are using a module bundler like Webpack or Rollup, import iro.js into your project:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Using ES6 module syntax")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iro "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@jaames/iro'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Using CommonJS modules")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iro "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@jaames/iro'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"or-use-the-jsdelivr-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#or-use-the-jsdelivr-cdn"}},[t._v("#")]),t._v(" Or use the jsDelivr CDN")]),t._v(" "),a("p",[t._v("Drop this script into the "),a("code",[t._v("<head>")]),t._v(" of your page's HTML:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/@jaames/iro@5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("When you manually include the library like this, iro.js will be made globally available on "),a("code",[t._v("window.iro")]),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"or-download-and-host-yourself"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#or-download-and-host-yourself"}},[t._v("#")]),t._v(" Or download and host yourself")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/jaames/iro.js/master/dist/iro.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Development version"),a("OutboundLink")],1)]),a("br"),t._v("\nUncompressed, with source comments included. Intended for debugging.")]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/jaames/iro.js/master/dist/iro.min.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Production version"),a("OutboundLink")],1)]),a("br"),t._v("\nMinified and optimized version.")]),t._v(" "),a("h3",{attrs:{id:"color-picker-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#color-picker-setup"}},[t._v("#")]),t._v(" Color Picker Setup")]),t._v(" "),a("p",[t._v("First, we need a HTML element with a unique identifier (such as an "),a("code",[t._v("id")]),t._v(" attribute) to act as a container for the color picker:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("picker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Then use JavaScript to create a new "),a("code",[t._v("iro.ColorPicker")]),t._v(" with a CSS selector that matches your chosen container element:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorPicker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("iro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#picker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("You can also use a DOM object instead of a CSS selector here -- this might be more suitable if you're integrating iro.js into an application built with a framework such as Vue, React, etc.")]),t._v(" "),a("h3",{attrs:{id:"color-picker-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#color-picker-options"}},[t._v("#")]),t._v(" Color Picker Options")]),t._v(" "),a("p",[t._v("The color picker can be customized by passing a set of options to the second "),a("code",[t._v("iro.ColorPicker")]),t._v(" parameter:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" colorPicker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("iro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ColorPicker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#picker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the size of the color picker")]),t._v("\n  width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the initial color to pure red")]),t._v("\n  color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#f00"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("A full list of color picker options can be found in the "),a("RouterLink",{attrs:{to:"/guide.html#color-picker-options"}},[t._v("options documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"working-with-colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-colors"}},[t._v("#")]),t._v(" Working with Colors")]),t._v(" "),a("p",[t._v("Each color picker has a color object which stores the currently selected color.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" colorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// hex = "#ff0000"')]),t._v("\n")])])]),a("p",[t._v("Whenever you set any of these color properties, the color picker will automatically update to match it!")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("colorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hsl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Color picker updates to match hsl(180, 100, 50)")]),t._v("\n")])])]),a("p",[t._v("A full list of color properties can be found in the "),a("RouterLink",{attrs:{to:"/guide.html#working-with-colors"}},[t._v("color documentation")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("Events let you to run your own code after certain things have happened, like when the selected color has changed or when the user has interacted with the color picker.")]),t._v(" "),a("p",[t._v("The color picker's "),a("RouterLink",{attrs:{to:"/colorPicker_api.html#on"}},[a("code",[t._v("on")])]),t._v(" method can be used to attach functions that will be called whenever a particular event is fired. For example, we can add a listener that fires whenever the color is changed:")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// listen to a color picker's color:change event")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// color:change callbacks receive the current color")]),t._v("\ncolorPicker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color:change'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// log the current color as a HEX string")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hexString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("For a full overview of the available events can be found in the "),a("RouterLink",{attrs:{to:"/guide.html#color-picker-events"}},[t._v("events documentation")]),t._v(".")],1)]},proxy:!0}])})}),[],!1,null,null,null);s.default=n.exports}}]);