!function(){function e(e,n,t){return new Promise((function(o,a){setTimeout((function(){t?o({position:e,delay:n}):a({position:e,delay:n})}),n)}))}var n=document.querySelector(".form");n.addEventListener("submit",(function(t){t.preventDefault();for(var o=parseInt(n.elements.delay.value),a=parseInt(n.elements.step.value),l=parseInt(n.elements.amount.value),s=[],i=0;i<l;i++){var r=e(i+1,o+i*a,Math.random()>.3);s.push(r)}Promise.allSettled(s).then((function(e){e.forEach((function(e){var n=e.value||e.reason,t=n.position,o=n.delay;"fulfilled"===e.status?console.log("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms")):console.log("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}))}();
//# sourceMappingURL=03-promises.1b41fbfe.js.map
