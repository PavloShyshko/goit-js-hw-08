!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,u,a,f,c,l=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(h,t),s?j(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function h(){var e=p();if(O(e))return T(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?m(n,u-(e-l)):n}(e))}function T(e){return f=void 0,b&&r?j(e):(r=i=void 0,a)}function w(){var e=p(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(h,t),j(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=g(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||a.test(e)?f(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j,S=document.querySelector(".feedback-form"),O=document.querySelector("input"),h=document.querySelector("textarea"),T="feedback-form-state",w={email:"",message:""};S.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),S.reset(),localStorage.removeItem(T)})),S.addEventListener("input",(function(e){w.email=O.value,w.message=h.value,localStorage.setItem(T,JSON.stringify(w))})),(j=JSON.parse(localStorage.getItem(T)))&&(console.log(j),S.email.value=j.email,S.message.value=j.message)}();
//# sourceMappingURL=03-feedback.03336927.js.map