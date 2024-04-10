
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const apiKey = "43226276-a07a0c17e428cfffb021b9b05";

const form = document.querySelector(".picture-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.choose.value;

    if (!input.length) {
        iziToast.info({
            message: "Sorry, there are no images matching your search query. Please try again!"

        })
        return
    }

    const params = new URLSearchParams({
    key: apiKey,
    q: input,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
    
    })
    
    return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
    
}








