class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static displayBooks() {
    const storedBooks = [{
        title: 'Jack the Riper',
        author: 'John Doe',
        isbn: '3434434'
      },
      {
        title: 'Girl With Dragon',
        author: 'Stig Larson',
        isbn: '3434434'
      }
    ];

    const books = storedBooks;

    books.forEach((book) => UI.addookToList(book));
  }

  static addookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);