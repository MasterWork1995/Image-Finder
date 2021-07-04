import refs from './refs.js';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function openModal() {
  refs.gallery.addEventListener('click', event => {
    if (event.target.tagName !== 'IMG') {
      return;
    }
    const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}">
        `);
    instance.show();
  });
}

export default openModal;
