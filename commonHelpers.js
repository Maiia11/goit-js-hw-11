import{i as u,S as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h="43226276-a07a0c17e428cfffb021b9b05",a=document.querySelector(".picture-form");a.addEventListener("submit",d);const m=document.querySelector(".list");function d(s){s.preventDefault();const o=s.target.elements.choose.value,i=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){u.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(t),m.innerHTML=p(t.hits),y.refresh(),a.reset()}).catch(t=>{console.log(t)})}function p(s){return s.map(({id:o,webformatURL:i,largeImageURL:t,tags:e,likes:r,views:n,comments:c,downloads:l})=>`<li data-id="${o}" class="gallery-item">
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
    <h2>Downloads ${l}</h2>
</li>`).join("")}const y=new f(".list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map