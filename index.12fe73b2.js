!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,i,o,r,a){try{var c=t[r](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(i,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,i=arguments;return new Promise((function(o,r){var a=t.apply(e,i);function c(t){n(a,o,r,c,l,"next",t)}function l(t){n(a,o,r,c,l,"throw",t)}c(void 0)}))}};var i={},o=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,i){var o=e&&e.prototype instanceof y?e:y,r=Object.create(o.prototype),a=new T(i||[]);return r._invoke=function(t,e,n){var i=d;return function(o,r){if(i===p)throw new Error("Generator is already running");if(i===f){if("throw"===o)throw r;return M()}for(n.method=o,n.arg=r;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var l=u(t,e,n);if("normal"===l.type){if(i=n.done?f:v,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=f,n.method="throw",n.arg=l.arg)}}}(t,n,a),r}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",v="suspendedYield",p="executing",f="completed",h={};function y(){}function b(){}function g(){}var m={};l(m,r,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(j([])));_&&_!==n&&i.call(_,r)&&(m=_);var x=g.prototype=y.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,r,a,c){var l=u(t[o],t,r);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,i){function r(){return new e((function(e,o){n(t,i,e,o)}))}return o=o?o.then(r,r):r()}}function S(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var r=o.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(i.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return b.prototype=g,l(x,"constructor",g),l(g,"constructor",b),b.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),l(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,i,o,r){void 0===r&&(r=Promise);var a=new E(s(e,n,i,o),r);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),l(x,c,"Generator"),l(x,r,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(i,o){return c.type="throw",c.arg=t,n.next=i,o&&(n.method="next",n.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;q(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:j(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),h}},t}(i);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var r="dd32b08009b8c26db83a645989914c74";function a(){return c.apply(this,arguments)}function c(){return(c=t(e)(t(i).mark((function e(){var n,o;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(r,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.json();case 5:return o=t.sent,t.abrupt("return",o.genres);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function l(t){return s.apply(this,arguments)}function s(){return(s=t(e)(t(i).mark((function e(n){var o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(r,"&language=en-US"));case 2:return o=t.sent,t.next=5,o.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function u(t,e){return d.apply(this,arguments)}function d(){return(d=t(e)(t(i).mark((function e(n,o){var a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(n,"&page=").concat(o,"&language=en-US"));case 2:if((a=t.sent).ok){t.next=5;break}throw new Error(a.status);case 5:return t.next=7,a.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function v(t){return p.apply(this,arguments)}function p(){return(p=t(e)(t(i).mark((function e(n){var o;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r,"&page=").concat(n));case 2:if((o=t.sent).ok){t.next=5;break}throw new Error(o.status);case 5:return t.abrupt("return",o.json());case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var f,h,y,b=document.querySelector(".pagination-container"),g=function(t,e,n){var i=(f=Number(e))-2;b.textContent="";var o,r=f-1,a=f+2,c=f+1;f===n&&(c=n,a=n),1===f&&(r=1,i=1),o='\n      <button class="box pagination-prev" type="button" value="-1"><<</button>\n\n      <button class="box pagination-first" type="button" value="1">1</button>\n      <button class="box pagination-dotsfirst" type="button" value="...">...</button>\n      <button class="box pagination-dectwo" type="button" value="'.concat(i,'">').concat(i,'</button>\n      <button class="box pagination-decone" type="button" value="').concat(r,'">').concat(r,'</button>\n      <button class="box pagination-currentPage" type="button" value="').concat(f,'">').concat(f,'</button>\n      <button class="box pagination-incone" type="button" value="').concat(c,'">').concat(c,'</button>\n      <button class="box pagination-inctwo" type="button" value="').concat(a,'">').concat(a,'</button>\n      <button class="box pagination-dotslast" type="button" value="...">...</button>\n      <button class="box pagination-last" type="button" value="').concat(n,'">').concat(n,'</button>\n\n      <button class="box pagination-next" type="button" value="+1">>></button>\n      '),b.insertAdjacentHTML("beforeend",o);var l=document.querySelector(".pagination-prev"),s=document.querySelector(".pagination-next"),u=document.querySelector(".pagination-incone"),d=document.querySelector(".pagination-inctwo"),v=document.querySelector(".pagination-decone"),p=document.querySelector(".pagination-dectwo"),h=document.querySelector(".pagination-dotsfirst"),y=document.querySelector(".pagination-dotslast"),_=document.querySelector(".pagination-last"),L=document.querySelector(".pagination-first");f===n&&(u.style.visibility="hidden",d.style.visibility="hidden",y.style.visibility="hidden",_.style.visibility="hidden"),f===n-1&&(d.style.visibility="hidden",y.style.visibility="hidden",_.style.visibility="hidden"),f===n-2&&(y.style.visibility="hidden",_.style.visibility="hidden"),1===f&&(v.style.visibility="hidden",p.style.visibility="hidden",h.style.visibility="hidden",L.style.visibility="hidden"),2===f&&(p.style.visibility="hidden",h.style.visibility="hidden",L.style.visibility="hidden"),3===f&&(h.style.visibility="hidden",L.style.visibility="hidden"),4===f&&(h.textContent="1",h.value=1,L.style.visibility="hidden"),l.addEventListener("click",(function(t){m(f),g(f)})),s.addEventListener("click",(function(t){w(f,n)})),L.addEventListener("click",(function(e){f=L.value,x(t,f)})),_.addEventListener("click",(function(e){f=_.value,x(t,f)})),u.addEventListener("click",(function(e){f=u.value,x(t,f)})),d.addEventListener("click",(function(e){f=d.value,x(t,f)})),v.addEventListener("click",(function(e){f=v.value,x(t,f)})),p.addEventListener("click",(function(e){f=p.value,x(t,f)}))},m=function(t){1!==t&&(t-=1,x(query,t))},w=function(t,e){t!==e&&(t+=1,x(query,t))},_=document.querySelector(".gallery"),x=function(n,o){_.textContent="";var r,c="";u(n,o).then((r=t(e)(t(i).mark((function r(l){var s,u,d,v;return t(i).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=l.results,u=o,d=l.total_pages,r.next=5,a();case 5:v=r.sent,d>1&&g(n,u,d),s.forEach(function(){var n=t(e)(t(i).mark((function e(n){var o,r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=n.genre_ids.splice(0,2),r=[],o.forEach((function(t){for(var e=0;e<v.length;e++)t===v[e].id&&r.push(v[e].name)})),null===n.poster_path?n.poster_path="http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg":n.poster_path="https://image.tmdb.org/t/p/w500//".concat(n.poster_path),c+='<li class="move_gallery__item" data-movieid="'.concat(n.id,'">\n    <img class="move_gallery__image" src="').concat(n.poster_path,'" width="265" height="398">\n     <div class="move_gallery__title">').concat(n.title,'</div>\n     <div class="move_gallery__genres">').concat(r.toString().replaceAll(",",", ")," | ").concat(n.release_date,"</div>\n     </li>");case 5:case"end":return t.stop()}}),e)})));return function(t){return n.apply(this,arguments)}}()),_.insertAdjacentHTML("beforeend",c);case 9:case"end":return r.stop()}}),r)}))),function(t){return r.apply(this,arguments)}))},L=document.querySelector(".pagination-container"),E=function(t,e){var n=(h=Number(t))-2;L.textContent="";var i,o=h-1,r=h+2,a=h+1;h===e&&(a=e,r=e),1===h&&(o=1,n=1),i='\n      <button class="box pagination-prev" type="button" value="-1"><<</button>\n\n      <button class="box pagination-first" type="button" value="1">1</button>\n      <button class="box pagination-dotsfirst" type="button" value="...">...</button>\n      <button class="box pagination-dectwo" type="button" value="'.concat(n,'">').concat(n,'</button>\n      <button class="box pagination-decone" type="button" value="').concat(o,'">').concat(o,'</button>\n      <button class="box pagination-currentPage" type="button" value="').concat(h,'">').concat(h,'</button>\n      <button class="box pagination-incone" type="button" value="').concat(a,'">').concat(a,'</button>\n      <button class="box pagination-inctwo" type="button" value="').concat(r,'">').concat(r,'</button>\n      <button class="box pagination-dotslast" type="button" value="...">...</button>\n      <button class="box pagination-last" type="button" value="').concat(e,'">').concat(e,'</button>\n\n      <button class="box pagination-next" type="button" value="+1">>></button>\n      '),L.insertAdjacentHTML("beforeend",i);var c=document.querySelector(".pagination-prev"),l=document.querySelector(".pagination-next"),s=document.querySelector(".pagination-incone"),u=document.querySelector(".pagination-inctwo"),d=document.querySelector(".pagination-decone"),v=document.querySelector(".pagination-dectwo"),p=document.querySelector(".pagination-dotsfirst"),f=document.querySelector(".pagination-dotslast"),y=document.querySelector(".pagination-last"),b=document.querySelector(".pagination-first");h===e&&(s.style.visibility="hidden",u.style.visibility="hidden",f.style.visibility="hidden",y.style.visibility="hidden"),h===e-1&&(u.style.visibility="hidden",f.style.visibility="hidden",y.style.visibility="hidden"),h===e-2&&(f.style.visibility="hidden",y.style.visibility="hidden"),1===h&&(d.style.visibility="hidden",v.style.visibility="hidden",p.style.visibility="hidden",b.style.visibility="hidden"),2===h&&(v.style.visibility="hidden",p.style.visibility="hidden",b.style.visibility="hidden"),3===h&&(p.style.visibility="hidden",b.style.visibility="hidden"),4===h&&(p.textContent="1",p.value=1,b.style.visibility="hidden"),c.addEventListener("click",(function(t){S(h),E(h)})),l.addEventListener("click",(function(t){k(h,e)})),b.addEventListener("click",(function(t){h=b.value,T(h)})),y.addEventListener("click",(function(t){h=y.value,T(h)})),s.addEventListener("click",(function(t){h=s.value,T(h)})),u.addEventListener("click",(function(t){h=u.value,T(h)})),d.addEventListener("click",(function(t){h=d.value,T(h)})),v.addEventListener("click",(function(t){h=v.value,T(h)}))},S=function(t){1!==t&&T(t-=1)},k=function(t,e){t!==e&&T(t+=1)},q=document.querySelector(".gallery"),T=function(n){if(null!==q){q.textContent="";var o,r="";v(n).then((o=t(e)(t(i).mark((function o(c){var l,s,u;return t(i).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l=c.results,s=c.total_pages,o.next=4,a();case 4:u=o.sent,s>1&&E(n,s),l.forEach(function(){var n=t(e)(t(i).mark((function e(n){var o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=n.genre_ids.splice(0,2),a=[],o.forEach((function(t){for(var e=0;e<u.length;e++)t===u[e].id&&a.push(u[e].name)})),null===n.poster_path?n.poster_path="http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg":n.poster_path="https://image.tmdb.org/t/p/w500//".concat(n.poster_path),r+='<li class="move_gallery__item" data-movieid="'.concat(n.id,'">\n    <img class="move_gallery__image" src="').concat(n.poster_path,'" width="265" height="398">\n     <div class="move_gallery__title">').concat(n.title,'</div>\n     <div class="move_gallery__genres">').concat(a.toString().replaceAll(",",", ")," | ").concat(n.release_date,"</div>\n     </li>");case 5:case"end":return t.stop()}}),e)})));return function(t){return n.apply(this,arguments)}}()),q.insertAdjacentHTML("beforeend",r);case 8:case"end":return o.stop()}}),o)}))),function(t){return o.apply(this,arguments)}))}},j=document.querySelector(".pagination-container"),M=function(t,e,n,i){if(e<=1)j.textContent="";else{var o=(y=Number(t))-2;j.textContent="";var r,a=y-1,c=y+2,l=y+1;y===e&&(l=e,c=e),1===y&&(a=1,o=1),r='\n      <button class="box pagination-prev" type="button" value="-1"><<</button>\n\n      <button class="box pagination-first" type="button" value="1">1</button>\n      <button class="box pagination-dotsfirst" type="button" value="...">...</button>\n      <button class="box pagination-dectwo" type="button" value="'.concat(o,'">').concat(o,'</button>\n      <button class="box pagination-decone" type="button" value="').concat(a,'">').concat(a,'</button>\n      <button class="box pagination-currentPage" type="button" value="').concat(y,'">').concat(y,'</button>\n      <button class="box pagination-incone" type="button" value="').concat(l,'">').concat(l,'</button>\n      <button class="box pagination-inctwo" type="button" value="').concat(c,'">').concat(c,'</button>\n      <button class="box pagination-dotslast" type="button" value="...">...</button>\n      <button class="box pagination-last" type="button" value="').concat(e,'">').concat(e,'</button>\n\n      <button class="box pagination-next" type="button" value="+1">>></button>\n      '),j.insertAdjacentHTML("beforeend",r);var s=document.querySelector(".pagination-prev"),u=document.querySelector(".pagination-next"),d=document.querySelector(".pagination-incone"),v=document.querySelector(".pagination-inctwo"),p=document.querySelector(".pagination-decone"),f=document.querySelector(".pagination-dectwo"),h=document.querySelector(".pagination-dotsfirst"),b=document.querySelector(".pagination-dotslast"),g=document.querySelector(".pagination-last"),m=document.querySelector(".pagination-first");y===e&&(d.style.visibility="hidden",v.style.visibility="hidden",b.style.visibility="hidden",g.style.visibility="hidden"),y===e-1&&(v.style.visibility="hidden",b.style.visibility="hidden",g.style.visibility="hidden"),y===e-2&&(b.style.visibility="hidden",g.style.visibility="hidden"),1===y&&(p.style.visibility="hidden",f.style.visibility="hidden",h.style.visibility="hidden",m.style.visibility="hidden"),2===y&&(f.style.visibility="hidden",h.style.visibility="hidden",m.style.visibility="hidden"),3===y&&(h.style.visibility="hidden",m.style.visibility="hidden"),4===y&&(h.textContent="1",h.value=1,m.style.visibility="hidden"),s.addEventListener("click",(function(t){A(n,i,y)})),u.addEventListener("click",(function(t){C(y,e,n,i)})),m.addEventListener("click",(function(t){y=m.value,U(n,i,y)})),g.addEventListener("click",(function(t){y=g.value,U(n,i,y)})),d.addEventListener("click",(function(t){y=d.value,U(n,i,y)})),v.addEventListener("click",(function(t){y=v.value,U(n,i,y)})),p.addEventListener("click",(function(t){y=p.value,U(n,i,y)})),f.addEventListener("click",(function(t){y=f.value,U(n,i,y)}))}},A=function(t,e,n){1!==n&&U(t,e,n-=1)},C=function(t,e,n,i){t!==e&&U(n,i,t+=1)},N=function(t){var e=localStorage.getItem("watched");if(null===e)return(e=[]).push(t),localStorage.setItem("watched",e);var n=e.split(",");if(!1===n.includes(t))return n.push(t),localStorage.setItem("watched",n);D(n,t)},O=function(){var t=localStorage.getItem("watched");if(null!==t){return t.split(",")}return t=[]},D=function(t,e){var n=t.filter((function(t){return t!==e}));return 1===n.length&&0===n[0].length||0===n.length?localStorage.removeItem("watched"):localStorage.setItem("watched",n)},I=function(t){var e=localStorage.getItem("queue");if(null===e)return(e=[]).push(t),localStorage.setItem("queue",e);var n=e.split(",");if(!1===n.includes(t))return n.push(t),localStorage.setItem("queue",n);P(n,t)},H=function(){var t=localStorage.getItem("queue");if(null!==t){return t.split(",")}return t=[]},P=function(t,e){var n=t.filter((function(t){return t!==e}));return 1===n.length&&0===n[0].length||0===n.length?localStorage.removeItem("queue"):localStorage.setItem("queue",n)},U=function(n,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;o.textContent="",console.log(n);var a=1;null!==r&&(a=r);var c,s=6,u=a*s,d=u-s,v=Math.ceil(n.length/s);if(console.log(v),M(a,v,n,o),null===o)return console.log("error: no container to display");null===n&&console.log("No movies added to library"),n=n.slice(d,u),console.log(n),n.forEach((c=t(e)(t(i).mark((function e(n){var r,a,c,s;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="",t.next=3,l(n);case 3:a=t.sent,c=[],a.genres.forEach((function(t){c.push(t.name)})),s=c.slice(0,2).toString().replace(",",", "),null===a.poster_path?a.poster_path="http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg":a.poster_path="https://image.tmdb.org/t/p/w500//".concat(a.poster_path),r+='<li class="move_gallery__item" data-movieid="'.concat(a.id,'">\n    <img class="move_gallery__image" src="').concat(a.poster_path,'" width="265" height="398">\n     <div class="move_gallery__title">').concat(a.title,'</div>\n     <div class="move_gallery__genres">').concat(s," | ").concat(a.release_date.slice(0,4),"</div>\n     </li>"),o.insertAdjacentHTML("beforeend",r);case 10:case"end":return t.stop()}}),e)}))),function(t){return c.apply(this,arguments)}))},F={};F=function t(e,n,i){function o(a,c){if(!n[a]){if(!e[a]){var l=void 0;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};e[a][0].call(u.exports,(function(t){return o(e[a][1][t]||t)}),u,u.exports,t,e,n,i)}return n[a].exports}for(var r=void 0,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=r,n.create=function(t,e){var n=function(t,e){var n=i('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var a=o(r,"IMG"),c=o(r,"VIDEO"),l=o(r,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(i(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(c)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(c)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&a()}));var c={element:function(){return n},visible:function(){return r(n)},show:function(t){return!1!==e.onShow(c)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(c)}))},close:a};return c}},{}]},{},[1])(1);var G=function(t){if(t.preventDefault(),"LI"===t.target.parentElement.nodeName){var e=t.target.parentElement.getAttribute("data-movieid");l(e).then((function(t){var n=[];t.genres.forEach((function(t){n.push(t.name)}));var i=n.slice(0,1).toString().replace(",",", "),o=O(),r=H(),a="",c="";a=o.includes(e)?'<button class="modal-ls-btn ls-marked" id="addWatched">WATCHED</button>':'<button class="modal-ls-btn" id="addWatched">ADD TO WATCHED</button>',c=r.includes(e)?'<button class="modal-ls-btn ls-marked" id="addQueue">QUEUED</button>':'<button class="modal-ls-btn" id="addQueue">ADD TO QUEUE</button>';var l=F.create('\n      <div class="gallery-modal">\n      <button class="gallery-modal__close-btn" id="modal-cb">\n        </button>\n      <img src="https://image.tmdb.org/t/p/w500//'.concat(t.poster_path,'" class="gallery-modal__img"/>\n      <div>\n      <h3 class="gallery-modal__title">').concat(t.original_title,'</h3>\n      <table class="table">\n        <tr class="table-data__row">\n          <td class="table-data__name">Vote/Votes</td>\n          <td class="table-data__value"><span class="rating">').concat(t.vote_average.toFixed(2),"</span> / ").concat(t.vote_count,'</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Popularity</td>\n          <td class="table-data__value">').concat(Math.round(t.popularity),'</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Original Title</td>\n          <td class="table-data__value"> ').concat(t.original_title,'</td>\n        </tr>\n        <tr>\n          <td class="table-data__name">Genre</td>\n          <td class="table-data__value">').concat(i,' </td>\n        </tr>\n      </table>\n      <h4 class="gallery-modal__about">ABOUT</h4>\n      <p class="gallery-modal__overview">').concat(t.overview,'</p>\n      <div class="modal-btns">\n        ').concat(a,"\n        ").concat(c,"\n      </div>\n      </div>\n    </div>\n      "));l.show();var s=document.getElementById("modal-cb"),u=document.querySelector("#addWatched"),d=document.querySelector("#addQueue");s.addEventListener("click",(function(t){l.close()})),document.addEventListener("keydown",(function(t){"Escape"===t.key&&l.visible()&&l.close()})),u.addEventListener("click",(function(t){N(e),u.classList.toggle("ls-marked");"WATCHED"===u.innerHTML?u.innerHTML="ADD TO WATCHED":u.innerHTML="WATCHED"})),d.addEventListener("click",(function(t){I(e),d.classList.toggle("ls-marked");"QUEUED"===d.innerHTML?d.innerHTML="ADD TO QUEUE":d.innerHTML="QUEUED"}))}))}},Q=document.querySelector(".gallery"),W=document.querySelector(".libraryData"),B=document.querySelector(".library-btn__watched"),R=document.querySelector(".library-btn__queued"),z=document.querySelector(".search-form"),V=document.querySelector(".search-form__input");if(O(),function(){var t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("is-hidden"),t.modal.removeEventListener("click",e)}function n(){t.modal.classList.contains("is-hidden")&&(t.modal.addEventListener("click",e),t.modal.classList.toggle("is-hidden"))}t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n),document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.modal.classList.add("is-hidden")}))}(),window.addEventListener("load",(function(t){T(1)})),null!==Q&&Q.addEventListener("click",G),null!==W){var Y=O();void 0!==Y&&U(Y,W),W.addEventListener("click",G)}if(null!==B){B.classList.add("ls-marked");var J=O();B.addEventListener("click",(function(t){B.classList.add("ls-marked"),R.classList.remove("ls-marked"),U(J,W)}))}if(null!==R){var K=H();R.addEventListener("click",(function(t){R.classList.add("ls-marked"),B.classList.remove("ls-marked"),U(K,W)}))}null!==z&&z.addEventListener("submit",(function(t){t.preventDefault();var e=V.value;x(e,1)}))}();
//# sourceMappingURL=index.12fe73b2.js.map
