import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onClick(event) {
  event.preventDefault();
  const onImgClick = event.target.classList.contains("gallery__image");
  if (!onImgClick) {
    return;
  }
  const imgUrl = event.target.dataset.source;

  const originalImg = basicLightbox.create(`<img src="${imgUrl}">`);
  originalImg.show(() => window.addEventListener("keydown", onKeyDown));

  function onKeyDown(event) {
    if (event.key === "Escape") {
      originalImg.close(() => window.removeEventListener("keydown", onKeyDown));
      return;
    }
    return;
  }
}
