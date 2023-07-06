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
const aboutBnt = document.querySelectorAll('.about-btn-js');

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




pug_mixins["worksItem"] = pug_interp = function(header, description, imageSrc, href){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (" class=\"works__item\""+pug.attr("href", href, true, true)+" target=\"_blank\"") + "\u003E\u003Cdiv class=\"works__item-header\"\u003E\u003Cdiv class=\"works__item-text\"\u003E\u003Ch3\u003E" + (pug.escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = description) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item-img\"\u003E\u003C?xml version=\"1.0\" ?\u003E\n\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\n\u003Ctitle\u002F\u003E\n\n\u003Cg id=\"Complete\"\u003E\n\n\u003Cg id=\"arrow-up-right\"\u003E\n\n\u003Cg\u003E\n\n\u003Cpolyline data-name=\"Right\" fill=\"none\" id=\"Right-2\" points=\"18.7 12.4 18.7 5.3 11.6 5.3\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"\u002F\u003E\n\n\u003Cline fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" x1=\"5.3\" x2=\"17.1\" y1=\"18.7\" y2=\"6.9\"\u002F\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fg\u003E\n\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item-bg\"\u003E";
pug_mixins["image"](imageSrc);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/header.pug */ "./src/views/parts/header.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/hero.pug */ "./src/views/parts/hero.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/about.pug */ "./src/views/parts/about.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Csection class=\"works\"\u003E\u003Cdiv class=\"works__container container\"\u003E \u003Cdiv class=\"works__items\"\u003E ";
pug_mixins["worksItem"]('Angular / SCSS/ BEM', 'Website for parents: educational courses, expert advice, and useful resources.', 'kiga1.jpeg', 'https://kiga-plus.de/');
pug_mixins["worksItem"]('Pug / SCSS / Green Sock  / JS', 'A page with infinite scroll and links to social media.', 'inf1.png', 'https://glittery-klepon-f6a4e3.netlify.app/');
pug_mixins["worksItem"]('Pug / SCSS / Green Sock  / JS', 'A web page with responsive design, showcasing portfolio projects.', 'landing1.jpeg', 'https://bucolic-blancmange-6ee124.netlify.app/');
pug_mixins["worksItem"]('vanilla.js / ES6 / Pug / Netlify', 'Creating editing deletion tasks, tracking execution time,', 'todo1.png', 'https://musical-cat-d90351.netlify.app/');
pug_mixins["worksItem"]('Pug / SCSS / JS / FontAwesome', 'Social cards, page display switching and color change', 'cards1.png', 'https://effortless-palmier-7046d5.netlify.app/');
pug_mixins["worksItem"]('Mixins / SCSS / JS / FontAwesome ', 'Pixelperfect layout page using figma/pug/scss/webpack,', 'slot1.png', 'https://cosmic-gnome-ce098c.netlify.app/');
pug_mixins["worksItem"]('Flop App', 'Page with flipping cards', 'promo1.png', 'https://effulgent-llama-30370e.netlify.app/');
pug_mixins["worksItem"]('Node.js / Telegraph.js / Cheerio parsing', 'A page that allows collecting contacts for sending to Telegram.', 'lami1.png', 'https://regal-narwhal-ef1580.netlify.app/');
pug_mixins["worksItem"]('React / React Routing / use localstorage', 'simple react mobile app', 'guse1.png', 'https://wondrous-crepe-985dc3.netlify.app/');
pug_mixins["worksItem"]('Pug / Mixins / SCSS', 'Convenient platform with a grid of cards', 'papaja1.png', 'https://chic-dragon-63d595.netlify.app/');
pug_mixins["worksItem"]('Node.js / Telegraph.js / Cheerio parsing', 'Automated daily post creation by scraping content from an awarding website', 'bot1.png', 'https://t.me/css_daily');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/about.pug":
/*!***********************************!*\
  !*** ./src/views/parts/about.pug ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"about\"\u003E \u003Cdiv class=\"about__container container\"\u003E\u003Cdiv class=\"about__text\"\u003E\u003Cdiv class=\"about__title\"\u003E \u003Cspan\u003ESkills\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__skills\"\u003E\u003Cdiv class=\"about__btns\"\u003E \u003Ca class=\"about__btn about-btn-js\"\u003E\u003Cspan\u003EJS\u003C\u002Fspan\u003E\u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M16 12L8 12\" stroke=\"#323232\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003Cpath d=\"M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9\" stroke=\"#323232\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"about__btn about-btn-js\"\u003E\u003Cspan\u003EHTML\u003C\u002Fspan\u003E\u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M16 12L8 12\" stroke=\"#323232\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003Cpath d=\"M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9\" stroke=\"#323232\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"about__btn about-btn-js\"\u003E\u003Cspan\u003ECSS\u003C\u002Fspan\u003E\u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M16 12L8 12\" stroke=\"#323232\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003Cpath d=\"M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9\" stroke=\"#323232\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"about__btn about-btn-js\"\u003E\u003Cspan\u003EAll\u003C\u002Fspan\u003E\u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M16 12L8 12\" stroke=\"#323232\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003Cpath d=\"M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9\" stroke=\"#323232\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__descr\"\u003E\u003Cdiv class=\"about__descr-item\"\u003E \u003Cp\u003EJavascript (ES5 ES6)\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003ESPA (React, Angular)\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003EJQuery - Webpack\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003ENode.js\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__descr-item\"\u003E \u003Cp\u003EHTML (Pug,Bootstrap, Tailwind)\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003ETags\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003ELinks\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003EMeta\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__descr-item\"\u003E \u003Cp\u003ESCSS\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003ELayout\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003EPixelPerfect\u003C\u002Fp\u003E\u003Cspan\u003E\u002F\u003C\u002Fspan\u003E\u003Cp\u003EAnimations\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__descr-item--full\"\u003E\u003Ca class=\"about__descr-item-close\"\u003E \u003Cspan\u003Ex\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Cp\u003EJS\u003Cspan\u003E Javascript \u002F ES5 \u002F ES6 \u002F SPA (React, Angular) \u002F JQuery- Webpack \u002F Node.js\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003Cp\u003EHTML\u003Cspan\u003E Pug, Bootstrap \u002F Tailwind- Responsive Pixel Perfect UI layout- UI\u002FUX Testing- SEO friendly code\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003Cp\u003ECSS\u003Cspan\u003E SASS, GreenSock, Pixel Perfect, Animations\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003Cp\u003EPosses\u003Cspan\u003E GIT (BitBucket, GitHub, Gitlab)- MacOs\u002FLinux- Figma, Photoshop, Illustrator, Zeplin\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003Cp\u003E Soft Skills\u003Cspan\u003E  English (Intermediate B1)- Ukrainian (Native) \u002F Russian- Fast learning- Punctuality- Flexibility- Skill to work in team\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
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

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"hero\"\u003E \u003Cdiv class=\"hero__container container\"\u003E \u003Cdiv class=\"hero__about\"\u003E\u003Cdiv class=\"hero__descr\"\u003E\u003Cdiv class=\"hero__about-text\"\u003E \u003Ch1\u003EHello, I'm Serhiy, Front-end developer\u003C\u002Fh1\u003E\u003Ch2\u003ECreating seamless user experiences through code\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__about-actions\"\u003E \u003Ca class=\"hero__about-social social-btn\" href=\"https:\u002F\u002Fgithub.com\u002F7erhii\" target=\"_blank\"\u003E \u003C?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?\u003E\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\"\u003E\n    \n    \u003Ctitle\u003Egithub [#142]\u003C\u002Ftitle\u003E\n    \u003Cdesc\u003ECreated with Sketch.\u003C\u002Fdesc\u003E\n    \u003Cdefs\u003E\n\n\u003C\u002Fdefs\u003E\n    \u003Cg id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\u003E\n        \u003Cg id=\"Dribbble-Light-Preview\" transform=\"translate(-140.000000, -7559.000000)\" fill=\"#000000\"\u003E\n            \u003Cg id=\"icons\" transform=\"translate(56.000000, 160.000000)\"\u003E\n                \u003Cpath d=\"M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399\" id=\"github-[#142]\"\u003E\n\n\u003C\u002Fpath\u003E\n            \u003C\u002Fg\u003E\n        \u003C\u002Fg\u003E\n    \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"hero__about-portfolio btn\" href=\"https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F16lHEsVQbXCIpJI1W-G2qM_sj8eFJf3Rd\u002Fview\" target=\"_blank\"\u003E\u003Cspan\u003EView CV\u003C\u002Fspan\u003E\u003C?xml version=\"1.0\" ?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333\" stroke=\"#464455\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"hero__about-social social-btn\" href=\"https:\u002F\u002Ftwitter.com\u002FSKekssy\" target=\"_blank\"\u003E \u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg fill=\"#000000\" height=\"800px\" width=\"800px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" \n\t viewBox=\"-143 145 512 512\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cpath d=\"M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7\n\t\tc-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4\n\t\tc-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8\n\t\tc20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4\n\t\tc20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z\"\u002F\u003E\n\t\u003Cpath d=\"M234.3,313.1c-10.2,6-21.4,10.4-33.4,12.8c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12\n\t\tc-43.7-2.2-82.5-23.1-108.4-55c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6\n\t\tc0,25.5,18.1,46.8,42.2,51.6c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5\n\t\tc-18,14.1-40.7,22.5-65.3,22.5c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7\n\t\tc0-2.3,0-4.6-0.1-6.8c10.3-7.5,19.2-16.7,26.2-27.3c-9.4,4.2-19.6,7-30.2,8.3C222.1,335.7,230.4,325.4,234.3,313.1z\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca class=\"hero__about-social social-btn\" href=\"https:\u002F\u002Ft.me\u002FS3RHY\" target=\"_blank\"\u003E \u003Csvg width=\"718\" height=\"718\" viewBox=\"0 0 718 718\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M559 225.667L125.667 375.666L275.667 425.666M559 225.667L275.667 425.666M559 225.667L425.667 575.666L275.667 425.666\" stroke=\"black\" stroke-width=\"50\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003Cpath d=\"M359 692.333C543.093 692.333 692.333 543.093 692.333 359C692.333 174.905 543.093 25.6665 359 25.6665C174.905 25.6665 25.6667 174.905 25.6667 359C25.6667 543.093 174.905 692.333 359 692.333Z\" stroke=\"black\" stroke-width=\"50\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003Ca class=\"hero__about-social social-btn\" href=\"https:\u002F\u002Fwww.instagram.com\u002F7erhi\u002F\" target=\"_blank\"\u003E \u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n\n\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg fill=\"#000000\" height=\"800px\" width=\"800px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" \n\t viewBox=\"-143 145 512 512\" xml:space=\"preserve\"\u003E\n\u003Cg\u003E\n\t\u003Cpath d=\"M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7\n\t\tc-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4\n\t\tc-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8\n\t\tc20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4\n\t\tc20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z\"\u002F\u003E\n\t\u003Cpath d=\"M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7\n\t\tv-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7\n\t\tc8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401\n\t\tC68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2\n\t\tc-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__img\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
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

var buttons = document.querySelectorAll(".about-btn-js");
var btnsContainer = document.querySelector(".about__btns");
var descrContainer = document.querySelector(".about__descr");
var descrItems = document.querySelectorAll(".about__descr-item");
var skillsContainer = document.querySelector(".about__skills");
var descrAll = document.querySelector(".about__descr-item--full");
var closeAllDesrcBtn = document.querySelector(".about__descr-item-close");
buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        if (index < buttons.length - 1) {
            descrAll.classList.remove("showed-grid");
            console.log("\u041D\u0430\u0436\u0430\u0442\u0430 \u043A\u043D\u043E\u043F\u043A\u0430 \u0441 \u0438\u043D\u0434\u0435\u043A\u0441\u043E\u043C ".concat(index));
            var offsetY = skillsContainer.offsetHeight;
            btnsContainer.style.transition = "transform 0.3s ease";
            descrContainer.style.transition = "transform 0.3s ease";
            btnsContainer.style.transform = "translateY(-".concat(offsetY, "px)");
            descrContainer.style.transform = "translateY(-".concat(offsetY, "px)");
            setTimeout(function () {
                btnsContainer.style.transform = "";
                descrContainer.style.transform = "";
            }, 4000);
        }
        if (index === 3) {
            descrAll.classList.toggle("showed-grid");
        }
        descrItems.forEach(function (item, itemIndex) {
            if (itemIndex === index) {
                item.classList.add("showed");
            }
            else {
                item.classList.remove("showed");
            }
        });
    });
});
closeAllDesrcBtn.addEventListener("click", function () {
    descrAll.classList.remove("showed-grid");
});


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./IMG1.jpeg": "./src/assets/images/IMG1.jpeg",
	"./arrow.svg": "./src/assets/images/arrow.svg",
	"./bg.jpeg": "./src/assets/images/bg.jpeg",
	"./bot1.png": "./src/assets/images/bot1.png",
	"./cards1.png": "./src/assets/images/cards1.png",
	"./click1.svg": "./src/assets/images/click1.svg",
	"./click2.svg": "./src/assets/images/click2.svg",
	"./click3.svg": "./src/assets/images/click3.svg",
	"./download.svg": "./src/assets/images/download.svg",
	"./download2.svg": "./src/assets/images/download2.svg",
	"./download3.svg": "./src/assets/images/download3.svg",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./github.svg": "./src/assets/images/github.svg",
	"./guse.png": "./src/assets/images/guse.png",
	"./guse1.png": "./src/assets/images/guse1.png",
	"./inf1.png": "./src/assets/images/inf1.png",
	"./instagram.svg": "./src/assets/images/instagram.svg",
	"./kiga1.jpeg": "./src/assets/images/kiga1.jpeg",
	"./lami1.png": "./src/assets/images/lami1.png",
	"./landing1.jpeg": "./src/assets/images/landing1.jpeg",
	"./papaja1.png": "./src/assets/images/papaja1.png",
	"./promo1.png": "./src/assets/images/promo1.png",
	"./slot1.png": "./src/assets/images/slot1.png",
	"./telegram.svg": "./src/assets/images/telegram.svg",
	"./todo1.png": "./src/assets/images/todo1.png",
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

/***/ "./src/assets/images/IMG1.jpeg":
/*!*************************************!*\
  !*** ./src/assets/images/IMG1.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c25eb4330bc81ed1397f.jpeg";

/***/ }),

/***/ "./src/assets/images/arrow.svg":
/*!*************************************!*\
  !*** ./src/assets/images/arrow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3428e566d5f182b89ee6.svg";

/***/ }),

/***/ "./src/assets/images/bg.jpeg":
/*!***********************************!*\
  !*** ./src/assets/images/bg.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4f3bb91692a0265c2db3.jpeg";

/***/ }),

/***/ "./src/assets/images/bot1.png":
/*!************************************!*\
  !*** ./src/assets/images/bot1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/15bcc9c02023f5a26fed.png";

/***/ }),

/***/ "./src/assets/images/cards1.png":
/*!**************************************!*\
  !*** ./src/assets/images/cards1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/548fc8d9652d41f43e2f.png";

/***/ }),

/***/ "./src/assets/images/click1.svg":
/*!**************************************!*\
  !*** ./src/assets/images/click1.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d7cc04d0dcd96af06fb6.svg";

/***/ }),

/***/ "./src/assets/images/click2.svg":
/*!**************************************!*\
  !*** ./src/assets/images/click2.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2d63affc85e8f0bc4371.svg";

/***/ }),

/***/ "./src/assets/images/click3.svg":
/*!**************************************!*\
  !*** ./src/assets/images/click3.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1e7f4ba71fbe9e9b7019.svg";

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

/***/ "./src/assets/images/guse.png":
/*!************************************!*\
  !*** ./src/assets/images/guse.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c2c57f65a4de9dd13c31.png";

/***/ }),

/***/ "./src/assets/images/guse1.png":
/*!*************************************!*\
  !*** ./src/assets/images/guse1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3030023692757123ab9f.png";

/***/ }),

/***/ "./src/assets/images/inf1.png":
/*!************************************!*\
  !*** ./src/assets/images/inf1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2a34650124ac5dd0dfe1.png";

/***/ }),

/***/ "./src/assets/images/instagram.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/instagram.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d2261a2786398bc2d008.svg";

/***/ }),

/***/ "./src/assets/images/kiga1.jpeg":
/*!**************************************!*\
  !*** ./src/assets/images/kiga1.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/953c0bc84b9b3951b4db.jpeg";

/***/ }),

/***/ "./src/assets/images/lami1.png":
/*!*************************************!*\
  !*** ./src/assets/images/lami1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/05d9e33e92915d56b0fe.png";

/***/ }),

/***/ "./src/assets/images/landing1.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/landing1.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0762c442e5756353f99f.jpeg";

/***/ }),

/***/ "./src/assets/images/papaja1.png":
/*!***************************************!*\
  !*** ./src/assets/images/papaja1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/63f324b6061c43ae35d5.png";

/***/ }),

/***/ "./src/assets/images/promo1.png":
/*!**************************************!*\
  !*** ./src/assets/images/promo1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bf92852268ef85f514f9.png";

/***/ }),

/***/ "./src/assets/images/slot1.png":
/*!*************************************!*\
  !*** ./src/assets/images/slot1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b5a1abc703b428fdd895.png";

/***/ }),

/***/ "./src/assets/images/telegram.svg":
/*!****************************************!*\
  !*** ./src/assets/images/telegram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/76b7bf602cc127c6e283.svg";

/***/ }),

/***/ "./src/assets/images/todo1.png":
/*!*************************************!*\
  !*** ./src/assets/images/todo1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b95cedd446357136b50c.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ3lCO0FBQ0Q7QUFDSDtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9zY3NzL2FwcC5zY3NzPzhiNmYiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9wYXJ0cy9hYm91dC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9wYXJ0cy9oZWFkZXIucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvaGVyby5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvbWFpbi50cyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzLzdlcmhpeS9EZXNrdG9wL1dFQi9wZmxvL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG5cbmNvbnN0IGFib3V0Qm50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0LWJ0bi1qcycpIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX21peGluc1tcImltYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGZpbGUpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtmaWxlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcIjtcbn07XG5cblxuXG5cbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oaGVhZGVyLCBkZXNjcmlwdGlvbiwgaW1hZ2VTcmMsIGhyZWYpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2FcIiArIChcIiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIGhyZWYsIHRydWUsIHRydWUpK1wiIHRhcmdldD1cXFwiX2JsYW5rXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtLWhlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW0tdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2gzXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGhlYWRlcikgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmgzXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGRlc2NyaXB0aW9uKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbS1pbWdcXFwiXFx1MDAzRVxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgP1xcdTAwM0VcXG5cXG5cXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0Nzdmcgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ3RpdGxlXFx1MDAyRlxcdTAwM0VcXG5cXG5cXHUwMDNDZyBpZD1cXFwiQ29tcGxldGVcXFwiXFx1MDAzRVxcblxcblxcdTAwM0NnIGlkPVxcXCJhcnJvdy11cC1yaWdodFxcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ2dcXHUwMDNFXFxuXFxuXFx1MDAzQ3BvbHlsaW5lIGRhdGEtbmFtZT1cXFwiUmlnaHRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGlkPVxcXCJSaWdodC0yXFxcIiBwb2ludHM9XFxcIjE4LjcgMTIuNCAxOC43IDUuMyAxMS42IDUuM1xcXCIgc3Ryb2tlPVxcXCIjMDAwMDAwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcblxcdTAwM0NsaW5lIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHgxPVxcXCI1LjNcXFwiIHgyPVxcXCIxNy4xXFxcIiB5MT1cXFwiMTguN1xcXCIgeTI9XFxcIjYuOVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtLWJnXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShpbWFnZVNyYyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXCI7XG59O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRUVtcHR5IFByb2plY3RcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXHUwMDNDYm9keVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvaGVhZGVyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9oZXJvLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9hYm91dC5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcIndvcmtzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19fY29udGFpbmVyIGNvbnRhaW5lclxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtc1xcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnQW5ndWxhciAvIFNDU1MvIEJFTScsICdXZWJzaXRlIGZvciBwYXJlbnRzOiBlZHVjYXRpb25hbCBjb3Vyc2VzLCBleHBlcnQgYWR2aWNlLCBhbmQgdXNlZnVsIHJlc291cmNlcy4nLCAna2lnYTEuanBlZycsICdodHRwczovL2tpZ2EtcGx1cy5kZS8nKTtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ1B1ZyAvIFNDU1MgLyBHcmVlbiBTb2NrICAvIEpTJywgJ0EgcGFnZSB3aXRoIGluZmluaXRlIHNjcm9sbCBhbmQgbGlua3MgdG8gc29jaWFsIG1lZGlhLicsICdpbmYxLnBuZycsICdodHRwczovL2dsaXR0ZXJ5LWtsZXBvbi1mNmE0ZTMubmV0bGlmeS5hcHAvJyk7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdQdWcgLyBTQ1NTIC8gR3JlZW4gU29jayAgLyBKUycsICdBIHdlYiBwYWdlIHdpdGggcmVzcG9uc2l2ZSBkZXNpZ24sIHNob3djYXNpbmcgcG9ydGZvbGlvIHByb2plY3RzLicsICdsYW5kaW5nMS5qcGVnJywgJ2h0dHBzOi8vYnVjb2xpYy1ibGFuY21hbmdlLTZlZTEyNC5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ3ZhbmlsbGEuanMgLyBFUzYgLyBQdWcgLyBOZXRsaWZ5JywgJ0NyZWF0aW5nIGVkaXRpbmcgZGVsZXRpb24gdGFza3MsIHRyYWNraW5nIGV4ZWN1dGlvbiB0aW1lLCcsICd0b2RvMS5wbmcnLCAnaHR0cHM6Ly9tdXNpY2FsLWNhdC1kOTAzNTEubmV0bGlmeS5hcHAvJyk7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdQdWcgLyBTQ1NTIC8gSlMgLyBGb250QXdlc29tZScsICdTb2NpYWwgY2FyZHMsIHBhZ2UgZGlzcGxheSBzd2l0Y2hpbmcgYW5kIGNvbG9yIGNoYW5nZScsICdjYXJkczEucG5nJywgJ2h0dHBzOi8vZWZmb3J0bGVzcy1wYWxtaWVyLTcwNDZkNS5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ01peGlucyAvIFNDU1MgLyBKUyAvIEZvbnRBd2Vzb21lICcsICdQaXhlbHBlcmZlY3QgbGF5b3V0IHBhZ2UgdXNpbmcgZmlnbWEvcHVnL3Njc3Mvd2VicGFjaywnLCAnc2xvdDEucG5nJywgJ2h0dHBzOi8vY29zbWljLWdub21lLWNlMDk4Yy5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ0Zsb3AgQXBwJywgJ1BhZ2Ugd2l0aCBmbGlwcGluZyBjYXJkcycsICdwcm9tbzEucG5nJywgJ2h0dHBzOi8vZWZmdWxnZW50LWxsYW1hLTMwMzcwZS5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ05vZGUuanMgLyBUZWxlZ3JhcGguanMgLyBDaGVlcmlvIHBhcnNpbmcnLCAnQSBwYWdlIHRoYXQgYWxsb3dzIGNvbGxlY3RpbmcgY29udGFjdHMgZm9yIHNlbmRpbmcgdG8gVGVsZWdyYW0uJywgJ2xhbWkxLnBuZycsICdodHRwczovL3JlZ2FsLW5hcndoYWwtZWYxNTgwLm5ldGxpZnkuYXBwLycpO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnUmVhY3QgLyBSZWFjdCBSb3V0aW5nIC8gdXNlIGxvY2Fsc3RvcmFnZScsICdzaW1wbGUgcmVhY3QgbW9iaWxlIGFwcCcsICdndXNlMS5wbmcnLCAnaHR0cHM6Ly93b25kcm91cy1jcmVwZS05ODVkYzMubmV0bGlmeS5hcHAvJyk7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdQdWcgLyBNaXhpbnMgLyBTQ1NTJywgJ0NvbnZlbmllbnQgcGxhdGZvcm0gd2l0aCBhIGdyaWQgb2YgY2FyZHMnLCAncGFwYWphMS5wbmcnLCAnaHR0cHM6Ly9jaGljLWRyYWdvbi02M2Q1OTUubmV0bGlmeS5hcHAvJyk7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdOb2RlLmpzIC8gVGVsZWdyYXBoLmpzIC8gQ2hlZXJpbyBwYXJzaW5nJywgJ0F1dG9tYXRlZCBkYWlseSBwb3N0IGNyZWF0aW9uIGJ5IHNjcmFwaW5nIGNvbnRlbnQgZnJvbSBhbiBhd2FyZGluZyB3ZWJzaXRlJywgJ2JvdDEucG5nJywgJ2h0dHBzOi8vdC5tZS9jc3NfZGFpbHknKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmJvZHlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcImFib3V0XFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX2NvbnRhaW5lciBjb250YWluZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X190ZXh0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fdGl0bGVcXFwiXFx1MDAzRSBcXHUwMDNDc3BhblxcdTAwM0VTa2lsbHNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX3NraWxsc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX2J0bnNcXFwiXFx1MDAzRSBcXHUwMDNDYSBjbGFzcz1cXFwiYWJvdXRfX2J0biBhYm91dC1idG4tanNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUpTXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj9cXHUwMDNFXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNiAxMkw4IDEyXFxcIiBzdHJva2U9XFxcIiMzMjMyMzJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTEzIDE1TDE1LjkxMyAxMi4wODdWMTIuMDg3QzE1Ljk2MSAxMi4wMzkgMTUuOTYxIDExLjk2MSAxNS45MTMgMTEuOTEzVjExLjkxM0wxMyA5XFxcIiBzdHJva2U9XFxcIiMzMjMyMzJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJhYm91dF9fYnRuIGFib3V0LWJ0bi1qc1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFSFRNTFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/XFx1MDAzRVxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTYgMTJMOCAxMlxcXCIgc3Ryb2tlPVxcXCIjMzIzMjMyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xMyAxNUwxNS45MTMgMTIuMDg3VjEyLjA4N0MxNS45NjEgMTIuMDM5IDE1Ljk2MSAxMS45NjEgMTUuOTEzIDExLjkxM1YxMS45MTNMMTMgOVxcXCIgc3Ryb2tlPVxcXCIjMzIzMjMyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiYWJvdXRfX2J0biBhYm91dC1idG4tanNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUNTU1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/XFx1MDAzRVxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTYgMTJMOCAxMlxcXCIgc3Ryb2tlPVxcXCIjMzIzMjMyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xMyAxNUwxNS45MTMgMTIuMDg3VjEyLjA4N0MxNS45NjEgMTIuMDM5IDE1Ljk2MSAxMS45NjEgMTUuOTEzIDExLjkxM1YxMS45MTNMMTMgOVxcXCIgc3Ryb2tlPVxcXCIjMzIzMjMyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiYWJvdXRfX2J0biBhYm91dC1idG4tanNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUFsbFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/XFx1MDAzRVxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTYgMTJMOCAxMlxcXCIgc3Ryb2tlPVxcXCIjMzIzMjMyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xMyAxNUwxNS45MTMgMTIuMDg3VjEyLjA4N0MxNS45NjEgMTIuMDM5IDE1Ljk2MSAxMS45NjEgMTUuOTEzIDExLjkxM1YxMS45MTNMMTMgOVxcXCIgc3Ryb2tlPVxcXCIjMzIzMjMyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19kZXNjci1pdGVtXFxcIlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFSmF2YXNjcmlwdCAoRVM1IEVTNilcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VTUEEgKFJlYWN0LCBBbmd1bGFyKVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUpRdWVyeSAtIFdlYnBhY2tcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VOb2RlLmpzXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19kZXNjci1pdGVtXFxcIlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFSFRNTCAoUHVnLEJvb3RzdHJhcCwgVGFpbHdpbmQpXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFVGFnc1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUxpbmtzXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFTWV0YVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fZGVzY3ItaXRlbVxcXCJcXHUwMDNFIFxcdTAwM0NwXFx1MDAzRVNDU1NcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VMYXlvdXRcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VQaXhlbFBlcmZlY3RcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VBbmltYXRpb25zXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19kZXNjci1pdGVtLS1mdWxsXFxcIlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiYWJvdXRfX2Rlc2NyLWl0ZW0tY2xvc2VcXFwiXFx1MDAzRSBcXHUwMDNDc3BhblxcdTAwM0V4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDcFxcdTAwM0VKU1xcdTAwM0NzcGFuXFx1MDAzRSBKYXZhc2NyaXB0IFxcdTAwMkYgRVM1IFxcdTAwMkYgRVM2IFxcdTAwMkYgU1BBIChSZWFjdCwgQW5ndWxhcikgXFx1MDAyRiBKUXVlcnktIFdlYnBhY2sgXFx1MDAyRiBOb2RlLmpzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VIVE1MXFx1MDAzQ3NwYW5cXHUwMDNFIFB1ZywgQm9vdHN0cmFwIFxcdTAwMkYgVGFpbHdpbmQtIFJlc3BvbnNpdmUgUGl4ZWwgUGVyZmVjdCBVSSBsYXlvdXQtIFVJXFx1MDAyRlVYIFRlc3RpbmctIFNFTyBmcmllbmRseSBjb2RlXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VDU1NcXHUwMDNDc3BhblxcdTAwM0UgU0FTUywgR3JlZW5Tb2NrLCBQaXhlbCBQZXJmZWN0LCBBbmltYXRpb25zXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VQb3NzZXNcXHUwMDNDc3BhblxcdTAwM0UgR0lUIChCaXRCdWNrZXQsIEdpdEh1YiwgR2l0bGFiKS0gTWFjT3NcXHUwMDJGTGludXgtIEZpZ21hLCBQaG90b3Nob3AsIElsbHVzdHJhdG9yLCBaZXBsaW5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRSBTb2Z0IFNraWxsc1xcdTAwM0NzcGFuXFx1MDAzRSAgRW5nbGlzaCAoSW50ZXJtZWRpYXRlIEIxKS0gVWtyYWluaWFuIChOYXRpdmUpIFxcdTAwMkYgUnVzc2lhbi0gRmFzdCBsZWFybmluZy0gUHVuY3R1YWxpdHktIEZsZXhpYmlsaXR5LSBTa2lsbCB0byB3b3JrIGluIHRlYW1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcImhlcm9cXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19jb250YWluZXIgY29udGFpbmVyXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYWJvdXRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2Rlc2NyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hYm91dC10ZXh0XFxcIlxcdTAwM0UgXFx1MDAzQ2gxXFx1MDAzRUhlbGxvLCBJJ20gU2VyaGl5LCBGcm9udC1lbmQgZGV2ZWxvcGVyXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcXHUwMDNDaDJcXHUwMDNFQ3JlYXRpbmcgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlcyB0aHJvdWdoIGNvZGVcXHUwMDNDXFx1MDAyRmgyXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2Fib3V0LWFjdGlvbnNcXFwiXFx1MDAzRSBcXHUwMDNDYSBjbGFzcz1cXFwiaGVyb19fYWJvdXQtc29jaWFsIHNvY2lhbC1idG5cXFwiIGhyZWY9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGZ2l0aHViLmNvbVxcdTAwMkY3ZXJoaWlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIlxcdTAwM0UgXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwiVVRGLThcXFwiIHN0YW5kYWxvbmU9XFxcIm5vXFxcIj9cXHUwMDNFXFxuXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjE5OTlcXHUwMDJGeGxpbmtcXFwiXFx1MDAzRVxcbiAgICBcXG4gICAgXFx1MDAzQ3RpdGxlXFx1MDAzRWdpdGh1YiBbIzE0Ml1cXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcbiAgICBcXHUwMDNDZGVzY1xcdTAwM0VDcmVhdGVkIHdpdGggU2tldGNoLlxcdTAwM0NcXHUwMDJGZGVzY1xcdTAwM0VcXG4gICAgXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcbiAgICBcXHUwMDNDZyBpZD1cXFwiUGFnZS0xXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NnIGlkPVxcXCJEcmliYmJsZS1MaWdodC1QcmV2aWV3XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMTQwLjAwMDAwMCwgLTc1NTkuMDAwMDAwKVxcXCIgZmlsbD1cXFwiIzAwMDAwMFxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2cgaWQ9XFxcImljb25zXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg1Ni4wMDAwMDAsIDE2MC4wMDAwMDApXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ3BhdGggZD1cXFwiTTk0LDczOTkgQzk5LjUyMyw3Mzk5IDEwNCw3NDAzLjU5IDEwNCw3NDA5LjI1MyBDMTA0LDc0MTMuNzgyIDEwMS4xMzgsNzQxNy42MjQgOTcuMTY3LDc0MTguOTgxIEM5Ni42Niw3NDE5LjA4MiA5Ni40OCw3NDE4Ljc2MiA5Ni40OCw3NDE4LjQ4OSBDOTYuNDgsNzQxOC4xNTEgOTYuNDkyLDc0MTcuMDQ3IDk2LjQ5Miw3NDE1LjY3NSBDOTYuNDkyLDc0MTQuNzE5IDk2LjE3Miw3NDE0LjA5NSA5NS44MTMsNzQxMy43NzcgQzk4LjA0LDc0MTMuNTIzIDEwMC4zOCw3NDEyLjY1NiAxMDAuMzgsNzQwOC43MTggQzEwMC4zOCw3NDA3LjU5OCA5OS45OTIsNzQwNi42ODQgOTkuMzUsNzQwNS45NjYgQzk5LjQ1NCw3NDA1LjcwNyA5OS43OTcsNzQwNC42NjQgOTkuMjUyLDc0MDMuMjUyIEM5OS4yNTIsNzQwMy4yNTIgOTguNDE0LDc0MDIuOTc3IDk2LjUwNSw3NDA0LjMwMyBDOTUuNzA2LDc0MDQuMDc2IDk0Ljg1LDc0MDMuOTYyIDk0LDc0MDMuOTU4IEM5My4xNSw3NDAzLjk2MiA5Mi4yOTUsNzQwNC4wNzYgOTEuNDk3LDc0MDQuMzAzIEM4OS41ODYsNzQwMi45NzcgODguNzQ2LDc0MDMuMjUyIDg4Ljc0Niw3NDAzLjI1MiBDODguMjAzLDc0MDQuNjY0IDg4LjU0Niw3NDA1LjcwNyA4OC42NDksNzQwNS45NjYgQzg4LjAxLDc0MDYuNjg0IDg3LjYxOSw3NDA3LjU5OCA4Ny42MTksNzQwOC43MTggQzg3LjYxOSw3NDEyLjY0NiA4OS45NTQsNzQxMy41MjYgOTIuMTc1LDc0MTMuNzg1IEM5MS44ODksNzQxNC4wNDEgOTEuNjMsNzQxNC40OTMgOTEuNTQsNzQxNS4xNTYgQzkwLjk3LDc0MTUuNDE4IDg5LjUyMiw3NDE1Ljg3MSA4OC42Myw3NDE0LjMwNCBDODguNjMsNzQxNC4zMDQgODguMTAxLDc0MTMuMzE5IDg3LjA5Nyw3NDEzLjI0NyBDODcuMDk3LDc0MTMuMjQ3IDg2LjEyMiw3NDEzLjIzNCA4Ny4wMjksNzQxMy44NyBDODcuMDI5LDc0MTMuODcgODcuNjg0LDc0MTQuMTg1IDg4LjEzOSw3NDE1LjM3IEM4OC4xMzksNzQxNS4zNyA4OC43MjYsNzQxNy4yIDkxLjUwOCw3NDE2LjU4IEM5MS41MTMsNzQxNy40MzcgOTEuNTIyLDc0MTguMjQ1IDkxLjUyMiw3NDE4LjQ4OSBDOTEuNTIyLDc0MTguNzYgOTEuMzM4LDc0MTkuMDc3IDkwLjgzOSw3NDE4Ljk4MiBDODYuODY1LDc0MTcuNjI3IDg0LDc0MTMuNzgzIDg0LDc0MDkuMjUzIEM4NCw3NDAzLjU5IDg4LjQ3OCw3Mzk5IDk0LDczOTlcXFwiIGlkPVxcXCJnaXRodWItWyMxNDJdXFxcIlxcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRnBhdGhcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJoZXJvX19hYm91dC1wb3J0Zm9saW8gYnRuXFxcIiBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmRyaXZlLmdvb2dsZS5jb21cXHUwMDJGZmlsZVxcdTAwMkZkXFx1MDAyRjE2bEhFc1ZRYlhDSXBKSTFXLUcycU1fc2o4ZUZKZjNSZFxcdTAwMkZ2aWV3XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFVmlldyBDVlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiID9cXHUwMDNFXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcdTAwM0NwYXRoIGQ9XFxcIk0xMiAxMlYxOU0xMiAxOUw5Ljc1IDE2LjY2NjdNMTIgMTlMMTQuMjUgMTYuNjY2N002LjYgMTcuODMzM0M0LjYxMTc4IDE3LjgzMzMgMyAxNi4xOTE3IDMgMTQuMTY2N0MzIDEyLjQ5OCA0LjA5NDM4IDExLjA4OTcgNS41OTE5OCAxMC42NDU3QzUuNjU1NjIgMTAuNjI2OCA1LjcgMTAuNTY3NSA1LjcgMTAuNUM1LjcgNy40NjI0MyA4LjExNzY2IDUgMTEuMSA1QzE0LjA4MjMgNSAxNi41IDcuNDYyNDMgMTYuNSAxMC41QzE2LjUgMTAuNTU4MiAxNi41NTM2IDEwLjYwMTQgMTYuNjA5NCAxMC41ODg3QzE2Ljg2MzggMTAuNTMwNiAxNy4xMjg0IDEwLjUgMTcuNCAxMC41QzE5LjM4ODIgMTAuNSAyMSAxMi4xNDE2IDIxIDE0LjE2NjdDMjEgMTYuMTkxNyAxOS4zODgyIDE3LjgzMzMgMTcuNCAxNy44MzMzXFxcIiBzdHJva2U9XFxcIiM0NjQ0NTVcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiaGVyb19fYWJvdXQtc29jaWFsIHNvY2lhbC1idG5cXFwiIGhyZWY9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGdHdpdHRlci5jb21cXHUwMDJGU0tla3NzeVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXFx1MDAzRSBcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/XFx1MDAzRVxcblxcblxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyBmaWxsPVxcXCIjMDAwMDAwXFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB3aWR0aD1cXFwiODAwcHhcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjE5OTlcXHUwMDJGeGxpbmtcXFwiIFxcblxcdCB2aWV3Qm94PVxcXCItMTQzIDE0NSA1MTIgNTEyXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIlxcdTAwM0VcXG5cXHUwMDNDZ1xcdTAwM0VcXG5cXHRcXHUwMDNDcGF0aCBkPVxcXCJNMTEzLDE0NWMtMTQxLjQsMC0yNTYsMTE0LjYtMjU2LDI1NnMxMTQuNiwyNTYsMjU2LDI1NnMyNTYtMTE0LjYsMjU2LTI1NlMyNTQuNCwxNDUsMTEzLDE0NXogTTI3Mi44LDU2MC43XFxuXFx0XFx0Yy0yMC44LDIwLjgtNDQuOSwzNy4xLTcxLjgsNDguNGMtMjcuOCwxMS44LTU3LjQsMTcuNy04OCwxNy43Yy0zMC41LDAtNjAuMS02LTg4LTE3LjdjLTI2LjktMTEuNC01MS4xLTI3LjctNzEuOC00OC40XFxuXFx0XFx0Yy0yMC44LTIwLjgtMzcuMS00NC45LTQ4LjQtNzEuOEMtMTA3LDQ2MS4xLTExMyw0MzEuNS0xMTMsNDAxczYtNjAuMSwxNy43LTg4YzExLjQtMjYuOSwyNy43LTUxLjEsNDguNC03MS44XFxuXFx0XFx0YzIwLjktMjAuOCw0NS0zNy4xLDcxLjktNDguNUM1Mi45LDE4MSw4Mi41LDE3NSwxMTMsMTc1czYwLjEsNiw4OCwxNy43YzI2LjksMTEuNCw1MS4xLDI3LjcsNzEuOCw0OC40XFxuXFx0XFx0YzIwLjgsMjAuOCwzNy4xLDQ0LjksNDguNCw3MS44YzExLjgsMjcuOCwxNy43LDU3LjQsMTcuNyw4OGMwLDMwLjUtNiw2MC4xLTE3LjcsODhDMzA5LjgsNTE1LjgsMjkzLjUsNTQwLDI3Mi44LDU2MC43elxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdFxcdTAwM0NwYXRoIGQ9XFxcIk0yMzQuMywzMTMuMWMtMTAuMiw2LTIxLjQsMTAuNC0zMy40LDEyLjhjLTkuNi0xMC4yLTIzLjMtMTYuNi0zOC40LTE2LjZjLTI5LDAtNTIuNiwyMy42LTUyLjYsNTIuNmMwLDQuMSwwLjQsOC4xLDEuNCwxMlxcblxcdFxcdGMtNDMuNy0yLjItODIuNS0yMy4xLTEwOC40LTU1Yy00LjUsNy44LTcuMSwxNi44LTcuMSwyNi41YzAsMTguMiw5LjMsMzQuMywyMy40LDQzLjhjLTguNi0wLjMtMTYuNy0yLjctMjMuOC02LjZ2MC42XFxuXFx0XFx0YzAsMjUuNSwxOC4xLDQ2LjgsNDIuMiw1MS42Yy00LjQsMS4yLTkuMSwxLjktMTMuOSwxLjljLTMuNCwwLTYuNy0wLjMtOS45LTAuOWM2LjcsMjAuOSwyNi4xLDM2LjEsNDkuMSwzNi41XFxuXFx0XFx0Yy0xOCwxNC4xLTQwLjcsMjIuNS02NS4zLDIyLjVjLTQuMiwwLTguNC0wLjItMTIuNi0wLjdjMjMuMywxNC45LDUwLjksMjMuNiw4MC42LDIzLjZjOTYuOCwwLDE0OS43LTgwLjIsMTQ5LjctMTQ5LjdcXG5cXHRcXHRjMC0yLjMsMC00LjYtMC4xLTYuOGMxMC4zLTcuNSwxOS4yLTE2LjcsMjYuMi0yNy4zYy05LjQsNC4yLTE5LjYsNy0zMC4yLDguM0MyMjIuMSwzMzUuNywyMzAuNCwzMjUuNCwyMzQuMywzMTMuMXpcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJoZXJvX19hYm91dC1zb2NpYWwgc29jaWFsLWJ0blxcXCIgaHJlZj1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZ0Lm1lXFx1MDAyRlMzUkhZXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCJcXHUwMDNFIFxcdTAwM0Nzdmcgd2lkdGg9XFxcIjcxOFxcXCIgaGVpZ2h0PVxcXCI3MThcXFwiIHZpZXdCb3g9XFxcIjAgMCA3MTggNzE4XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk01NTkgMjI1LjY2N0wxMjUuNjY3IDM3NS42NjZMMjc1LjY2NyA0MjUuNjY2TTU1OSAyMjUuNjY3TDI3NS42NjcgNDI1LjY2Nk01NTkgMjI1LjY2N0w0MjUuNjY3IDU3NS42NjZMMjc1LjY2NyA0MjUuNjY2XFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIiBzdHJva2Utd2lkdGg9XFxcIjUwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMzU5IDY5Mi4zMzNDNTQzLjA5MyA2OTIuMzMzIDY5Mi4zMzMgNTQzLjA5MyA2OTIuMzMzIDM1OUM2OTIuMzMzIDE3NC45MDUgNTQzLjA5MyAyNS42NjY1IDM1OSAyNS42NjY1QzE3NC45MDUgMjUuNjY2NSAyNS42NjY3IDE3NC45MDUgMjUuNjY2NyAzNTlDMjUuNjY2NyA1NDMuMDkzIDE3NC45MDUgNjkyLjMzMyAzNTkgNjkyLjMzM1pcXFwiIHN0cm9rZT1cXFwiYmxhY2tcXFwiIHN0cm9rZS13aWR0aD1cXFwiNTBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiaGVyb19fYWJvdXQtc29jaWFsIHNvY2lhbC1idG5cXFwiIGhyZWY9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGd3d3Lmluc3RhZ3JhbS5jb21cXHUwMDJGN2VyaGlcXHUwMDJGXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCJcXHUwMDNFIFxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj9cXHUwMDNFXFxuXFxuXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIGZpbGw9XFxcIiMwMDAwMDBcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMTk5OVxcdTAwMkZ4bGlua1xcXCIgXFxuXFx0IHZpZXdCb3g9XFxcIi0xNDMgMTQ1IDUxMiA1MTJcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFx1MDAzRVxcblxcdTAwM0NnXFx1MDAzRVxcblxcdFxcdTAwM0NwYXRoIGQ9XFxcIk0xMTMsMTQ1Yy0xNDEuNCwwLTI1NiwxMTQuNi0yNTYsMjU2czExNC42LDI1NiwyNTYsMjU2czI1Ni0xMTQuNiwyNTYtMjU2UzI1NC40LDE0NSwxMTMsMTQ1eiBNMjcyLjgsNTYwLjdcXG5cXHRcXHRjLTIwLjgsMjAuOC00NC45LDM3LjEtNzEuOCw0OC40Yy0yNy44LDExLjgtNTcuNCwxNy43LTg4LDE3LjdjLTMwLjUsMC02MC4xLTYtODgtMTcuN2MtMjYuOS0xMS40LTUxLjEtMjcuNy03MS44LTQ4LjRcXG5cXHRcXHRjLTIwLjgtMjAuOC0zNy4xLTQ0LjktNDguNC03MS44Qy0xMDcsNDYxLjEtMTEzLDQzMS41LTExMyw0MDFzNi02MC4xLDE3LjctODhjMTEuNC0yNi45LDI3LjctNTEuMSw0OC40LTcxLjhcXG5cXHRcXHRjMjAuOS0yMC44LDQ1LTM3LjEsNzEuOS00OC41QzUyLjksMTgxLDgyLjUsMTc1LDExMywxNzVzNjAuMSw2LDg4LDE3LjdjMjYuOSwxMS40LDUxLjEsMjcuNyw3MS44LDQ4LjRcXG5cXHRcXHRjMjAuOCwyMC44LDM3LjEsNDQuOSw0OC40LDcxLjhjMTEuOCwyNy44LDE3LjcsNTcuNCwxNy43LDg4YzAsMzAuNS02LDYwLjEtMTcuNyw4OEMzMDkuOCw1MTUuOCwyOTMuNSw1NDAsMjcyLjgsNTYwLjd6XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx0XFx1MDAzQ3BhdGggZD1cXFwiTTE5MS42LDI3M2gtMTU3Yy0yNy4zLDAtNDkuNSwyMi4yLTQ5LjUsNDkuNXY1Mi4zdjEwNC44YzAsMjcuMywyMi4yLDQ5LjUsNDkuNSw0OS41aDE1N2MyNy4zLDAsNDkuNS0yMi4yLDQ5LjUtNDkuNVYzNzQuN1xcblxcdFxcdHYtNTIuM0MyNDEsMjk1LjIsMjE4LjgsMjczLDE5MS42LDI3M3ogTTIwNS44LDMwMi41aDUuN3Y1LjZ2MzcuOGwtNDMuMywwLjFsLTAuMS00My40TDIwNS44LDMwMi41eiBNNzYuNSwzNzQuN1xcblxcdFxcdGM4LjItMTEuMywyMS41LTE4LjgsMzYuNS0xOC44czI4LjMsNy40LDM2LjUsMTguOGM1LjQsNy40LDguNSwxNi41LDguNSwyNi4zYzAsMjQuOC0yMC4yLDQ1LjEtNDUuMSw0NS4xQzg4LDQ0Ni4xLDY4LDQyNS44LDY4LDQwMVxcblxcdFxcdEM2OCwzOTEuMiw3MS4yLDM4Mi4xLDc2LjUsMzc0Ljd6IE0yMTYuMSw0NzkuNWMwLDEzLjUtMTEsMjQuNS0yNC41LDI0LjVoLTE1N2MtMTMuNSwwLTI0LjUtMTEtMjQuNS0yNC41VjM3NC43aDM4LjJcXG5cXHRcXHRjLTMuMyw4LjEtNS4yLDE3LTUuMiwyNi4zYzAsMzguNiwzMS40LDcwLDcwLDcwYzM4LjYsMCw3MC0zMS40LDcwLTcwYzAtOS4zLTEuOS0xOC4yLTUuMi0yNi4zaDM4LjJWNDc5LjV6XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19pbWdcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHB1Z19oYXNfb3duX3Byb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gcHVnX21lcmdlO1xuZnVuY3Rpb24gcHVnX21lcmdlKGEsIGIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cnMgPSBwdWdfbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICAgIHZhciB2YWxBID0gYVtrZXldIHx8IFtdO1xuICAgICAgYVtrZXldID0gKEFycmF5LmlzQXJyYXkodmFsQSkgPyB2YWxBIDogW3ZhbEFdKS5jb25jYXQoYltrZXldIHx8IFtdKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgdmFyIHZhbEEgPSBwdWdfc3R5bGUoYVtrZXldKTtcbiAgICAgIHZhbEEgPSB2YWxBICYmIHZhbEFbdmFsQS5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQSArICc7JyA6IHZhbEE7XG4gICAgICB2YXIgdmFsQiA9IHB1Z19zdHlsZShiW2tleV0pO1xuICAgICAgdmFsQiA9IHZhbEIgJiYgdmFsQlt2YWxCLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxCICsgJzsnIDogdmFsQjtcbiAgICAgIGFba2V5XSA9IHZhbEEgKyB2YWxCO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nIGFzIGEgc3RyaW5nIG9mIGNsYXNzZXMgZGVsaW1pdGVkIGJ5IGEgc3BhY2UuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gYXJyYXksIGFsbCBtZW1iZXJzIG9mIGl0IGFuZCBpdHMgc3ViYXJyYXlzIGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBJZiBgZXNjYXBpbmdgIGlzIGFuIGFycmF5LCB0aGVuIHdoZXRoZXIgb3Igbm90IHRoZSBpdGVtIGluIGB2YWxgIGlzXG4gKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gKiBub3QgYW4gYXJyYXksIG5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogQHBhcmFtIHsoQXJyYXkuPHN0cmluZz58T2JqZWN0LjxzdHJpbmcsIGJvb2xlYW4+fHN0cmluZyl9IHZhbFxuICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuZnVuY3Rpb24gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZykge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgY2xhc3NOYW1lLCBwYWRkaW5nID0gJycsIGVzY2FwZUVuYWJsZWQgPSBBcnJheS5pc0FycmF5KGVzY2FwaW5nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBjbGFzc05hbWUgPSBwdWdfY2xhc3Nlcyh2YWxbaV0pO1xuICAgIGlmICghY2xhc3NOYW1lKSBjb250aW51ZTtcbiAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsgY2xhc3NOYW1lO1xuICAgIHBhZGRpbmcgPSAnICc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgcGFkZGluZyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgaWYgKGtleSAmJiB2YWxba2V5XSAmJiBwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSkge1xuICAgICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBrZXk7XG4gICAgICBwYWRkaW5nID0gJyAnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlcyh2YWwsIGVzY2FwaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZyk7XG4gIH0gZWxzZSBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgfHwgJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCBvciBzdHJpbmcgdG8gYSBzdHJpbmcgb2YgQ1NTIHN0eWxlcyBkZWxpbWl0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz58c3RyaW5nKX0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy5zdHlsZSA9IHB1Z19zdHlsZTtcbmZ1bmN0aW9uIHB1Z19zdHlsZSh2YWwpIHtcbiAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIHN0eWxlIGluIHZhbCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwgc3R5bGUpKSB7XG4gICAgICAgIG91dCA9IG91dCArIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXSArICc7JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsICsgJyc7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IHB1Z19hdHRyO1xuZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmICh2YWwgPT09IGZhbHNlIHx8IHZhbCA9PSBudWxsIHx8ICF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICgodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICBpZiAoIWVzY2FwZWQgJiYgdmFsLmluZGV4T2YoJ1wiJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cXCcnICsgdmFsLnJlcGxhY2UoLycvZywgJyYjMzk7JykgKyAnXFwnJztcbiAgICB9XG4gIH1cbiAgaWYgKGVzY2FwZWQpIHZhbCA9IHB1Z19lc2NhcGUodmFsKTtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG5mdW5jdGlvbiBwdWdfYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBhdHRycyA9ICcnO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfY2xhc3Nlcyh2YWwpO1xuICAgICAgICBhdHRycyA9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpICsgYXR0cnM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCdzdHlsZScgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRycztcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcHVnX21hdGNoX2h0bWwgPSAvW1wiJjw+XS87XG5leHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG5mdW5jdGlvbiBwdWdfZXNjYXBlKF9odG1sKXtcbiAgdmFyIGh0bWwgPSAnJyArIF9odG1sO1xuICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICBpZiAoIXJlZ2V4UmVzdWx0KSByZXR1cm4gX2h0bWw7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICBjYXNlIDM4OiBlc2NhcGUgPSAnJmFtcDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjA6IGVzY2FwZSA9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29udGludWU7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgIHJlc3VsdCArPSBlc2NhcGU7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIG9yaWdpbmFsIHNvdXJjZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gcHVnX3JldGhyb3c7XG5mdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdQdWcnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcbiIsInZhciBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hYm91dC1idG4tanNcIik7XG52YXIgYnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRfX2J0bnNcIik7XG52YXIgZGVzY3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19kZXNjclwiKTtcbnZhciBkZXNjckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hYm91dF9fZGVzY3ItaXRlbVwiKTtcbnZhciBza2lsbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19za2lsbHNcIik7XG52YXIgZGVzY3JBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19kZXNjci1pdGVtLS1mdWxsXCIpO1xudmFyIGNsb3NlQWxsRGVzcmNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19kZXNjci1pdGVtLWNsb3NlXCIpO1xuYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24sIGluZGV4KSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbmRleCA8IGJ1dHRvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZGVzY3JBbGwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dlZC1ncmlkXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzZcXHUwNDMwXFx1MDQ0MlxcdTA0MzAgXFx1MDQzQVxcdTA0M0RcXHUwNDNFXFx1MDQzRlxcdTA0M0FcXHUwNDMwIFxcdTA0NDEgXFx1MDQzOFxcdTA0M0RcXHUwNDM0XFx1MDQzNVxcdTA0M0FcXHUwNDQxXFx1MDQzRVxcdTA0M0MgXCIuY29uY2F0KGluZGV4KSk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0WSA9IHNraWxsc0NvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBidG5zQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjNzIGVhc2VcIjtcbiAgICAgICAgICAgIGRlc2NyQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjNzIGVhc2VcIjtcbiAgICAgICAgICAgIGJ0bnNDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC1cIi5jb25jYXQob2Zmc2V0WSwgXCJweClcIik7XG4gICAgICAgICAgICBkZXNjckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLVwiLmNvbmNhdChvZmZzZXRZLCBcInB4KVwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGJ0bnNDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgICAgICAgICBkZXNjckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSAzKSB7XG4gICAgICAgICAgICBkZXNjckFsbC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd2VkLWdyaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZGVzY3JJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpdGVtSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwic2hvd2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuY2xvc2VBbGxEZXNyY0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlc2NyQWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93ZWQtZ3JpZFwiKTtcbn0pO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL0lNRzEuanBlZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSU1HMS5qcGVnXCIsXG5cdFwiLi9hcnJvdy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Fycm93LnN2Z1wiLFxuXHRcIi4vYmcuanBlZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBlZ1wiLFxuXHRcIi4vYm90MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JvdDEucG5nXCIsXG5cdFwiLi9jYXJkczEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXJkczEucG5nXCIsXG5cdFwiLi9jbGljazEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jbGljazEuc3ZnXCIsXG5cdFwiLi9jbGljazIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jbGljazIuc3ZnXCIsXG5cdFwiLi9jbGljazMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jbGljazMuc3ZnXCIsXG5cdFwiLi9kb3dubG9hZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rvd25sb2FkLnN2Z1wiLFxuXHRcIi4vZG93bmxvYWQyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQyLnN2Z1wiLFxuXHRcIi4vZG93bmxvYWQzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQzLnN2Z1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9naXRodWIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9naXRodWIuc3ZnXCIsXG5cdFwiLi9ndXNlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZ3VzZS5wbmdcIixcblx0XCIuL2d1c2UxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZ3VzZTEucG5nXCIsXG5cdFwiLi9pbmYxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaW5mMS5wbmdcIixcblx0XCIuL2luc3RhZ3JhbS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIixcblx0XCIuL2tpZ2ExLmpwZWdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2tpZ2ExLmpwZWdcIixcblx0XCIuL2xhbWkxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFtaTEucG5nXCIsXG5cdFwiLi9sYW5kaW5nMS5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sYW5kaW5nMS5qcGVnXCIsXG5cdFwiLi9wYXBhamExLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGFwYWphMS5wbmdcIixcblx0XCIuL3Byb21vMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Byb21vMS5wbmdcIixcblx0XCIuL3Nsb3QxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xvdDEucG5nXCIsXG5cdFwiLi90ZWxlZ3JhbS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlbGVncmFtLnN2Z1wiLFxuXHRcIi4vdG9kbzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90b2RvMS5wbmdcIixcblx0XCIuL3R3aXR0ZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90d2l0dGVyLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gbnB4IHByZXR0aWVyIC0td3JpdGUgXCIqKi8qLnB1Z1wiXG5pbXBvcnQgXCIuL3Njc3MvYXBwLnNjc3NcIjtcbmltcG9ydCBcIi4vY29yZS9yZXNpemVyXCI7XG5pbXBvcnQgXCIuL2NvcmUvbWFpblwiO1xuaW1wb3J0IFwiLi92aWV3cy9pbmRleC5wdWdcIjtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJNYXRoIiwibWluIiwibWF4IiwibW9kaWZpZXJEZXZpY2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9ubG9hZCIsIm9ucmVzaXplIiwiYWJvdXRCbnQiLCJxdWVyeVNlbGVjdG9yQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==