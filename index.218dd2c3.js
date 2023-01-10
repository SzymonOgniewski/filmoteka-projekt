async function t(){const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=dd32b08009b8c26db83a645989914c74&language=en-US");if(!t.ok)throw new Error(t.status);return await t.json()}async function e(t){const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=dd32b08009b8c26db83a645989914c74&language=en-US`);if(!e.ok)throw new Error(e.status);return await e.json()}async function n(t){const e=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=dd32b08009b8c26db83a645989914c74&page=${t}`);if(!e.ok)throw new Error(e.status);return e.json()}const o=document.querySelector(".gallery"),r=()=>t();r(),console.log(r());const i=()=>{let t="";n(1).then((e=>{e.results.forEach((e=>{e.genre_ids.splice(0,2);null===e.poster_path?e.poster_path="http://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg":e.poster_path=`https://image.tmdb.org/t/p/w500//${e.poster_path}`,t+=`<li class="move_gallery__item" data-movieid="${e.id}">\n    <img class="move_gallery__image" src="${e.poster_path}">\n     <div class="move_gallery__title">${e.title}</div>\n     <div class="move_gallery__genres">genres | ${e.release_date}</div>\n     </li>`})),o.insertAdjacentHTML("beforeend",t)}))};var a={};a=function t(e,n,o){function r(a,l){if(!n[a]){if(!e[a]){var d=void 0;if(!l&&d)return d(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[a]={exports:{}};e[a][0].call(c.exports,(function(t){return r(e[a][1][t]||t)}),c,c.exports,t,e,n,o)}return n[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},r=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var a=r(i,"IMG"),l=r(i,"VIDEO"),d=r(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===l&&n.classList.add("basicLightbox--video"),!0===d&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(l)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(l)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&a()}));var l={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(l)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(l)}))},close:a};return l}},{}]},{},[1])(1);(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){t.modal.classList.toggle("is-hidden"),t.modal.removeEventListener("click",e)}function n(){t.modal.classList.contains("is-hidden")&&(t.modal.addEventListener("click",e),t.modal.classList.toggle("is-hidden"))}t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n),document.addEventListener("keydown",(e=>{"Escape"===e.key&&t.modal.classList.add("is-hidden")}))})(),window.addEventListener("load",(t=>{i()}));document.querySelector(".gallery").addEventListener("click",(t=>{if(t.preventDefault(),"LI"===t.target.parentElement.nodeName){e(t.target.parentElement.getAttribute("data-movieid")).then((t=>{a.create(`\n      <div class="gallery-modal">\n      <img src="https://image.tmdb.org/t/p/w500//${t.poster_path}" class="gallery-modal__img"/>\n      <h3>${t.original_title}</h3>\n      <table>\n        <tr>\n          <td>Vote/Votes</td>\n          <td>${t.vote_average.toFixed(2)} / ${t.vote_count}</td>\n        </tr>\n        <tr>\n          <td>Popularity</td>\n          <td>${t.popularity}</td>\n        </tr>\n        <tr>\n          <td>Original Title</td>\n          <td> ${t.original_title}</td>\n        </tr>\n        <tr>\n          <td>Genre</td>\n          <td>${t.genre}</td>\n        </tr>\n      </table>\n      <h4>About</h4>\n      <p>${t.overview}</p>\n      <div class="modal-btns">\n        <button>ADD TO WATCHED</button>\n        <button>ADD TO QUEUE</button> \n      </div>\n    </div>\n`).show()}))}if("LI"===t.target.nodeName){e(t.target.getAttribute("data-movieid")).then((t=>{a.create(`\n      <div class="gallery-modal">\n      <img src="https://image.tmdb.org/t/p/w500//${t.poster_path}" class="gallery-modal__img"/>\n      <h3>${t.original_title}</h3>\n      <table>\n        <tr>\n          <td>Vote/Votes</td>\n          <td>${t.vote_average.toFixed(2)} / ${t.vote_count}</td>\n        </tr>\n        <tr>\n          <td>Popularity</td>\n          <td>${t.popularity}</td>\n        </tr>\n        <tr>\n          <td>Original Title</td>\n          <td> ${t.original_title}</td>\n        </tr>\n        <tr>\n          <td>Genre</td>\n          <td>${t.genre}</td>\n        </tr>\n      </table>\n      <h4>About</h4>\n      <p>${t.overview}</p>\n      <div class="modal-btns">\n        <button>ADD TO WATCHED</button>\n        <button>ADD TO QUEUE</button> \n      </div>\n    </div>\n`).show()}))}}));
//# sourceMappingURL=index.218dd2c3.js.map
