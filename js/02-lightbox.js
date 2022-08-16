import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);<a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>
function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallary__item">
        <a class= "gallery__link" href="${original}">
          <img 
            class= "gallery__image"
            src="${preview}" 
            data-source="${original}" 
            alt="${description}"
          />
        </a>
      </li>
  `;
    })
    .join("");
}
const containerGallery = document.querySelector(".gallery");

const cardsMarkup = createGalleryCards(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", cardsMarkup);

// containerGallery.addEventListener(clickOnGalleryCards);

// function clickOnGalleryCards(evt) {
//   // console.log(evt.target);
//   // if (!evt.target.classList.contains("gallery__image")) {
//   //   return;
//   // }
//   evt.preventDefault();

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
lightbox.show();
// }
console.log(lightbox.show());
