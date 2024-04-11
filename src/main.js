
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-function";
import { requestServer } from "./js/pixabay-api";


const form = document.querySelector(".picture-form");
form.addEventListener("submit", handleSubmit);

const loader = document.querySelector(".loader")
loader.style.display = 'none';

const list = document.querySelector(".list");

function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.choose.value;
    loader.style.display = 'inline-flex';
    requestServer(input)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
        .then(data => {
            loader.style.display = 'none';
            if (data.hits.length === 0) {
                list.innerHTML = "";
        iziToast.info({
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
            timeout: 2000,
            position: "topRight"

        })
        return
    }
        list.innerHTML = createMarkup(data.hits)
        lightbox.refresh()
                 
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => form.reset())   
}

const lightbox = new SimpleLightbox('.list a', { 
    captionsData: "alt",
    captionDelay: 250,
 });