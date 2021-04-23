// import css for webpack
import '../css/index.scss';
// javscript imports
import './_cursor.js';
// import './_test.js';
import './_header.js';
import './_mapbox.js';
import './_color_switch.js';
import './_wow.js';
import './_scrollAnker.js';
import './_carousel.js';
import './_toTopButton.js';
import './_headroom.js';
import './_mobile_menu_button.js';
import './_random_color.js';
import smoothscroll from 'smoothscroll-polyfill'

import simpleParallax from 'simple-parallax-js';

smoothscroll.polyfill()

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);
// new simpleParallax(image, {
// 	scale: 1.5
// });

