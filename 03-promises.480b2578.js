!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("iU1Pc"),i=document.querySelector(".form"),l=document.querySelector("button[type=submit]");function a(t,n){Math.random()>.3?e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms")):e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}i.addEventListener("input",(function(e){var t=i.delay.value,n=i.step.value,o=i.amount.value;return result={firstDelay:t,delayStep:n,amount:o}})),l.addEventListener("click",(function(e){l.setAttribute("type","button"),setTimeout((function(){for(var e=1;e<=result.amount;e++)a(e,result.delayStep)}),result.firstDelay)}))}();
//# sourceMappingURL=03-promises.480b2578.js.map
