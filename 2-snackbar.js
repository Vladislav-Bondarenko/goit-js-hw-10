import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form");r.addEventListener("submit",a);function a(o){o.preventDefault();const s=new FormData(o.currentTarget),t=Number(s.get("delay")),m=s.get("state");new Promise((e,n)=>{setTimeout(()=>{m==="fulfilled"?e(t):n(t)},t)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}),r.reset()}
//# sourceMappingURL=2-snackbar.js.map
