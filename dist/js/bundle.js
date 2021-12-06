!function(){"use strict";var e=()=>{class e{constructor(e,t,n,o,s,a){this.img=e,this.alt=t,this.title=n,this.text=o,this.price=s;for(var r=arguments.length,c=new Array(r>6?r-6:0),l=6;l<r;l++)c[l-6]=arguments[l];this.classes=c,this.parent=document.querySelector(a),this.currency=75,this.changeToRub()}changeToRub(){this.price=this.price*this.currency}render(){const e=document.createElement("div");0===this.classes.length?(this.newElement="menu__item",e.classList.add(this.newElement)):this.classes.forEach((t=>{e.classList.add(t)})),e.innerHTML=`<img src=${this.img} alt=${this.alt}>\n      <h3 class="menu__item-subtitle">${this.title}</h3>\n      <div class="menu__item-descr">${this.text}</div>\n      <div class="menu__item-divider"></div>\n      <div class="menu__item-price">\n          <div class="menu__item-cost">Цена:</div>\n          <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n      </div>`,this.parent.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:n,altimg:o,title:s,descr:a,price:r}=t;new e(n,o,s,a,r,".menu .container").render()}))}))},t=e=>{const t=document.querySelectorAll(e);t.forEach((e=>{(e=>{const t=window.modal.hideModalWindow;e.addEventListener("submit",(t=>{t.preventDefault();const o=document.createElement("img");o.src="img/spinner.svg",o.style.cssText="  \n          margin: 0 auto;\n          display: block;         \n        ",e.insertAdjacentElement("afterEnd",o);const s=new FormData(e);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json "},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((e=>{console.log(e),n("Спасибо и до свидания"),o.remove()})).catch((()=>{n("Ошибка")})).finally((()=>{e.reset()}))})),e.addEventListener("submit",t)})(e)}));const n=e=>{const t=document.createElement("div");t.classList.add("modal__message"),t.innerHTML=`\n      <div class="modal__dialog">\n        <div class="modal__content">\n          <div class="modal__close" data-close>×\n          </div>\n          <div class="modal__title">${e}</div>\n        </div>\n      <div>\n      `,document.querySelector(".page").append(t),setTimeout((()=>{t.remove()}),4e3),document.querySelector(".modal__message").querySelector(".modal__close").addEventListener("click",(()=>{t.remove()}))};fetch("db.json").then((e=>e.json())).then((e=>console.log(e)))};window.addEventListener("DOMContentLoaded",(()=>{(e=>{let{itemHeaderClass:t,itemContentClass:n,parentSelectorClass:o,activeClass:s}=e;const a=document.querySelectorAll(t),r=document.querySelectorAll(n),c=document.querySelector(o),l=()=>{r.forEach((e=>{e.classList.add("hidden"),e.classList.remove("show","fade")})),a.forEach((e=>{e.classList.remove(s)}))},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[e].classList.add("show","fade"),r[e].classList.remove("hidden"),a[e].classList.add(s)};l(),i(),c.addEventListener("click",(e=>{const t=e.target;t&&t.classList.contains("tabheader__item")&&a.forEach(((e,n)=>{t===e&&(l(),i(n))}))}))})({itemHeaderClass:".tabheader__item",itemContentClass:".tabcontent",parentSelectorClass:".tabheader__items",activeClass:"tabheader__item--active"}),(()=>{const e=document.querySelectorAll(".btn_open_modal"),t=document.querySelector(".modal"),n=document.querySelector(".modal__close"),o=e=>{"Escape"===e.key&&(r(),e.preventDefault())},s=e=>{e.target===t&&r()},a=()=>{t.classList.add("show"),document.addEventListener("keydown",o),t.addEventListener("click",s),n.addEventListener("click",r),document.body.style.overflow="hidden",clearInterval(c)},r=()=>{t.classList.remove("show"),document.removeEventListener("keydown",o),t.removeEventListener("click",s),n.removeEventListener("click",r),document.body.style.overflow="visible"};e.forEach((e=>{e.addEventListener("click",a)}));const c=setTimeout(a,5e4),l=()=>{window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(a(),window.removeEventListener("scroll",l))};window.addEventListener("scroll",l),window.modal={hideModalWindow:r}})(),((e,t)=>{const n=e=>e>=0&&e<10?`0${e}`:e;((e,t)=>{const o=document.querySelector(e),s=o.querySelector("#days"),a=o.querySelector("#hours"),r=o.querySelector("#minutes"),c=o.querySelector("#seconds"),l=setInterval(i,1e3);function i(){const e=(e=>{const t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/864e5),o=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60);return{total:t,days:n,hours:Math.floor(t/36e5%24),minutes:s,seconds:o}})(t);s.innerHTML=n(e.days),a.innerHTML=n(e.hours),r.innerHTML=n(e.minutes),c.innerHTML=n(e.seconds),e.total<=0&&clearInterval(l)}i()})(e,t)})(".timer","2021-12-31"),e(),(()=>{const e=document.querySelector(".calculating__result span");let t,n,o,s,a;localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a="1.375",localStorage.setItem("ratio","1.375"));const r=e=>{document.querySelectorAll(e).forEach((e=>{e.classList.remove("calculating__choose-item_active"),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add("calculating__choose-item_active"),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add("calculating__choose-item_active")}))};r("#gender div"),r(".calculating__choose_big div");const c=()=>{e.textContent=t&&n&&o&&s&&a?"female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*s)*a):Math.round((88.36+13.4*o+4.8*n-5.7*s)*a):"___"};c();const l=e=>{const n=document.querySelectorAll(e);n.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(a=e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),n.forEach((e=>{e.classList.remove("calculating__choose-item_active")})),e.target.classList.add("calculating__choose-item_active"),c()}))}))};l("#gender div"),l(".calculating__choose_big div");const i=e=>{const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=t.value;break;case"weight":o=t.value;break;case"age":s=t.value}c()}))};i("#height"),i("#weight"),i("#age")})(),t("form"),(e=>{let{container:t,slide:n,nextButton:o,prevButton:s,totalCounter:a,currentCounter:r,wrapper:c,field:l}=e;const i=document.querySelectorAll(n),d=document.querySelector(t),u=document.querySelector(s),m=document.querySelector(o),h=document.querySelector(a),g=document.querySelector(r),v=document.querySelector(c),_=document.querySelector(l),y=window.getComputedStyle(v).width;let f=1,p=0;i.length<10?(h.textContent=`0${i.length}`,g.textContent=`0${f}`):(h.textContent=i.length,g.textContent=f),_.style.width=100*i.length+"%",_.style.display="flex",_.style.transition="0.5s all",v.style.overflow="hidden",i.forEach((e=>{e.style.width=y})),d.style.position="relative";const E=document.createElement("ol"),w=[];E.classList.add("carousel-indicators"),d.append(E);for(let e=0;e<i.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.classList.add("dot"),0===e&&(t.style.opacity=1),E.append(t),w.push(t)}const L=e=>+e.replace(/\D/g,"");m.addEventListener("click",(()=>{p===L(y)*(i.length-1)?p=0:p+=L(y),_.style.transform=`translateX(-${p}px)`,f===i.length?f=1:f++,i.length<10?g.textContent=`0${f}`:g.textContent=f,w.forEach((e=>{e.style.opacity="0.5"})),w[f-1].style.opacity="1"})),u.addEventListener("click",(()=>{0===p?p=L(y)*(i.length-1):p-=L(y),_.style.transform=`translateX(-${p}px)`,1===f?f=i.length:f--,i.length<10?g.textContent=`0${f}`:g.textContent=f,w.forEach((e=>{e.style.opacity="0.5"})),w[f-1].style.opacity="1"})),w.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");f=t,p=L(y)*(t-1),_.style.transform=`translateX(-${p}px)`,i.length<10?g.textContent=`0${f}`:g.textContent=f,w.forEach((e=>{e.style.opacity="0.5"})),w[f-1].style.opacity="1"}))}))})({container:".offer__slider",slide:".offer__slide",prevButton:".offer__slider-prev",nextButton:".offer__slider-next",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map