import axios from 'axios';
const LOCALSTORADGE_KEY = 'books';
let booksArr = [];
localStorage.setItem(LOCALSTORADGE_KEY, JSON.stringify(booksArr));
const empty = document.querySelector('.empty');
empty.style.display = 'none';
const bookItem = document.querySelector('.book-item');


async function getBooks() {
    const URL = 'https://books-backend.p.goit.global/books/top-books';
    const { data } = await axios.get(URL);
    booksData({ data });
}
getBooks();

function booksData({ data }) {
    try { 
        data.forEach(book_cat => {
            const { list_name, books } = book_cat;
            // console.log('book_cat:', books);
            if (!localStorage.getItem(LOCALSTORADGE_KEY)) {
                empty.style.display = 'flex';
                bookItem.style.display = 'none';
            }
            // else {
            //     books.forEach(book => {
            //         // let bookInfo = { _id, list_name, book_image, title, description, author, amazon_product_url };
            //         // book = bookInfo;
            //         console.log('bookID', book);
                
                
                    
            //         localStorage.setItem(LOCALSTORADGE_KEY, JSON.stringify(booksArr));
            //     });
            // }
            });
        }
    catch (error) {
    console.error(error);
  }
 }