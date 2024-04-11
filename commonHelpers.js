import{i as p,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){return s.map(({id:o,webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:f})=>`<li data-id="${o}" class="gallery-item">
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
    <li class="info-label"><span>Comments</span><br>${u}</li>
    <li class="info-label"><span>Downloads</span><br>${f}</li>
    </ul>
    </a>
</li>`).join("")}const y="43226276-a07a0c17e428cfffb021b9b05";function h(s){const o=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`)}const c=document.querySelector(".picture-form");c.addEventListener("submit",g);const a=document.querySelector(".loader");a.style.display="none";const l=document.querySelector(".list");function g(s){s.preventDefault();const o=s.target.elements.choose.value;a.style.display="inline-flex",h(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(a.style.display="none",r.hits.length===0){l.innerHTML="",p.info({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",timeout:2e3,position:"topRight"});return}l.innerHTML=m(r.hits),b.refresh()}).catch(r=>{console.log(r)}).finally(()=>c.reset())}const b=new d(".list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
