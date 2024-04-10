import{i as f,S as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(o){return o.map(({id:s,webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:c,downloads:u})=>`<li data-id="${s}" class="gallery-item">
    <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${i}"
      alt="${e}"
    />
    <ul class="info-card">
    <li class="info-label" ><span>Likes</span><br>${t}</li>
    <li class="info-label"><span>Views</span><br>${n}</li>
    <li class="info-label"><span>Comments</span><br>${c}</li>
    <li class="info-label"><span>Downloads</span><br>${u}</li>
    </ul>
    </a>
</li>`).join("")}const m="43226276-a07a0c17e428cfffb021b9b05";function y(o){const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`)}const l=document.querySelector(".picture-form");l.addEventListener("submit",g);const a=document.querySelector(".loader");a.style.display="none";const h=document.querySelector(".list");function g(o){o.preventDefault();const s=o.target.elements.choose.value;a.style.display="inline-flex",y(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(a.style.display="none",r.hits.length===0){f.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}h.innerHTML=d(r.hits),b.refresh()}).catch(r=>{console.log(r)}).finally(()=>l.reset())}const b=new p(".list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
