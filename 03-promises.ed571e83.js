function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector(".form"),l=document.querySelector("button[type=submit]");u.addEventListener("input",(function(e){const t=u.delay.value,n=u.step.value,o=u.amount.value;return d={firstDelay:t,delayStep:n,amount:o}})),l.addEventListener("click",(function(e){l.setAttribute("type","button"),setTimeout((()=>{for(let e=1;e<=d.amount;e++)a(e,d.delayStep)}),d.firstDelay)}));let d={};function a(t,n){Math.random()>.3?e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`):e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}
//# sourceMappingURL=03-promises.ed571e83.js.map
