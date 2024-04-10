
const apiKey = "43226276-a07a0c17e428cfffb021b9b05";
export function requestServer (value) {
    const params = new URLSearchParams({
    key: apiKey,
    q: value,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
    })
    return fetch(`https://pixabay.com/api/?${params}`)
}