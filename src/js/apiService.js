const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22352906-4517ac7acc857600c513123ad';

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=10&key=${API_KEY}`)
            .then(response => response.json())
            .then(({ hits }) => {
                this.incrementPage()
                return hits;
            })
            .catch(err => console.log(err));
    }

    resetPage() {
        this.page = 1;
    }

    incrementPage() {
         this.page += 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}