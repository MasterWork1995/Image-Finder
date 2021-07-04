import refs from './refs.js';
import cards from '../templates/cards.hbs';

export function updateMarkup(images) {
    const markup = cards(images);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearMarkup() {
    refs.gallery.innerHTML = '';
}
