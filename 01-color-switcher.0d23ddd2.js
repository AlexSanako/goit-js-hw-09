const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){n||(t.disabled=!0,n=setInterval(a,1e3))})),e.addEventListener("click",(function(){n&&(clearInterval(n),n=null,t.disabled=!1)}));
//# sourceMappingURL=01-color-switcher.0d23ddd2.js.map
