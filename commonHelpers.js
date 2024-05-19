import{a as w,S as L,i as b}from"./assets/vendor-09d7c26e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const S="43879059-f5905d2b1638a117e79b8083f",P="https://pixabay.com/api/",d=15,q=async(t="",s=1)=>{var o;const a={key:S,q:t,per_page:d,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await w.get(P,{params:a})).data}catch(e){throw new Error(((o=e.response)==null?void 0:o.statusText)||"Error fetching data")}},E=t=>t.map(s=>{const{webformatURL:a,largeImageURL:o,comments:e,downloads:i,likes:r,views:y,tags:p}=s;return`<li class="item">
        <a class="item-link" href="${o}">
          <img src="${a}" alt="${p}" width="360" height="200">
          <div class="views">
            <div class="view-item">
              <div class="view-title">Likes</div>
              <div class="view-value">${r}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Views</div>
              <div class="view-value">${y}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Comments</div>
              <div class="view-value">${e}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Downloads</div>
              <div class="view-value">${i}</div>
            </div>
          </div>
        </a>
      </li>`}).join(""),M={captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250},m=document.querySelector("#gallery"),f=document.querySelector("#search"),n=document.querySelector("#load_more"),g=document.querySelector("#load_more_loader"),u=document.querySelector(".site-loader"),A=new L(".gallery a",M);let v="",c=1;function l({message:t,color:s}){b.show({message:t,color:s,position:"topRight",messageColor:"#ffffff",image:"./img/oct.svg",imageWidth:24})}async function h(t=!1){try{const{total:s,hits:a}=await q(v,c);if(t&&(m.innerHTML="",u.classList.remove("is-hidden")),s===0){l({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040"});return}const o=Math.ceil(s/d);m.insertAdjacentHTML("beforeend",E(a)),t&&(u.classList.add("is-hidden"),o>1&&n.classList.remove("hidden")),(c>=o||c>=Math.ceil(500/d))&&(n.classList.add("hidden"),l({message:"We're sorry, but you've reached the end of search results.",color:"#4e75ff"})),A.refresh(),t||_()}catch(s){l({message:s.message,color:"#ef4040"})}finally{t&&f.reset(),g.classList.add("hidden")}}function _(){const t=document.querySelectorAll(".gallery .item");if(t.length>0){const s=t[0].getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}}async function x(t){t.preventDefault(),v=t.target.elements.image.value.trim(),c=1,n.classList.add("hidden"),await h(!0)}async function I(t){t.preventDefault(),c+=1,g.classList.remove("hidden"),await h()}f.addEventListener("submit",x);n.addEventListener("click",I);
//# sourceMappingURL=commonHelpers.js.map
