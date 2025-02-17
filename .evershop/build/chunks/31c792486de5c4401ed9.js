/*! For license information please see 31c792486de5c4401ed9.js.LICENSE.txt */
"use strict";(self.webpackChunkevershop_app=self.webpackChunkevershop_app||[]).push([[7276],{37276:(e,t,o)=>{o.d(t,{default:()=>p}),function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.image-tool__caption,.image-tool__url{margin-bottom:5px}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}}();const n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';function r(e,t=null,o={}){const n=document.createElement(e);Array.isArray(t)?n.classList.add(...t):null!==t&&n.classList.add(t);for(const r in o)o.hasOwnProperty(r)&&(n[r]=o[r]);return n}var i=(e=>(e.Empty="empty",e.Uploading="uploading",e.Filled="filled",e))(i||{});class a{constructor({api:e,config:t,onSelectFile:o,readOnly:n}){this.api=e,this.config=t,this.onSelectFile=o,this.readOnly=n,this.nodes={wrapper:r("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:r("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:r("div",this.CSS.imagePreloader),caption:r("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly}),url:r("div",[this.CSS.input,this.CSS.url],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.url.dataset.placeholder=this.config.urlPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.url),this.nodes.wrapper.appendChild(this.nodes.fileButton)}applyTune(e,t){this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`,t)}render(e){return void 0===e.file||0===Object.keys(e.file).length?this.toggleStatus("empty"):this.toggleStatus("uploading"),this.nodes.wrapper}showPreloader(e){this.nodes.imagePreloader.style.backgroundImage=`url(${e})`,this.toggleStatus("uploading")}hidePreloader(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus("empty")}fillImage(e){const t=/\.mp4$/.test(e)?"VIDEO":"IMG",o={src:e};let n="load";"VIDEO"===t&&(o.autoplay=!0,o.loop=!0,o.muted=!0,o.playsinline=!0,n="loadeddata"),this.nodes.imageEl=r(t,this.CSS.imageEl,o),this.nodes.imageEl.addEventListener(n,(()=>{this.toggleStatus("filled"),void 0!==this.nodes.imagePreloader&&(this.nodes.imagePreloader.style.backgroundImage="")})),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}fillCaption(e){void 0!==this.nodes.caption&&(this.nodes.caption.innerHTML=e)}fillUrl(e){void 0!==this.nodes.url&&(this.nodes.url.innerHTML=e)}get CSS(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption",url:"image-tool__url"}}createFileButton(){const e=r("div",[this.CSS.button]);return e.innerHTML=this.config.buttonContent??`${n} ${this.api.i18n.t("Select an Image")}`,e.addEventListener("click",(()=>{this.onSelectFile()})),e}toggleStatus(e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${i[t]}`,e===i[t])}}function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var l={exports:{}};window,l.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch{"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){(function(e){var n=o(2),r=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var o=1===e._state?t.onFulfilled:t.onRejected;if(null!==o){var n;try{n=o(e._value)}catch(r){return void c(t.promise,r)}l(t.promise,n)}else(1===e._state?l:c)(t.promise,e._value)}))):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var o=t.then;if(t instanceof a)return e._state=3,e._value=t,void u(e);if("function"==typeof o)return void p((n=o,r=t,function(){n.apply(r,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(i){c(e,i)}var n,r}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,o=e._deferreds.length;t<o;t++)s(e,e._deferreds[t]);e._deferreds=null}function d(e,t,o){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=o}function p(e,t){var o=!1;try{e((function(e){o||(o=!0,l(t,e))}),(function(e){o||(o=!0,c(t,e))}))}catch(n){if(o)return;o=!0,c(t,n)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var o=new this.constructor(i);return s(this,new d(e,t,o)),o},a.prototype.finally=n.a,a.all=function(e){return new a((function(t,o){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var r=n.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){i(e,t)}),o)}n[e]=a,0==--r&&t(n)}catch(l){o(l)}}for(var a=0;a<n.length;a++)i(a,n[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,o){o(e)}))},a.race=function(e){return new a((function(t,o){for(var n=0,r=e.length;n<r;n++)e[n].then(t,o)}))},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){r(e,0)},a._unhandledRejectionFn=function(e){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,o(5).setImmediate)},function(e,t,o){t.a=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){return t.reject(o)}))}))}},function(e,t,o){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o(4);var r,i,a,s,l,c,u,d=o(8),p=(i=function(e){return new Promise((function(t,o){e=s(e),(e=l(e)).beforeSend&&e.beforeSend();var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");n.open(e.method,e.url),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach((function(t){var o=e.headers[t];n.setRequestHeader(t,o)}));var r=e.ratio;n.upload.addEventListener("progress",(function(t){var o=Math.round(t.loaded/t.total*100),n=Math.ceil(o*r/100);e.progress(Math.min(n,100))}),!1),n.addEventListener("progress",(function(t){var o=Math.round(t.loaded/t.total*100),n=Math.ceil(o*(100-r)/100)+r;e.progress(Math.min(n,100))}),!1),n.onreadystatechange=function(){if(4===n.readyState){var e=n.response;try{e=JSON.parse(e)}catch{}var r=d.parseHeaders(n.getAllResponseHeaders()),i={body:e,code:n.status,headers:r};u(n.status)?t(i):o(i)}},n.send(e.data)}))},a=function(e){return e.method="POST",i(e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==n(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(r).includes(e.type)))throw new Error("`type` must be taken from module's \xabcontentType\xbb library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},l=function(e){switch(e.method){case"GET":var t=c(e.data,r.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var o=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||r.JSON}(e);(d.isFormData(e.data)||d.isFormElement(e.data))&&(o=r.FORM),e.data=c(e.data,o),o!==p.contentType.FORM&&(e.headers["content-type"]=o)}return e},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case r.URLENCODED:return d.urlEncode(e);case r.JSON:return d.jsonEncode(e);case r.FORM:return d.formEncode(e);default:return e}},u=function(e){return e>=200&&e<300},{contentType:r={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=s(e),d.selectFiles(e).then((function(t){for(var o=new FormData,n=0;n<t.length;n++)o.append(e.fieldName,t[n],t[n].name);d.isObject(e.data)&&Object.keys(e.data).forEach((function(t){var n=e.data[t];o.append(t,n)}));var r=e.beforeSend;return e.beforeSend=function(){return r(t)},e.data=o,a(e)}))},selectFiles:function(e){return delete(e=s(e)).beforeSend,d.selectFiles(e)}});e.exports=p},function(e,t,o){o.r(t);var n=o(1);window.Promise=window.Promise||n.a},function(e,t,o){(function(e){var n=void 0!==e&&e||typeof self<"u"&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},o(6),t.setImmediate=typeof self<"u"&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate=typeof self<"u"&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,o(0))},function(e,t,o){(function(e,t){!function(e,o){if(!e.setImmediate){var n,r,i,a,s,l=1,c={},u=!1,d=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){f(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,o=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=o,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&f(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),n=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},n=function(e){i.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,n=function(e){var t=d.createElement("script");t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):n=function(e){setTimeout(f,0,e)},p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),o=0;o<t.length;o++)t[o]=arguments[o+1];var r={callback:e,args:t};return c[l]=r,n(l),l++},p.clearImmediate=h}function h(e){delete c[e]}function f(e){if(u)setTimeout(f,0,e);else{var t=c[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(o,n)}}(t)}finally{h(e),u=!1}}}}}(typeof self>"u"?void 0===e?this:e:self)}).call(this,o(0),o(7))},function(e,t){var o,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(o===setTimeout)return setTimeout(e,0);if((o===i||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch{try{return o.call(null,e,0)}catch{return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:i}catch{o=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch{n=a}}();var l,c=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&h())}function h(){if(!u){var e=s(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch{try{return n.call(null,e)}catch{return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];c.push(new f(e,t)),1!==c.length||u||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,o){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=o(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o,i;return t=e,i=[{key:"urlEncode",value:function(e){return r(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach((function(o){var n=e[o];t.append(o,n)})),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,o){var n=document.createElement("INPUT");n.type="file",e.multiple&&n.setAttribute("multiple","multiple"),e.accept&&n.setAttribute("accept",e.accept),n.style.display="none",document.body.appendChild(n),n.addEventListener("change",(function(e){var o=e.target.files;t(o),document.body.removeChild(n)}),!1),n.click()}))}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),o={};return t.forEach((function(e){var t=e.split(": "),n=t.shift(),r=t.join(": ");n&&(o[n]=r)})),o}}],(o=null)&&n(t.prototype,o),i&&n(t,i),e}()},function(e,t){var o=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},n=function(e,t,r,i){return t=t||null,r=r||"&",i=i||null,e?function(e){for(var t=new Array,o=0;o<e.length;o++)e[o]&&t.push(e[o]);return t}(Object.keys(e).map((function(a){var s,l,c=a;if(i&&(c=i+"["+c+"]"),"object"==typeof e[a]&&null!==e[a])s=n(e[a],null,r,c);else{t&&(l=c,c=!isNaN(parseFloat(l))&&isFinite(l)?t+Number(c):c);var u=e[a];u=(u=0===(u=!1===(u=!0===u?"1":u)?"0":u)?"0":u)||"",s=o(c)+"="+o(u)}return s}))).join(r).replace(/[!'()*]/g,""):""};e.exports=n}]);const c=s(l.exports);function u(e){return void 0!==e&&"function"==typeof e.then}class d{constructor({config:e,onUpload:t,onError:o}){this.config=e,this.onUpload=t,this.onError=o}uploadSelectedFile({onPreview:e}){const t=function(t){const o=new FileReader;o.readAsDataURL(t),o.onload=t=>{e(t.target.result)}};let o;if(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile){const e=this.config.uploader.uploadByFile;o=c.selectFiles({accept:this.config.types??"image/*"}).then((o=>{t(o[0]);const n=e(o[0]);return u(n)||console.warn("Custom uploader method uploadByFile should return a Promise"),n}))}else o=c.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types??"image/*",headers:this.config.additionalRequestHeaders,beforeSend:e=>{t(e[0])},fieldName:this.config.field??"image"}).then((e=>e.body));o.then((e=>{this.onUpload(e)})).catch((e=>{this.onError(e)}))}uploadByUrl(e){let t;this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?(t=this.config.uploader.uploadByUrl(e),u(t)||console.warn("Custom uploader method uploadByUrl should return a Promise")):t=c.post({url:this.config.endpoints.byUrl,data:Object.assign({url:e},this.config.additionalRequestData),type:c.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((e=>e.body)),t.then((e=>{this.onUpload(e)})).catch((e=>{this.onError(e)}))}uploadByFile(e,{onPreview:t}){const o=new FileReader;let n;if(o.readAsDataURL(e),o.onload=e=>{t(e.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)n=this.config.uploader.uploadByFile(e),u(n)||console.warn("Custom uploader method uploadByFile should return a Promise");else{const t=new FormData;t.append(this.config.field??"image",e),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((([e,o])=>{t.append(e,o)})),n=c.post({url:this.config.endpoints.byFile,data:t,type:c.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((e=>e.body))}n.then((e=>{this.onUpload(e)})).catch((e=>{this.onError(e)}))}}class p{constructor({data:e,config:t,api:o,readOnly:n,block:r}){this.api=o,this.readOnly=n,this.block=r,this.config={endpoints:t.endpoints,additionalRequestData:t.additionalRequestData,additionalRequestHeaders:t.additionalRequestHeaders,field:t.field,types:t.types,captionPlaceholder:this.api.i18n.t(t.captionPlaceholder??"Caption"),urlPlaceholder:this.api.i18n.t(t.urlPlaceholder??"Link"),buttonContent:t.buttonContent,uploader:t.uploader,actions:t.actions,onSelectFile:t.onSelectFile},this.uploader=new d({config:this.config,onUpload:e=>this.onUpload(e),onError:e=>this.uploadingFailed(e)}),this.ui=new a({api:o,config:this.config,onSelectFile:()=>{var e,t;return null==(t=(e=this.config).onSelectFile)?void 0:t.call(e,this.onUpload.bind(this),this.uploadingFailed.bind(this))},readOnly:n}),this._data={caption:"",url:"",withBorder:!1,withBackground:!1,stretched:!1,file:{url:""}},this.data=e}static get isReadOnlySupported(){return!0}static get toolbox(){return{icon:n,title:"Image"}}static get tunes(){return[{name:"withBorder",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',title:"With border",toggle:!0},{name:"stretched",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>',title:"Stretch image",toggle:!0},{name:"withBackground",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',title:"With background",toggle:!0}]}render(){return this.ui.render(this.data)}validate(e){return!!e.file.url}save(){const e=this.ui.nodes.caption,t=this.ui.nodes.url;return this._data.caption=e.innerHTML,this._data.url=t.innerHTML,this.data}renderSettings(){return p.tunes.concat(this.config.actions||[]).map((e=>({icon:e.icon,label:this.api.i18n.t(e.title),name:e.name,toggle:e.toggle,isActive:this.data[e.name],onActivate:()=>{"function"!=typeof e.action?this.tuneToggled(e.name):e.action(e.name)}})))}appendCallback(){this.ui.nodes.fileButton.click()}static get pasteConfig(){return{tags:[{img:{src:!0}}],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i},files:{mimeTypes:["image/*"]}}}async onPaste(e){switch(e.type){case"tag":{const t=e.detail.data;if(/^blob:/.test(t.src)){const e=await(await fetch(t.src)).blob();this.uploadFile(e);break}this.uploadUrl(t.src);break}case"pattern":{const t=e.detail.data;this.uploadUrl(t);break}case"file":{const t=e.detail.file;this.uploadFile(t);break}}}set data(e){this.image=e.file,this._data.caption=e.caption||"",this.ui.fillCaption(this._data.caption),this._data.url=e.url||"",this.ui.fillUrl(this._data.url),p.tunes.forEach((({name:t})=>{const o=typeof e[t]<"u"&&(!0===e[t]||"true"===e[t]);this.setTune(t,o)}))}get data(){return this._data}set image(e){this._data.file=e||{url:""},e&&e.url&&this.ui.fillImage(e.url)}onUpload(e){e.success&&e.file?this.image=e.file:this.uploadingFailed("incorrect response: "+JSON.stringify(e))}uploadingFailed(e){console.log("Image Tool: uploading failed because of",e),this.api.notifier.show({message:this.api.i18n.t("Couldn\u2019t upload image. Please try another."),style:"error"}),this.ui.hidePreloader()}tuneToggled(e){this.setTune(e,!this._data[e])}setTune(e,t){this._data[e]=t,this.ui.applyTune(e,t),"stretched"===e&&Promise.resolve().then((()=>{this.block.stretched=t})).catch((e=>{console.error(e)}))}uploadFile(e){this.uploader.uploadByFile(e,{onPreview:e=>{this.ui.showPreloader(e)}})}uploadUrl(e){this.ui.showPreloader(e),this.uploader.uploadByUrl(e)}}}}]);