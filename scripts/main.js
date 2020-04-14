"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},URLSearchParams=URLSearchParams||function(){function t(t){return encodeURIComponent(t).replace(a,s)}function e(t){return decodeURIComponent(t.replace(i," "))}function n(t){if(this[l]=Object.create(null),t)for(var n,r,a=(t||"").split("&"),i=0,o=a.length;i<o;i++)-1<(n=(r=a[i]).indexOf("="))&&this.append(e(r.slice(0,n)),e(r.slice(n+1)))}var r=n.prototype,a=/[!'\(\)~]|%20|%00/g,i=/\+/g,o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},s=function(t){return o[t]},c=function(){try{return!!Symbol.iterator}catch(t){return!1}}(),l="__URLSearchParams__:"+Math.random();r.append=function(t,e){var n=this[l];t in n?n[t].push(""+e):n[t]=[""+e]},r.delete=function(t){delete this[l][t]},r.get=function(t){var e=this[l];return t in e?e[t][0]:null},r.getAll=function(t){var e=this[l];return t in e?e[t].slice(0):[]},r.has=function(t){return t in this[l]},r.set=function(t,e){this[l][t]=[""+e]},r.forEach=function(t,e){var n=this[l];Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},r.keys=function(){var t=[];this.forEach(function(e,n){t.push(n)});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c&&(e[Symbol.iterator]=function(){return e}),e},r.values=function(){var t=[];this.forEach(function(e){t.push(e)});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c&&(e[Symbol.iterator]=function(){return e}),e},r.entries=function(){var t=[];this.forEach(function(e,n){t.push([n,e])});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c&&(e[Symbol.iterator]=function(){return e}),e},c&&(r[Symbol.iterator]=r.entries),r.toJSON=function(){return{}},r.toString=function(){var e,n,r,a,i=this[l],o=[];for(n in i)for(r=t(n),e=0,a=i[n];e<a.length;e++)o.push(r+"="+t(a[e]));return o.join("&")};var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h=function(t){function e(e,n){r.append.call(this,e,n),e=this.toString(),t.set.call(this._usp,e?"?"+e:"")}function n(e){r.delete.call(this,e),e=this.toString(),t.set.call(this._usp,e?"?"+e:"")}function a(e,n){r.set.call(this,e,n),e=this.toString(),t.set.call(this._usp,e?"?"+e:"")}return function(t,r){return t.append=e,t.delete=n,t.set=a,u(t,"_usp",{configurable:!0,writable:!0,value:r})}},d=function(t){var e=t.append;t.append=r.append,n.call(t,t._usp.search.slice(1)),t.append=e},p=function(t,e){if(!(t instanceof e))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+e.name)},v=function(t){var e,r=t.prototype,a=f(r,"searchParams"),i=f(r,"href"),o=f(r,"search");!a&&o&&o.set&&(e=function(t){return function(e,n){return u(e,"_searchParams",{configurable:!0,writable:!0,value:t(n,e)}),n}}(h(o)),Object.defineProperties(r,{href:{get:function(){return i.get.call(this)},set:function(t){var e=this._searchParams;i.set.call(this,t),e&&d(e)}},search:{get:function(){return o.get.call(this)},set:function(t){var e=this._searchParams;o.set.call(this,t),e&&d(e)}},searchParams:{get:function(){return p(this,t),this._searchParams||e(this,new n(this.search.slice(1)))},set:function(n){p(this,t),e(this,n)}}}))};return v(HTMLAnchorElement),/^function|object$/.test("undefined"==typeof URL?"undefined":_typeof(URL))&&v(URL),n}();!function(t,e){var n=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}),function(){if("registerElement"in e&&"import"in e.createElement("link")&&"content"in e.createElement("template"))e.dispatchEvent(new Event("WebComponentsReady"));else{var t=e.createElement("script");t.async=!0,t.src="https://scott3142.uk/codelabs-landing/bower_components/webcomponentsjs/webcomponents-lite.min.js",e.head.appendChild(t)}}()};e.addEventListener("AppReady",function(){e.body.classList.remove("loading")}),e.addEventListener("WebComponentsReady",function(){var n=function(){var n=e.querySelector("#app");function r(){var t=e.querySelector(".js-lucky-link");if(t){var r=n.$.cards.querySelectorAll(".codelab-card");if(r.length<2)return t.href="#",void(t.parentNode.style.display="none");var a=Math.floor(Math.random()*r.length);t.href=r[a].href,t.parentNode.style.display=null}}n.categoryStartCards={},n.kioskTags=[],n.addEventListener("dom-change",function(t){if(!n._readied){var r=e.querySelectorAll(".codelab-card");Array.prototype.forEach.call(r,function(t,e){var r=t.getAttribute("data-category");void 0===n.categoryStartCards[r]&&(n.categoryStartCards[r]=t)})}}),n.codelabUrl=function(t,e){var n="index="+encodeURIComponent("../.."+t.url);return t.ga&&(n+="&viewga="+t.ga),e.url+"?"+n},n.sortBy=function(t,e){var n=e.item.textContent.trim().toLowerCase();this.$.cards.sort(n)},n.filterBy=function(t,e){e.hasOwnProperty("selected")?this.$.cards.filterByCategory(e.selected):(e.kioskTags=n.kioskTags,this.$.cards.filter(e))},n.onCategoryActivate=function(e,n){var a=e.target.selectedItem;a&&a.getAttribute("filter")===n.selected&&(n.selected=null),n.selected||this.async(function(){e.target.selected=null}),this.filterBy(e,{selected:n.selected});var i=new URLSearchParams(t.location.search.slice(1));i.delete("cat"),n.selected&&i.set("cat",n.selected);var o=t.location.pathname,s="?"+i;"?"!==s&&(o+=s),t.history.pushState({},"",o),r()};var a=e.querySelector("#chips");return a&&a.addEventListener("click",function(t){if(t.preventDefault(),t.stopPropagation(),t.target.getAttribute("filter")){t.target.classList.toggle("selected");for(var e=[],i=a.querySelectorAll(".js-chips__item.selected"),o=0;o<i.length;o++){var s=i[o].getAttribute("filter");s&&e.push(s)}n.filterBy(null,{tags:e}),r()}}),n.reconstructFromURL=function(){for(var e=new URLSearchParams(t.location.search.slice(1)),i=e.get("cat"),o=e.getAll("tags"),s=e.get("filter"),c=o.length;c--;)"kiosk"!==o[c]&&"kiosk-"!==o[c].substr(0,6)||(n.kioskTags.push(o[c]),o.splice(c,1));this.$.categorylist&&(this.$.categorylist.selected=i),this.$.sidelist&&(this.$.sidelist.selected=i),o&&function(t){if(a){t=Array.isArray(t)?t:[t];for(var e=a.querySelectorAll(".js-chips__item"),n=0;n<e.length;n++){var r=e[n];-1!=t.indexOf(r.getAttribute("filter"))?r.classList.add("selected"):r.classList.remove("selected")}}}(o),this.filterBy(null,{cat:i,tags:o}),s&&(n.searchVal=s,n.onSearchKeyDown()),r()},n.navigate=function(e){e.preventDefault();var n=function(e){t.location.href=e},r=e.currentTarget;r.hasAttribute("data-wait-for-ripple")?r.addEventListener("transitionend",n.bind(r,r.href)):n(r.href)},n.clearSearch=function(t,e){this.searchVal=null,this.$.cards.filterByText(null)},n.onSearchKeyDown=function(t,e){this.debounce("search",function(){this.$.cards.filterByText(n.searchVal)},250)},n}();t.addEventListener("popstate",function(){n.reconstructFromURL()}),n._setupDebouncers&&n._setupDebouncers(),n.reconstructFromURL(),e.dispatchEvent(new Event("AppReady"))}),"complete"===e.readyState||"loaded"===e.readyState||"interactive"===e.readyState?n():e.addEventListener("DOMContentLoaded",n)}(window,document);