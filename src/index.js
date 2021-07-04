'use strict'
import './styles.css';
import refs from './js/refs.js';
import ApiService from './js/apiService.js';
import { updateMarkup, clearMarkup } from './js/updateMarkup.js';
import { showMessage } from './js/notification.js';
import onScroll from './js/scroll.js';
import loadMoreBtn from './js/spiner.js';

const loadMore = new loadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
const apiService = new ApiService();


refs.searchForm.addEventListener('submit', onSearch);
loadMore.refs.button.addEventListener('click', onLoadMore);

function onSearch (e) {
    e.preventDefault();

    apiService.query = e.currentTarget.elements.query.value;
    if (apiService.query === '') {
        return showMessage();
    }
    loadMore.show();
    loadMore.disable();
    refs.searchForm.reset();
    apiService.resetPage();
    apiService.fetchArticles().then(hits => {
        clearMarkup();
        updateMarkup(hits)
        loadMore.enable();
    });
}

function onLoadMore() {
    loadMore.disable();
    apiService.fetchArticles().then(hits => {
        updateMarkup(hits);
        onScroll();
        loadMore.enable();
    });
}
