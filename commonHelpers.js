import{S as u,i as v}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="43879059-f5905d2b1638a117e79b8083f",f="https://pixabay.com/api/",h=(s="")=>{const i=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},p=s=>s.map(i=>{const{webformatURL:r,largeImageURL:o,comments:e,downloads:t,likes:a,views:d,tags:m}=i;return`<li class="item">
        <a class="item-link" href="${o}">
          <img src="${r}" alt="${m}" width="360" height="200">
          <div class="views">
            <div class="view-item">
              <div class="view-title">Likes</div>
              <div class="view-value">${a}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Views</div>
              <div class="view-value">${d}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Comments</div>
              <div class="view-value">${e}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Downloads</div>
              <div class="view-value">${t}</div>
            </div>
          </div>
        </a>
      </li>`}).join(""),y={captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250},c=document.querySelector("#gallery"),w=document.querySelector("#search"),n=document.querySelector(".site-loader"),L=new u(".gallery a",y);function l({message:s,color:i}){v.show({message:s,color:i,position:"topRight",messageColor:"#ffffff",image:"./img/oct.svg",imageWidth:24})}const b=s=>{s.preventDefault();const i=s.target.elements.image.value.trim();console.log(i),c.innerHTML="",n.classList.remove("is-hidden"),h(i).then(o=>{o.total===0&&l({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040"}),c.innerHTML=p(o.hits),L.refresh()}).catch(o=>{l({message:o.message,color:"#ef4040"})}).finally(()=>{s.target.reset(),n.classList.add("is-hidden")})};w.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
