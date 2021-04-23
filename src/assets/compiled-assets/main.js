/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var SITE;SITE =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/index.scss":
/*!***********************************!*\
  !*** ./src/assets/css/index.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://SITE/./src/assets/css/index.scss?");

/***/ }),

/***/ "./src/assets/js/_carousel.js":
/*!************************************!*\
  !*** ./src/assets/js/_carousel.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// import Flickity from 'flickity'\nvar Flickity = __webpack_require__(/*! flickity-fullscreen */ \"./node_modules/flickity-fullscreen/fullscreen.js\");\n\nconst carousel = document.querySelectorAll('.carousel')\n\ncarousel.forEach((elem) => {\n\n\tvar flkty = new Flickity( '.carousel', {\n\t\tfullscreen: true,\n\t});\n\n})\n\n//# sourceURL=webpack://SITE/./src/assets/js/_carousel.js?");

/***/ }),

/***/ "./src/assets/js/_color_switch.js":
/*!****************************************!*\
  !*** ./src/assets/js/_color_switch.js ***!
  \****************************************/
/***/ (function() {

eval("let colorswitch = document.querySelectorAll('.themeingbutton').forEach((elem) => {\n\telem.onclick = (e) => {\n\t\tlet themeWrapper = document.querySelector('.theme-wrapper')\n\t\tif (themeWrapper.classList.contains('theme-dark')) {\n\t\t\tthemeWrapper.classList.remove('theme-dark')\n\t\t\tthemeWrapper.classList.add('theme-light')\n\t\t} else {\n\t\t\tthemeWrapper.classList.remove('theme-light')\n\t\t\tthemeWrapper.classList.add('theme-dark')\n\t\t} \n\t}\n  })\n\n//# sourceURL=webpack://SITE/./src/assets/js/_color_switch.js?");

/***/ }),

/***/ "./src/assets/js/_cursor.js":
/*!**********************************!*\
  !*** ./src/assets/js/_cursor.js ***!
  \**********************************/
/***/ (function() {

eval("const cursor = document.querySelector('.cursor')\nif (cursor) {\n\n\tcursor.style.opacity = 1\n\n\twindow.onmousemove = (e) => {\n\t\trequestAnimationFrame(() => {\n\t\t\tcursor.style.opacity = 1\n\t\t\tlet x = `${(e.pageX - scrollX - 40)}px`,\n\t\t\t\ty = `${(e.pageY - scrollY - 40)}px`\n\t\t\tcursor.style.setProperty('--top', y)\n\t\t\tcursor.style.setProperty('--left', x)\n\t\t})\n\t}\n\n\t// window.onmouseenter = (e) => {\n\t// \tconsole.log(\"enter\", e)\n\t// \trequestAnimationFrame(() => {\n\t// \t\tcursor.style.opacity = 1\n\t// \t})\n\t// }\n\n\twindow.onmouseout = (e) => {\n\t\trequestAnimationFrame(() => {\n\t\t\tcursor.style.opacity = 0\n\t\t})\n\t}\n\n\t//todo window events or speciefic events\n\tdocument.addEventListener('click', () => {\n\t\tcursor.classList.add(\"expand\")\n\t\tsetTimeout(() => {\n\t\t\tcursor.classList.remove(\"expand\")\n\t\t}, 600)\n\t})\n}\n\n//# sourceURL=webpack://SITE/./src/assets/js/_cursor.js?");

/***/ }),

/***/ "./src/assets/js/_header.js":
/*!**********************************!*\
  !*** ./src/assets/js/_header.js ***!
  \**********************************/
/***/ (function() {

eval("// import Headroom from \"headroom.js\";\n// grab an element\n// var scroll_direction = document.querySelector(\".has-scroll-init\");\n// var htmlelm = document.querySelector(\"html\");\n// // console.log(\"scroll_direction\", scroll_direction.dataset.direction)\n// console.log(\"htmlelm\", htmlelm)\n\n\n// window.onscroll = () => {\n// \tconsole.log(\"scroll_direction\")\n// }\n\n\n\n\n// // construct an instance of Headroom, passing the element\n// var headroom = new Headroom(myElement);\n// // initialise\n// headroom.init();\n\n//# sourceURL=webpack://SITE/./src/assets/js/_header.js?");

/***/ }),

/***/ "./src/assets/js/_headroom.js":
/*!************************************!*\
  !*** ./src/assets/js/_headroom.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! headroom.js */ \"./node_modules/headroom.js/dist/headroom.js\");\n/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_0__);\n// if you're using a bundler, first import:\n\n// grab an element\nvar elems = document.querySelectorAll('.header')\n// var myElement = document.querySelector(\"header\");\n// construct an instance of Headroom, passing the element\nelems.forEach((elem) => {\n    var headroom  = new (headroom_js__WEBPACK_IMPORTED_MODULE_0___default())(elem);\n    // initialise\n    headroom.init();\n})\n\n\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_headroom.js?");

/***/ }),

/***/ "./src/assets/js/_mapbox.js":
/*!**********************************!*\
  !*** ./src/assets/js/_mapbox.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const mapboxgl = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n\nvar places = {\n\t\"type\":\"FeatureCollection\",\n\t\"features\":[\n\t   \t{\n\t\t  \"type\":\"Feature\",\n\t\t  \"properties\":{\n\t\t\t \"description\":\"<strong>Frankfurter Küche</strong><p><a href=\\\"http://www.restaurant-frankfurter-kueche.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 86, 60314 Frankfurt am Main</p>\",\n\t\t\t \"icon\":\"Restaurants\"\n\t\t  },\n\t\t  \"geometry\":{\n\t\t\t \"type\":\"Point\",\n\t\t\t \"coordinates\":[\n\t\t\t\t8.704224783467328,\n\t\t\t\t50.111681170124484\n\t\t\t ]\n\t\t  }\n\t   \t},\n\t   \t{\n\t\t\"type\":\"Feature\",\n\t\t\"properties\":{\n\t\t   \"description\":\"<strong>'Das Leben ist Schön</strong><p><a href=\\\"http://www.daslebenistschoen.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 198, 60314 Frankfurt am Main</p>\",\n\t\t   \"icon\":\"Restaurants\"\n\t\t},\n\t\t\"geometry\":{\n\t\t   \"type\":\"Point\",\n\t\t   \"coordinates\":[\n\t\t\t 8.723497812302732,\n\t\t\t 50.11535621512961\n\t\t   ]\n\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>'Soul Food Factory East</strong><p><a href=\\\"http://www.soul-food-factory.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 124, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.711172127644243,\n\t\t\t\t50.11132723047215\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Saravini</strong><p><a href=\\\"http://www.saravini-frankfurt.de/mittagskarte/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 119, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t 8.710194527644237,\n\t\t\t\t 50.11172910920639\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>'The Tasty Toast</strong><p>Osthafenplatz 4, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71285928352579,\n\t\t\t\t50.11090767357005\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Stones</strong><p><a href=\\\"https://www.stonesfood.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 125, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.712307297113504,\n\t\t\t\t50.11246691431603\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Tawaraya</strong><p>Hanauer Landstraße 131, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71320475654297,\n\t\t\t\t50.11222598741672\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Cocothai</strong><p><a href=\\\"https://www.cocothaifrankfurtammain.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 151, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71526672770677,\n\t\t\t\t50.112919324067384\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Urfa</strong><p><a href=\\\"https://www.urfa-grill-pizzeria.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 133, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.713368798870526,\n\t\t\t\t50.11229886602847\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Aroydee</strong><p><a href=\\\"https://www.aroydee.de/Frankfurt\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 72, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.703535627706737,\n\t\t\t\t50.11280334433856\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Goldman</strong><p><a href=\\\"http://www.goldman-restaurant.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 127, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.712951143051455,\n\t\t\t\t50.11208490623492\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Oosten</strong><p><a href=\\\"https://oosten-frankfurt.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Mayfarthstraße 4, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.702709870034257,\n\t\t\t\t50.10785792533555\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Gref-Völsings</strong><p><a href=\\\"https://www.gref-voelsings.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 132, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.7124484565429,\n\t\t\t\t50.1116097900726\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Best-Worscht In Town</strong><p><a href=\\\"https://www.bestworschtintown.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 270, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.72698031236205,\n\t\t\t\t50.1165047893076 \n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Bei Frau Nanna</strong><p><a href=\\\"https://order.beifraunanna.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Ernst-Achilles-Platz 3, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70476983642246,\n\t\t\t\t50.1128814042537\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>LEUCHTENDROTER</strong><p><a href=\\\"http://leuchtendroter.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Lindleystraße 17, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.718510583561219,\n\t\t\t\t50.11257783263066\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Kahuna Poké Bros.</strong><p><a href=\\\"https://kahunapokebros.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 160A, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.717488819399943,\n\t\t\t\t50.11311594184854\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Ben's Burger</strong><p><a href=\\\"https://bens-burger.business.site/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 134, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.712697437075015,\n\t\t\t\t50.11151811854781\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Jesse James</strong><p><a href=\\\"http://www.jessejames.eu/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 83, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.705296327706698,\n\t\t\t\t50.11207194717568\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>COMAI East - modern viet kitchen</strong><p><a href=\\\"https://www.comai.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 130, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.7123598408274,\n\t\t\t\t50.11133081012636\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Pizzeria Mille Lire</strong><p><a href=\\\"http://www.pizzeria-mille-lire.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Sonnemannstraße 71, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70313924526421,\n\t\t\t\t50.111192054739604\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Coffee Fellows</strong><p><a href=\\\"http://www.coffee-fellows-ostend.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 115, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Café\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709015614425825,\n\t\t\t\t50.11224196267669\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Wiener Feinbäckerei</strong><p><a href=\\\"https://heberer.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 108, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Café\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70924599781994,\n\t\t\t\t50.111330420991095\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Aniis</strong><p><a href=\\\"http://www.aniis.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 82, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Café\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.704047841198193,\n\t\t\t\t50.11191788713086\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Stock Avenue 81</strong><p><a href=\\\"http://www.melia.com/de/lodgings/deutschland/frankfurt/innside-frankfurt-ostend/restaurants.html\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 81, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Café\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.704830970034363,\n\t\t\t\t50.112325267256004\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Bäckerei und Konditorei Huck</strong><p><a href=\\\"https://www.baeckerei-huck.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Sonnemannstraße 81, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Café\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70409040574631,\n\t\t\t\t50.111376848593906\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Frankfurt Pub</strong><p><a href=\\\"http://www.frankfurt-pub.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstraße 99, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Café\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.708437927706713,\n\t\t\t\t50.111746607401514\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Eiscafé Café a Roma</strong><p>Sonnemannstraße 51, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Café\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.700960888265074,\n\t\t\t\t50.11085074470636\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Marmion Bar</strong><p><a href=\\\"https://www.marmion-bar.de\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Lindleystraße 17, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Café\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.718510583561219,\n\t\t\t\t50.11257783263066\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Alnatura Super Natur Markt</strong><p>Hanauer Landstraße 110, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709294277580927,\n\t\t\t\t50.11124097596751\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Edeka</strong><p>Ferdinand-Happ-Straße 59, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.715864727706792,\n\t\t\t\t50.11446867774984\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Lidl</strong><p>Hanauer Landstraße 219, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.721729185379182,\n\t\t\t\t50.115486293551406\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Rewe</strong><p>Louis-Appia-Passage 7 7, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.705509785379135,\n\t\t\t\t50.112873643153115\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Aldi Süd</strong><p>Hanauer Landstraße 285, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.724419070034426,\n\t\t\t\t50.11658945000033\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Me.Ta</strong><p>Hanauer Landstraße 208 -216, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.726406085457684,\n\t\t\t\t50.11562919293627\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>dm</strong><p>Louis-Appia-Passage 6, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.705571970034336,\n\t\t\t\t50.11244186549421\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Fitness First</strong><p>Hanauer Landstraße 148, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Fitness\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71600512770675,\n\t\t\t\t50.11236760526015\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Fitseveneleven east blck</strong><p>Hanauer Landstraße 120, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Fitness\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.710570127706724,\n\t\t\t\t50.11133183045381\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Fitseveneleven east pink</strong><p>Hanauer Landstraße 147, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Fitness\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.714824341198113,\n\t\t\t\t50.11278522362572\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Kieser Training</strong><p>Hanauer Landstraße 291A, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Fitness\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.716392498870569,\n\t\t\t\t50.113392181835025\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Fritz-Rémond-Theater</strong><p>Bernhard-Grzimek-Allee 1, 60316 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.699309256543005,\n\t\t\t\t50.11610529237147\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Romanfabrik</strong><p>Hanauer Landstraße 186, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.722945141198247,\n\t\t\t\t50.114824976214166\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Kunstverein Familie Montez</strong><p>Honsellstraße 7, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709860525853374,\n\t\t\t\t50.1089605822416\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Union Halle</strong><p>Hanauer Landstraße 188, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.72292931217596,\n\t\t\t\t50.11426644210688\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>25hours</strong><p>Hanauer Landstraße 127, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.712797538150072,\n\t\t\t\t50.11210810538992\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>INNSIDE</strong><p>Hanauer Landstraße 81, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.704878827706677,\n\t\t\t\t50.112383305205896, \n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>B&B Hotel Frankfurt City-Ost</strong><p>Hanauer Landstraße 117, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709716241586767,\n\t\t\t\t50.11160000635536\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>MotelOne</strong><p>Hanauer Landstraße 142, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.713694256542883,\n\t\t\t\t50.11203960791258\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Moxy</strong><p>Hanauer Landstraße 162, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71785704495354,\n\t\t\t\t50.11326424062049\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Hampton by Hilton Frankfurt City Centre East</strong><p>Grusonstraße 4, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70798850585079,\n\t\t\t\t50.112528227125246\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>LINDLEY LINDENBERG</strong><p>Lindleystraße 17, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.718837104529054,\n\t\t\t\t50.11282985876722\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Die Knoppschachtel</strong><p>Ferdinand-Happ-Straße 57, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kita\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.715007013560411,\n\t\t\t\t50.11448051790032\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>EZB Kita</strong><p>Ferdinand-Happ-Straße 57, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kita\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.715007013560411,\n\t\t\t\t50.11448051790032\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Kindergarten d. Evangelisch-Luth.</strong><p>Röderbergweg 66, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kita\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.707768964236756,\n\t\t\t\t50.115814262790835\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>FRÖBEL-Kindergarten</strong><p>Honsellstraße 18, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kita\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709864689196351,\n\t\t\t\t50.110742092904175\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Frankfurter Sparkasse</strong><p>Grusonstraße 3-5, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Banken\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70621865115999,\n\t\t\t\t50.11208644119723, \n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Europäische Zentralbank (EZB)</strong><p>Sonnemannstraße 20, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Banken\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70185343846062,\n\t\t\t\t50.10999246042122\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Schwedler See</strong><p>Schwedlerstraße, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.72247076419106,\n\t\t\t\t50.1126669871857\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Hafenpark</strong><p>Mayfarthstraße, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.707727030979154,\n\t\t\t\t50.10780485816412\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Tankstelle Esso</strong><p>Hanauer Landstraße 178, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Tankstelle\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71785704495354,\n\t\t\t\t50.11326424062049\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t'type': 'Feature',\n\t\t\t'properties': {\n\t\t\t\t'description':\n\t\t'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t\t\t\t'icon': 'castle-15'\n\t\t\t},\n\t\t\t'geometry': {\n\t\t\t'type': 'Point',\n\t\t\t'coordinates': [8.71157213340723, 50.11154494192954]\n\t\t\t}\n\t\t},\n\t  \n\t]\n };\n\n const mapPresent = document.querySelectorAll('.maps')\n\n mapPresent.forEach((elem) => {\n\t\n\tvar filterGroup = document.getElementById('filter-group');\n\tmapboxgl.accessToken = 'pk.eyJ1IjoibW1vcmxleWhsIiwiYSI6ImNrbHV5c25kZjBuZm0yd28zYncwdGlnOWcifQ.0ii1h91pTh7MM9NLoIXuEA';\n\t\n\tvar mq = window.matchMedia( \"(min-width: 820px)\" );\n\t\n\tconsole.log('mq', mq)\n\t\n\tif (mq.matches){\n\t\tvar map = new mapboxgl.Map({\n\t\t\tcontainer: 'map', // container ID\n\t\t\tstyle: 'mapbox://styles/mmorleyhl/cklwedd4f59wp17l9wfr2jwx5', // style ID\n\t\t\tcenter: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]\n\t\t\t// starting zoom\n\t\t\tzoom: 16,\n\t\t\tattributionControl: true,\n\t\t\tlogoEnabled: false\n\t\t});\n\t} else {\n\t\tvar map = new mapboxgl.Map({\n\t\t\tcontainer: 'map', // container ID\n\t\t\tstyle: 'mapbox://styles/mmorleyhl/cklwedd4f59wp17l9wfr2jwx5', // style ID\n\t\t\tcenter: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]\n\t\t\t// starting zoom\n\t\t\tzoom: 15,\n\t\t\tattributionControl: true,\n\t\t\tlogoEnabled: false\n\t\t});\n\t};\n\t\n\t\n\t//disable zoom on map\n\tmap.scrollZoom.disable();\n\t\n\t//disable Mobile desktop behavoir\n\tif (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {\n\t\tmap.dragPan.disable();\n\t\t// map.scrollZoom.enable();\n\t\tconst isTouchEvent = e => e.originalEvent && \"touches\" in e.originalEvent;\n\t\tconst isTwoFingerTouch = e => e.originalEvent.touches.length >= 2;\n\t  \n\t\tmap.on(\"dragstart\", event => {\n\t\t  if (isTouchEvent(event) && !isTwoFingerTouch(event)) {\n\t\t\t map.dragPan.disable();\n\t\t  }\n\t\t});\n\t  \n\t\t// Drag events not emited after dragPan disabled, so I use touch event here\n\t\tmap.on(\"touchstart\", event => {\n\t\t\tif (isTouchEvent(event) && isTwoFingerTouch(event)) {\n\t\t\t map.dragPan.enable();\n\t\t  }\n\t\t});\n\t}\n\t// Add zoom and rotation controls to the map.\n\tmap.addControl(new mapboxgl.NavigationControl({\n\t\t// Hide rotation control.\n\t\tshowCompass: false\n\t}), 'bottom-left');\n\t\n\tmap.on('load', function () {\n\t\t// Add a GeoJSON source containing place coordinates and information.\n\t\tmap.addSource('places', {\n\t\t\t'type': 'geojson',\n\t\t\t'data': places,\n\t\t});\n\t\t \n\t\tplaces.features.forEach(function (feature) {\n\t\t\tvar symbol = feature.properties['icon'];\n\t\t\tconsole.log('symbol', symbol)\n\t\t\tvar layerID = 'poi-' + symbol;\n\t\t\tconsole.log('layerID', layerID)\n\t\t\n\t\t\t\n\t\n\t\t// Add a layer for this symbol type if it hasn't been added already.\n\t\t\tif (!map.getLayer(layerID)) {\n\t\t\t\tmap.addLayer({\n\t\t\t\t\t'id': layerID,\n\t\t\t\t\t'type': 'symbol',\n\t\t\t\t\t'source': 'places',\n\t\t\t\t\t\n\t\t\t\t\t'layout': {\n\t\t\t\t\t'icon-image': symbol,\n\t\t\t\t\t'icon-allow-overlap': true,\n\t\t\t\t\t// \"icon-offset\": [\n\t\t\t\t\t// \t\"case\",\n\t\t\t\t\t// \t[\"==\", [\"get\", \"icon\"], \"cafe-15\"],\n\t\t\t\t\t// \t[\"literal\", [5, -19]],\n\t\t\t\t\t// \t[\"literal\", [0, 0]]\n\t\t\t\t\t//   ]\n\t\t\t\t\t},\n\t\t\t\t\t'filter': ['==', 'icon', symbol]\n\t\t\t\t});\n\t\n\t\t\t\t// Change icon size on zoom\n\t\t\t\t// map.on('zoom', () => {\n\t\t\t\t//     const scalePercent = 1 + (map.getZoom() - 8)  * 0.4;\n\t\t\t\t//     const svgElement = symbol.getElement().children[0];\n\t\t\t\t//     svgElement.style.transform = `scale(${scalePercent})`;\n\t\t\t\t//     svgElement.style.transformOrigin = 'bottom';\n\t\t\t\t// });\n\t\t\t\t\n\t\t\t\t// Add checkbox and label elements for the layer.\n\t\t\t\tvar input = document.createElement('input');\n\t\t\t\tinput.type = 'checkbox';\n\t\t\t\tinput.id = layerID;\n\t\t\t\tinput.checked = true;\n\t\t\t\tfilterGroup.appendChild(input);\n\t\t\t\n\t\t\t\tvar label = document.createElement('label');\n\t\t\t\tlabel.setAttribute('for', layerID);\n\t\t\t\tlabel.textContent = symbol;\n\t\t\t\tfilterGroup.appendChild(label);\n\t\t\t\n\t\t\t// When the checkbox changes, update the visibility of the layer.\n\t\t\t\tinput.addEventListener('change', function (e) {\n\t\t\t\t\tmap.setLayoutProperty(\n\t\t\t\t\t\tlayerID,\n\t\t\t\t\t\t'visibility',\n\t\t\t\t\t\te.target.checked ? 'visible' : 'none'\n\t\t\t\t\t);\n\t\t\t\t});\n\t\n\t\t\t\tmap.on('click', layerID, function (e) {\n\t\t\t\t\tvar coordinates = e.features[0].geometry.coordinates.slice();\n\t\t\t\t\tvar description = e.features[0].properties.description;\n\t\t\t\t\t \n\t\t\t\t\t// Ensure that if the map is zoomed out such that multiple\n\t\t\t\t\t// copies of the feature are visible, the popup appears\n\t\t\t\t\t// over the copy being pointed to.\n\t\t\t\t\twhile (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n\t\t\t\t\tcoordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n\t\t\t\t\t}\n\t\t\t\t\t \n\t\t\t\t\tnew mapboxgl.Popup()\n\t\t\t\t\t.setLngLat(coordinates)\n\t\t\t\t\t.setHTML(description)\n\t\t\t\t\t.addTo(map);\n\t\t\t\t});\n\t\t\t\t\t \n\t\t\t\t\t// Change the cursor to a pointer when the mouse is over the places layer.\n\t\t\t\tmap.on('mouseenter', layerID, function () {\n\t\t\t\t\tmap.getCanvas().style.cursor = 'pointer';\n\t\t\t\t});\n\t\t\t\t\t \n\t\t\t\t\t// Change it back to a pointer when it leaves.\n\t\t\t\tmap.on('mouseleave', layerID, function () {\n\t\t\t\t\tmap.getCanvas().style.cursor = '';\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\n\t\n\t});\n\t\n\tmap.on('click', 'places', function (e) {\n\t\tvar coordinates = e.features[0].geometry.coordinates.slice();\n\t\tvar description = e.features[0].properties.description;\n\t\t \n\t\t// Ensure that if the map is zoomed out such that multiple\n\t\t// copies of the feature are visible, the popup appears\n\t\t// over the copy being pointed to.\n\t\twhile (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n\t\t\tcoordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n\t\t}\n\t\t \n\t\tnew mapboxgl.Popup()\n\t\t.setLngLat(coordinates)\n\t\t.setHTML(description)\n\t\t.addTo(map);\n\t});\n\t\t \n\t// Change the cursor to a pointer when the mouse is over the places layer.\n\tmap.on('mouseenter', 'places', function () {\n\t\tmap.getCanvas().style.cursor = 'pointer';\n\t});\n\t\t\n\t// Change it back to a pointer when it leaves.\n\tmap.on('mouseleave', 'places', function () {\n\t\tmap.getCanvas().style.cursor = '';\n\t});\n })\n \n\n//# sourceURL=webpack://SITE/./src/assets/js/_mapbox.js?");

/***/ }),

/***/ "./src/assets/js/_mobile_menu_button.js":
/*!**********************************************!*\
  !*** ./src/assets/js/_mobile_menu_button.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const bodyScrollLock = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js\");\nconst disableBodyScroll = bodyScrollLock.disableBodyScroll;\nconst enableBodyScroll = bodyScrollLock.enableBodyScroll;\n\nconst mobileMenuButton = document.querySelectorAll('.mobile_menu_button')\nconst mobileMenu = document.querySelectorAll('.mobile_menu')\nconsole.log('mobile_button', mobileMenuButton)\n\n// First we get the viewport height and we multiple it by 1% to get a value for a vh unit\nlet vh = window.innerHeight * 0.01;\n// Then we set the value in the --vh custom property to the root of the document\ndocument.documentElement.style.setProperty('--vh', `${vh}px`);\n\nmobileMenuButton.forEach(elem => {\n    \n    elem.onclick = () => {\n        mobileMenu.forEach(elem => {\n            if (elem.style.top == '') {\n                // disableBodyScroll(elem);\n                elem.style.top = \"0\";\n            } else if (elem.style.top == '0px') {\n                // enableBodyScroll(elem);\n                elem.style.top = \"-140vh\";\n            } else {\n                // disableBodyScroll(elem);\n                elem.style.top = \"0\";\n            }\n\n        })\n        console.log('mobile_button', elem)\n    }\n});\n\nvar menuButton = document.getElementById('menuButton');\nif (menuButton) {\n    menuButton.addEventListener('click',  (e) => {\n        menuButton.classList.toggle('is-active');\n        e.preventDefault();\n    });\n}\n\n//# sourceURL=webpack://SITE/./src/assets/js/_mobile_menu_button.js?");

/***/ }),

/***/ "./src/assets/js/_random_color.js":
/*!****************************************!*\
  !*** ./src/assets/js/_random_color.js ***!
  \****************************************/
/***/ (function() {

eval("\nvar boxColumnColor = document.querySelectorAll('.section_d2d_test__box')\n\nboxColumnColor.forEach((elem) => {\n\n    var randomColor = \"#\"+((1<<24)*Math.random()|0).toString(16); \n    elem.parentElement.style.setProperty('background-color', randomColor);\n    \n})\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_random_color.js?");

/***/ }),

/***/ "./src/assets/js/_scrollAnker.js":
/*!***************************************!*\
  !*** ./src/assets/js/_scrollAnker.js ***!
  \***************************************/
/***/ (function() {

eval("const mobileMenuButton = document.querySelectorAll('.mobile_menu_button')\nconst mobileMenu = document.querySelectorAll('.mobile_menu')\nvar menuButton = document.getElementById('menuButton');\n\ndocument.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n    anchor.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        document.querySelector(this.getAttribute('href')).scrollIntoView({\n            behavior: 'smooth',\n        });\n        \n        if (mobileMenuButton){  \n            mobileMenuButton.forEach(elem => {\n                if (window.getComputedStyle(elem, null).display == 'block') {             \n                    setTimeout(() => { \n                        menuButton.click()\n                    }, 1000);     \n                } \n            })\n        }\n    });\n});\n\n//# sourceURL=webpack://SITE/./src/assets/js/_scrollAnker.js?");

/***/ }),

/***/ "./src/assets/js/_toTopButton.js":
/*!***************************************!*\
  !*** ./src/assets/js/_toTopButton.js ***!
  \***************************************/
/***/ (function() {

eval("const elems = document.querySelectorAll('.to_top_button')\n\nelems.forEach((elem) => {\n\telem.onclick = function(e) {\n\t\te.preventDefault()\n\n\t\twindow.scrollTo({\n\t\t\ttop: 0,\n\t\t\tbehavior: 'smooth'\n\t\t})\n\t}\n})\nconst buttonElems = document.querySelectorAll('.button_test')\n\nwindow.onscroll = (e) => {\n\t// console.log(window.pageYOffset)\n\tif (window.pageYOffset > \"650\") {\n\t\t// console.log('button scroll 650 plus')\n\t\tbuttonElems.forEach((elem) => {\n\t\t\t// console.log(\"button\", elem )\n\t\t\telem.classList.remove(\"button_test--hide\");\n\t\t})\n\t} else {\n\t\tconsole.log('button scroll 650 minus')\n\t\tbuttonElems.forEach((elem) => {\n\t\t\t// console.log(\"button\", elem )\n\t\t\telem.classList.add(\"button_test--hide\");\n\t\t})\n\t}\n}\n\n//# sourceURL=webpack://SITE/./src/assets/js/_toTopButton.js?");

/***/ }),

/***/ "./src/assets/js/_wow.js":
/*!*******************************!*\
  !*** ./src/assets/js/_wow.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const WOW = __webpack_require__(/*! wow.js */ \"./node_modules/wow.js/dist/wow.js\");\n\nconst wow = new WOW(\n\t{\n\t  animateClass: 'animated',\n\t  offset:       100,\n\t  mobile:       true,\n\t  callback:     function(box) {\n\t\tconsole.log(\"WOW: animating <\" + box.tagName.toLowerCase() + \">\")\n\t  }\n\t}\n  );\n  wow.init();\n\n//# sourceURL=webpack://SITE/./src/assets/js/_wow.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ \"./src/assets/css/index.scss\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cursor.js */ \"./src/assets/js/_cursor.js\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cursor_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_header.js */ \"./src/assets/js/_header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mapbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapbox.js */ \"./src/assets/js/_mapbox.js\");\n/* harmony import */ var _mapbox_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_color_switch.js */ \"./src/assets/js/_color_switch.js\");\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_color_switch_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_wow.js */ \"./src/assets/js/_wow.js\");\n/* harmony import */ var _wow_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wow_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scrollAnker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_scrollAnker.js */ \"./src/assets/js/_scrollAnker.js\");\n/* harmony import */ var _scrollAnker_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scrollAnker_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_carousel.js */ \"./src/assets/js/_carousel.js\");\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_carousel_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _toTopButton_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_toTopButton.js */ \"./src/assets/js/_toTopButton.js\");\n/* harmony import */ var _toTopButton_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_toTopButton_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _headroom_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_headroom.js */ \"./src/assets/js/_headroom.js\");\n/* harmony import */ var _mobile_menu_button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_mobile_menu_button.js */ \"./src/assets/js/_mobile_menu_button.js\");\n/* harmony import */ var _mobile_menu_button_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu_button_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _random_color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_random_color.js */ \"./src/assets/js/_random_color.js\");\n/* harmony import */ var _random_color_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_random_color_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! smoothscroll-polyfill */ \"./node_modules/smoothscroll-polyfill/dist/smoothscroll.js\");\n/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var simple_parallax_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! simple-parallax-js */ \"./node_modules/simple-parallax-js/dist/simpleParallax.min.js\");\n/* harmony import */ var simple_parallax_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(simple_parallax_js__WEBPACK_IMPORTED_MODULE_13__);\n// import css for webpack\n\n// javscript imports\n\n// import './_test.js';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nsmoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_12___default().polyfill()\n\nvar image = document.getElementsByClassName('thumbnail');\nnew (simple_parallax_js__WEBPACK_IMPORTED_MODULE_13___default())(image);\n// new simpleParallax(image, {\n// \tscale: 1.5\n// });\n\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/assets/js/index.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSITE"] = self["webpackChunkSITE"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;