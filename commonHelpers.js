import{i as f,S as h}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(s){return s.map(({id:o,webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:l,downloads:u})=>`<li data-id="${o}" class="gallery-item">
    <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${i}"
      alt="${e}"
    />
    </a>
    <h2>Likes ${t}</h2>
    <h2>Views ${n}</h2>
    <h2>Comments ${l}</h2>
    <h2>Downloads ${u}</h2>
</li>`).join("")}const m="43226276-a07a0c17e428cfffb021b9b05";function y(s){const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`)}const c=document.querySelector(".picture-form");c.addEventListener("submit",g);const a=document.querySelector(".loader");a.style.display="none";const p=document.querySelector(".list");function g(s){s.preventDefault();const o=s.target.elements.choose.value;a.style.display="inline-flex",y(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(a.style.display="none",r.hits.length===0){f.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}p.innerHTML=d(r.hits),b.refresh()}).catch(r=>{console.log(r)}).finally(()=>c.reset())}const b=new h(".list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
