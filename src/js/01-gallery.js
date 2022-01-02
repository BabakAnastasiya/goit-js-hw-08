// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector ('.gallery');
const imagesMarkup = createGalleryItemsMarkup (galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryItemsMarkup (galleryItems) {
   return galleryItems.map (({preview, original, description})=>{
        return `
        <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} title=${description} />
</a>`
    }).join('');
}
let gallery = new SimpleLightbox('.gallery a', {doubleTapZoom: 1.5, captionDelay: 250});
