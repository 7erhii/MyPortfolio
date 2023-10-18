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
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003ESerhiy Krepets\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/header.pug */ "./src/views/parts/header.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/hero.pug */ "./src/views/parts/hero.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/about.pug */ "./src/views/parts/about.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Csection class=\"works\"\u003E\u003Cdiv class=\"works__container container\"\u003E\u003Cdiv class=\"works__items\"\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Drupal 7 / JS / figma / Swiper / jsMath', 'commercial and private sectors for the sale', 'aclima.webp', 'https://aclima.startsite.com.ua/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Wordpress / iMask / BEM / Postman', 'An online TV platform', 'redmax.webp', 'https://www.redmax.tv/');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"works__item\"\u003E";
pug_mixins["worksItem"]('Pug / OpenWeatherAPI / TS / Axios', 'Weather application in the selected city.', 'weatherApp.webp', 'https://weather-stats-app.netlify.app/');
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
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003Cscript async=\"\" src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=G-FMCTP5W38G\"\u003E\u003C\u002Fscript\u003E\u003Cscript\u003Ewindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-FMCTP5W38G');\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
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
	"./aclima.webp": "./src/assets/images/aclima.webp",
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
	"./redmax.webp": "./src/assets/images/redmax.webp",
	"./slot1.png": "./src/assets/images/slot1.png",
	"./slot1.webp": "./src/assets/images/slot1.webp",
	"./telegram.svg": "./src/assets/images/telegram.svg",
	"./todo1.png": "./src/assets/images/todo1.png",
	"./todo1.webp": "./src/assets/images/todo1.webp",
	"./twitter.svg": "./src/assets/images/twitter.svg",
	"./weatherApp.png": "./src/assets/images/weatherApp.png",
	"./weatherApp.webp": "./src/assets/images/weatherApp.webp"
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

/***/ "./src/assets/images/aclima.webp":
/*!***************************************!*\
  !*** ./src/assets/images/aclima.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/255e98845dd46f65939f.webp";

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

/***/ "./src/assets/images/redmax.webp":
/*!***************************************!*\
  !*** ./src/assets/images/redmax.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c847735c20ff0587fe66.webp";

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

/***/ "./src/assets/images/weatherApp.png":
/*!******************************************!*\
  !*** ./src/assets/images/weatherApp.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/eedd323fedb090136418.png";

/***/ }),

/***/ "./src/assets/images/weatherApp.webp":
/*!*******************************************!*\
  !*** ./src/assets/images/weatherApp.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/56bac3a0f97ca84c0dcb.webp";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDckNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvYWJvdXQucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvaGVhZGVyLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2hlcm8ucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL21haW4udHMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9hc3NldHMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy9pZ25vcmVkfC9Vc2Vycy83ZXJoaXkvRGVza3RvcC9XRUIvcHJvamVjdHMvTXlQZmxvTWFpbi9NeVBvcnRmb2xpby9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG5cbmNvbnN0IGFib3V0Qm50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0LWJ0bi1qcycpIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX21peGluc1tcImltYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGZpbGUpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtmaWxlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcIjtcbn07XG5cblxuXG5cbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oaGVhZGVyLCBkZXNjcmlwdGlvbiwgaW1hZ2VTcmMsIGhyZWYpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2FcIiArIChcIiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIGhyZWYsIHRydWUsIHRydWUpK1wiIHRhcmdldD1cXFwiX2JsYW5rXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtLWhlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW0tdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2gzXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGhlYWRlcikgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmgzXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGRlc2NyaXB0aW9uKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbS1pbWdcXFwiXFx1MDAzRVxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgP1xcdTAwM0VcXG5cXG5cXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0Nzdmcgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ3RpdGxlXFx1MDAyRlxcdTAwM0VcXG5cXG5cXHUwMDNDZyBpZD1cXFwiQ29tcGxldGVcXFwiXFx1MDAzRVxcblxcblxcdTAwM0NnIGlkPVxcXCJhcnJvdy11cC1yaWdodFxcXCJcXHUwMDNFXFxuXFxuXFx1MDAzQ2dcXHUwMDNFXFxuXFxuXFx1MDAzQ3BvbHlsaW5lIGRhdGEtbmFtZT1cXFwiUmlnaHRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGlkPVxcXCJSaWdodC0yXFxcIiBwb2ludHM9XFxcIjE4LjcgMTIuNCAxOC43IDUuMyAxMS42IDUuM1xcXCIgc3Ryb2tlPVxcXCIjMDAwMDAwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcblxcdTAwM0NsaW5lIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMDAwMFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHgxPVxcXCI1LjNcXFwiIHgyPVxcXCIxNy4xXFxcIiB5MT1cXFwiMTguN1xcXCIgeTI9XFxcIjYuOVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtLWJnXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShpbWFnZVNyYyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXCI7XG59O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRVNlcmhpeSBLcmVwZXRzXFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRcXHUwMDNFXFx1MDAzQ2JvZHlcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL3BhcnRzL2hlYWRlci5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvaGVyby5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvYWJvdXQucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJ3b3Jrc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2NvbnRhaW5lciBjb250YWluZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnRHJ1cGFsIDcgLyBKUyAvIGZpZ21hIC8gU3dpcGVyIC8ganNNYXRoJywgJ2NvbW1lcmNpYWwgYW5kIHByaXZhdGUgc2VjdG9ycyBmb3IgdGhlIHNhbGUnLCAnYWNsaW1hLndlYnAnLCAnaHR0cHM6Ly9hY2xpbWEuc3RhcnRzaXRlLmNvbS51YS8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ1dvcmRwcmVzcyAvIGlNYXNrIC8gQkVNIC8gUG9zdG1hbicsICdBbiBvbmxpbmUgVFYgcGxhdGZvcm0nLCAncmVkbWF4LndlYnAnLCAnaHR0cHM6Ly93d3cucmVkbWF4LnR2LycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnUHVnIC8gT3BlbldlYXRoZXJBUEkgLyBUUyAvIEF4aW9zJywgJ1dlYXRoZXIgYXBwbGljYXRpb24gaW4gdGhlIHNlbGVjdGVkIGNpdHkuJywgJ3dlYXRoZXJBcHAud2VicCcsICdodHRwczovL3dlYXRoZXItc3RhdHMtYXBwLm5ldGxpZnkuYXBwLycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnUHVnIC8gU0NTUyAvIEdyZWVuIFNvY2sgLyBKUycsICdBIHBhZ2Ugd2l0aCBpbmZpbml0ZSBzY3JvbGwgYW5kIGxpbmtzIHRvIHNvY2lhbCBtZWRpYS4nLCAnaW5mMS53ZWJwJywgJ2h0dHBzOi8vZ2xpdHRlcnkta2xlcG9uLWY2YTRlMy5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ1B1ZyAvIFNDU1MgLyBHcmVlbiBTb2NrIC8gSlMnLCAnQSB3ZWIgcGFnZSB3aXRoIHJlc3BvbnNpdmUgZGVzaWduLCBzaG93Y2FzaW5nIHBvcnRmb2xpbyBwcm9qZWN0cy4nLCAnbGFuZGluZzEud2VicCcsICdodHRwczovL2J1Y29saWMtYmxhbmNtYW5nZS02ZWUxMjQubmV0bGlmeS5hcHAvJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCd2YW5pbGxhLmpzIC8gRVM2IC8gUHVnIC8gTmV0bGlmeScsICdDcmVhdGluZyBlZGl0aW5nIGRlbGV0aW9uIHRhc2tzLCB0cmFja2luZyBleGVjdXRpb24gdGltZSwnLCAndG9kbzEud2VicCcsICdodHRwczovL211c2ljYWwtY2F0LWQ5MDM1MS5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ1B1ZyAvIFNDU1MgLyBKUyAvIEZvbnRBd2Vzb21lJywgJ1NvY2lhbCBjYXJkcywgcGFnZSBkaXNwbGF5IHN3aXRjaGluZyBhbmQgY29sb3IgY2hhbmdlJywgJ2NhcmRzMS53ZWJwJywgJ2h0dHBzOi8vZWZmb3J0bGVzcy1wYWxtaWVyLTcwNDZkNS5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ01peGlucyAvIFNDU1MgLyBKUyAvIEZvbnRBd2Vzb21lICcsICdQaXhlbHBlcmZlY3QgbGF5b3V0IHBhZ2UgdXNpbmcgZmlnbWEvcHVnL3Njc3Mvd2VicGFjaywnLCAnc2xvdDEud2VicCcsICdodHRwczovL2Nvc21pYy1nbm9tZS1jZTA5OGMubmV0bGlmeS5hcHAvJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3b3Jrc19faXRlbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wid29ya3NJdGVtXCJdKCdGbG9wIEFwcCcsICdQYWdlIHdpdGggZmxpcHBpbmcgY2FyZHMnLCAncHJvbW8xLndlYnAnLCAnaHR0cHM6Ly9lZmZ1bGdlbnQtbGxhbWEtMzAzNzBlLm5ldGxpZnkuYXBwLycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnTm9kZS5qcyAvIFRlbGVncmFwaC5qcyAvIENoZWVyaW8gcGFyc2luZycsICdBIHBhZ2UgdGhhdCBhbGxvd3MgY29sbGVjdGluZyBjb250YWN0cyBmb3Igc2VuZGluZyB0byBUZWxlZ3JhbS4nLCAnbGFtaTEud2VicCcsICdodHRwczovL3JlZ2FsLW5hcndoYWwtZWYxNTgwLm5ldGxpZnkuYXBwLycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnUmVhY3QgLyBSZWFjdCBSb3V0aW5nIC8gdXNlIGxvY2Fsc3RvcmFnZScsICdzaW1wbGUgcmVhY3QgbW9iaWxlIGFwcCcsICdndXNlMS53ZWJwJywgJ2h0dHBzOi8vd29uZHJvdXMtY3JlcGUtOTg1ZGMzLm5ldGxpZnkuYXBwLycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid29ya3NfX2l0ZW1cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcIndvcmtzSXRlbVwiXSgnUHVnIC8gTWl4aW5zIC8gU0NTUycsICdDb252ZW5pZW50IHBsYXRmb3JtIHdpdGggYSBncmlkIG9mIGNhcmRzJywgJ3BhcGFqYTEud2VicCcsICdodHRwczovL2NoaWMtZHJhZ29uLTYzZDU5NS5uZXRsaWZ5LmFwcC8nKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndvcmtzX19pdGVtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJ3b3Jrc0l0ZW1cIl0oJ05vZGUuanMgLyBUZWxlZ3JhcGguanMgLyBDaGVlcmlvIHBhcnNpbmcnLCAnQXV0b21hdGVkIGRhaWx5IHBvc3QgY3JlYXRpb24gYnkgc2NyYXBpbmcgY29udGVudCBmcm9tIGFuIGF3YXJkaW5nIHdlYnNpdGUnLCAnYm90MS53ZWJwJywgJ2h0dHBzOi8vdC5tZS9jc3NfZGFpbHknKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDc2NyaXB0IGFzeW5jPVxcXCJcXFwiIHNyYz1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZ3d3cuZ29vZ2xldGFnbWFuYWdlci5jb21cXHUwMDJGZ3RhZ1xcdTAwMkZqcz9pZD1HLUZNQ1RQNVczOEdcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGc2NyaXB0XFx1MDAzRVxcdTAwM0NzY3JpcHRcXHUwMDNFd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XFxuZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxcbmd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XFxuZ3RhZygnY29uZmlnJywgJ0ctRk1DVFA1VzM4RycpO1xcdTAwM0NcXHUwMDJGc2NyaXB0XFx1MDAzRVxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwiYWJvdXRcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fY29udGFpbmVyIGNvbnRhaW5lclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X190aXRsZVxcXCJcXHUwMDNFIFxcdTAwM0NzcGFuXFx1MDAzRVNraWxsc1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fc2tpbGxzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fYnRuc1xcXCJcXHUwMDNFIFxcdTAwM0NhIGNsYXNzPVxcXCJhYm91dF9fYnRuIGFib3V0LWJ0bi1qc1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFSlNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0Nzdmcgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE2IDEyTDggMTJcXFwiIHN0cm9rZT1cXFwiIzMyMzIzMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTMgMTVMMTUuOTEzIDEyLjA4N1YxMi4wODdDMTUuOTYxIDEyLjAzOSAxNS45NjEgMTEuOTYxIDE1LjkxMyAxMS45MTNWMTEuOTEzTDEzIDlcXFwiIHN0cm9rZT1cXFwiIzMyMzIzMlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImFib3V0X19idG4gYWJvdXQtYnRuLWpzXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VIVE1MXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj9cXHUwMDNFXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNiAxMkw4IDEyXFxcIiBzdHJva2U9XFxcIiMzMjMyMzJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTEzIDE1TDE1LjkxMyAxMi4wODdWMTIuMDg3QzE1Ljk2MSAxMi4wMzkgMTUuOTYxIDExLjk2MSAxNS45MTMgMTEuOTEzVjExLjkxM0wxMyA5XFxcIiBzdHJva2U9XFxcIiMzMjMyMzJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJhYm91dF9fYnRuIGFib3V0LWJ0bi1qc1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFQ1NTXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj9cXHUwMDNFXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNiAxMkw4IDEyXFxcIiBzdHJva2U9XFxcIiMzMjMyMzJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTEzIDE1TDE1LjkxMyAxMi4wODdWMTIuMDg3QzE1Ljk2MSAxMi4wMzkgMTUuOTYxIDExLjk2MSAxNS45MTMgMTEuOTEzVjExLjkxM0wxMyA5XFxcIiBzdHJva2U9XFxcIiMzMjMyMzJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJhYm91dF9fYnRuIGFib3V0LWJ0bi1qc1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFQWxsXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj9cXHUwMDNFXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNiAxMkw4IDEyXFxcIiBzdHJva2U9XFxcIiMzMjMyMzJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTEzIDE1TDE1LjkxMyAxMi4wODdWMTIuMDg3QzE1Ljk2MSAxMi4wMzkgMTUuOTYxIDExLjk2MSAxNS45MTMgMTEuOTEzVjExLjkxM0wxMyA5XFxcIiBzdHJva2U9XFxcIiMzMjMyMzJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19kZXNjclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX2Rlc2NyLWl0ZW1cXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VKYXZhc2NyaXB0IChFUzUgRVM2KVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVNQQSAoUmVhY3QsIEFuZ3VsYXIpXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFSlF1ZXJ5IC0gV2VicGFja1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRU5vZGUuanNcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX2Rlc2NyLWl0ZW1cXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VIVE1MIChQdWcsQm9vdHN0cmFwLCBUYWlsd2luZClcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VUYWdzXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwMkZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3BcXHUwMDNFTGlua3NcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAyRlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDcFxcdTAwM0VNZXRhXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19kZXNjci1pdGVtXFxcIlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFU0NTU1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUxheW91dFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVBpeGVsUGVyZmVjdFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUFuaW1hdGlvbnNcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXRfX2Rlc2NyLWl0ZW0tLWZ1bGxcXFwiXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJhYm91dF9fZGVzY3ItaXRlbS1jbG9zZVxcXCJcXHUwMDNFIFxcdTAwM0NzcGFuXFx1MDAzRXhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUpTXFx1MDAzQ3NwYW5cXHUwMDNFIEphdmFzY3JpcHQgXFx1MDAyRiBFUzUgXFx1MDAyRiBFUzYgXFx1MDAyRiBTUEEgKFJlYWN0LCBBbmd1bGFyKSBcXHUwMDJGIEpRdWVyeS0gV2VicGFjayBcXHUwMDJGIE5vZGUuanNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUhUTUxcXHUwMDNDc3BhblxcdTAwM0UgUHVnLCBCb290c3RyYXAgXFx1MDAyRiBUYWlsd2luZC0gUmVzcG9uc2l2ZSBQaXhlbCBQZXJmZWN0IFVJIGxheW91dC0gVUlcXHUwMDJGVVggVGVzdGluZy0gU0VPIGZyaWVuZGx5IGNvZGVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUNTU1xcdTAwM0NzcGFuXFx1MDAzRSBTQVNTLCBHcmVlblNvY2ssIFBpeGVsIFBlcmZlY3QsIEFuaW1hdGlvbnNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVBvc3Nlc1xcdTAwM0NzcGFuXFx1MDAzRSBHSVQgKEJpdEJ1Y2tldCwgR2l0SHViLCBHaXRsYWIpLSBNYWNPc1xcdTAwMkZMaW51eC0gRmlnbWEsIFBob3Rvc2hvcCwgSWxsdXN0cmF0b3IsIFplcGxpblxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFIFNvZnQgU2tpbGxzXFx1MDAzQ3NwYW5cXHUwMDNFICBFbmdsaXNoIChJbnRlcm1lZGlhdGUgQjEpLSBVa3JhaW5pYW4gKE5hdGl2ZSkgXFx1MDAyRiBSdXNzaWFuLSBGYXN0IGxlYXJuaW5nLSBQdW5jdHVhbGl0eS0gRmxleGliaWxpdHktIFNraWxsIHRvIHdvcmsgaW4gdGVhbVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwiaGVyb1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2NvbnRhaW5lciBjb250YWluZXJcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hYm91dFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXRleHRcXFwiXFx1MDAzRSBcXHUwMDNDaDFcXHUwMDNFSGVsbG8sIEknbSBTZXJoaXksIEZyb250LWVuZCBkZXZlbG9wZXJcXHUwMDNDXFx1MDAyRmgxXFx1MDAzRVxcdTAwM0NoMlxcdTAwM0VDcmVhdGluZyBzZWFtbGVzcyB1c2VyIGV4cGVyaWVuY2VzIHRocm91Z2ggY29kZVxcdTAwM0NcXHUwMDJGaDJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYWJvdXQtYWN0aW9uc1xcXCJcXHUwMDNFIFxcdTAwM0NhIGNsYXNzPVxcXCJoZXJvX19hYm91dC1zb2NpYWwgc29jaWFsLWJ0blxcXCIgaHJlZj1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZnaXRodWIuY29tXFx1MDAyRjdlcmhpaVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiXFx1MDAzRSBcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJVVEYtOFxcXCIgc3RhbmRhbG9uZT1cXFwibm9cXFwiP1xcdTAwM0VcXG5cXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0Nzdmcgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMTk5OVxcdTAwMkZ4bGlua1xcXCJcXHUwMDNFXFxuICAgIFxcbiAgICBcXHUwMDNDdGl0bGVcXHUwMDNFZ2l0aHViIFsjMTQyXVxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFxuICAgIFxcdTAwM0NkZXNjXFx1MDAzRUNyZWF0ZWQgd2l0aCBTa2V0Y2guXFx1MDAzQ1xcdTAwMkZkZXNjXFx1MDAzRVxcbiAgICBcXHUwMDNDZGVmc1xcdTAwM0VcXG5cXG5cXHUwMDNDXFx1MDAyRmRlZnNcXHUwMDNFXFxuICAgIFxcdTAwM0NnIGlkPVxcXCJQYWdlLTFcXFwiIHN0cm9rZT1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxXFxcIiBmaWxsPVxcXCJub25lXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2cgaWQ9XFxcIkRyaWJiYmxlLUxpZ2h0LVByZXZpZXdcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC0xNDAuMDAwMDAwLCAtNzU1OS4wMDAwMDApXFxcIiBmaWxsPVxcXCIjMDAwMDAwXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDZyBpZD1cXFwiaWNvbnNcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDU2LjAwMDAwMCwgMTYwLjAwMDAwMClcXFwiXFx1MDAzRVxcbiAgICAgICAgICAgICAgICBcXHUwMDNDcGF0aCBkPVxcXCJNOTQsNzM5OSBDOTkuNTIzLDczOTkgMTA0LDc0MDMuNTkgMTA0LDc0MDkuMjUzIEMxMDQsNzQxMy43ODIgMTAxLjEzOCw3NDE3LjYyNCA5Ny4xNjcsNzQxOC45ODEgQzk2LjY2LDc0MTkuMDgyIDk2LjQ4LDc0MTguNzYyIDk2LjQ4LDc0MTguNDg5IEM5Ni40OCw3NDE4LjE1MSA5Ni40OTIsNzQxNy4wNDcgOTYuNDkyLDc0MTUuNjc1IEM5Ni40OTIsNzQxNC43MTkgOTYuMTcyLDc0MTQuMDk1IDk1LjgxMyw3NDEzLjc3NyBDOTguMDQsNzQxMy41MjMgMTAwLjM4LDc0MTIuNjU2IDEwMC4zOCw3NDA4LjcxOCBDMTAwLjM4LDc0MDcuNTk4IDk5Ljk5Miw3NDA2LjY4NCA5OS4zNSw3NDA1Ljk2NiBDOTkuNDU0LDc0MDUuNzA3IDk5Ljc5Nyw3NDA0LjY2NCA5OS4yNTIsNzQwMy4yNTIgQzk5LjI1Miw3NDAzLjI1MiA5OC40MTQsNzQwMi45NzcgOTYuNTA1LDc0MDQuMzAzIEM5NS43MDYsNzQwNC4wNzYgOTQuODUsNzQwMy45NjIgOTQsNzQwMy45NTggQzkzLjE1LDc0MDMuOTYyIDkyLjI5NSw3NDA0LjA3NiA5MS40OTcsNzQwNC4zMDMgQzg5LjU4Niw3NDAyLjk3NyA4OC43NDYsNzQwMy4yNTIgODguNzQ2LDc0MDMuMjUyIEM4OC4yMDMsNzQwNC42NjQgODguNTQ2LDc0MDUuNzA3IDg4LjY0OSw3NDA1Ljk2NiBDODguMDEsNzQwNi42ODQgODcuNjE5LDc0MDcuNTk4IDg3LjYxOSw3NDA4LjcxOCBDODcuNjE5LDc0MTIuNjQ2IDg5Ljk1NCw3NDEzLjUyNiA5Mi4xNzUsNzQxMy43ODUgQzkxLjg4OSw3NDE0LjA0MSA5MS42Myw3NDE0LjQ5MyA5MS41NCw3NDE1LjE1NiBDOTAuOTcsNzQxNS40MTggODkuNTIyLDc0MTUuODcxIDg4LjYzLDc0MTQuMzA0IEM4OC42Myw3NDE0LjMwNCA4OC4xMDEsNzQxMy4zMTkgODcuMDk3LDc0MTMuMjQ3IEM4Ny4wOTcsNzQxMy4yNDcgODYuMTIyLDc0MTMuMjM0IDg3LjAyOSw3NDEzLjg3IEM4Ny4wMjksNzQxMy44NyA4Ny42ODQsNzQxNC4xODUgODguMTM5LDc0MTUuMzcgQzg4LjEzOSw3NDE1LjM3IDg4LjcyNiw3NDE3LjIgOTEuNTA4LDc0MTYuNTggQzkxLjUxMyw3NDE3LjQzNyA5MS41MjIsNzQxOC4yNDUgOTEuNTIyLDc0MTguNDg5IEM5MS41MjIsNzQxOC43NiA5MS4zMzgsNzQxOS4wNzcgOTAuODM5LDc0MTguOTgyIEM4Ni44NjUsNzQxNy42MjcgODQsNzQxMy43ODMgODQsNzQwOS4yNTMgQzg0LDc0MDMuNTkgODguNDc4LDczOTkgOTQsNzM5OVxcXCIgaWQ9XFxcImdpdGh1Yi1bIzE0Ml1cXFwiXFx1MDAzRVxcblxcblxcdTAwM0NcXHUwMDJGcGF0aFxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuICAgIFxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXBvcnRmb2xpbyBidG5cXFwiIGhyZWY9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGZHJpdmUuZ29vZ2xlLmNvbVxcdTAwMkZmaWxlXFx1MDAyRmRcXHUwMDJGMTZsSEVzVlFiWENJcEpJMVctRzJxTV9zajhlRkpmM1JkXFx1MDAyRnZpZXdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VWaWV3IENWXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgP1xcdTAwM0VcXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0Nzdmcgd2lkdGg9XFxcIjgwMHB4XFxcIiBoZWlnaHQ9XFxcIjgwMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFx1MDAzQ3BhdGggZD1cXFwiTTEyIDEyVjE5TTEyIDE5TDkuNzUgMTYuNjY2N00xMiAxOUwxNC4yNSAxNi42NjY3TTYuNiAxNy44MzMzQzQuNjExNzggMTcuODMzMyAzIDE2LjE5MTcgMyAxNC4xNjY3QzMgMTIuNDk4IDQuMDk0MzggMTEuMDg5NyA1LjU5MTk4IDEwLjY0NTdDNS42NTU2MiAxMC42MjY4IDUuNyAxMC41Njc1IDUuNyAxMC41QzUuNyA3LjQ2MjQzIDguMTE3NjYgNSAxMS4xIDVDMTQuMDgyMyA1IDE2LjUgNy40NjI0MyAxNi41IDEwLjVDMTYuNSAxMC41NTgyIDE2LjU1MzYgMTAuNjAxNCAxNi42MDk0IDEwLjU4ODdDMTYuODYzOCAxMC41MzA2IDE3LjEyODQgMTAuNSAxNy40IDEwLjVDMTkuMzg4MiAxMC41IDIxIDEyLjE0MTYgMjEgMTQuMTY2N0MyMSAxNi4xOTE3IDE5LjM4ODIgMTcuODMzMyAxNy40IDE3LjgzMzNcXFwiIHN0cm9rZT1cXFwiIzQ2NDQ1NVxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJoZXJvX19hYm91dC1zb2NpYWwgc29jaWFsLWJ0blxcXCIgaHJlZj1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZ0d2l0dGVyLmNvbVxcdTAwMkZTS2Vrc3N5XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCJcXHUwMDNFIFxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj9cXHUwMDNFXFxuXFxuXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIGZpbGw9XFxcIiMwMDAwMDBcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMTk5OVxcdTAwMkZ4bGlua1xcXCIgXFxuXFx0IHZpZXdCb3g9XFxcIi0xNDMgMTQ1IDUxMiA1MTJcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFx1MDAzRVxcblxcdTAwM0NnXFx1MDAzRVxcblxcdFxcdTAwM0NwYXRoIGQ9XFxcIk0xMTMsMTQ1Yy0xNDEuNCwwLTI1NiwxMTQuNi0yNTYsMjU2czExNC42LDI1NiwyNTYsMjU2czI1Ni0xMTQuNiwyNTYtMjU2UzI1NC40LDE0NSwxMTMsMTQ1eiBNMjcyLjgsNTYwLjdcXG5cXHRcXHRjLTIwLjgsMjAuOC00NC45LDM3LjEtNzEuOCw0OC40Yy0yNy44LDExLjgtNTcuNCwxNy43LTg4LDE3LjdjLTMwLjUsMC02MC4xLTYtODgtMTcuN2MtMjYuOS0xMS40LTUxLjEtMjcuNy03MS44LTQ4LjRcXG5cXHRcXHRjLTIwLjgtMjAuOC0zNy4xLTQ0LjktNDguNC03MS44Qy0xMDcsNDYxLjEtMTEzLDQzMS41LTExMyw0MDFzNi02MC4xLDE3LjctODhjMTEuNC0yNi45LDI3LjctNTEuMSw0OC40LTcxLjhcXG5cXHRcXHRjMjAuOS0yMC44LDQ1LTM3LjEsNzEuOS00OC41QzUyLjksMTgxLDgyLjUsMTc1LDExMywxNzVzNjAuMSw2LDg4LDE3LjdjMjYuOSwxMS40LDUxLjEsMjcuNyw3MS44LDQ4LjRcXG5cXHRcXHRjMjAuOCwyMC44LDM3LjEsNDQuOSw0OC40LDcxLjhjMTEuOCwyNy44LDE3LjcsNTcuNCwxNy43LDg4YzAsMzAuNS02LDYwLjEtMTcuNyw4OEMzMDkuOCw1MTUuOCwyOTMuNSw1NDAsMjcyLjgsNTYwLjd6XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx0XFx1MDAzQ3BhdGggZD1cXFwiTTIzNC4zLDMxMy4xYy0xMC4yLDYtMjEuNCwxMC40LTMzLjQsMTIuOGMtOS42LTEwLjItMjMuMy0xNi42LTM4LjQtMTYuNmMtMjksMC01Mi42LDIzLjYtNTIuNiw1Mi42YzAsNC4xLDAuNCw4LjEsMS40LDEyXFxuXFx0XFx0Yy00My43LTIuMi04Mi41LTIzLjEtMTA4LjQtNTVjLTQuNSw3LjgtNy4xLDE2LjgtNy4xLDI2LjVjMCwxOC4yLDkuMywzNC4zLDIzLjQsNDMuOGMtOC42LTAuMy0xNi43LTIuNy0yMy44LTYuNnYwLjZcXG5cXHRcXHRjMCwyNS41LDE4LjEsNDYuOCw0Mi4yLDUxLjZjLTQuNCwxLjItOS4xLDEuOS0xMy45LDEuOWMtMy40LDAtNi43LTAuMy05LjktMC45YzYuNywyMC45LDI2LjEsMzYuMSw0OS4xLDM2LjVcXG5cXHRcXHRjLTE4LDE0LjEtNDAuNywyMi41LTY1LjMsMjIuNWMtNC4yLDAtOC40LTAuMi0xMi42LTAuN2MyMy4zLDE0LjksNTAuOSwyMy42LDgwLjYsMjMuNmM5Ni44LDAsMTQ5LjctODAuMiwxNDkuNy0xNDkuN1xcblxcdFxcdGMwLTIuMywwLTQuNi0wLjEtNi44YzEwLjMtNy41LDE5LjItMTYuNywyNi4yLTI3LjNjLTkuNCw0LjItMTkuNiw3LTMwLjIsOC4zQzIyMi4xLDMzNS43LDIzMC40LDMyNS40LDIzNC4zLDMxMy4xelxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlcm9fX2Fib3V0LXNvY2lhbCBzb2NpYWwtYnRuXFxcIiBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRnQubWVcXHUwMDJGUzNSSFlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIlxcdTAwM0UgXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiNzE4XFxcIiBoZWlnaHQ9XFxcIjcxOFxcXCIgdmlld0JveD1cXFwiMCAwIDcxOCA3MThcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTU1OSAyMjUuNjY3TDEyNS42NjcgMzc1LjY2NkwyNzUuNjY3IDQyNS42NjZNNTU5IDIyNS42NjdMMjc1LjY2NyA0MjUuNjY2TTU1OSAyMjUuNjY3TDQyNS42NjcgNTc1LjY2NkwyNzUuNjY3IDQyNS42NjZcXFwiIHN0cm9rZT1cXFwiYmxhY2tcXFwiIHN0cm9rZS13aWR0aD1cXFwiNTBcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0zNTkgNjkyLjMzM0M1NDMuMDkzIDY5Mi4zMzMgNjkyLjMzMyA1NDMuMDkzIDY5Mi4zMzMgMzU5QzY5Mi4zMzMgMTc0LjkwNSA1NDMuMDkzIDI1LjY2NjUgMzU5IDI1LjY2NjVDMTc0LjkwNSAyNS42NjY1IDI1LjY2NjcgMTc0LjkwNSAyNS42NjY3IDM1OUMyNS42NjY3IDU0My4wOTMgMTc0LjkwNSA2OTIuMzMzIDM1OSA2OTIuMzMzWlxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCIgc3Ryb2tlLXdpZHRoPVxcXCI1MFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJoZXJvX19hYm91dC1zb2NpYWwgc29jaWFsLWJ0blxcXCIgaHJlZj1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZ3d3cuaW5zdGFncmFtLmNvbVxcdTAwMkY3ZXJoaVxcdTAwMkZcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIlxcdTAwM0UgXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXG5cXG5cXHUwMDNDIS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tXFx1MDAzRVxcblxcdTAwM0NzdmcgZmlsbD1cXFwiIzAwMDAwMFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgd2lkdGg9XFxcIjgwMHB4XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIiBcXG5cXHQgdmlld0JveD1cXFwiLTE0MyAxNDUgNTEyIDUxMlxcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCJcXHUwMDNFXFxuXFx1MDAzQ2dcXHUwMDNFXFxuXFx0XFx1MDAzQ3BhdGggZD1cXFwiTTExMywxNDVjLTE0MS40LDAtMjU2LDExNC42LTI1NiwyNTZzMTE0LjYsMjU2LDI1NiwyNTZzMjU2LTExNC42LDI1Ni0yNTZTMjU0LjQsMTQ1LDExMywxNDV6IE0yNzIuOCw1NjAuN1xcblxcdFxcdGMtMjAuOCwyMC44LTQ0LjksMzcuMS03MS44LDQ4LjRjLTI3LjgsMTEuOC01Ny40LDE3LjctODgsMTcuN2MtMzAuNSwwLTYwLjEtNi04OC0xNy43Yy0yNi45LTExLjQtNTEuMS0yNy43LTcxLjgtNDguNFxcblxcdFxcdGMtMjAuOC0yMC44LTM3LjEtNDQuOS00OC40LTcxLjhDLTEwNyw0NjEuMS0xMTMsNDMxLjUtMTEzLDQwMXM2LTYwLjEsMTcuNy04OGMxMS40LTI2LjksMjcuNy01MS4xLDQ4LjQtNzEuOFxcblxcdFxcdGMyMC45LTIwLjgsNDUtMzcuMSw3MS45LTQ4LjVDNTIuOSwxODEsODIuNSwxNzUsMTEzLDE3NXM2MC4xLDYsODgsMTcuN2MyNi45LDExLjQsNTEuMSwyNy43LDcxLjgsNDguNFxcblxcdFxcdGMyMC44LDIwLjgsMzcuMSw0NC45LDQ4LjQsNzEuOGMxMS44LDI3LjgsMTcuNyw1Ny40LDE3LjcsODhjMCwzMC41LTYsNjAuMS0xNy43LDg4QzMwOS44LDUxNS44LDI5My41LDU0MCwyNzIuOCw1NjAuN3pcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHRcXHUwMDNDcGF0aCBkPVxcXCJNMTkxLjYsMjczaC0xNTdjLTI3LjMsMC00OS41LDIyLjItNDkuNSw0OS41djUyLjN2MTA0LjhjMCwyNy4zLDIyLjIsNDkuNSw0OS41LDQ5LjVoMTU3YzI3LjMsMCw0OS41LTIyLjIsNDkuNS00OS41VjM3NC43XFxuXFx0XFx0di01Mi4zQzI0MSwyOTUuMiwyMTguOCwyNzMsMTkxLjYsMjczeiBNMjA1LjgsMzAyLjVoNS43djUuNnYzNy44bC00My4zLDAuMWwtMC4xLTQzLjRMMjA1LjgsMzAyLjV6IE03Ni41LDM3NC43XFxuXFx0XFx0YzguMi0xMS4zLDIxLjUtMTguOCwzNi41LTE4LjhzMjguMyw3LjQsMzYuNSwxOC44YzUuNCw3LjQsOC41LDE2LjUsOC41LDI2LjNjMCwyNC44LTIwLjIsNDUuMS00NS4xLDQ1LjFDODgsNDQ2LjEsNjgsNDI1LjgsNjgsNDAxXFxuXFx0XFx0QzY4LDM5MS4yLDcxLjIsMzgyLjEsNzYuNSwzNzQuN3ogTTIxNi4xLDQ3OS41YzAsMTMuNS0xMSwyNC41LTI0LjUsMjQuNWgtMTU3Yy0xMy41LDAtMjQuNS0xMS0yNC41LTI0LjVWMzc0LjdoMzguMlxcblxcdFxcdGMtMy4zLDguMS01LjIsMTctNS4yLDI2LjNjMCwzOC42LDMxLjQsNzAsNzAsNzBjMzguNiwwLDcwLTMxLjQsNzAtNzBjMC05LjMtMS45LTE4LjItNS4yLTI2LjNoMzguMlY0NzkuNXpcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2ltZ1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwidmFyIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFib3V0LWJ0bi1qc1wiKTtcbnZhciBidG5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fYnRuc1wiKTtcbnZhciBkZXNjckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRfX2Rlc2NyXCIpO1xudmFyIGRlc2NySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFib3V0X19kZXNjci1pdGVtXCIpO1xudmFyIHNraWxsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRfX3NraWxsc1wiKTtcbnZhciBkZXNjckFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRfX2Rlc2NyLWl0ZW0tLWZ1bGxcIik7XG52YXIgY2xvc2VBbGxEZXNyY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRfX2Rlc2NyLWl0ZW0tY2xvc2VcIik7XG5idXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgYnV0dG9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBkZXNjckFsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd2VkLWdyaWRcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcdTA0MURcXHUwNDMwXFx1MDQzNlxcdTA0MzBcXHUwNDQyXFx1MDQzMCBcXHUwNDNBXFx1MDQzRFxcdTA0M0VcXHUwNDNGXFx1MDQzQVxcdTA0MzAgXFx1MDQ0MSBcXHUwNDM4XFx1MDQzRFxcdTA0MzRcXHUwNDM1XFx1MDQzQVxcdTA0NDFcXHUwNDNFXFx1MDQzQyBcIi5jb25jYXQoaW5kZXgpKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXRZID0gc2tpbGxzQ29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGJ0bnNDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuM3MgZWFzZVwiO1xuICAgICAgICAgICAgZGVzY3JDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuM3MgZWFzZVwiO1xuICAgICAgICAgICAgYnRuc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLVwiLmNvbmNhdChvZmZzZXRZLCBcInB4KVwiKTtcbiAgICAgICAgICAgIGRlc2NyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtXCIuY29uY2F0KG9mZnNldFksIFwicHgpXCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYnRuc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgIGRlc2NyQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IDMpIHtcbiAgICAgICAgICAgIGRlc2NyQWxsLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93ZWQtZ3JpZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBkZXNjckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgICAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5jbG9zZUFsbERlc3JjQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZGVzY3JBbGwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dlZC1ncmlkXCIpO1xufSk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vSU1HMS5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JTUcxLmpwZWdcIixcblx0XCIuL0lNRzEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSU1HMS53ZWJwXCIsXG5cdFwiLi9hY2xpbWEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYWNsaW1hLndlYnBcIixcblx0XCIuL2Fycm93LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYXJyb3cuc3ZnXCIsXG5cdFwiLi9iZy5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iZy5qcGVnXCIsXG5cdFwiLi9ib3QxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYm90MS5wbmdcIixcblx0XCIuL2JvdDEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYm90MS53ZWJwXCIsXG5cdFwiLi9jYXJkczEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXJkczEucG5nXCIsXG5cdFwiLi9jYXJkczEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FyZHMxLndlYnBcIixcblx0XCIuL2NsaWNrMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NsaWNrMS5zdmdcIixcblx0XCIuL2NsaWNrMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NsaWNrMi5zdmdcIixcblx0XCIuL2NsaWNrMy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NsaWNrMy5zdmdcIixcblx0XCIuL2Rvd25sb2FkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQuc3ZnXCIsXG5cdFwiLi9kb3dubG9hZDIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kb3dubG9hZDIuc3ZnXCIsXG5cdFwiLi9kb3dubG9hZDMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9kb3dubG9hZDMuc3ZnXCIsXG5cdFwiLi9mYXZpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdcIixcblx0XCIuL2dpdGh1Yi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2dpdGh1Yi5zdmdcIixcblx0XCIuL2d1c2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ndXNlLnBuZ1wiLFxuXHRcIi4vZ3VzZTEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ndXNlMS5wbmdcIixcblx0XCIuL2d1c2UxLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2d1c2UxLndlYnBcIixcblx0XCIuL2luZjEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbmYxLnBuZ1wiLFxuXHRcIi4vaW5mMS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbmYxLndlYnBcIixcblx0XCIuL2luc3RhZ3JhbS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIixcblx0XCIuL2tpZ2ExLmpwZWdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2tpZ2ExLmpwZWdcIixcblx0XCIuL2tpZ2ExLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2tpZ2ExLndlYnBcIixcblx0XCIuL2xhbWkxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGFtaTEucG5nXCIsXG5cdFwiLi9sYW1pMS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sYW1pMS53ZWJwXCIsXG5cdFwiLi9sYW5kaW5nMS5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sYW5kaW5nMS5qcGVnXCIsXG5cdFwiLi9sYW5kaW5nMS53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sYW5kaW5nMS53ZWJwXCIsXG5cdFwiLi9wYXBhamExLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGFwYWphMS5wbmdcIixcblx0XCIuL3BhcGFqYTEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGFwYWphMS53ZWJwXCIsXG5cdFwiLi9wcm9tbzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9tbzEucG5nXCIsXG5cdFwiLi9wcm9tbzEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW8xLndlYnBcIixcblx0XCIuL3JlZG1heC53ZWJwXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9yZWRtYXgud2VicFwiLFxuXHRcIi4vc2xvdDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbG90MS5wbmdcIixcblx0XCIuL3Nsb3QxLndlYnBcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Nsb3QxLndlYnBcIixcblx0XCIuL3RlbGVncmFtLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVsZWdyYW0uc3ZnXCIsXG5cdFwiLi90b2RvMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RvZG8xLnBuZ1wiLFxuXHRcIi4vdG9kbzEud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdG9kbzEud2VicFwiLFxuXHRcIi4vdHdpdHRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3R3aXR0ZXIuc3ZnXCIsXG5cdFwiLi93ZWF0aGVyQXBwLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvd2VhdGhlckFwcC5wbmdcIixcblx0XCIuL3dlYXRoZXJBcHAud2VicFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvd2VhdGhlckFwcC53ZWJwXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRXaWR0aCIsImRlZmF1bHRGb250IiwibW9iaWxlRm9udCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImZTaXplIiwiZGV2aWNlIiwidlciLCJ2SCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImZvbnRTaXplIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25sb2FkIiwib25yZXNpemUiLCJhYm91dEJudCIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwic291cmNlUm9vdCI6IiJ9