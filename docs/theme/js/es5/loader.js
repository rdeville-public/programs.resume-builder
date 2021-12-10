/* BEGIN MKDOCS TEMPLATE */
/* WARNING, DO NOT UPDATE CONTENT BETWEEN MKDOCS TEMPLATE TAG !*/
/* Modified content will be overwritten when updating.*/
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";(function(e){var r=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0}),t.CONFIG=t.MathJax=t.Loader=void 0;var o,a=n(1),i=n(2),c=n(2);Object.defineProperty(t,"Package",{enumerable:!0,get:function(){return c.Package}}),Object.defineProperty(t,"PackageError",{enumerable:!0,get:function(){return c.PackageError}}),function(n){n.ready=function(){for(var e,t,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];0===n.length&&(n=Array.from(i.Package.packages.keys()));var a=[];try{for(var c=r(n),s=c.next();!s.done;s=c.next()){var u=s.value,l=i.Package.packages.get(u)||new i.Package(u,!0);a.push(l.promise)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}return Promise.all(a)},n.load=function(){for(var e,n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(0===o.length)return Promise.resolve();var c=[];try{for(var s=r(o),u=s.next();!u.done;u=s.next()){var l=u.value,d=i.Package.packages.get(l);d||(d=new i.Package(l)).provides(t.CONFIG.provides[l]),d.checkNoLoad(),c.push(d.promise)}}catch(t){e={error:t}}finally{try{u&&!u.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return i.Package.loadAll(),Promise.all(c)},n.preLoad=function(){for(var e,n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];try{for(var c=r(o),s=c.next();!s.done;s=c.next()){var u=s.value,l=i.Package.packages.get(u);l||(l=new i.Package(u,!0)).provides(t.CONFIG.provides[u]),l.loaded()}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}},n.defaultReady=function(){void 0!==t.MathJax.startup&&t.MathJax.config.startup.ready()},n.getRoot=function(){var t=e+"/../../es5";if("undefined"!=typeof document){var n=document.currentScript||document.getElementById("MathJax-script");n&&(t=n.src.replace(/\/[^\/]*$/,""))}return t}}(o=t.Loader||(t.Loader={})),t.MathJax=a.MathJax,void 0===t.MathJax.loader&&(a.combineDefaults(t.MathJax.config,"loader",{paths:{mathjax:o.getRoot()},source:{},dependencies:{},provides:{},load:[],ready:o.defaultReady.bind(o),failed:function(e){return console.log("MathJax("+(e.package||"?")+"): "+e.message)},require:null}),a.combineWithMathJax({loader:o})),t.CONFIG=t.MathJax.config.loader}).call(this,"/")},function(e,t,n){"use strict";(function(e){var n=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};function r(e){return"object"==typeof e&&null!==e}function o(e,t){var a,i;try{for(var c=n(Object.keys(t)),s=c.next();!s.done;s=c.next()){var u=s.value;"__esModule"!==u&&(!r(e[u])||!r(t[u])||t[u]instanceof Promise?null!==t[u]&&void 0!==t[u]&&(e[u]=t[u]):o(e[u],t[u]))}}catch(e){a={error:e}}finally{try{s&&!s.done&&(i=c.return)&&i.call(c)}finally{if(a)throw a.error}}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.MathJax=t.combineWithMathJax=t.combineDefaults=t.combineConfig=t.isObject=void 0,t.isObject=r,t.combineConfig=o,t.combineDefaults=function e(t,o,a){var i,c;t[o]||(t[o]={}),t=t[o];try{for(var s=n(Object.keys(a)),u=s.next();!u.done;u=s.next()){var l=u.value;r(t[l])&&r(a[l])?e(t,l,a[l]):null==t[l]&&null!=a[l]&&(t[l]=a[l])}}catch(e){i={error:e}}finally{try{u&&!u.done&&(c=s.return)&&c.call(s)}finally{if(i)throw i.error}}return t},t.combineWithMathJax=function(e){return o(t.MathJax,e)},void 0===e.MathJax&&(e.MathJax={}),e.MathJax.version||(e.MathJax={version:"3.1.2",_:{},config:e.MathJax}),t.MathJax=e.MathJax}).call(this,n(3))},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},c=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Package=t.PackageError=void 0;var s=n(0),u=function(e){function t(t,n){var r=e.call(this,t)||this;return r.package=n,r}return o(t,e),t}(Error);t.PackageError=u;var l=function(){function e(t,n){void 0===n&&(n=!1),this.isLoaded=!1,this.isLoading=!1,this.hasFailed=!1,this.dependents=[],this.dependencies=[],this.dependencyCount=0,this.provided=[],this.name=t,this.noLoad=n,e.packages.set(t,this),this.promise=this.makePromise(this.makeDependencies())}return Object.defineProperty(e.prototype,"canLoad",{get:function(){return 0===this.dependencyCount&&!this.noLoad&&!this.isLoading&&!this.hasFailed},enumerable:!1,configurable:!0}),e.resolvePath=function(e,t){void 0===t&&(t=!0);var n,r=s.CONFIG.source[e]||e;for(r.match(/^(?:[a-z]+:\/)?\/|[a-z]:\\|\[/i)||(r="[mathjax]/"+r.replace(/^\.\//,"")),t&&!r.match(/\.[^\/]+$/)&&(r+=".js");(n=r.match(/^\[([^\]]*)\]/))&&s.CONFIG.paths.hasOwnProperty(n[1]);)r=s.CONFIG.paths[n[1]]+r.substr(n[0].length);return r},e.loadAll=function(){var e,t;try{for(var n=a(this.packages.values()),r=n.next();!r.done;r=n.next()){var o=r.value;o.canLoad&&o.load()}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},e.prototype.makeDependencies=function(){var t,n,r=[],o=e.packages,i=this.noLoad,u=this.name,l=[];s.CONFIG.dependencies.hasOwnProperty(u)?l.push.apply(l,c(s.CONFIG.dependencies[u])):"core"!==u&&l.push("core");try{for(var d=a(l),f=d.next();!f.done;f=d.next()){var h=f.value,p=o.get(h)||new e(h,i);this.dependencies.indexOf(p)<0&&(p.addDependent(this,i),this.dependencies.push(p),p.isLoaded||(this.dependencyCount++,r.push(p.promise)))}}catch(e){t={error:e}}finally{try{f&&!f.done&&(n=d.return)&&n.call(d)}finally{if(t)throw t.error}}return r},e.prototype.makePromise=function(e){var t=this,n=new Promise((function(e,n){t.resolve=e,t.reject=n})),r=s.CONFIG[this.name]||{};return r.ready&&(n=n.then((function(e){return r.ready(t.name)}))),e.length&&(e.push(n),n=Promise.all(e).then((function(e){return e.join(", ")}))),r.failed&&n.catch((function(e){return r.failed(new u(e,t.name))})),n},e.prototype.load=function(){if(!this.isLoaded&&!this.isLoading&&!this.noLoad){this.isLoading=!0;var t=e.resolvePath(this.name);s.CONFIG.require?this.loadCustom(t):this.loadScript(t)}},e.prototype.loadCustom=function(e){var t=this;try{var n=s.CONFIG.require(e);n instanceof Promise?n.then((function(){return t.checkLoad()})).catch((function(n){return t.failed("Can't load \""+e+'"\n'+n.message.trim())})):this.checkLoad()}catch(e){this.failed(e.message)}},e.prototype.loadScript=function(e){var t=this,n=document.createElement("script");n.src=e,n.charset="UTF-8",n.onload=function(e){return t.checkLoad()},n.onerror=function(n){return t.failed("Can't load \""+e+'"')},document.head.appendChild(n)},e.prototype.loaded=function(){var e,t,n,r;this.isLoaded=!0,this.isLoading=!1;try{for(var o=a(this.dependents),i=o.next();!i.done;i=o.next()){i.value.requirementSatisfied()}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}try{for(var c=a(this.provided),s=c.next();!s.done;s=c.next()){s.value.loaded()}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}this.resolve(this.name)},e.prototype.failed=function(e){this.hasFailed=!0,this.isLoading=!1,this.reject(new u(e,this.name))},e.prototype.checkLoad=function(){var e=this;((s.CONFIG[this.name]||{}).checkReady||function(){return Promise.resolve()})().then((function(){return e.loaded()})).catch((function(t){return e.failed(t)}))},e.prototype.requirementSatisfied=function(){this.dependencyCount&&(this.dependencyCount--,this.canLoad&&this.load())},e.prototype.provides=function(t){var n,r;void 0===t&&(t=[]);try{for(var o=a(t),i=o.next();!i.done;i=o.next()){var c=i.value,u=e.packages.get(c);u||(s.CONFIG.dependencies[c]||(s.CONFIG.dependencies[c]=[]),s.CONFIG.dependencies[c].push(c),(u=new e(c,!0)).isLoading=!0),this.provided.push(u)}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.addDependent=function(e,t){this.dependents.push(e),t||this.checkNoLoad()},e.prototype.checkNoLoad=function(){var e,t;if(this.noLoad){this.noLoad=!1;try{for(var n=a(this.dependencies),r=n.next();!r.done;r=n.next()){r.value.checkNoLoad()}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}}},e.packages=new Map,e}();t.Package=l},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),a=n(2);Object(r.combineWithMathJax)({_:{components:{loader:o,package:a}}});var i,c={tex:"[mathjax]/input/tex/extensions",sre:"[mathjax]/sre/"+("undefined"==typeof window?"sre-node":"sre_browser")},s=["[tex]/action","[tex]/ams","[tex]/amscd","[tex]/bbox","[tex]/boldsymbol","[tex]/braket","[tex]/bussproofs","[tex]/cancel","[tex]/color","[tex]/configmacros","[tex]/enclose","[tex]/extpfeil","[tex]/html","[tex]/mhchem","[tex]/newcommand","[tex]/noerrors","[tex]/noundefined","[tex]/physics","[tex]/require","[tex]/tagformat","[tex]/textmacros","[tex]/unicode","[tex]/verb"],u={startup:["loader"],"input/tex":["input/tex-base","[tex]/ams","[tex]/newcommand","[tex]/noundefined","[tex]/require","[tex]/autoload","[tex]/configmacros"],"input/tex-full":["input/tex-base","[tex]/all-packages"].concat(s),"[tex]/all-packages":s};function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object(r.combineDefaults)(MathJax.config.loader,"dependencies",{"a11y/semantic-enrich":["input/mml","[sre]"],"a11y/complexity":["a11y/semantic-enrich"],"a11y/explorer":["a11y/semantic-enrich","ui/menu"],"[tex]/all-packages":["input/tex-base"],"[tex]/action":["input/tex-base","[tex]/newcommand"],"[tex]/autoload":["input/tex-base","[tex]/require"],"[tex]/ams":["input/tex-base"],"[tex]/amscd":["input/tex-base"],"[tex]/bbox":["input/tex-base","[tex]/ams","[tex]/newcommand"],"[tex]/boldsymbol":["input/tex-base"],"[tex]/braket":["input/tex-base"],"[tex]/bussproofs":["input/tex-base"],"[tex]/cancel":["input/tex-base","[tex]/enclose"],"[tex]/color":["input/tex-base"],"[tex]/colorv2":["input/tex-base"],"[tex]/configmacros":["input/tex-base","[tex]/newcommand"],"[tex]/enclose":["input/tex-base"],"[tex]/extpfeil":["input/tex-base","[tex]/newcommand","[tex]/ams"],"[tex]/html":["input/tex-base"],"[tex]/mhchem":["input/tex-base","[tex]/ams"],"[tex]/newcommand":["input/tex-base"],"[tex]/noerrors":["input/tex-base"],"[tex]/noundefined":["input/tex-base"],"[tex]/physics":["input/tex-base"],"[tex]/require":["input/tex-base"],"[tex]/tagformat":["input/tex-base"],"[tex]/textmacros":["input/tex-base"],"[tex]/unicode":["input/tex-base"],"[tex]/verb":["input/tex-base"]}),Object(r.combineDefaults)(MathJax.config.loader,"paths",c),Object(r.combineDefaults)(MathJax.config.loader,"provides",u),o.Loader.load.apply(o.Loader,(i=o.CONFIG.load,function(e){if(Array.isArray(e))return l(e)}(i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).then((function(){return o.CONFIG.ready()})).catch((function(e,t){return o.CONFIG.failed(e,t)}))}]);
/* END MKDOCS TEMPLATE */
