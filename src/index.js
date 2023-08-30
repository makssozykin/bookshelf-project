import { fetchBooksCategories, fetchTopBooks } from "./book_API";

fetchBooksCategories().then(responce => responce.data.map(category => console.log(category.list_name))).catch(onFetchError);
fetchTopBooks().then(responce => responce.data.map(book => console.log(book.list_name, book.books))).catch(onFetchError);

function onFetchError(error) {
  console.log(error);
}

