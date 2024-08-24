(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>i});var r=e(601),o=e.n(r),a=e(314),c=e.n(a)()(o());c.push([n.id,":root {\n  --accent-bg-clr: #B0228C;\n  --accent-variant-clr: #662463;\n  --magenta-clr: #EA3788;\n  --light-coral-clr: #E56B70;\n  --salmon-pink-clr: #F391A0;\n\n  --black-clr: #000;\n  --white-clr: #fff;\n\n  --secondary-bg-clr: #eee;\n  --todo-card-box-shadow: 2px 2px 5px 0px #666\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  /* font-size: 125%; */\n  min-height: 100dvh;\n  display: grid;\n  grid-template-columns: auto 1fr;\n\n  font-family: sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  padding: 0.5em;\n}\n\nh1 {\n  text-align: center;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  border: none;\n  outline: transparent;\n  /* background-color: var(--salmon-pink-clr); */\n  color: var(--accent-variant-clr);\n  font-weight: bold;\n  cursor: pointer;\n}\n\nbutton:hover {\n  position: relative;\n  top: -1px;\n  left: -1px;\n  color: var(--accent-variant-clr);\n  box-shadow: var(--todo-card-box-shadow);\n}\n\n#sidebar {\n  position: sticky;\n  top: 0;\n  height: 100dvh;\n  padding: 1rem;\n  background-color: var(--accent-bg-clr);\n  color: var(--white-clr);\n  display: flex;\n  flex-direction: column;\n}\n\nbutton#createProject {\n  margin: 1rem auto;\n}\n\n#listOfProjects {\n  border-radius: 0.5rem;\n  list-style: none;\n  flex: 1;\n  overflow: auto;\n}\n\n#listOfProjects li {\n  display: flex;\n  justify-content: space-between;\n}\n\n#listOfProjects button {\n  background: none;\n  border-radius: 0;\n  text-align: left;\n  color: var(--white-clr);\n}\n\n#listOfProjects button:hover {\n  box-shadow: none;\n  top: 0;\n  left: 0;\n}\n\n#listOfProjects li button.itemButton {\n  flex: 1;\n}\n\n#listOfProjects li button.itemButton:hover {\n  background-color: var(--magenta-clr);\n  border-radius: 0.5rem;\n}\n\nbutton img {\n  height: 1rem;\n}\n\nli.activeProject {\n  border-radius: 0.5rem;\n  background-color: var(--accent-variant-clr);\n}\n\n/* \n#listOfProjects li button.deleteButton {\n  background-image: url(./icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n} */\n\nmain {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#mainTop {\n  position: sticky;\n  top: 0;\n  right: 0;\n  padding: 1rem;\n  background-color: var(--salmon-pink-clr);\n  box-shadow: var(--todo-card-box-shadow);\n}\n\n#projectHeader {\n  color: var(--accent-bg-clr);\n}\n\n#todoContainer {\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, clamp(150px, 30%, 65ch));\n  grid-auto-rows: min(150px, 250px);\n  gap: 1rem;\n  justify-content: center;\n}\n\n.todoCard {\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: var(--todo-card-box-shadow);\n}\n\nfooter {\n  margin-top: 1rem;\n  align-self: center;\n}\n\n/* outline: 1px solid red; */",""]);const i=c},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);t[i].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),c=e.n(a),i=e(659),s=e.n(i),d=e(56),l=e.n(d),u=e(540),p=e.n(u),f=e(113),m=e.n(f),v=e(208),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),o()(v.A,h),v.A&&v.A.locals&&v.A.locals;class b{constructor(n){this.name=n,this.todoList=[]}}class g{constructor(n="",t="",e,r="normal"){this.title=n,this.description=t,this.dueDate=e,this.priority=r}}const x=[new b("My Todos")];let y=0;function w(){return y}function j(n){y=n}const k=()=>{C.innerHTML="",x.forEach(((n,t)=>{const e=document.createElement("li"),r=document.createElement("button");r.classList.add("itemButton"),r.textContent=n.name,r.addEventListener("click",(()=>{j(t),k()})),t==w()?e.classList.add("activeProject"):e.classList.remove("activeProject"),e.appendChild(r),C.appendChild(e)})),function(){const n=x[w()];T.innerHTML="",L.innerHTML="",n&&(function(n){const t=document.createElement("h2");t.id="projectHeader",t.textContent=n.name;const e=document.createElement("button");e.id="createTodo",e.textContent="Add Task",e.addEventListener("click",(()=>{!function(n="",t,e="normal"){const r=prompt("Todo title:");if(r&&x[y]){const o=new g(r,n,t,e);x[y].todoList.push(o)}}(),k()})),T.append(t,e)}(n),function(n){n.todoList.forEach(((n,t)=>{L.appendChild(E(n,t))}))}(n)),""==T.innerHTML&&(T.textContent="You have no projects")}()},C=document.querySelector("#listOfProjects"),L=document.querySelector("#todoContainer"),T=document.querySelector("#mainTop");document.querySelector("#createProject").addEventListener("click",(()=>{!function(){const n=prompt("Project name:");if(n){const t=new b(n);x.push(t),j(x.length-1)}}(),k()}));const E=(n,t)=>{const e=document.createElement("div");return e.classList.add("todoCard"),e.dataset.todoIndex=t,e.textContent=n.title,e};k()})();