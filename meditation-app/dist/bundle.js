!function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);r(1);console.log("Hello, SASS"),console.log("Hello, HTML");const o=document.querySelector(".song"),i=document.querySelector(".vid-container video"),n=document.querySelectorAll(".circle__big div div"),c=document.querySelector(".circle__big"),a=document.querySelector(".play"),s=document.querySelector(".replay"),u=document.querySelector(".time-display"),l=document.querySelectorAll(".time-select div"),d=document.querySelector(".time-select");let v=600;u.textContent=`${Math.floor(v/60)}:${Math.floor(v%60)}`,c.addEventListener("click",t=>{t.target.getAttribute("data-video")&&t.target.getAttribute("data-sound")&&(n.forEach(t=>t.classList.remove("active")),t.target.getAttribute("data-video")&&t.target.getAttribute("data-sound")&&t.target.classList.add("active"))}),n.forEach(t=>{t.addEventListener("click",(function(){this.getAttribute("data-video")&&this.getAttribute("data-sound")&&(o.src=this.getAttribute("data-sound"),i.src=this.getAttribute("data-video"),g(o))}))}),a.addEventListener("click",(function(){g(o)})),s.addEventListener("click",(function(){f(o)}));const f=t=>{t.currentTime;t.currentTime=0,console.log("ciao"),t.paused?d.classList.remove("no__active"):d.classList.add("no__active")};l.forEach(t=>{t.addEventListener("click",(function(){v=this.getAttribute("data-time"),u.textContent=`${Math.floor(v/60)}:${Math.floor(v%60)}`,d.classList.add("no__active")}))});const g=t=>{t.paused?(t.play(),i.play(),a.src="./img/svg/pause.svg",n.forEach(t=>{i.getAttribute("src")==t.getAttribute("data-video")&&t.classList.add("active")}),d.classList.add("no__active")):(t.pause(),i.pause(),a.src="./img/svg/play.svg",n.forEach(t=>t.classList.remove("active")),d.classList.remove("no__active"))};o.ontimeupdate=function(){let t=o.currentTime,e=v-t,r=Math.floor(e%60),c=Math.floor(e/60);u.textContent=`${c}:${r}`,t>=v&&(o.pause(),o.currentTime=0,a.src="./img/svg/play.svg",i.pause(),n.forEach(t=>t.classList.remove("active")),d.classList.remove("no__active"))}},function(t,e){}]);