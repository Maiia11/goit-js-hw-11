
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const apiKey = "43226276-a07a0c17e428cfffb021b9b05";

const form = document.querySelector(".picture-form");
form.addEventListener("submit", handleSubmit);

const loader = document.querySelector(".loader")
loader.style.display = 'none';
const list = document.querySelector(".list");

function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.choose.value;
    const params = new URLSearchParams({
    key: apiKey,
    q: input,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
    
    })
    loader.style.display = 'inline-block';
    return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
        .then(data => {
            loader.style.display = 'none';
        if (data.hits.length === 0) {
        iziToast.info({
            message: "Sorry, there are no images matching your search query. Please try again!"

        })
        return
    }
        console.log(data);
            list.innerHTML = createMarkup(data.hits)
            lightbox.refresh()
            
            
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => form.reset())
    
    
 
    
}


function createMarkup(arr) {
    return arr.map(({ id, webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li data-id="${id}" class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
    </a>
    <h2>Likes ${likes}</h2>
    <h2>Views ${views}</h2>
    <h2>Comments ${comments}</h2>
    <h2>Downloads ${downloads}</h2>
</li>`)
        .join("");
    
}

const lightbox = new SimpleLightbox('.list a', { 
    captionsData: "alt",
    captionDelay: 250,
 });