import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a="43226276-a07a0c17e428cfffb021b9b05",u=document.querySelector(".picture-form");u.addEventListener("submit",f);function f(n){n.preventDefault();const o=n.target.elements.choose.value;if(!o.length){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=new URLSearchParams({key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{console.log(r)}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
