import axios from "axios";

const SERVER_URL = 'https://books-backend.p.goit.global';

const CATEGORY_LIST = '/books/category-list';

const TOP_BOOKS = '/books/top-books';


async function fetchBooksCategories() { 
    const responce = await axios.get(`${SERVER_URL}${CATEGORY_LIST}`);
    return responce;
}

async function fetchTopBooks() { 
    const responce = await axios.get(`${SERVER_URL}${TOP_BOOKS}`);
    return responce;
}

export { fetchBooksCategories, fetchTopBooks };
