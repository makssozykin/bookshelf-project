import axios from 'axios';
const LOCALSTORAGE_KEY = 'books';
let booksArr = [];
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(booksArr));
const empty = document.querySelector('.empty');
empty.style.display = 'none';
const ulList = document.querySelector('.book-list');


// async function getBooks() {
//     const URL = 'https://books-backend.p.goit.global/books/top-books';
//     const { data } = await axios.get(URL);
//     booksData({ data });
//     console.log(data);
// }
// getBooks()

// function booksData({ data }) {
//     for (let i = 0; i < data.length; i++) {
//         data[i]
//     }
// }



// function booksData({ data }) {
//     try {
//         data.forEach(book_cat => {
//             const { list_name, books } = book_cat;
//                 books.forEach(book => {
//                     // let bookInfo = { _id, list_name, book_image, title, description, author, amazon_product_url };
//                     // book = bookInfo;
//                     booksArr.push(book);
//                     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(booksArr));

//                 });
//         });
//         }
//     catch (error) {
//     console.error(error);
//   }
// }
// function getBooksLocalStorage() {

// }
// const savedArr = localStorage.getItem(LOCALSTORAGE_KEY);
//     const parsedArr = JSON.parse(savedArr);
//     console.log('arr:', parsedArr);


const arrBooksId = [
    {
        id: '643282b1e85766588626a080',
        list_name: 'Advice How-To and Miscellaneous',
        book_image: "https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",
        author: "James Clear",
        title: "ATOMIC HABITS",
    },
    {
        id: '643282b1e85766588626a0ba',
        list_name: 'Advice How-To and Miscellaneous',
        book_image: "https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",
        author: "Shannon Bream",
        title: "THE LOVE STORIES OF THE BIBLE SPEAK",
    }
];

localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(booksArr));
const getArr = localStorage.getItem(LOCALSTORAGE_KEY);

if (getArr === 0) {
    console.log('Empty')
}
else { 
    arrBooksId.forEach(book => {booksArr.push(book)
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(booksArr));})
}


async function addToShopList() { 
    const getArr = await JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(getArr);
    const markup = createBookListMarkUp(getArr);
    console.log(markup);
        ulList.innerHTML = markup;
}
addToShopList();

function createBookListMarkUp(arr) { 
    return arr.map(({ id, list_name, book_image, author, title }) => { return `<li class="book-item" id="${id}">
              <div class="book-data">
                <div class="book-img"">
                <img src="${book_image}" alt="book1"></div>
                <div class="book-info">
                  <h2 class="book-name">${title}</h2>
                  <p class="book-category">${list_name}</p>
                  <p class="book-desc">
                    David Burroughs was once a devoted father to his
                    three-year-old son Matthew, living a dream life just a short
                    drive away from the working-class suburb where he and his
                    wife, Cheryl, first fell in love--until one fateful night
                    when David woke suddenly to discover Matthew had been
                    murdered while David was asleep just down the hall.
                  </p>
                  <div class="author-shoplinks">
                    <p class="book-author">${author}</p>
                    <ul class="shop-links">
                      <li class="item-book">
                        <a href="" target="_blank" class="">
                          <img
                            src="./images/shop-imgs/amazon.png"
                            alt="amazon"
                          />
                        </a>
                      </li>
                      <li class="item-book">
                        <a href="" target="_blank" class="">
                          <img
                            src="./images/shop-imgs/applebook.png"
                            alt="applebook"
                            width="16px"
                            height="16px"
                          />
                        </a>
                      </li>
                      <li class="item-book">
                        <a href="" target="_blank" class="">
                          <img
                            src="./images/shop-imgs/boxshop.png"
                            alt="bookshop"
                            width="16px"
                            height="16px"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button type="button" class="btn-delete">
                <svg class="icon-delete">
                    <use href="./images/header-imgs/header-sprite.svg#icon-trash"></use>
                </svg>
              </button>
            </li>`;
    })
    .join('');
}