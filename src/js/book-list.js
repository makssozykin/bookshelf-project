// import axios from 'axios';

// const ulGlobal = document.querySelector('.ul-global');

// async function axiosPosts() {
//   const URL = 'https://books-backend.p.goit.global/books/top-books';
//   const { data } = await axios.get(URL);
//   console.log('data:', data);
//   workWithData({ data });
// }
// axiosPosts();

// function workWithData({ data }) {
//   try {
//     data.forEach(category => {
//       const { list_name, books } = category;
//       console.log('books', books);
//       if (books.length > 0) {
//         const liGlobal = document.createElement('li');
//         ulGlobal.appendChild(liGlobal);

//         const categoryPar = document.createElement('p');
//         categoryPar.classList.add('categories');
//         categoryPar.textContent = `${list_name}`;
//         liGlobal.appendChild(categoryPar);

//         const categoryList = document.createElement('ul');
//         categoryList.classList.add('ul-category');
//         liGlobal.appendChild(categoryList);

//         categoryList.insertAdjacentHTML(
//           'beforeend',
//           createBookListMarkup({ books })
//         );
//         const seeMore = document.createElement('button');
//         seeMore.textContent = 'see more';
//         seeMore.classList.add('see-more');
//         liGlobal.appendChild(seeMore);
//         seeMore.addEventListener('click', () => {
//           const categoryBooks = categoryList.querySelectorAll('.book');
//           categoryBooks.forEach(book => {
//             book.style.display = 'block';
//           });
//           seeMore.style.display = 'none';
//         });
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// function createBookListMarkup({ books }) {
//   const markup = books
//     .map(({ list_name, book_image, title, author, _id }) => {
//       return `<li class="book" data-id="${_id}">
//       <div class='box'>
//         <img src="${book_image}" alt="${list_name}" />
//       </div>
//       <h3 class="title-main">${title}</h3>
//       <p class="author-main">${author}</p>
//     </li>`;
//     })
//     .join('');
//   return markup;
// }

// function seeMore() {}
