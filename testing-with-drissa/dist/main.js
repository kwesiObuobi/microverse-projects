(()=>{"use strict";var t={424:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(81),i=r.n(n),a=r(645),o=r.n(a)()(i());o.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap);"]),o.push([t.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-weight: 700;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #d3cdcd;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 25px;\r\n}\r\n\r\nmain {\r\n  width: 700px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  padding: 40px 0;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  background-color: rgb(247, 247, 244);\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  width: 90%;\r\n  height: 75px;\r\n}\r\n\r\n.title {\r\n  justify-content: space-between;\r\n}\r\n\r\n#newtask {\r\n  border: transparent;\r\n  width: 100%;\r\n  height: 55px;\r\n  font-size: 25px;\r\n}\r\n\r\n#newtask::placeholder {\r\n  font-size: 25px;\r\n  font-style: italic;\r\n}\r\n\r\nli {\r\n  height: 47px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  border-top: 1px solid #918f8f;\r\n  border-bottom: 1px solid #918f8f;\r\n  padding: 40px 15px;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n}\r\n\r\ni {\r\n  font-size: 2em;\r\n}\r\n\r\n.checkbox {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.description {\r\n  width: 90%;\r\n  height: 75px;\r\n  border: none;\r\n  font-size: 25px;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n}\r\n",""]);const s=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},o=[],s=0;s<t.length;s++){var c=t[s],l=n.base?c[0]+n.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var y=i(f,n);n.byIndex=s,e.splice(s,0,{identifier:p,updater:y,references:1})}o.push(p)}return o}function i(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,i){var a=n(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<a.length;o++){var s=r(a[o]);e[s].references--}for(var c=n(t,i),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{var t=r(379),e=r.n(t),n=r(795),i=r.n(n),a=r(569),o=r.n(a),s=r(565),c=r.n(s),l=r(216),d=r.n(l),p=r(589),u=r.n(p),f=r(424),y={};y.styleTagTransform=u(),y.setAttributes=c(),y.insert=o().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d(),e()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(t){this.description=t,this.complete=!1,this.index=null}static listArray=[];static list=document.querySelector(".list-container");static addList(){let t="";h.listArray.forEach(((e,r)=>{e.index=r+1,t+=`<li id="${e.index}" class="list-item">\n            <div class="row"><input type="checkbox"  \n            class="checkbox" ${e.complete?"checked":""}>\n            <input type="text" class="description" value="${e.description}"></div>\n            <i class="fa-regular fa-trash-can fa-beat fa-lg remove" data-index="${e.index}"></i></li>\n        `})),h.list.innerHTML=t,h.list.querySelectorAll(".remove").forEach((t=>{t.addEventListener("click",(()=>{const e=parseInt(t.getAttribute("data-index"),10);h.remove(e)})),h.list.querySelectorAll(".description").forEach((t=>{t.addEventListener("blur",(t=>{const e=parseInt(t.target.parentNode.parentNode.id,10),r=t.target.value;h.edit(e,r)}))}))}))}static add(){const t=new h(document.querySelector("#newtask").value);t.index=h.listArray.length+1,h.listArray.push(t),localStorage.setItem("list",JSON.stringify(h.listArray)),h.addList()}static remove(t){const e=h.listArray.filter((e=>e.index!==t));h.listArray=e,localStorage.setItem("list",JSON.stringify(h.listArray)),h.addList(),h.updateIndexes()}static edit(t,e){const r=h.listArray.find((e=>e.index===t));r&&(r.description=e,localStorage.setItem("list",JSON.stringify(h.listArray)),h.addList())}static load(){const t=JSON.parse(localStorage.getItem("list"));t&&(h.listArray=t.sort(((t,e)=>t.index-e.index)),h.addList())}static updateIndexes(){for(let t=0;t<h.listArray.length;t+=1)h.listArray[t].index=t+1;localStorage.setItem("list",JSON.stringify(h.listArray))}}const m=document.querySelector(".deleteCompleteTask"),g=document.querySelector("#newtask");window.addEventListener("keydown",(t=>{"Enter"===t.key&&""!==g.value&&(h.add(),g.value="")})),window.addEventListener("click",(t=>{if(t.target.classList.contains("checkbox")){const e=parseInt(t.target.parentNode.parentNode.id,10);h.listArray.forEach((t=>{t.index===e&&(t.complete=!t.complete,localStorage.setItem("list",JSON.stringify(h.listArray)))}))}})),window.addEventListener("load",(()=>{h.load()})),m.addEventListener("click",(()=>{const t=h.listArray.filter((t=>!1===t.complete));h.listArray=t,localStorage.setItem("list",JSON.stringify(h.listArray)),h.addList(),h.updateIndexes()}))})()})();