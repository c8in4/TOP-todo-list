(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>f});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),c=n(417),s=n.n(c),u=new URL(n(679),n.b),d=new URL(n(362),n.b),l=i()(o()),m=s()(u),h=s()(d);l.push([t.id,`:root {\n  --accent-bg-clr: #b0228c;\n  --accent-variant-clr: #662463;\n  --magenta-clr: #ea3788;\n  --light-coral-clr: #e56b70;\n  --salmon-pink-clr: #f391a0;\n\n  --black-clr: #000;\n  --white-clr: #fff;\n\n  --secondary-bg-clr: #eee;\n  --todo-card-box-shadow: 2px 2px 5px 0px #666;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  padding: 0.5em;\n  text-wrap: balance;\n}\n\nh1 {\n  text-align: center;\n}\n\np,\nli,\nfigcaption {\n  text-wrap: pretty;\n  max-width: 65ch;\n}\n\ninput,\ntextarea,\nselect {\n  padding: 0.5rem 1rem;\n  margin: 0.5rem 0;\n  width: 100%;\n  border: none;\n  background-color: var(--secondary-bg-clr);\n  border-radius: 0.5rem;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput:hover,\ninput:focus {\n  color: var(--accent-variant-clr);\n  box-shadow: var(--todo-card-box-shadow);\n  outline: none;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  border: none;\n  outline: transparent;\n  color: var(--accent-variant-clr);\n  font-weight: bold;\n  cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n  position: relative;\n  top: -1px;\n  left: -1px;\n  color: var(--accent-variant-clr); /* doesn't seem to do anything */\n  box-shadow: var(--todo-card-box-shadow);\n}\n\nbody {\n  /* font-size: 125%; */\n  min-height: 100dvh;\n  display: flex;\n  font-family: sans-serif;\n  overflow-x: hidden;\n}\n\ndialog {\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%);\n  width: minmax(max-content, 65ch);\n  border-radius: 0.5rem;\n  border: none;\n}\n\ndialog::backdrop {\n  background-color: #000;\n  opacity: 0.4;\n}\n\ndialog header {\n  padding: 1rem;\n  color: var(--accent-variant-clr);\n  background-color: var(--salmon-pink-clr);\n  text-align: center;\n}\n\ndialog form {\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: auto auto;\n  justify-content: center;\n  justify-items: center;\n  gap: 1rem;\n}\n\n#dialogFormContent div {\n  display: flex;\n  gap: 0.5rem;\n}\n\n#dialogFormContent div label {\n  width: 50%;\n}\n\n.dialogFormButtons {\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n  gap: 0.5rem;\n}\n\n.dialogFormButtons button {\n  width: 100%;\n}\n\n#sidebar {\n  position: sticky;\n  width: minmax(min-content, max-content);\n  top: 0;\n  height: 100dvh;\n  padding: 1rem;\n  background-color: var(--accent-bg-clr);\n  color: var(--white-clr);\n  display: flex;\n  flex-direction: column;\n}\n\nbutton#createProject {\n  margin: 1rem auto;\n}\n\n#listOfProjects {\n  border-radius: 0.5rem;\n  list-style: none;\n  flex: 1;\n  overflow: auto;\n}\n\n#listOfProjects li {\n  display: flex;\n  justify-content: space-between;\n}\n\n#listOfProjects button {\n  background: none;\n  border-radius: 0;\n  text-align: left;\n  color: var(--white-clr);\n}\n\n#listOfProjects button:hover,\n#listOfProjects button:focus {\n  box-shadow: none;\n  top: 0;\n  left: 0;\n}\n\n#listOfProjects li button.itemButton {\n  flex: 1;\n}\n\n#listOfProjects li button.itemButton:hover,\n#listOfProjects li button.itemButton:focus {\n  background-color: var(--magenta-clr);\n  border-radius: 0.5rem;\n}\n\nbutton img {\n  height: 1rem;\n}\n\nli.activeProject {\n  border-radius: 0.5rem;\n  background-color: var(--accent-variant-clr);\n}\n\nbutton.deleteButton {\n  background-image: url(${m});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  padding: 1rem;\n}\n\nbutton.editButton {\n  background-image: url(${h});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  padding: 1rem;\n}\n\n.editAndDeleteButtons button + button {\n  margin-left: 0.5rem;\n}\n\nmain {\n  min-width: 66%;\n  flex: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n#mainTop {\n  position: sticky;\n  top: 0;\n  right: 0;\n  padding: 1rem;\n  background-color: var(--salmon-pink-clr);\n  box-shadow: var(--todo-card-box-shadow);\n}\n\n.headerContainer {\n  display: flex;\n  align-items: center;\n}\n\n#projectHeader {\n  color: var(--accent-variant-clr);\n}\n\n#createTodo {\n  display: block;\n}\n\n#todoContainer {\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  background-color: var(--secondary-bg-clr);\n  display: grid;\n  grid-template-columns: minmax(min-content, 75ch);\n  justify-content: center;\n  align-content: baseline;\n  gap: 1rem;\n}\n\n.todoCard {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem 1rem 1rem 0.5rem;\n  box-shadow: var(--todo-card-box-shadow);\n  background-color: var(--white-clr);\n}\n\n.low-priority {\n  border-left: 0.75rem solid var(--white-clr);\n}\n\n.normal-priority {\n  border-left: 0.75rem solid var(--salmon-pink-clr);\n}\n\n.high-priority {\n  border-left: 0.75rem solid var(--accent-bg-clr);\n}\n\n.todoCardHeaderDiv {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  align-items: center;\n  /* justify-content: space-between; */\n}\n\n.todoCardHeader {\n  padding: 0;\n  flex: 1;\n  color: var(--accent-variant-clr);\n  font-size: 1.2em;\n}\n\n.todoCardDescription {\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  /* background-color: var(--secondary-bg-clr); */\n  color: var(--magenta-clr);\n  display: inline;\n}\n\n.hidden {\n  display: none;\n}\n\nfooter {\n  margin-top: 1rem;\n  align-self: center;\n}\n\n/* outline: 1px solid red; */\n`,""]);const f=l},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var m=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},679:(t,e,n)=>{t.exports=n.p+"3ad0d4ca6509b01d0f06.png"},362:(t,e,n)=>{t.exports=n.p+"5e1bedbd78f0fa07cf97.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),u=n(56),d=n.n(u),l=n(540),m=n.n(l),h=n(113),f=n.n(h),p=n(208),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),o()(p.A,g),p.A&&p.A.locals&&p.A.locals;const b={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function w(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const y={date:w({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:w({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:w({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function x(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const M={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:x({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:x({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:x({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:x({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:x({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function k(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(c):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(c);let u;return u=t.valueCallback?t.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const S={ordinalNumber:(C={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(C.matchPattern);if(!n)return null;const r=n[0],o=t.match(C.parsePattern);if(!o)return null;let a=C.valueCallback?C.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var C;const P={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=b[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:y,formatRelative:(t,e,n,r)=>v[t],localize:M,match:S,options:{weekStartsOn:0,firstWeekContainsDate:1}};let T={};function E(){return T}Math.pow(10,8);const D=6048e5,j=864e5;function L(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function q(t){const e=L(t);return e.setHours(0,0,0,0),e}function W(t){const e=L(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function O(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function N(t){const e=L(t);return function(t,e){const n=q(t),r=q(e),o=+n-W(n),a=+r-W(r);return Math.round((o-a)/j)}(e,function(t){const e=L(t),n=O(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function H(t,e){const n=E(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=L(t),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function F(t){return H(t,{weekStartsOn:1})}function Y(t){const e=L(t),n=e.getFullYear(),r=O(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=F(r),a=O(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=F(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function A(t){const e=L(t),n=+F(e)-+function(t){const e=Y(t),n=O(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),F(n)}(e);return Math.round(n/D)+1}function B(t,e){const n=L(t),r=n.getFullYear(),o=E(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=O(t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const c=H(i,e),s=O(t,0);s.setFullYear(r,0,a),s.setHours(0,0,0,0);const u=H(s,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function z(t,e){const n=L(t),r=+H(n,e)-+function(t,e){const n=E(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=B(t,e),a=O(t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),H(a,e)}(n,e);return Math.round(r/D)+1}function Q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const G={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):Q(n+1,2)},d:(t,e)=>Q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>Q(t.getHours()%12||12,e.length),H:(t,e)=>Q(t.getHours(),e.length),m:(t,e)=>Q(t.getMinutes(),e.length),s:(t,e)=>Q(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return Q(Math.trunc(r*Math.pow(10,n-3)),e.length)}},X={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return G.y(t,e)},Y:function(t,e,n,r){const o=B(t,r),a=o>0?o:1-o;return"YY"===e?Q(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):Q(a,e.length)},R:function(t,e){return Q(Y(t),e.length)},u:function(t,e){return Q(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return G.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=z(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):Q(o,e.length)},I:function(t,e,n){const r=A(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):G.d(t,e)},D:function(t,e,n){const r=N(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return Q(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return Q(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return Q(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return G.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):G.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):G.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):G.s(t,e)},S:function(t,e){return G.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return I(r);case"XXXX":case"XX":return J(r);default:return J(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return I(r);case"xxxx":case"xx":return J(r);default:return J(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+$(r,":");default:return"GMT"+J(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+$(r,":");default:return"GMT"+J(r,":")}},t:function(t,e,n){return Q(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return Q(t.getTime(),e.length)}};function $(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+Q(a,2)}function I(t,e){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):J(t,e)}function J(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+Q(Math.trunc(r/60),2)+e+Q(r%60,2)}const R=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},U=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},V={p:U,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return R(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",R(r,e)).replace("{{time}}",U(o,e))}},_=/^D+$/,K=/^Y+$/,Z=["D","DD","YY","YYYY"];function tt(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=L(t);return!isNaN(Number(n))}const et=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rt=/^'([^]*?)'?$/,ot=/''/g,at=/[a-zA-Z]/;function it(t,e,n){const r=E(),o=n?.locale??r.locale??P,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=L(t);if(!tt(c))throw new RangeError("Invalid time value");let s=e.match(nt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,V[e])(t,o.formatLong):t})).join("").match(et).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:ct(t)};if(X[e])return{isToken:!0,value:t};if(e.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(s=o.localize.preprocessor(c,s));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return s.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return K.test(t)}(a)||!n?.useAdditionalDayOfYearTokens&&function(t){return _.test(t)}(a))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),Z.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,X[a[0]])(c,a,o.localize,u)})).join("")}function ct(t){const e=t.match(rt);return e?e[1].replace(ot,"'"):t}class st{constructor(t){this.name=t,this.todoList=[]}addTodo(t){this.todoList.push(t)}removeTodo(t){t<this.todoList.length?this.todoList.splice(t,1):console.log("invalid index")}}class ut{constructor(t,e,n,r){this.title=t,this.priority=e,this.dueDate=n,this.description=r||"no description"}}let dt=[];function lt(){return dt}const mt=document.querySelector("#listOfProjects");function ht(){const t=document.createElement("div");t.classList.add("editAndDeleteButtons");const e=document.createElement("button");e.classList.add("editButton");const n=document.createElement("button");return n.classList.add("deleteButton"),t.append(e,n),t}const ft=document.querySelector("#todoContainer"),pt=document.querySelector("#mainTop");const gt=document.querySelector("#dialogHeader"),bt=document.querySelector("#dialogFormContent"),wt=document.querySelector(".dialogFormButtons");function yt(t){xt(),gt.textContent=t;const e=Mt("Project Name","projectName");bt.append(e),kt()}function vt(t){xt(),gt.textContent=t;const e=Mt("Todo Title","todoTitle"),n=document.createElement("div"),r=function(t,e){const n=document.createElement("label"),r=document.createElement("p");n.for=e,r.textContent="Priority:";const o=document.createElement("select");function a(t,e){const n=document.createElement("option");return n.name=t,n.value=t,n.textContent=e,n}o.name=e,o.id=e;const i=a("normal","Normal");i.selected="selected";const c=a("low","Low"),s=a("high","High");return o.append(c,i,s),n.append(r,o),n}(0,"todoPriority"),o=function(t,e){const n=document.createElement("label"),r=document.createElement("p");n.for=e,r.textContent="Due Date:";const o=document.createElement("input");return o.type="date",o.valueAsDate=new Date,o.id=e,n.append(r,o),n}(0,"todoDueDate");n.append(r,o);const a=function(t,e){const n=document.createElement("label"),r=document.createElement("p");n.for=e,r.textContent=t+":";const o=document.createElement("textarea");return o.id=e,o.cols=45,o.rows=5,o.placeholder=t,n.append(r,o),n}("Description","todoDescription");bt.append(e,n,a),kt()}function xt(){gt.textContent="",bt.innerHTML="",wt.innerHTML=""}function Mt(t,e){const n=document.createElement("label"),r=document.createElement("p");n.for=e,r.textContent=t+":";const o=document.createElement("input");return o.id=e,o.placeholder=t,n.append(r,o),n}function kt(){const t=document.createElement("button");t.id="saveFormButton",t.value="default",t.textContent="Save";const e=document.createElement("button");e.value="cancelFormButton",e.formMethod="dialog",e.textContent="Cancel",wt.append(t,e)}function St(){var t,e;t=Pt,mt.innerHTML="",lt().forEach(((e,n)=>{const r=document.createElement("li"),o=document.createElement("button");o.classList.add("itemButton"),o.textContent=e.name,o.dataset.index=n,n==t?r.classList.add("activeProject"):r.classList.remove("activeProject"),r.appendChild(o),mt.appendChild(r)})),e=lt()[Pt],pt.innerHTML="",ft.innerHTML="",e?(function(t){const e=document.createElement("div");e.classList.add("headerContainer");const n=document.createElement("h2");n.id="projectHeader",n.textContent=t.name;const r=ht(),o=document.createElement("button");o.id="createTodo",o.textContent="Add Task",e.append(n,r),pt.append(e,o)}(e),function(t){t.todoList.forEach((t=>{!function(t){const e=document.createElement("div");e.classList.add("todoCard");const n=document.createElement("div");n.classList.add("todoCardHeaderDiv");const r=document.createElement("h4");r.classList.add("todoCardHeader"),r.textContent=t.title;const o=document.createElement("p");o.textContent=it(t.dueDate,"dd MMM yyyy");const a=document.createElement("p");switch(a.textContent=t.priority,t.priority){case"high":e.classList.add("high-priority");break;case"normal":e.classList.add("normal-priority");break;case"low":e.classList.add("low-priority")}const i=ht();n.append(r,o,a,i);const c=document.createElement("p");c.classList.add("todoCardDescription","hidden"),c.textContent=t.description,e.append(n,c),ft.appendChild(e)}(t)})),function(){const t=ft.children;for(const e of t)e.addEventListener("click",(t=>{"submit"!==t.target.type&&e.lastChild.classList.toggle("hidden")}))}()}(e)):pt.textContent="You have no projects",function(){const t=document.querySelector("#createTodo");t&&t.addEventListener("click",(()=>{!function(){console.info("new todo button pressed"),vt("Create new Todo");const t=document.querySelector("#todoTitle"),e=document.querySelector("#todoPriority"),n=document.querySelector("#todoDueDate"),r=document.querySelector("#todoDescription");Tt((()=>{const o=new ut(t.value,e.value,n.value,r.value);o.title&&(lt()[Pt].todoList.push(o),St())})),Ct.showModal()}()}))}(),function(){const t=document.querySelector(".headerContainer .editButton");t&&t.addEventListener("click",(()=>{!function(){console.info("edit project button pressed"),yt("Edit Project");const t=document.querySelector("#projectName"),e=lt()[Pt];t.value=e.name,t.focus(),Tt((()=>{e.name=t.value,St()})),Ct.showModal()}()}))}(),function(){const t=document.querySelector(".headerContainer .deleteButton");t&&t.addEventListener("click",(()=>{confirm("Are you sure you want to delete this?")&&(lt().splice(Pt,1),Pt--,Pt<0&&(Pt=0),St())}))}(),document.querySelectorAll("#todoContainer .editButton").forEach(((t,e)=>{t.addEventListener("click",(()=>{!function(t){console.info("edit todo button pressed"),vt("Edit Todo");const e=document.querySelector("#todoTitle"),n=document.querySelector("#todoPriority"),r=document.querySelector("#todoDueDate"),o=document.querySelector("#todoDescription"),a=lt()[Pt].todoList[t];e.value=a.title,n.value=a.priority,r.value=a.dueDate,o.value=a.description,Tt((()=>{a.title=e.value,a.priority=n.value,a.dueDate=r.value,a.description=o.value,St()})),Ct.showModal()}(e)}))})),document.querySelectorAll("#todoContainer .deleteButton").forEach(((t,e)=>{t.addEventListener("click",(()=>{confirm("Are you sure you want to delete this?")&&(lt()[Pt].todoList.splice(e,1),St())}))}))}const Ct=document.querySelector("#dialog");let Pt=0;function Tt(t){document.querySelector("#saveFormButton").addEventListener("click",(e=>{e.preventDefault(),Ct.close(),t()}))}document.querySelector("#createProject").addEventListener("click",(()=>{!function(){console.info("new project button pressed"),yt("Create new Project");const t=document.querySelector("#projectName");t.focus(),Tt((()=>{const e=new st(t.value);e.name&&(lt().push(e),Pt=lt().length-1,St())})),Ct.showModal()}()})),document.querySelector("#listOfProjects").addEventListener("click",(t=>{const e=t.target.dataset.index;e&&(Pt=e),St()})),function(){const t=localStorage.getItem("projects"),e=JSON.parse(t);t?(dt=e,console.info("Loaded projects from local storage")):(function(){const t=new st("Default Project"),e=new ut("Example Todo","normal",it(new Date,"yyyy-MM-dd"),"This is just an example of a Todo with a description");t.addTodo(e),dt.push(t)}(),console.info("No local projects found. Created default project with example todo"))}(),St(),window.addEventListener("beforeunload",(t=>{t.preventDefault(),function(){const t=JSON.stringify(dt);localStorage.setItem("projects",t),console.info("Projects saved to local storage")}()}))})();