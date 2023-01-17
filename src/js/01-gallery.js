// Add imports above this line

import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from "simplelightbox";

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const createMarkup = galleryItems
  .map(
      (item) =>
`<a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
</a>`
).join("");
  
galleryContainer.insertAdjacentHTML("beforeend", createMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });