
export function createMarkup(arr) {
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