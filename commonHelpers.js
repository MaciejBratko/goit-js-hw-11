import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as p}from"./assets/vendor-77e16229.js";let u;const n=document.querySelector("button[data-start]"),b=document.querySelector("#datetime-picker");n.disabled=!0;const g=e=>{const t=Date.now();return e<=t?Promise.reject("Please choose a date in the future"):Promise.resolve(e)},y={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1,onClose(e){const t=e[0];console.log(t),g(t).then(o=>{u=o,n.disabled=!1}).catch(o=>{p.show({message:o,messageSize:"16px",backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"white",iconColor:"white",progressBarColor:"rgba(181, 27, 27, 1)",close:!1,position:"topRight"}),n.disabled=!0})}};h("#datetime-picker",y);function s(e){const d=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%36e5/6e4),f=Math.floor(e%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:f}}let c;function S(){b.disabled=!0}function i({days:e,hours:t,minutes:o,seconds:r}){document.querySelector("span[data-days]").textContent=a(e),document.querySelector("span[data-hours]").textContent=a(t),document.querySelector("span[data-minutes]").textContent=a(o),document.querySelector("span[data-seconds]").textContent=a(r)}function a(e){return String(e).padStart(2,"0")}function w(){n.disabled=!0,S();const e=()=>{const t=Date.now(),o=u-t;if(o<=0){clearInterval(c),i(s(0));return}const r=s(o);i(r)};e(),c=setInterval(e,1e3)}n.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
