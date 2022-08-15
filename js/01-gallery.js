import { galleryItems } from "./gallery-items.js";
// Change code below this line
//1<div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class= "gallery__link" href="${original}">
          <img 
            class= "gallery__image"
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
//2
const containerGallery = document.querySelector(".gallery");

const cardsMarkup = createGalleryCards(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", cardsMarkup);

containerGallery.addEventListener("click", clickOnGalleryCards);

function clickOnGalleryCards(e) {
  // console.log(e.target);
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  e.preventDefault();
  console.log(e.target.dataset.source);
  const selectedImage = evt.target.getAttribute("data-source");
  const instance = basicLightbox.create(`
    <img src="${selectedImage} " >
`);

  instance.show();
}
