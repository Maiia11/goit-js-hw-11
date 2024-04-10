import{i as f,S as h}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="43226276-a07a0c17e428cfffb021b9b05",l=document.querySelector(".picture-form");l.addEventListener("submit",y);const a=document.querySelector(".loader");a.style.display="none";const m=document.querySelector(".list");function y(s){s.preventDefault();const o=s.target.elements.choose.value,i=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return a.style.display="inline-block",fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(a.style.display="none",t.hits.length===0){f.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(t),m.innerHTML=p(t.hits),g.refresh()}).catch(t=>{console.log(t)}).finally(()=>l.reset())}function p(s){return s.map(({id:o,webformatURL:i,largeImageURL:t,tags:e,likes:r,views:n,comments:c,downloads:u})=>`<li data-id="${o}" class="gallery-item">
    <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${i}"
      data-source="${t}"
      alt="${e}"
    />
    </a>
    <h2>Likes ${r}</h2>
    <h2>Views ${n}</h2>
    <h2>Comments ${c}</h2>
    <h2>Downloads ${u}</h2>
</li>`).join("")}const g=new h(".list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
