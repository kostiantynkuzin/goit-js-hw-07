import { galleryItems } from "./gallery-items.js";
// Change code below this line
const containerGallery = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);
containerGallery.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery_item">
        <a class= "gallery_link" href="${original}">
            <img class= "gallery_image"
            src="${preview} 
            data-source="${original}" 
            alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join("");
}
// console.log(createGalleryCards(galleryItems));
containerGallery.addEventListener("click", clickOnGalleryCards);

function clickOnGalleryCards(event) {
  //   event.preventDefault();
  if (!event.target.classList.contains("gallery_image")) {
    return;
  }
  console.log(event.target.dataset.data - source);
}
const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();
