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
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003ESerhiy Krepets\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/header.pug */ "./src/views/parts/header.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/hero.pug */ "./src/views/parts/hero.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/about.pug */ "./src/views/parts/about.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Csection class=\"works\"\u003E\u003Cdiv class=\"works__container container\"\u003E \u003Cdiv class=\"works__items\"\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Angular / SCSS/ BEM', 'Website for parents: educational courses, expert advice, and useful resources.', 'kiga1.webp', 'https://kiga-plus.de/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Pug / SCSS / Green Sock / JS', 'A page with infinite scroll and links to social media.', 'inf1.webp', 'https://glittery-klepon-f6a4e3.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Pug / SCSS / Green Sock / JS', 'A web page with responsive design, showcasing portfolio projects.', 'landing1.webp', 'https://bucolic-blancmange-6ee124.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('vanilla.js / ES6 / Pug / Netlify', 'Creating editing deletion tasks, tracking execution time,', 'todo1.webp', 'https://musical-cat-d90351.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Pug / SCSS / JS / FontAwesome', 'Social cards, page display switching and color change', 'cards1.webp', 'https://effortless-palmier-7046d5.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Mixins / SCSS / JS / FontAwesome ', 'Pixelperfect layout page using figma/pug/scss/webpack,', 'slot1.webp', 'https://cosmic-gnome-ce098c.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Flop App', 'Page with flipping cards', 'promo1.webp', 'https://effulgent-llama-30370e.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Node.js / Telegraph.js / Cheerio parsing', 'A page that allows collecting contacts for sending to Telegram.', 'lami1.webp', 'https://regal-narwhal-ef1580.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('React / React Routing / use localstorage', 'simple react mobile app', 'guse1.webp', 'https://wondrous-crepe-985dc3.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Pug / Mixins / SCSS', 'Convenient platform with a grid of cards', 'papaja1.webp', 'https://chic-dragon-63d595.netlify.app/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Node.js / Telegraph.js / Cheerio parsing', 'Automated daily post creation by scraping content from an awarding website', 'bot1.webp', 'https://t.me/css_daily');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
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
	"./IMG1.webp": "./src/assets/images/IMG1.webp",
	"./arrow.svg": "./src/assets/images/arrow.svg",
	"./bg.jpeg": "./src/assets/images/bg.jpeg",
	"./bot1.png": "./src/assets/images/bot1.png",
	"./bot1.webp": "./src/assets/images/bot1.webp",
	"./cards1.png": "./src/assets/images/cards1.png",
	"./cards1.webp": "./src/assets/images/cards1.webp",
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
	"./guse1.webp": "./src/assets/images/guse1.webp",
	"./inf1.png": "./src/assets/images/inf1.png",
	"./inf1.webp": "./src/assets/images/inf1.webp",
	"./instagram.svg": "./src/assets/images/instagram.svg",
	"./kiga1.jpeg": "./src/assets/images/kiga1.jpeg",
	"./kiga1.webp": "./src/assets/images/kiga1.webp",
	"./lami1.png": "./src/assets/images/lami1.png",
	"./lami1.webp": "./src/assets/images/lami1.webp",
	"./landing1.jpeg": "./src/assets/images/landing1.jpeg",
	"./landing1.webp": "./src/assets/images/landing1.webp",
	"./papaja1.png": "./src/assets/images/papaja1.png",
	"./papaja1.webp": "./src/assets/images/papaja1.webp",
	"./promo1.png": "./src/assets/images/promo1.png",
	"./promo1.webp": "./src/assets/images/promo1.webp",
	"./slot1.png": "./src/assets/images/slot1.png",
	"./slot1.webp": "./src/assets/images/slot1.webp",
	"./telegram.svg": "./src/assets/images/telegram.svg",
	"./todo1.png": "./src/assets/images/todo1.png",
	"./todo1.webp": "./src/assets/images/todo1.webp",
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

/***/ "./src/assets/images/IMG1.webp":
/*!*************************************!*\
  !*** ./src/assets/images/IMG1.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cb1d624e2cd67417d6b5.webp";

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

/***/ "./src/assets/images/bot1.webp":
/*!*************************************!*\
  !*** ./src/assets/images/bot1.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/183146582c35ba480a0e.webp";

/***/ }),

/***/ "./src/assets/images/cards1.png":
/*!**************************************!*\
  !*** ./src/assets/images/cards1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/548fc8d9652d41f43e2f.png";

/***/ }),

/***/ "./src/assets/images/cards1.webp":
/*!***************************************!*\
  !*** ./src/assets/images/cards1.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3d5a978fdf972d7b09a9.webp";

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
module.exports = __webpack_require__.p + "assets/bf9859b4089d62ad2598.png";

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

/***/ "./src/assets/images/guse1.webp":
/*!**************************************!*\
  !*** ./src/assets/images/guse1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e3fba57e65e868d6f03c.webp";

/***/ }),

/***/ "./src/assets/images/inf1.png":
/*!************************************!*\
  !*** ./src/assets/images/inf1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2a34650124ac5dd0dfe1.png";

/***/ }),

/***/ "./src/assets/images/inf1.webp":
/*!*************************************!*\
  !*** ./src/assets/images/inf1.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c608223dfe55505e444a.webp";

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

/***/ "./src/assets/images/kiga1.webp":
/*!**************************************!*\
  !*** ./src/assets/images/kiga1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/eb1045eff1dd3019b68c.webp";

/***/ }),

/***/ "./src/assets/images/lami1.png":
/*!*************************************!*\
  !*** ./src/assets/images/lami1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/05d9e33e92915d56b0fe.png";

/***/ }),

/***/ "./src/assets/images/lami1.webp":
/*!**************************************!*\
  !*** ./src/assets/images/lami1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/888d9c5e2516d6da7cfb.webp";

/***/ }),

/***/ "./src/assets/images/landing1.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/landing1.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0762c442e5756353f99f.jpeg";

/***/ }),

/***/ "./src/assets/images/landing1.webp":
/*!*****************************************!*\
  !*** ./src/assets/images/landing1.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/90fc8573c065773cbfa1.webp";

/***/ }),

/***/ "./src/assets/images/papaja1.png":
/*!***************************************!*\
  !*** ./src/assets/images/papaja1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/63f324b6061c43ae35d5.png";

/***/ }),

/***/ "./src/assets/images/papaja1.webp":
/*!****************************************!*\
  !*** ./src/assets/images/papaja1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5561b69707005cd37887.webp";

/***/ }),

/***/ "./src/assets/images/promo1.png":
/*!**************************************!*\
  !*** ./src/assets/images/promo1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bf92852268ef85f514f9.png";

/***/ }),

/***/ "./src/assets/images/promo1.webp":
/*!***************************************!*\
  !*** ./src/assets/images/promo1.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/073b1857bc84d526968d.webp";

/***/ }),

/***/ "./src/assets/images/slot1.png":
/*!*************************************!*\
  !*** ./src/assets/images/slot1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b5a1abc703b428fdd895.png";

/***/ }),

/***/ "./src/assets/images/slot1.webp":
/*!**************************************!*\
  !*** ./src/assets/images/slot1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/988be35afd1304e86489.webp";

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

/***/ "./src/assets/images/todo1.webp":
/*!**************************************!*\
  !*** ./src/assets/images/todo1.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/26721432413b1464aaeb.webp";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNyQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDeUI7QUFDRDtBQUNIO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvcmVzaXplci5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3Njc3MvYXBwLnNjc3M/OGI2ZiIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL2luZGV4LnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2Fib3V0LnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2hlYWRlci5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9wYXJ0cy9oZXJvLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvN2VyaGl5L0Rlc2t0b3AvV0VCL3BmbG8vcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZXxmcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0V2lkdGggPSAxNDQwLFxuICBkZWZhdWx0Rm9udCA9IDE2LFxuICBtb2JpbGVGb250ID0gMTYsXG4gIG1pbldpZHRoID0gNzY4LFxuICBtaW5IZWlnaHQgPSA2MDAsXG4gIGRlZmF1bHRIZWlnaHQgPSA5MDA7XG5cbmZ1bmN0aW9uIGZTaXplKGRldmljZSwgdlcsIHZIKSB7XG4gIGlmICh2VyA8PSAzNzQpIHtcbiAgICByZXR1cm4gMTM7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlXG4gICAgPyBtb2JpbGVGb250XG4gICAgOiBkZWZhdWx0Rm9udCAqXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgIE1hdGgubWF4KG1pbldpZHRoLCB2VykgLyBkZWZhdWx0V2lkdGgsXG4gICAgICAgICAgTWF0aC5tYXgobWluSGVpZ2h0LCB2SCkgLyBkZWZhdWx0SGVpZ2h0XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmaWVyRGV2aWNlKCkge1xuICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIGlzTW9iaWxlID0gd2luZG93V2lkdGggPD0gNzY3O1xuXG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250U2l6ZSA9XG4gICAgICBmU2l6ZShpc01vYmlsZSwgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCkgKyBcInB4XCI7XG4gIH1cblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxubW9kaWZpZXJEZXZpY2UoKTtcblxuY29uc3QgYWJvdXRCbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXQtYnRuLWpzJykiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfbWl4aW5zW1wiaW1hZ2VcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oZmlsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYXR0cmlidXRlcy5jbGFzc10sIFtmYWxzZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2ZpbGV9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVwiO1xufTtcblxuXG5cblxucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihoZWFkZXIsIGRlc2NyaXB0aW9uLCBpbWFnZVNyYywgaHJlZil7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDYVwiICsgKFwiIGNsYXNzPVxcXCJ3b3Jrc19faXRlbVxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgaHJlZiwgdHJ1ZSwgdHJ1ZSkrXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW0taGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDaDNcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gaGVhZGVyKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGaDNcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gZGVzY3JpcHRpb24pID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtLWltZ1xcXCJcXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiA/XFx1MDAzRVxcblxcblxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXG5cXHUwMDNDdGl0bGVcXHUwMDJGXFx1MDAzRVxcblxcblxcdTAwM0NnIGlkPVxcXCJDb21wbGV0ZVxcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ2cgaWQ9XFxcImFycm93LXVwLXJpZ2h0XFxcIlxcdTAwM0VcXG5cXG5cXHUwMDNDZ1xcdTAwM0VcXG5cXG5cXHUwMDNDcG9seWxpbmUgZGF0YS1uYW1lPVxcXCJSaWdodFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgaWQ9XFxcIlJpZ2h0LTJcXFwiIHBvaW50cz1cXFwiMTguNyAxMi40IDE4LjcgNS4zIDExLjYgNS4zXFxcIiBzdHJva2U9XFxcIiMwMDAwMDBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFxuXFx1MDAzQ2xpbmUgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwMDAwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgeDE9XFxcIjUuM1xcXCIgeDI9XFxcIjE3LjFcXFwiIHkxPVxcXCIxOC43XFxcIiB5Mj1cXFwiNi45XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW0tYmdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKGltYWdlU3JjKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcIjtcbn07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIURPQ1RZUEUgaHRtbFxcdTAwM0VcXHUwMDNDaHRtbCBsYW5nPVxcXCJlblxcXCJcXHUwMDNFXFx1MDAzQ2hlYWRcXHUwMDNFXFx1MDAzQ21ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiXFx1MDAzRVxcdTAwM0NsaW5rXCIgKyAoXCIgcmVsPVxcXCJzaG9ydGN1dCBpY29uXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nYCksIHRydWUsIHRydWUpK1wiIHR5cGU9XFxcImltYWdlXFx1MDAyRnBuZ1xcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDdGl0bGVcXHUwMDNFU2VyaGl5IEtyZXBldHNcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXHUwMDNDYm9keVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvaGVhZGVyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9oZXJvLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9hYm91dC5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcIndvcmtzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19fY29udGFpbmVyIGNvbnRhaW5lclxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnQW5ndWxhciAvIFNDU1MvIEJFTScsICdXZWJzaXRlIGZvciBwYXJlbnRzOiBlZHVjYXRpb25hbCBjb3Vyc2VzLCBleHBlcnQgYWR2aWNlLCBhbmQgdXNlZnVsIHJlc291cmNlcy4nLCAna2lnYTEud2VicCcsICdodHRwczovL2tpZ2EtcGx1cy5kZS8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ1B1ZyAvIFNDU1MgLyBHcmVlbiBTb2NrIC8gSlMnLCAnQSBwYWdlIHdpdGggaW5maW5pdGUgc2Nyb2xsIGFuZCBsaW5rcyB0byBzb2NpYWwgbWVkaWEuJywgJ2luZjEud2VicCcsICdodHRwczovL2dsaXR0ZXJ5LWtsZXBvbi1mNmE0ZTMubmV0bGlmeS5hcHAvJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdQdWcgLyBTQ1NTIC8gR3JlZW4gU29jayAvIEpTJywgJ0Egd2ViIHBhZ2Ugd2l0aCByZXNwb25zaXZlIGRlc2lnbiwgc2hvd2Nhc2luZyBwb3J0Zm9saW8gcHJvamVjdHMuJywgJ2xhbmRpbmcxLndlYnAnLCAnaHR0cHM6Ly9idWNvbGljLWJsYW5jbWFuZ2UtNmVlMTI0Lm5ldGxpZnkuYXBwLycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgndmFuaWxsYS5qcyAvIEVTNiAvIFB1ZyAvIE5ldGxpZnknLCAnQ3JlYXRpbmcgZWRpdGluZyBkZWxldGlvbiB0YXNrcywgdHJhY2tpbmcgZXhlY3V0aW9uIHRpbWUsJywgJ3RvZG8xLndlYnAnLCAnaHR0cHM6Ly9tdXNpY2FsLWNhdC1kOTAzNTEubmV0bGlmeS5hcHAvJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdQdWcgLyBTQ1NTIC8gSlMgLyBGb250QXdlc29tZScsICdTb2NpYWwgY2FyZHMsIHBhZ2UgZGlzcGxheSBzd2l0Y2hpbmcgYW5kIGNvbG9yIGNoYW5nZScsICdjYXJkczEud2VicCcsICdodHRwczovL2VmZm9ydGxlc3MtcGFsbWllci03MDQ2ZDUubmV0bGlmeS5hcHAvJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdNaXhpbnMgLyBTQ1NTIC8gSlMgLyBGb250QXdlc29tZSAnLCAnUGl4ZWxwZXJmZWN0IGxheW91dCBwYWdlIHVzaW5nIGZpZ21hL3B1Zy9zY3NzL3dlYnBhY2ssJywgJ3Nsb3QxLndlYnAnLCAnaHR0cHM6Ly9jb3NtaWMtZ25vbWUtY2UwOThjLm5ldGxpZnkuYXBwLycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnRmxvcCBBcHAnLCAnUGFnZSB3aXRoIGZsaXBwaW5nIGNhcmRzJywgJ3Byb21vMS53ZWJwJywgJ2h0dHBzOi8vZWZmdWxnZW50LWxsYW1hLTMwMzcwZS5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ05vZGUuanMgLyBUZWxlZ3JhcGguanMgLyBDaGVlcmlvIHBhcnNpbmcnLCAnQSBwYWdlIHRoYXQgYWxsb3dzIGNvbGxlY3RpbmcgY29udGFjdHMgZm9yIHNlbmRpbmcgdG8gVGVsZWdyYW0uJywgJ2xhbWkxLndlYnAnLCAnaHR0cHM6Ly9yZWdhbC1uYXJ3aGFsLWVmMTU4MC5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ1JlYWN0IC8gUmVhY3QgUm91dGluZyAvIHVzZSBsb2NhbHN0b3JhZ2UnLCAnc2ltcGxlIHJlYWN0IG1vYmlsZSBhcHAnLCAnZ3VzZTEud2VicCcsICdodHRwczovL3dvbmRyb3VzLWNyZXBlLTk4NWRjMy5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ1B1ZyAvIE1peGlucyAvIFNDU1MnLCAnQ29udmVuaWVudCBwbGF0Zm9ybSB3aXRoIGEgZ3JpZCBvZiBjYXJkcycsICdwYXBhamExLndlYnAnLCAnaHR0cHM6Ly9jaGljLWRyYWdvbi02M2Q1OTUubmV0bGlmeS5hcHAvJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdOb2RlLmpzIC8gVGVsZWdyYXBoLmpzIC8gQ2hlZXJpbyBwYXJzaW5nJywgJ0F1dG9tYXRlZCBkYWlseSBwb3N0IGNyZWF0aW9uIGJ5IHNjcmFwaW5nIGNvbnRlbnQgZnJvbSBhbiBhd2FyZGluZyB3ZWJzaXRlJywgJ2JvdDEud2VicCcsICdodHRwczovL3QubWUvY3NzX2RhaWx5Jyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJhYm91dFxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19jb250YWluZXIgY29udGFpbmVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX3RpdGxlXFxcIlxcdTAwM0UgXFx1MDAzQ3NwYW5cXHUwMDNFU2tpbGxzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19za2lsbHNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19idG5zXFxcIlxcdTAwM0UgXFx1MDAzQ2EgY2xhc3M9XFxcImFib3V0X19idG4gYWJvdXQtYnRuLWpzXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VKU1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/XFx1MDAzRVxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTYgMTJMOCAxMlxcXCIgc3Ryb2tlPVxcXCIjMzIzMjMyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xMyAxNUwxNS45MTMgMTIuMDg3VjEyLjA4N0MxNS45NjEgMTIuMDM5IDE1Ljk2MSAxMS45NjEgMTUuOTEzIDExLjkxM1YxMS45MTNMMTMgOVxcXCIgc3Ryb2tlPVxcXCIjMzIzMjMyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiYWJvdXRfX2J0biBhYm91dC1idG4tanNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUhUTUxcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0Nzdmcgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE2IDEyTDggMTJcXFwiIHN0cm9rZT1cXFwiIzMyMzIzMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTMgMTVMMTUuOTEzIDEyLjA4N1YxMi4wODdDMTUuOTYxIDEyLjAzOSAxNS45NjEgMTEuOTYxIDE1LjkxMyAxMS45MTNWMTEuOTEzTDEzIDlcXFwiIHN0cm9rZT1cXFwiIzMyMzIzMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImFib3V0X19idG4gYWJvdXQtYnRuLWpzXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VDU1NcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0Nzdmcgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE2IDEyTDggMTJcXFwiIHN0cm9rZT1cXFwiIzMyMzIzMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTMgMTVMMTUuOTEzIDEyLjA4N1YxMi4wODdDMTUuOTYxIDEyLjAzOSAxNS45NjEgMTEuOTYxIDE1LjkxMyAxMS45MTNWMTEuOTEzTDEzIDlcXFwiIHN0cm9rZT1cXFwiIzMyMzIzMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImFib3V0X19idG4gYWJvdXQtYnRuLWpzXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VBbGxcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0Nzdmcgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE2IDEyTDggMTJcXFwiIHN0cm9rZT1cXFwiIzMyMzIzMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTMgMTVMMTUuOTEzIDEyLjA4N1YxMi4wODdDMTUuOTYxIDEyLjAzOSAxNS45NjEgMTEuOTYxIDE1LjkxMyAxMS45MTNWMTEuOTEzTDEzIDlcXFwiIHN0cm9rZT1cXFwiIzMyMzIzMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX2Rlc2NyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fZGVzY3ItaXRlbVxcXCJcXHUwMDNFIFxcdTAwM0NwXFx1MDAzRUphdmFzY3JpcHQgKEVTNSBFUzYpXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFU1BBIChSZWFjdCwgQW5ndWxhcilcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VKUXVlcnkgLSBXZWJwYWNrXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFTm9kZS5qc1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fZGVzY3ItaXRlbVxcXCJcXHUwMDNFIFxcdTAwM0NwXFx1MDAzRUhUTUwgKFB1ZyxCb290c3RyYXAsIFRhaWx3aW5kKVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVRhZ3NcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VMaW5rc1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRU1ldGFcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX2Rlc2NyLWl0ZW1cXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VTQ1NTXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFTGF5b3V0XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFUGl4ZWxQZXJmZWN0XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFQW5pbWF0aW9uc1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fZGVzY3ItaXRlbS0tZnVsbFxcXCJcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImFib3V0X19kZXNjci1pdGVtLWNsb3NlXFxcIlxcdTAwM0UgXFx1MDAzQ3NwYW5cXHUwMDNFeFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFSlNcXHUwMDNDc3BhblxcdTAwM0UgSmF2YXNjcmlwdCBcXHUwMDJGIEVTNSBcXHUwMDJGIEVTNiBcXHUwMDJGIFNQQSAoUmVhY3QsIEFuZ3VsYXIpIFxcdTAwMkYgSlF1ZXJ5LSBXZWJwYWNrIFxcdTAwMkYgTm9kZS5qc1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFSFRNTFxcdTAwM0NzcGFuXFx1MDAzRSBQdWcsIEJvb3RzdHJhcCBcXHUwMDJGIFRhaWx3aW5kLSBSZXNwb25zaXZlIFBpeGVsIFBlcmZlY3QgVUkgbGF5b3V0LSBVSVxcdTAwMkZVWCBUZXN0aW5nLSBTRU8gZnJpZW5kbHkgY29kZVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFQ1NTXFx1MDAzQ3NwYW5cXHUwMDNFIFNBU1MsIEdyZWVuU29jaywgUGl4ZWwgUGVyZmVjdCwgQW5pbWF0aW9uc1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFUG9zc2VzXFx1MDAzQ3NwYW5cXHUwMDNFIEdJVCAoQml0QnVja2V0LCBHaXRIdWIsIEdpdGxhYiktIE1hY09zXFx1MDAyRkxpbnV4LSBGaWdtYSwgUGhvdG9zaG9wLCBJbGx1c3RyYXRvciwgWmVwbGluXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0UgU29mdCBTa2lsbHNcXHUwMDNDc3BhblxcdTAwM0UgIEVuZ2xpc2ggKEludGVybWVkaWF0ZSBCMSktIFVrcmFpbmlhbiAoTmF0aXZlKSBcXHUwMDJGIFJ1c3NpYW4tIEZhc3QgbGVhcm5pbmctIFB1bmN0dWFsaXR5LSBGbGV4aWJpbGl0eS0gU2tpbGwgdG8gd29yayBpbiB0ZWFtXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJoZXJvXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fY29udGFpbmVyIGNvbnRhaW5lclxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2Fib3V0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19kZXNjclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYWJvdXQtdGV4dFxcXCJcXHUwMDNFIFxcdTAwM0NoMVxcdTAwM0VIZWxsbywgSSdtIFNlcmhpeSwgRnJvbnQtZW5kIGRldmVsb3BlclxcdTAwM0NcXHUwMDJGaDFcXHUwMDNFXFx1MDAzQ2gyXFx1MDAzRUNyZWF0aW5nIHNlYW1sZXNzIHVzZXIgZXhwZXJpZW5jZXMgdGhyb3VnaCBjb2RlXFx1MDAzQ1xcdTAwMkZoMlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hYm91dC1hY3Rpb25zXFxcIlxcdTAwM0UgXFx1MDAzQ2EgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXNvY2lhbCBzb2NpYWwtYnRuXFxcIiBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmdpdGh1Yi5jb21cXHUwMDJGN2VyaGlpXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCJcXHUwMDNFIFxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcIlVURi04XFxcIiBzdGFuZGFsb25lPVxcXCJub1xcXCI/XFx1MDAzRVxcblxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIlxcdTAwM0VcXG4gICAgXFxuICAgIFxcdTAwM0N0aXRsZVxcdTAwM0VnaXRodWIgWyMxNDJdXFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXG4gICAgXFx1MDAzQ2Rlc2NcXHUwMDNFQ3JlYXRlZCB3aXRoIFNrZXRjaC5cXHUwMDNDXFx1MDAyRmRlc2NcXHUwMDNFXFxuICAgIFxcdTAwM0NkZWZzXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGZGVmc1xcdTAwM0VcXG4gICAgXFx1MDAzQ2cgaWQ9XFxcIlBhZ2UtMVxcXCIgc3Ryb2tlPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDZyBpZD1cXFwiRHJpYmJibGUtTGlnaHQtUHJldmlld1xcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTE0MC4wMDAwMDAsIC03NTU5LjAwMDAwMClcXFwiIGZpbGw9XFxcIiMwMDAwMDBcXFwiXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NnIGlkPVxcXCJpY29uc1xcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoNTYuMDAwMDAwLCAxNjAuMDAwMDAwKVxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NwYXRoIGQ9XFxcIk05NCw3Mzk5IEM5OS41MjMsNzM5OSAxMDQsNzQwMy41OSAxMDQsNzQwOS4yNTMgQzEwNCw3NDEzLjc4MiAxMDEuMTM4LDc0MTcuNjI0IDk3LjE2Nyw3NDE4Ljk4MSBDOTYuNjYsNzQxOS4wODIgOTYuNDgsNzQxOC43NjIgOTYuNDgsNzQxOC40ODkgQzk2LjQ4LDc0MTguMTUxIDk2LjQ5Miw3NDE3LjA0NyA5Ni40OTIsNzQxNS42NzUgQzk2LjQ5Miw3NDE0LjcxOSA5Ni4xNzIsNzQxNC4wOTUgOTUuODEzLDc0MTMuNzc3IEM5OC4wNCw3NDEzLjUyMyAxMDAuMzgsNzQxMi42NTYgMTAwLjM4LDc0MDguNzE4IEMxMDAuMzgsNzQwNy41OTggOTkuOTkyLDc0MDYuNjg0IDk5LjM1LDc0MDUuOTY2IEM5OS40NTQsNzQwNS43MDcgOTkuNzk3LDc0MDQuNjY0IDk5LjI1Miw3NDAzLjI1MiBDOTkuMjUyLDc0MDMuMjUyIDk4LjQxNCw3NDAyLjk3NyA5Ni41MDUsNzQwNC4zMDMgQzk1LjcwNiw3NDA0LjA3NiA5NC44NSw3NDAzLjk2MiA5NCw3NDAzLjk1OCBDOTMuMTUsNzQwMy45NjIgOTIuMjk1LDc0MDQuMDc2IDkxLjQ5Nyw3NDA0LjMwMyBDODkuNTg2LDc0MDIuOTc3IDg4Ljc0Niw3NDAzLjI1MiA4OC43NDYsNzQwMy4yNTIgQzg4LjIwMyw3NDA0LjY2NCA4OC41NDYsNzQwNS43MDcgODguNjQ5LDc0MDUuOTY2IEM4OC4wMSw3NDA2LjY4NCA4Ny42MTksNzQwNy41OTggODcuNjE5LDc0MDguNzE4IEM4Ny42MTksNzQxMi42NDYgODkuOTU0LDc0MTMuNTI2IDkyLjE3NSw3NDEzLjc4NSBDOTEuODg5LDc0MTQuMDQxIDkxLjYzLDc0MTQuNDkzIDkxLjU0LDc0MTUuMTU2IEM5MC45Nyw3NDE1LjQxOCA4OS41MjIsNzQxNS44NzEgODguNjMsNzQxNC4zMDQgQzg4LjYzLDc0MTQuMzA0IDg4LjEwMSw3NDEzLjMxOSA4Ny4wOTcsNzQxMy4yNDcgQzg3LjA5Nyw3NDEzLjI0NyA4Ni4xMjIsNzQxMy4yMzQgODcuMDI5LDc0MTMuODcgQzg3LjAyOSw3NDEzLjg3IDg3LjY4NCw3NDE0LjE4NSA4OC4xMzksNzQxNS4zNyBDODguMTM5LDc0MTUuMzcgODguNzI2LDc0MTcuMiA5MS41MDgsNzQxNi41OCBDOTEuNTEzLDc0MTcuNDM3IDkxLjUyMiw3NDE4LjI0NSA5MS41MjIsNzQxOC40ODkgQzkxLjUyMiw3NDE4Ljc2IDkxLjMzOCw3NDE5LjA3NyA5MC44MzksNzQxOC45ODIgQzg2Ljg2NSw3NDE3LjYyNyA4NCw3NDEzLjc4MyA4NCw3NDA5LjI1MyBDODQsNzQwMy41OSA4OC40NzgsNzM5OSA5NCw3Mzk5XFxcIiBpZD1cXFwiZ2l0aHViLVsjMTQyXVxcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZwYXRoXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG4gICAgXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiaGVyb19fYWJvdXQtcG9ydGZvbGlvIGJ0blxcXCIgaHJlZj1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZkcml2ZS5nb29nbGUuY29tXFx1MDAyRmZpbGVcXHUwMDJGZFxcdTAwMkYxNmxIRXNWUWJYQ0lwSkkxVy1HMnFNX3NqOGVGSmYzUmRcXHUwMDJGdmlld1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVZpZXcgQ1ZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiA/XFx1MDAzRVxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXHUwMDNDcGF0aCBkPVxcXCJNMTIgMTJWMTlNMTIgMTlMOS43NSAxNi42NjY3TTEyIDE5TDE0LjI1IDE2LjY2NjdNNi42IDE3LjgzMzNDNC42MTE3OCAxNy44MzMzIDMgMTYuMTkxNyAzIDE0LjE2NjdDMyAxMi40OTggNC4wOTQzOCAxMS4wODk3IDUuNTkxOTggMTAuNjQ1N0M1LjY1NTYyIDEwLjYyNjggNS43IDEwLjU2NzUgNS43IDEwLjVDNS43IDcuNDYyNDMgOC4xMTc2NiA1IDExLjEgNUMxNC4wODIzIDUgMTYuNSA3LjQ2MjQzIDE2LjUgMTAuNUMxNi41IDEwLjU1ODIgMTYuNTUzNiAxMC42MDE0IDE2LjYwOTQgMTAuNTg4N0MxNi44NjM4IDEwLjUzMDYgMTcuMTI4NCAxMC41IDE3LjQgMTAuNUMxOS4zODgyIDEwLjUgMjEgMTIuMTQxNiAyMSAxNC4xNjY3QzIxIDE2LjE5MTcgMTkuMzg4MiAxNy44MzMzIDE3LjQgMTcuODMzM1xcXCIgc3Ryb2tlPVxcXCIjNDY0NDU1XFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXNvY2lhbCBzb2NpYWwtYnRuXFxcIiBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRnR3aXR0ZXIuY29tXFx1MDAyRlNLZWtzc3lcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIlxcdTAwM0UgXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXG5cXG5cXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0NzdmcgZmlsbD1cXFwiIzAwMDAwMFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgd2lkdGg9XFxcIjgwMHB4XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIiBcXG5cXHQgdmlld0JveD1cXFwiLTE0MyAxNDUgNTEyIDUxMlxcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ2dcXHUwMDNFXFxuXFx0XFx1MDAzQ3BhdGggZD1cXFwiTTExMywxNDVjLTE0MS40LDAtMjU2LDExNC42LTI1NiwyNTZzMTE0LjYsMjU2LDI1NiwyNTZzMjU2LTExNC42LDI1Ni0yNTZTMjU0LjQsMTQ1LDExMywxNDV6IE0yNzIuOCw1NjAuN1xcblxcdFxcdGMtMjAuOCwyMC44LTQ0LjksMzcuMS03MS44LDQ4LjRjLTI3LjgsMTEuOC01Ny40LDE3LjctODgsMTcuN2MtMzAuNSwwLTYwLjEtNi04OC0xNy43Yy0yNi45LTExLjQtNTEuMS0yNy43LTcxLjgtNDguNFxcblxcdFxcdGMtMjAuOC0yMC44LTM3LjEtNDQuOS00OC40LTcxLjhDLTEwNyw0NjEuMS0xMTMsNDMxLjUtMTEzLDQwMXM2LTYwLjEsMTcuNy04OGMxMS40LTI2LjksMjcuNy01MS4xLDQ4LjQtNzEuOFxcblxcdFxcdGMyMC45LTIwLjgsNDUtMzcuMSw3MS45LTQ4LjVDNTIuOSwxODEsODIuNSwxNzUsMTEzLDE3NXM2MC4xLDYsODgsMTcuN2MyNi45LDExLjQsNTEuMSwyNy43LDcxLjgsNDguNFxcblxcdFxcdGMyMC44LDIwLjgsMzcuMSw0NC45LDQ4LjQsNzEuOGMxMS44LDI3LjgsMTcuNyw1Ny40LDE3LjcsODhjMCwzMC41LTYsNjAuMS0xNy43LDg4QzMwOS44LDUxNS44LDI5My41LDU0MCwyNzIuOCw1NjAuN3pcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHRcXHUwMDNDcGF0aCBkPVxcXCJNMjM0LjMsMzEzLjFjLTEwLjIsNi0yMS40LDEwLjQtMzMuNCwxMi44Yy05LjYtMTAuMi0yMy4zLTE2LjYtMzguNC0xNi42Yy0yOSwwLTUyLjYsMjMuNi01Mi42LDUyLjZjMCw0LjEsMC40LDguMSwxLjQsMTJcXG5cXHRcXHRjLTQzLjctMi4yLTgyLjUtMjMuMS0xMDguNC01NWMtNC41LDcuOC03LjEsMTYuOC03LjEsMjYuNWMwLDE4LjIsOS4zLDM0LjMsMjMuNCw0My44Yy04LjYtMC4zLTE2LjctMi43LTIzLjgtNi42djAuNlxcblxcdFxcdGMwLDI1LjUsMTguMSw0Ni44LDQyLjIsNTEuNmMtNC40LDEuMi05LjEsMS45LTEzLjksMS45Yy0zLjQsMC02LjctMC4zLTkuOS0wLjljNi43LDIwLjksMjYuMSwzNi4xLDQ5LjEsMzYuNVxcblxcdFxcdGMtMTgsMTQuMS00MC43LDIyLjUtNjUuMywyMi41Yy00LjIsMC04LjQtMC4yLTEyLjYtMC43YzIzLjMsMTQuOSw1MC45LDIzLjYsODAuNiwyMy42Yzk2LjgsMCwxNDkuNy04MC4yLDE0OS43LTE0OS43XFxuXFx0XFx0YzAtMi4zLDAtNC42LTAuMS02LjhjMTAuMy03LjUsMTkuMi0xNi43LDI2LjItMjcuM2MtOS40LDQuMi0xOS42LDctMzAuMiw4LjNDMjIyLjEsMzM1LjcsMjMwLjQsMzI1LjQsMjM0LjMsMzEzLjF6XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiaGVyb19fYWJvdXQtc29jaWFsIHNvY2lhbC1idG5cXFwiIGhyZWY9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGdC5tZVxcdTAwMkZTM1JIWVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXFx1MDAzRSBcXHUwMDNDc3ZnIHdpZHRoPVxcXCI3MThcXFwiIGhlaWdodD1cXFwiNzE4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNzE4IDcxOFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNNTU5IDIyNS42NjdMMTI1LjY2NyAzNzUuNjY2TDI3NS42NjcgNDI1LjY2Nk01NTkgMjI1LjY2N0wyNzUuNjY3IDQyNS42NjZNNTU5IDIyNS42NjdMNDI1LjY2NyA1NzUuNjY2TDI3NS42NjcgNDI1LjY2NlxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCIgc3Ryb2tlLXdpZHRoPVxcXCI1MFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTM1OSA2OTIuMzMzQzU0My4wOTMgNjkyLjMzMyA2OTIuMzMzIDU0My4wOTMgNjkyLjMzMyAzNTlDNjkyLjMzMyAxNzQuOTA1IDU0My4wOTMgMjUuNjY2NSAzNTkgMjUuNjY2NUMxNzQuOTA1IDI1LjY2NjUgMjUuNjY2NyAxNzQuOTA1IDI1LjY2NjcgMzU5QzI1LjY2NjcgNTQzLjA5MyAxNzQuOTA1IDY5Mi4zMzMgMzU5IDY5Mi4zMzNaXFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIiBzdHJva2Utd2lkdGg9XFxcIjUwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXNvY2lhbCBzb2NpYWwtYnRuXFxcIiBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRnd3dy5pbnN0YWdyYW0uY29tXFx1MDAyRjdlcmhpXFx1MDAyRlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXFx1MDAzRSBcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/XFx1MDAzRVxcblxcblxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyBmaWxsPVxcXCIjMDAwMDAwXFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB3aWR0aD1cXFwiODAwcHhcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjE5OTlcXHUwMDJGeGxpbmtcXFwiIFxcblxcdCB2aWV3Qm94PVxcXCItMTQzIDE0NSA1MTIgNTEyXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIlxcdTAwM0VcXG5cXHUwMDNDZ1xcdTAwM0VcXG5cXHRcXHUwMDNDcGF0aCBkPVxcXCJNMTEzLDE0NWMtMTQxLjQsMC0yNTYsMTE0LjYtMjU2LDI1NnMxMTQuNiwyNTYsMjU2LDI1NnMyNTYtMTE0LjYsMjU2LTI1NlMyNTQuNCwxNDUsMTEzLDE0NXogTTI3Mi44LDU2MC43XFxuXFx0XFx0Yy0yMC44LDIwLjgtNDQuOSwzNy4xLTcxLjgsNDguNGMtMjcuOCwxMS44LTU3LjQsMTcuNy04OCwxNy43Yy0zMC41LDAtNjAuMS02LTg4LTE3LjdjLTI2LjktMTEuNC01MS4xLTI3LjctNzEuOC00OC40XFxuXFx0XFx0Yy0yMC44LTIwLjgtMzcuMS00NC45LTQ4LjQtNzEuOEMtMTA3LDQ2MS4xLTExMyw0MzEuNS0xMTMsNDAxczYtNjAuMSwxNy43LTg4YzExLjQtMjYuOSwyNy43LTUxLjEsNDguNC03MS44XFxuXFx0XFx0YzIwLjktMjAuOCw0NS0zNy4xLDcxLjktNDguNUM1Mi45LDE4MSw4Mi41LDE3NSwxMTMsMTc1czYwLjEsNiw4OCwxNy43YzI2LjksMTEuNCw1MS4xLDI3LjcsNzEuOCw0OC40XFxuXFx0XFx0YzIwLjgsMjAuOCwzNy4xLDQ0LjksNDguNCw3MS44YzExLjgsMjcuOCwxNy43LDU3LjQsMTcuNyw4OGMwLDMwLjUtNiw2MC4xLTE3LjcsODhDMzA5LjgsNTE1LjgsMjkzLjUsNTQwLDI3Mi44LDU2MC43elxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdFxcdTAwM0NwYXRoIGQ9XFxcIk0xOTEuNiwyNzNoLTE1N2MtMjcuMywwLTQ5LjUsMjIuMi00OS41LDQ5LjV2NTIuM3YxMDQuOGMwLDI3LjMsMjIuMiw0OS41LDQ5LjUsNDkuNWgxNTdjMjcuMywwLDQ5LjUtMjIuMiw0OS41LTQ5LjVWMzc0LjdcXG5cXHRcXHR2LTUyLjNDMjQxLDI5NS4yLDIxOC44LDI3MywxOTEuNiwyNzN6IE0yMDUuOCwzMDIuNWg1Ljd2NS42djM3LjhsLTQzLjMsMC4xbC0wLjEtNDMuNEwyMDUuOCwzMDIuNXogTTc2LjUsMzc0LjdcXG5cXHRcXHRjOC4yLTExLjMsMjEuNS0xOC44LDM2LjUtMTguOHMyOC4zLDcuNCwzNi41LDE4LjhjNS40LDcuNCw4LjUsMTYuNSw4LjUsMjYuM2MwLDI0LjgtMjAuMiw0NS4xLTQ1LjEsNDUuMUM4OCw0NDYuMSw2OCw0MjUuOCw2OCw0MDFcXG5cXHRcXHRDNjgsMzkxLjIsNzEuMiwzODIuMSw3Ni41LDM3NC43eiBNMjE2LjEsNDc5LjVjMCwxMy41LTExLDI0LjUtMjQuNSwyNC41aC0xNTdjLTEzLjUsMC0yNC41LTExLTI0LjUtMjQuNVYzNzQuN2gzOC4yXFxuXFx0XFx0Yy0zLjMsOC4xLTUuMiwxNy01LjIsMjYuM2MwLDM4LjYsMzEuNCw3MCw3MCw3MGMzOC42LDAsNzAtMzEuNCw3MC03MGMwLTkuMy0xLjktMTguMi01LjItMjYuM2gzOC4yVjQ3OS41elxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19faW1nXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIGFycmF5LCBhbGwgbWVtYmVycyBvZiBpdCBhbmQgaXRzIHN1YmFycmF5cyBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICogZXNjYXBlZCBkZXBlbmRzIG9uIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gaW4gYGVzY2FwaW5nYC4gSWYgYGVzY2FwaW5nYCBpc1xuICogbm90IGFuIGFycmF5LCBubyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIG9iamVjdCwgYWxsIHRoZSBrZXlzIHdob3NlIHZhbHVlIGlzIHRydXRoeSBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhIHN0cmluZywgaXQgaXMgY291bnRlZCBhcyBhIGNsYXNzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAqIEBwYXJhbSB7P0FycmF5LjxzdHJpbmc+fSBlc2NhcGluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNsYXNzZXMgPSBwdWdfY2xhc3NlcztcbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgY2xhc3NOYW1lID0gcHVnX2NsYXNzZXModmFsW2ldKTtcbiAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgZXNjYXBlRW5hYmxlZCAmJiBlc2NhcGluZ1tpXSAmJiAoY2xhc3NOYW1lID0gcHVnX2VzY2FwZShjbGFzc05hbWUpKTtcbiAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGNsYXNzTmFtZTtcbiAgICBwYWRkaW5nID0gJyAnO1xuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIHBhZGRpbmcgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgIGlmIChrZXkgJiYgdmFsW2tleV0gJiYgcHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIGtleSkpIHtcbiAgICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsga2V5O1xuICAgICAgcGFkZGluZyA9ICcgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXModmFsLCBlc2NhcGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpO1xuICB9IGVsc2UgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSB7KE9iamVjdC48c3RyaW5nLCBzdHJpbmc+fHN0cmluZyl9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuc3R5bGUgPSBwdWdfc3R5bGU7XG5mdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZSBpbiB2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICBvdXQgPSBvdXQgKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCArICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG4iLCJ2YXIgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWJvdXQtYnRuLWpzXCIpO1xudmFyIGJ0bnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19idG5zXCIpO1xudmFyIGRlc2NyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fZGVzY3JcIik7XG52YXIgZGVzY3JJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWJvdXRfX2Rlc2NyLWl0ZW1cIik7XG52YXIgc2tpbGxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fc2tpbGxzXCIpO1xudmFyIGRlc2NyQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fZGVzY3ItaXRlbS0tZnVsbFwiKTtcbnZhciBjbG9zZUFsbERlc3JjQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fZGVzY3ItaXRlbS1jbG9zZVwiKTtcbmJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5kZXggPCBidXR0b25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGRlc2NyQWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93ZWQtZ3JpZFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM2XFx1MDQzMFxcdTA0NDJcXHUwNDMwIFxcdTA0M0FcXHUwNDNEXFx1MDQzRVxcdTA0M0ZcXHUwNDNBXFx1MDQzMCBcXHUwNDQxIFxcdTA0MzhcXHUwNDNEXFx1MDQzNFxcdTA0MzVcXHUwNDNBXFx1MDQ0MVxcdTA0M0VcXHUwNDNDIFwiLmNvbmNhdChpbmRleCkpO1xuICAgICAgICAgICAgdmFyIG9mZnNldFkgPSBza2lsbHNDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgYnRuc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC4zcyBlYXNlXCI7XG4gICAgICAgICAgICBkZXNjckNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC4zcyBlYXNlXCI7XG4gICAgICAgICAgICBidG5zQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtXCIuY29uY2F0KG9mZnNldFksIFwicHgpXCIpO1xuICAgICAgICAgICAgZGVzY3JDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC1cIi5jb25jYXQob2Zmc2V0WSwgXCJweClcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBidG5zQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZGVzY3JDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gMykge1xuICAgICAgICAgICAgZGVzY3JBbGwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dlZC1ncmlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGRlc2NySXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaXRlbUluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaXRlbUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmNsb3NlQWxsRGVzcmNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkZXNjckFsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd2VkLWdyaWRcIik7XG59KTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9JTUcxLmpwZWdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0lNRzEuanBlZ1wiLFxuXHRcIi4vSU1HMS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JTUcxLndlYnBcIixcblx0XCIuL2Fycm93LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYXJyb3cuc3ZnXCIsXG5cdFwiLi9iZy5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGVnXCIsXG5cdFwiLi9ib3QxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYm90MS5wbmdcIixcblx0XCIuL2JvdDEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYm90MS53ZWJwXCIsXG5cdFwiLi9jYXJkczEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXJkczEucG5nXCIsXG5cdFwiLi9jYXJkczEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FyZHMxLndlYnBcIixcblx0XCIuL2NsaWNrMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NsaWNrMS5zdmdcIixcblx0XCIuL2NsaWNrMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NsaWNrMi5zdmdcIixcblx0XCIuL2NsaWNrMy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NsaWNrMy5zdmdcIixcblx0XCIuL2Rvd25sb2FkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQuc3ZnXCIsXG5cdFwiLi9kb3dubG9hZDIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kb3dubG9hZDIuc3ZnXCIsXG5cdFwiLi9kb3dubG9hZDMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kb3dubG9hZDMuc3ZnXCIsXG5cdFwiLi9mYXZpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdcIixcblx0XCIuL2dpdGh1Yi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2dpdGh1Yi5zdmdcIixcblx0XCIuL2d1c2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ndXNlLnBuZ1wiLFxuXHRcIi4vZ3VzZTEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ndXNlMS5wbmdcIixcblx0XCIuL2d1c2UxLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2d1c2UxLndlYnBcIixcblx0XCIuL2luZjEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbmYxLnBuZ1wiLFxuXHRcIi4vaW5mMS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbmYxLndlYnBcIixcblx0XCIuL2luc3RhZ3JhbS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIixcblx0XCIuL2tpZ2ExLmpwZWdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2tpZ2ExLmpwZWdcIixcblx0XCIuL2tpZ2ExLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2tpZ2ExLndlYnBcIixcblx0XCIuL2xhbWkxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFtaTEucG5nXCIsXG5cdFwiLi9sYW1pMS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sYW1pMS53ZWJwXCIsXG5cdFwiLi9sYW5kaW5nMS5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sYW5kaW5nMS5qcGVnXCIsXG5cdFwiLi9sYW5kaW5nMS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sYW5kaW5nMS53ZWJwXCIsXG5cdFwiLi9wYXBhamExLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGFwYWphMS5wbmdcIixcblx0XCIuL3BhcGFqYTEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGFwYWphMS53ZWJwXCIsXG5cdFwiLi9wcm9tbzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9tbzEucG5nXCIsXG5cdFwiLi9wcm9tbzEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW8xLndlYnBcIixcblx0XCIuL3Nsb3QxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xvdDEucG5nXCIsXG5cdFwiLi9zbG90MS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbG90MS53ZWJwXCIsXG5cdFwiLi90ZWxlZ3JhbS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RlbGVncmFtLnN2Z1wiLFxuXHRcIi4vdG9kbzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90b2RvMS5wbmdcIixcblx0XCIuL3RvZG8xLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RvZG8xLndlYnBcIixcblx0XCIuL3R3aXR0ZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90d2l0dGVyLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gbnB4IHByZXR0aWVyIC0td3JpdGUgXCIqKi8qLnB1Z1wiXG5pbXBvcnQgXCIuL3Njc3MvYXBwLnNjc3NcIjtcbmltcG9ydCBcIi4vY29yZS9yZXNpemVyXCI7XG5pbXBvcnQgXCIuL2NvcmUvbWFpblwiO1xuaW1wb3J0IFwiLi92aWV3cy9pbmRleC5wdWdcIjtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJNYXRoIiwibWluIiwibWF4IiwibW9kaWZpZXJEZXZpY2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9ubG9hZCIsIm9ucmVzaXplIiwiYWJvdXRCbnQiLCJxdWVyeVNlbGVjdG9yQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==