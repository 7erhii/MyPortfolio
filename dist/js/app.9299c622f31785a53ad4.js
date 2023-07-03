/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();
document.querySelector('.switch__theme-link').addEventListener('click', event => {
  event.preventDefault();

  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('.theme').classList.add('dark');
    } else {
      document.querySelector('.theme').classList.remove('dark');
    }
  } catch (err) {}
}

addDarkClassToHTML();
document.querySelector('.switch__position-grid').addEventListener('click', event => {
  event.preventDefault();

  if (localStorage.getItem('positionstyle') === 'list') {
    localStorage.setItem('positionstyle', 'grid');
  } else {
    localStorage.setItem('positionstyle', 'grid');
  }

  addListClassToHTML();
});
document.querySelector('.switch__position-list').addEventListener('click', event => {
  event.preventDefault();

  if (localStorage.getItem('positionstyle') === 'grid') {
    localStorage.setItem('positionstyle', 'list');
  } else {
    localStorage.setItem('positionstyle', 'list');
  }

  addListClassToHTML();
});

function addListClassToHTML() {
  try {
    if (localStorage.getItem('positionstyle') === 'list') {
      document.querySelector('.positionstyle').classList.add('list');
    } else {
      document.querySelector('.positionstyle').classList.remove('list');
    }
  } catch (err) {}
}

addListClassToHTML();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["image"] = pug_interp = function(file){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${file}`), true, true)+" alt=\"\"") + "\u003E";
};




pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/header.pug */ "./src/views/parts/header.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/hero.pug */ "./src/views/parts/hero.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/about.pug */ "./src/views/parts/about.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Csection class=\"works\"\u003E\u003Cdiv class=\"works__container container\"\u003E \u003Cdiv class=\"works__items\"\u003E \u003Ca class=\"works__item\"\u003E\u003Cdiv class=\"works__item-header\"\u003E\u003Cdiv class=\"works__item-text\"\u003E \u003Ch3\u003EFlop App\u003C\u002Fh3\u003E\u003Cspan\u003EFlop app description\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item-img\"\u003E\u003C?xml version=\"1.0\" ?\u003E\n\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\n\u003Ctitle\u002F\u003E\n\n\u003Cg id=\"Complete\"\u003E\n\n\u003Cg id=\"arrow-up-right\"\u003E\n\n\u003Cg\u003E\n\n\u003Cpolyline data-name=\"Right\" fill=\"none\" id=\"Right-2\" points=\"18.7 12.4 18.7 5.3 11.6 5.3\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\u002F\u003E\n\n\u003Cline fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" x1=\"5.3\" x2=\"17.1\" y1=\"18.7\" y2=\"6.9\"\u002F\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item-bg\"\u003E ";
pug_mixins["image"]('todo1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"works__item\"\u003E\u003Cdiv class=\"works__item-header\"\u003E\u003Cdiv class=\"works__item-text\"\u003E \u003Ch3\u003EFlop App\u003C\u002Fh3\u003E\u003Cspan\u003EFlop app description\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item-img\"\u003E\u003C?xml version=\"1.0\" ?\u003E\n\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\n\u003Ctitle\u002F\u003E\n\n\u003Cg id=\"Complete\"\u003E\n\n\u003Cg id=\"arrow-up-right\"\u003E\n\n\u003Cg\u003E\n\n\u003Cpolyline data-name=\"Right\" fill=\"none\" id=\"Right-2\" points=\"18.7 12.4 18.7 5.3 11.6 5.3\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\u002F\u003E\n\n\u003Cline fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" x1=\"5.3\" x2=\"17.1\" y1=\"18.7\" y2=\"6.9\"\u002F\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item-bg\"\u003E ";
pug_mixins["image"]('todo2.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/about.pug":
/*!***********************************!*\
  !*** ./src/views/parts/about.pug ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"about\"\u003E \u003Cdiv class=\"about__container container\"\u003E\u003Cdiv class=\"about__text\"\u003E\u003Cdiv class=\"about__title\"\u003E \u003Cspan\u003ESkills\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__skills\"\u003E\u003Cul\u003E \u003Cli\u003E \u003Cspan\u003EJavascript \u002F ES5 \u002F ES6 \u002F SPA (React) \u002F JQuery - Webpack \u002F Gulp \u002F Node.js - CSS (with Sass, Less, Stylus and Postcss)\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cli\u003E \u003Cspan\u003EHTML (with Pug \u002F Jade, Bootstrap \u002F Tailwind) - Responsive Pixel Perfect UI layout - UI\u002FUX Testing\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cli\u003E \u003Cspan\u003EGIT (BitBucket, GitHub, Gitlab)\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cli\u003E \u003Cspan\u003EMacOs\u002FLinux - Figma, Photoshop, Illustrator, Zeplin\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/header.pug":
/*!************************************!*\
  !*** ./src/views/parts/header.pug ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/hero.pug":
/*!**********************************!*\
  !*** ./src/views/parts/hero.pug ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"hero\"\u003E \u003Cdiv class=\"hero__container container\"\u003E \u003Cdiv class=\"hero__about\"\u003E\u003Cdiv class=\"hero__descr\"\u003E\u003Cdiv class=\"hero__about-text\"\u003E \u003Ch1\u003EHello, I'm Serhiy\u003C\u002Fh1\u003E\u003Ch2\u003EDescription Description Description\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__about-actions\"\u003E \u003Ca class=\"hero__about-social social-btn\" href=\"#\"\u003E \u003C?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?\u003E\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n    \n    \u003Ctitle\u003Egithub [#142]\u003C\u002Ftitle\u003E\n    \u003Cdesc\u003ECreated with Sketch.\u003C\u002Fdesc\u003E\n    \u003Cdefs\u003E\n\n\u003C\u002Fdefs\u003E\n    \u003Cg id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\u003E\n        \u003Cg id=\"Dribbble-Light-Preview\" transform=\"translate(-140.000000, -7559.000000)\" fill=\"#000000\"\u003E\n            \u003Cg id=\"icons\" transform=\"translate(56.000000, 160.000000)\"\u003E\n                \u003Cpath d=\"M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399\" id=\"github-[#142]\"\u003E\n\n\u003C\u002Fpath\u003E\n            \u003C\u002Fg\u003E\n        \u003C\u002Fg\u003E\n    \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"hero__about-portfolio btn\" href=\"#\"\u003E\u003Cspan\u003EPortfolio\u003C\u002Fspan\u003E\u003C?xml version=\"1.0\" ?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333\" stroke=\"#464455\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"hero__about-social social-btn\" href=\"#\"\u003E \u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg fill=\"#000000\" height=\"800px\" width=\"800px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" \n\t viewBox=\"-143 145 512 512\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cpath d=\"M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7\n\t\tc-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4\n\t\tc-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8\n\t\tc20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4\n\t\tc20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z\"\u002F\u003E\n\t\u003Cpath d=\"M234.3,313.1c-10.2,6-21.4,10.4-33.4,12.8c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12\n\t\tc-43.7-2.2-82.5-23.1-108.4-55c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6\n\t\tc0,25.5,18.1,46.8,42.2,51.6c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5\n\t\tc-18,14.1-40.7,22.5-65.3,22.5c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7\n\t\tc0-2.3,0-4.6-0.1-6.8c10.3-7.5,19.2-16.7,26.2-27.3c-9.4,4.2-19.6,7-30.2,8.3C222.1,335.7,230.4,325.4,234.3,313.1z\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"hero__about-social social-btn\" href=\"#\"\u003E \u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M18 8L5 12.5L9.5 14M18 8L9.5 14M18 8L14 18.5L9.5 14\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003Cpath d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"#000000\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"hero__about-social social-btn\" href=\"#\"\u003E \u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg fill=\"#000000\" height=\"800px\" width=\"800px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" \n\t viewBox=\"-143 145 512 512\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cpath d=\"M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7\n\t\tc-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4\n\t\tc-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8\n\t\tc20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4\n\t\tc20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z\"\u002F\u003E\n\t\u003Cpath d=\"M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7\n\t\tv-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7\n\t\tc8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401\n\t\tC68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2\n\t\tc-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__img\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ (() => {

// console.log(1);
// document.querySelector('.themetoggle').addEventListener('click', (event) => {
//    event.preventDefault();
//    if (localStorage.getItem('theme') === 'dark') {
//       localStorage.removeItem('theme');
//    }
//    else {
//       localStorage.setItem('theme', 'dark')
//    }
//    addDarkClassToHTML()
// });
// function addDarkClassToHTML() {
//    try {
//       if (localStorage.getItem('theme') === 'dark') {
//          document.querySelector('.page').classList.add('dark');
//       }
//       else {
//          document.querySelector('.page').classList.remove('dark');
//       }
//    } catch (err) { }
// }
// addDarkClassToHTML();


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./IMG1.JPG": "./src/assets/images/IMG1.JPG",
	"./IMG2.JPG": "./src/assets/images/IMG2.JPG",
	"./arrow.svg": "./src/assets/images/arrow.svg",
	"./bg.jpg": "./src/assets/images/bg.jpg",
	"./download.svg": "./src/assets/images/download.svg",
	"./download2.svg": "./src/assets/images/download2.svg",
	"./download3.svg": "./src/assets/images/download3.svg",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./github.svg": "./src/assets/images/github.svg",
	"./instagram.svg": "./src/assets/images/instagram.svg",
	"./telegram.svg": "./src/assets/images/telegram.svg",
	"./todo.png": "./src/assets/images/todo.png",
	"./todo1.png": "./src/assets/images/todo1.png",
	"./todo2.png": "./src/assets/images/todo2.png",
	"./twitter.svg": "./src/assets/images/twitter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/IMG1.JPG":
/*!************************************!*\
  !*** ./src/assets/images/IMG1.JPG ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/42a3ddac455b54c40f72.JPG";

/***/ }),

/***/ "./src/assets/images/IMG2.JPG":
/*!************************************!*\
  !*** ./src/assets/images/IMG2.JPG ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ea5c9363a8c7cb92be13.JPG";

/***/ }),

/***/ "./src/assets/images/arrow.svg":
/*!*************************************!*\
  !*** ./src/assets/images/arrow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3428e566d5f182b89ee6.svg";

/***/ }),

/***/ "./src/assets/images/bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/images/bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/08a5ed9b0e2a6eb1f9a9.jpg";

/***/ }),

/***/ "./src/assets/images/download.svg":
/*!****************************************!*\
  !*** ./src/assets/images/download.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f5500007eb688f7f9d29.svg";

/***/ }),

/***/ "./src/assets/images/download2.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/download2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0eedb0b293993fccfa5a.svg";

/***/ }),

/***/ "./src/assets/images/download3.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/download3.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6dbb4ad2c9b5ee64dab2.svg";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "./src/assets/images/github.svg":
/*!**************************************!*\
  !*** ./src/assets/images/github.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5531be85d7a8d6f333e5.svg";

/***/ }),

/***/ "./src/assets/images/instagram.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/instagram.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d2261a2786398bc2d008.svg";

/***/ }),

/***/ "./src/assets/images/telegram.svg":
/*!****************************************!*\
  !*** ./src/assets/images/telegram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/41de1e49e891ed12c879.svg";

/***/ }),

/***/ "./src/assets/images/todo.png":
/*!************************************!*\
  !*** ./src/assets/images/todo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bd6136f9919f7a03cb47.png";

/***/ }),

/***/ "./src/assets/images/todo1.png":
/*!*************************************!*\
  !*** ./src/assets/images/todo1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cc0929eac7fa3548c6da.png";

/***/ }),

/***/ "./src/assets/images/todo2.png":
/*!*************************************!*\
  !*** ./src/assets/images/todo2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/585f5c4634186850a0fc.png";

/***/ }),

/***/ "./src/assets/images/twitter.svg":
/*!***************************************!*\
  !*** ./src/assets/images/twitter.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/98ac548c05187db990cb.svg";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.ts");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvYWJvdXQucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvaGVhZGVyLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2hlcm8ucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL21haW4udHMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9hc3NldHMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy9pZ25vcmVkfC9Vc2Vycy83ZXJoaXkvRGVza3RvcC9XRUIvcGZsby9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lfGZzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRXaWR0aCA9IDE0NDAsXG4gIGRlZmF1bHRGb250ID0gMTYsXG4gIG1vYmlsZUZvbnQgPSAxNixcbiAgbWluV2lkdGggPSA3NjgsXG4gIG1pbkhlaWdodCA9IDYwMCxcbiAgZGVmYXVsdEhlaWdodCA9IDkwMDtcblxuZnVuY3Rpb24gZlNpemUoZGV2aWNlLCB2VywgdkgpIHtcbiAgaWYgKHZXIDw9IDM3NCkge1xuICAgIHJldHVybiAxMztcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VcbiAgICA/IG1vYmlsZUZvbnRcbiAgICA6IGRlZmF1bHRGb250ICpcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgobWluV2lkdGgsIHZXKSAvIGRlZmF1bHRXaWR0aCxcbiAgICAgICAgICBNYXRoLm1heChtaW5IZWlnaHQsIHZIKSAvIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZpZXJEZXZpY2UoKSB7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgaXNNb2JpbGUgPSB3aW5kb3dXaWR0aCA8PSA3Njc7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRTaXplID1cbiAgICAgIGZTaXplKGlzTW9iaWxlLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG5tb2RpZmllckRldmljZSgpO1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX3RoZW1lLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdkYXJrJykge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aGVtZScpO1xuICB9XG4gIGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJylcbiAgfVxuICBhZGREYXJrQ2xhc3NUb0hUTUwoKVxufSk7XG5cbmZ1bmN0aW9uIGFkZERhcmtDbGFzc1RvSFRNTCgpIHtcbiAgdHJ5IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdkYXJrJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lJykuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikgeyB9XG59XG5cbmFkZERhcmtDbGFzc1RvSFRNTCgpO1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX3Bvc2l0aW9uLWdyaWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnKSA9PT0gJ2xpc3QnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnLCAnZ3JpZCcpO1xuICB9XG4gIGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbnN0eWxlJywgJ2dyaWQnKVxuICB9XG4gIGFkZExpc3RDbGFzc1RvSFRNTCgpXG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaF9fcG9zaXRpb24tbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zaXRpb25zdHlsZScpID09PSAnZ3JpZCcpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zaXRpb25zdHlsZScsICdsaXN0Jyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnLCAnbGlzdCcpXG4gIH1cbiAgYWRkTGlzdENsYXNzVG9IVE1MKClcbn0pO1xuXG5cbmZ1bmN0aW9uIGFkZExpc3RDbGFzc1RvSFRNTCgpIHtcbiAgdHJ5IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnKSA9PT0gJ2xpc3QnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zaXRpb25zdHlsZScpLmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zaXRpb25zdHlsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikgeyB9XG59XG5cbmFkZExpc3RDbGFzc1RvSFRNTCgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX21peGluc1tcImltYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGZpbGUpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtmaWxlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcIjtcbn07XG5cblxuXG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhRE9DVFlQRSBodG1sXFx1MDAzRVxcdTAwM0NodG1sIGxhbmc9XFxcImVuXFxcIlxcdTAwM0VcXHUwMDNDaGVhZFxcdTAwM0VcXHUwMDNDbWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiaWU9ZWRnZVxcXCJcXHUwMDNFXFx1MDAzQ2xpbmtcIiArIChcIiByZWw9XFxcInNob3J0Y3V0IGljb25cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdgKSwgdHJ1ZSwgdHJ1ZSkrXCIgdHlwZT1cXFwiaW1hZ2VcXHUwMDJGcG5nXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0N0aXRsZVxcdTAwM0VFbXB0eSBQcm9qZWN0XFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRcXHUwMDNFXFx1MDAzQ2JvZHlcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL3BhcnRzL2hlYWRlci5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvaGVyby5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvYWJvdXQucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJ3b3Jrc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2NvbnRhaW5lciBjb250YWluZXJcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbXNcXFwiXFx1MDAzRSBcXHUwMDNDYSBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtLWhlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW0tdGV4dFxcXCJcXHUwMDNFIFxcdTAwM0NoM1xcdTAwM0VGbG9wIEFwcFxcdTAwM0NcXHUwMDJGaDNcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFRmxvcCBhcHAgZGVzY3JpcHRpb25cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW0taW1nXFxcIlxcdTAwM0VcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiID9cXHUwMDNFXFxuXFxuXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcblxcdTAwM0N0aXRsZVxcdTAwMkZcXHUwMDNFXFxuXFxuXFx1MDAzQ2cgaWQ9XFxcIkNvbXBsZXRlXFxcIlxcdTAwM0VcXG5cXG5cXHUwMDNDZyBpZD1cXFwiYXJyb3ctdXAtcmlnaHRcXFwiXFx1MDAzRVxcblxcblxcdTAwM0NnXFx1MDAzRVxcblxcblxcdTAwM0Nwb2x5bGluZSBkYXRhLW5hbWU9XFxcIlJpZ2h0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBpZD1cXFwiUmlnaHQtMlxcXCIgcG9pbnRzPVxcXCIxOC43IDEyLjQgMTguNyA1LjMgMTEuNiA1LjNcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXG5cXHUwMDNDbGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiB4MT1cXFwiNS4zXFxcIiB4Mj1cXFwiMTcuMVxcXCIgeTE9XFxcIjE4LjdcXFwiIHkyPVxcXCI2LjlcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbS1iZ1xcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCd0b2RvMS5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtLWhlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW0tdGV4dFxcXCJcXHUwMDNFIFxcdTAwM0NoM1xcdTAwM0VGbG9wIEFwcFxcdTAwM0NcXHUwMDJGaDNcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFRmxvcCBhcHAgZGVzY3JpcHRpb25cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW0taW1nXFxcIlxcdTAwM0VcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiID9cXHUwMDNFXFxuXFxuXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcblxcdTAwM0N0aXRsZVxcdTAwMkZcXHUwMDNFXFxuXFxuXFx1MDAzQ2cgaWQ9XFxcIkNvbXBsZXRlXFxcIlxcdTAwM0VcXG5cXG5cXHUwMDNDZyBpZD1cXFwiYXJyb3ctdXAtcmlnaHRcXFwiXFx1MDAzRVxcblxcblxcdTAwM0NnXFx1MDAzRVxcblxcblxcdTAwM0Nwb2x5bGluZSBkYXRhLW5hbWU9XFxcIlJpZ2h0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBpZD1cXFwiUmlnaHQtMlxcXCIgcG9pbnRzPVxcXCIxOC43IDEyLjQgMTguNyA1LjMgMTEuNiA1LjNcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXG5cXHUwMDNDbGluZSBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiB4MT1cXFwiNS4zXFxcIiB4Mj1cXFwiMTcuMVxcXCIgeTE9XFxcIjE4LjdcXFwiIHkyPVxcXCI2LjlcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbS1iZ1xcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCd0b2RvMi5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJhYm91dFxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19jb250YWluZXIgY29udGFpbmVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX3RpdGxlXFxcIlxcdTAwM0UgXFx1MDAzQ3NwYW5cXHUwMDNFU2tpbGxzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19za2lsbHNcXFwiXFx1MDAzRVxcdTAwM0N1bFxcdTAwM0UgXFx1MDAzQ2xpXFx1MDAzRSBcXHUwMDNDc3BhblxcdTAwM0VKYXZhc2NyaXB0IFxcdTAwMkYgRVM1IFxcdTAwMkYgRVM2IFxcdTAwMkYgU1BBIChSZWFjdCkgXFx1MDAyRiBKUXVlcnkgLSBXZWJwYWNrIFxcdTAwMkYgR3VscCBcXHUwMDJGIE5vZGUuanMgLSBDU1MgKHdpdGggU2FzcywgTGVzcywgU3R5bHVzIGFuZCBQb3N0Y3NzKVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaVxcdTAwM0UgXFx1MDAzQ3NwYW5cXHUwMDNFSFRNTCAod2l0aCBQdWcgXFx1MDAyRiBKYWRlLCBCb290c3RyYXAgXFx1MDAyRiBUYWlsd2luZCkgLSBSZXNwb25zaXZlIFBpeGVsIFBlcmZlY3QgVUkgbGF5b3V0IC0gVUlcXHUwMDJGVVggVGVzdGluZ1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaVxcdTAwM0UgXFx1MDAzQ3NwYW5cXHUwMDNFR0lUIChCaXRCdWNrZXQsIEdpdEh1YiwgR2l0bGFiKVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaVxcdTAwM0UgXFx1MDAzQ3NwYW5cXHUwMDNFTWFjT3NcXHUwMDJGTGludXggLSBGaWdtYSwgUGhvdG9zaG9wLCBJbGx1c3RyYXRvciwgWmVwbGluXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ1bFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJoZXJvXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fY29udGFpbmVyIGNvbnRhaW5lclxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2Fib3V0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19kZXNjclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYWJvdXQtdGV4dFxcXCJcXHUwMDNFIFxcdTAwM0NoMVxcdTAwM0VIZWxsbywgSSdtIFNlcmhpeVxcdTAwM0NcXHUwMDJGaDFcXHUwMDNFXFx1MDAzQ2gyXFx1MDAzRURlc2NyaXB0aW9uIERlc2NyaXB0aW9uIERlc2NyaXB0aW9uXFx1MDAzQ1xcdTAwMkZoMlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hYm91dC1hY3Rpb25zXFxcIlxcdTAwM0UgXFx1MDAzQ2EgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXNvY2lhbCBzb2NpYWwtYnRuXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwiVVRGLThcXFwiIHN0YW5kYWxvbmU9XFxcIm5vXFxcIj9cXHUwMDNFXFxuXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjE5OTlcXHUwMDJGeGxpbmtcXFwiXFx1MDAzRVxcbiAgICBcXG4gICAgXFx1MDAzQ3RpdGxlXFx1MDAzRWdpdGh1YiBbIzE0Ml1cXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcbiAgICBcXHUwMDNDZGVzY1xcdTAwM0VDcmVhdGVkIHdpdGggU2tldGNoLlxcdTAwM0NcXHUwMDJGZGVzY1xcdTAwM0VcXG4gICAgXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcbiAgICBcXHUwMDNDZyBpZD1cXFwiUGFnZS0xXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NnIGlkPVxcXCJEcmliYmJsZS1MaWdodC1QcmV2aWV3XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMTQwLjAwMDAwMCwgLTc1NTkuMDAwMDAwKVxcXCIgZmlsbD1cXFwiIzAwMDAwMFxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2cgaWQ9XFxcImljb25zXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg1Ni4wMDAwMDAsIDE2MC4wMDAwMDApXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ3BhdGggZD1cXFwiTTk0LDczOTkgQzk5LjUyMyw3Mzk5IDEwNCw3NDAzLjU5IDEwNCw3NDA5LjI1MyBDMTA0LDc0MTMuNzgyIDEwMS4xMzgsNzQxNy42MjQgOTcuMTY3LDc0MTguOTgxIEM5Ni42Niw3NDE5LjA4MiA5Ni40OCw3NDE4Ljc2MiA5Ni40OCw3NDE4LjQ4OSBDOTYuNDgsNzQxOC4xNTEgOTYuNDkyLDc0MTcuMDQ3IDk2LjQ5Miw3NDE1LjY3NSBDOTYuNDkyLDc0MTQuNzE5IDk2LjE3Miw3NDE0LjA5NSA5NS44MTMsNzQxMy43NzcgQzk4LjA0LDc0MTMuNTIzIDEwMC4zOCw3NDEyLjY1NiAxMDAuMzgsNzQwOC43MTggQzEwMC4zOCw3NDA3LjU5OCA5OS45OTIsNzQwNi42ODQgOTkuMzUsNzQwNS45NjYgQzk5LjQ1NCw3NDA1LjcwNyA5OS43OTcsNzQwNC42NjQgOTkuMjUyLDc0MDMuMjUyIEM5OS4yNTIsNzQwMy4yNTIgOTguNDE0LDc0MDIuOTc3IDk2LjUwNSw3NDA0LjMwMyBDOTUuNzA2LDc0MDQuMDc2IDk0Ljg1LDc0MDMuOTYyIDk0LDc0MDMuOTU4IEM5My4xNSw3NDAzLjk2MiA5Mi4yOTUsNzQwNC4wNzYgOTEuNDk3LDc0MDQuMzAzIEM4OS41ODYsNzQwMi45NzcgODguNzQ2LDc0MDMuMjUyIDg4Ljc0Niw3NDAzLjI1MiBDODguMjAzLDc0MDQuNjY0IDg4LjU0Niw3NDA1LjcwNyA4OC42NDksNzQwNS45NjYgQzg4LjAxLDc0MDYuNjg0IDg3LjYxOSw3NDA3LjU5OCA4Ny42MTksNzQwOC43MTggQzg3LjYxOSw3NDEyLjY0NiA4OS45NTQsNzQxMy41MjYgOTIuMTc1LDc0MTMuNzg1IEM5MS44ODksNzQxNC4wNDEgOTEuNjMsNzQxNC40OTMgOTEuNTQsNzQxNS4xNTYgQzkwLjk3LDc0MTUuNDE4IDg5LjUyMiw3NDE1Ljg3MSA4OC42Myw3NDE0LjMwNCBDODguNjMsNzQxNC4zMDQgODguMTAxLDc0MTMuMzE5IDg3LjA5Nyw3NDEzLjI0NyBDODcuMDk3LDc0MTMuMjQ3IDg2LjEyMiw3NDEzLjIzNCA4Ny4wMjksNzQxMy44NyBDODcuMDI5LDc0MTMuODcgODcuNjg0LDc0MTQuMTg1IDg4LjEzOSw3NDE1LjM3IEM4OC4xMzksNzQxNS4zNyA4OC43MjYsNzQxNy4yIDkxLjUwOCw3NDE2LjU4IEM5MS41MTMsNzQxNy40MzcgOTEuNTIyLDc0MTguMjQ1IDkxLjUyMiw3NDE4LjQ4OSBDOTEuNTIyLDc0MTguNzYgOTEuMzM4LDc0MTkuMDc3IDkwLjgzOSw3NDE4Ljk4MiBDODYuODY1LDc0MTcuNjI3IDg0LDc0MTMuNzgzIDg0LDc0MDkuMjUzIEM4NCw3NDAzLjU5IDg4LjQ3OCw3Mzk5IDk0LDczOTlcXFwiIGlkPVxcXCJnaXRodWItWyMxNDJdXFxcIlxcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRnBhdGhcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJoZXJvX19hYm91dC1wb3J0Zm9saW8gYnRuXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VQb3J0Zm9saW9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiA/XFx1MDAzRVxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXHUwMDNDcGF0aCBkPVxcXCJNMTIgMTJWMTlNMTIgMTlMOS43NSAxNi42NjY3TTEyIDE5TDE0LjI1IDE2LjY2NjdNNi42IDE3LjgzMzNDNC42MTE3OCAxNy44MzMzIDMgMTYuMTkxNyAzIDE0LjE2NjdDMyAxMi40OTggNC4wOTQzOCAxMS4wODk3IDUuNTkxOTggMTAuNjQ1N0M1LjY1NTYyIDEwLjYyNjggNS43IDEwLjU2NzUgNS43IDEwLjVDNS43IDcuNDYyNDMgOC4xMTc2NiA1IDExLjEgNUMxNC4wODIzIDUgMTYuNSA3LjQ2MjQzIDE2LjUgMTAuNUMxNi41IDEwLjU1ODIgMTYuNTUzNiAxMC42MDE0IDE2LjYwOTQgMTAuNTg4N0MxNi44NjM4IDEwLjUzMDYgMTcuMTI4NCAxMC41IDE3LjQgMTAuNUMxOS4zODgyIDEwLjUgMjEgMTIuMTQxNiAyMSAxNC4xNjY3QzIxIDE2LjE5MTcgMTkuMzg4MiAxNy44MzMzIDE3LjQgMTcuODMzM1xcXCIgc3Ryb2tlPVxcXCIjNDY0NDU1XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXNvY2lhbCBzb2NpYWwtYnRuXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXG5cXG5cXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0NzdmcgZmlsbD1cXFwiIzAwMDAwMFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgd2lkdGg9XFxcIjgwMHB4XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIiBcXG5cXHQgdmlld0JveD1cXFwiLTE0MyAxNDUgNTEyIDUxMlxcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ2dcXHUwMDNFXFxuXFx0XFx1MDAzQ3BhdGggZD1cXFwiTTExMywxNDVjLTE0MS40LDAtMjU2LDExNC42LTI1NiwyNTZzMTE0LjYsMjU2LDI1NiwyNTZzMjU2LTExNC42LDI1Ni0yNTZTMjU0LjQsMTQ1LDExMywxNDV6IE0yNzIuOCw1NjAuN1xcblxcdFxcdGMtMjAuOCwyMC44LTQ0LjksMzcuMS03MS44LDQ4LjRjLTI3LjgsMTEuOC01Ny40LDE3LjctODgsMTcuN2MtMzAuNSwwLTYwLjEtNi04OC0xNy43Yy0yNi45LTExLjQtNTEuMS0yNy43LTcxLjgtNDguNFxcblxcdFxcdGMtMjAuOC0yMC44LTM3LjEtNDQuOS00OC40LTcxLjhDLTEwNyw0NjEuMS0xMTMsNDMxLjUtMTEzLDQwMXM2LTYwLjEsMTcuNy04OGMxMS40LTI2LjksMjcuNy01MS4xLDQ4LjQtNzEuOFxcblxcdFxcdGMyMC45LTIwLjgsNDUtMzcuMSw3MS45LTQ4LjVDNTIuOSwxODEsODIuNSwxNzUsMTEzLDE3NXM2MC4xLDYsODgsMTcuN2MyNi45LDExLjQsNTEuMSwyNy43LDcxLjgsNDguNFxcblxcdFxcdGMyMC44LDIwLjgsMzcuMSw0NC45LDQ4LjQsNzEuOGMxMS44LDI3LjgsMTcuNyw1Ny40LDE3LjcsODhjMCwzMC41LTYsNjAuMS0xNy43LDg4QzMwOS44LDUxNS44LDI5My41LDU0MCwyNzIuOCw1NjAuN3pcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHRcXHUwMDNDcGF0aCBkPVxcXCJNMjM0LjMsMzEzLjFjLTEwLjIsNi0yMS40LDEwLjQtMzMuNCwxMi44Yy05LjYtMTAuMi0yMy4zLTE2LjYtMzguNC0xNi42Yy0yOSwwLTUyLjYsMjMuNi01Mi42LDUyLjZjMCw0LjEsMC40LDguMSwxLjQsMTJcXG5cXHRcXHRjLTQzLjctMi4yLTgyLjUtMjMuMS0xMDguNC01NWMtNC41LDcuOC03LjEsMTYuOC03LjEsMjYuNWMwLDE4LjIsOS4zLDM0LjMsMjMuNCw0My44Yy04LjYtMC4zLTE2LjctMi43LTIzLjgtNi42djAuNlxcblxcdFxcdGMwLDI1LjUsMTguMSw0Ni44LDQyLjIsNTEuNmMtNC40LDEuMi05LjEsMS45LTEzLjksMS45Yy0zLjQsMC02LjctMC4zLTkuOS0wLjljNi43LDIwLjksMjYuMSwzNi4xLDQ5LjEsMzYuNVxcblxcdFxcdGMtMTgsMTQuMS00MC43LDIyLjUtNjUuMywyMi41Yy00LjIsMC04LjQtMC4yLTEyLjYtMC43YzIzLjMsMTQuOSw1MC45LDIzLjYsODAuNiwyMy42Yzk2LjgsMCwxNDkuNy04MC4yLDE0OS43LTE0OS43XFxuXFx0XFx0YzAtMi4zLDAtNC42LTAuMS02LjhjMTAuMy03LjUsMTkuMi0xNi43LDI2LjItMjcuM2MtOS40LDQuMi0xOS42LDctMzAuMiw4LjNDMjIyLjEsMzM1LjcsMjMwLjQsMzI1LjQsMjM0LjMsMzEzLjF6XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiaGVyb19fYWJvdXQtc29jaWFsIHNvY2lhbC1idG5cXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/XFx1MDAzRVxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTggOEw1IDEyLjVMOS41IDE0TTE4IDhMOS41IDE0TTE4IDhMMTQgMTguNUw5LjUgMTRcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjVcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xMiAyMkMxNy41MjI4IDIyIDIyIDE3LjUyMjggMjIgMTJDMjIgNi40NzcxNSAxNy41MjI4IDIgMTIgMkM2LjQ3NzE1IDIgMiA2LjQ3NzE1IDIgMTJDMiAxNy41MjI4IDYuNDc3MTUgMjIgMTIgMjJaXFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXNvY2lhbCBzb2NpYWwtYnRuXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXG5cXG5cXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0NzdmcgZmlsbD1cXFwiIzAwMDAwMFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgd2lkdGg9XFxcIjgwMHB4XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIiBcXG5cXHQgdmlld0JveD1cXFwiLTE0MyAxNDUgNTEyIDUxMlxcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ2dcXHUwMDNFXFxuXFx0XFx1MDAzQ3BhdGggZD1cXFwiTTExMywxNDVjLTE0MS40LDAtMjU2LDExNC42LTI1NiwyNTZzMTE0LjYsMjU2LDI1NiwyNTZzMjU2LTExNC42LDI1Ni0yNTZTMjU0LjQsMTQ1LDExMywxNDV6IE0yNzIuOCw1NjAuN1xcblxcdFxcdGMtMjAuOCwyMC44LTQ0LjksMzcuMS03MS44LDQ4LjRjLTI3LjgsMTEuOC01Ny40LDE3LjctODgsMTcuN2MtMzAuNSwwLTYwLjEtNi04OC0xNy43Yy0yNi45LTExLjQtNTEuMS0yNy43LTcxLjgtNDguNFxcblxcdFxcdGMtMjAuOC0yMC44LTM3LjEtNDQuOS00OC40LTcxLjhDLTEwNyw0NjEuMS0xMTMsNDMxLjUtMTEzLDQwMXM2LTYwLjEsMTcuNy04OGMxMS40LTI2LjksMjcuNy01MS4xLDQ4LjQtNzEuOFxcblxcdFxcdGMyMC45LTIwLjgsNDUtMzcuMSw3MS45LTQ4LjVDNTIuOSwxODEsODIuNSwxNzUsMTEzLDE3NXM2MC4xLDYsODgsMTcuN2MyNi45LDExLjQsNTEuMSwyNy43LDcxLjgsNDguNFxcblxcdFxcdGMyMC44LDIwLjgsMzcuMSw0NC45LDQ4LjQsNzEuOGMxMS44LDI3LjgsMTcuNyw1Ny40LDE3LjcsODhjMCwzMC41LTYsNjAuMS0xNy43LDg4QzMwOS44LDUxNS44LDI5My41LDU0MCwyNzIuOCw1NjAuN3pcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHRcXHUwMDNDcGF0aCBkPVxcXCJNMTkxLjYsMjczaC0xNTdjLTI3LjMsMC00OS41LDIyLjItNDkuNSw0OS41djUyLjN2MTA0LjhjMCwyNy4zLDIyLjIsNDkuNSw0OS41LDQ5LjVoMTU3YzI3LjMsMCw0OS41LTIyLjIsNDkuNS00OS41VjM3NC43XFxuXFx0XFx0di01Mi4zQzI0MSwyOTUuMiwyMTguOCwyNzMsMTkxLjYsMjczeiBNMjA1LjgsMzAyLjVoNS43djUuNnYzNy44bC00My4zLDAuMWwtMC4xLTQzLjRMMjA1LjgsMzAyLjV6IE03Ni41LDM3NC43XFxuXFx0XFx0YzguMi0xMS4zLDIxLjUtMTguOCwzNi41LTE4LjhzMjguMyw3LjQsMzYuNSwxOC44YzUuNCw3LjQsOC41LDE2LjUsOC41LDI2LjNjMCwyNC44LTIwLjIsNDUuMS00NS4xLDQ1LjFDODgsNDQ2LjEsNjgsNDI1LjgsNjgsNDAxXFxuXFx0XFx0QzY4LDM5MS4yLDcxLjIsMzgyLjEsNzYuNSwzNzQuN3ogTTIxNi4xLDQ3OS41YzAsMTMuNS0xMSwyNC41LTI0LjUsMjQuNWgtMTU3Yy0xMy41LDAtMjQuNS0xMS0yNC41LTI0LjVWMzc0LjdoMzguMlxcblxcdFxcdGMtMy4zLDguMS01LjIsMTctNS4yLDI2LjNjMCwzOC42LDMxLjQsNzAsNzAsNzBjMzguNiwwLDcwLTMxLjQsNzAtNzBjMC05LjMtMS45LTE4LjItNS4yLTI2LjNoMzguMlY0NzkuNXpcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2ltZ1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwiLy8gY29uc29sZS5sb2coMSk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWV0b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuLy8gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ2RhcmsnKSB7XG4vLyAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGhlbWUnKTtcbi8vICAgIH1cbi8vICAgIGVsc2Uge1xuLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKVxuLy8gICAgfVxuLy8gICAgYWRkRGFya0NsYXNzVG9IVE1MKClcbi8vIH0pO1xuLy8gZnVuY3Rpb24gYWRkRGFya0NsYXNzVG9IVE1MKCkge1xuLy8gICAgdHJ5IHtcbi8vICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ2RhcmsnKSB7XG4vLyAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4vLyAgICAgICB9XG4vLyAgICB9IGNhdGNoIChlcnIpIHsgfVxuLy8gfVxuLy8gYWRkRGFya0NsYXNzVG9IVE1MKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vSU1HMS5KUEdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0lNRzEuSlBHXCIsXG5cdFwiLi9JTUcyLkpQR1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSU1HMi5KUEdcIixcblx0XCIuL2Fycm93LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYXJyb3cuc3ZnXCIsXG5cdFwiLi9iZy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JnLmpwZ1wiLFxuXHRcIi4vZG93bmxvYWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kb3dubG9hZC5zdmdcIixcblx0XCIuL2Rvd25sb2FkMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rvd25sb2FkMi5zdmdcIixcblx0XCIuL2Rvd25sb2FkMy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rvd25sb2FkMy5zdmdcIixcblx0XCIuL2Zhdmljb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ1wiLFxuXHRcIi4vZ2l0aHViLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnN2Z1wiLFxuXHRcIi4vaW5zdGFncmFtLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiLFxuXHRcIi4vdGVsZWdyYW0uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90ZWxlZ3JhbS5zdmdcIixcblx0XCIuL3RvZG8ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90b2RvLnBuZ1wiLFxuXHRcIi4vdG9kbzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90b2RvMS5wbmdcIixcblx0XCIuL3RvZG8yLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdG9kbzIucG5nXCIsXG5cdFwiLi90d2l0dGVyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdHdpdHRlci5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIG5weCBwcmV0dGllciAtLXdyaXRlIFwiKiovKi5wdWdcIlxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvcmUvcmVzaXplclwiO1xuaW1wb3J0IFwiLi9jb3JlL21haW5cIjtcbmltcG9ydCBcIi4vdmlld3MvaW5kZXgucHVnXCI7XG4iXSwibmFtZXMiOlsiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEZvbnQiLCJtb2JpbGVGb250IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJkZWZhdWx0SGVpZ2h0IiwiZlNpemUiLCJkZXZpY2UiLCJ2VyIsInZIIiwiTWF0aCIsIm1pbiIsIm1heCIsIm1vZGlmaWVyRGV2aWNlIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpc01vYmlsZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiZm9udFNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImFkZERhcmtDbGFzc1RvSFRNTCIsImVyciIsImFkZExpc3RDbGFzc1RvSFRNTCJdLCJzb3VyY2VSb290IjoiIn0=