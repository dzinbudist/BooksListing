let storedBooks = [
  {
    category: "Detektyvai",
    title: "The Maltese Falcon",
    author: "Autorius",
    isbn: "GR1236",
    year: 2019,
    pages: 323
  },
  {
    category: "Detektyvai",
    title: "The Girl with the Dragon Tattoo",
    author: "Autorius",
    isbn: "GR1536",
    year: 2018,
    pages: 355
  },
  {
    category: "Detektyvai",
    title: "And Then There Were None",
    author: "Autorius",
    isbn: "GR1234",
    year: 2018,
    pages: 320
  },
  {
    category: "Detektyvai",
    title: "The Curious Incident of the Dog in the Night-Time",
    author: "Autorius",
    isbn: "GR1238",
    year: 2010,
    pages: 400
  },
  {
    category: "Detektyvai",
    title: "Rebecca",
    author: "Autorius",
    isbn: "GR1238",
    year: 2011,
    pages: 400
  },
  {
    category: "Detektyvai",
    title: "The Spy Who Came in From the Cold",
    author: "Autorius",
    isbn: "GR1238",
    year: 2012,
    pages: 400
  },
  {
    category: "Detektyvai",
    title: "Gone Girl",
    author: "Autorius",
    isbn: "GR1238",
    year: 2013,
    pages: 400
  },
  {
    category: "Detektyvai",
    title: "The Hound of the Baskervilles",
    author: "Autorius",
    isbn: "GR1238",
    year: 2018,
    pages: 400
  },
  {
    category: "Detektyvai",
    title: "The Postman Always Rings Twice",
    author: "Autorius",
    isbn: "GR1238",
    year: 2019,
    pages: 400
  },
  {
    category: "Detektyvai",
    title: "The Woman in White",
    author: "Autorius",
    isbn: "GR1238",
    year: 2018,
    pages: 400
  },
  {
    category: "Detektyvai",
    title: "The Thirteenth Tale",
    author: "Autorius",
    isbn: "GR1238",
    year: 2017,
    pages: 400
  },
  {
    category: "Detektyvai",
    title: "The Firm",
    author: "Autorius",
    isbn: "GR1238",
    year: 2016,
    pages: 400
  },
  {
    category: "Mokslinė fantastika",
    title: "The Blazing World and Other Writings",
    author: "Autorius",
    isbn: "GR123897",
    year: 2019,
    pages: 400
  },
  {
    category: "Mokslinė fantastika",
    title: "Foundation",
    author: "Stanislaw Lem",
    isbn: "GR1238133",
    year: 2016,
    pages: 400
  },
  {
    category: "Mokslinė fantastika",
    title: "The War of the Worlds",
    author: "H. G. Wells",
    isbn: "GR1238",
    year: 2016,
    pages: 400
  },
  {
    category: "Mokslinė fantastika",
    title: "Frankenstein",
    author: "Marry Shelley",
    isbn: "GR1238",
    year: 2016,
    pages: 400
  },
  {
    category: "Fantasy",
    title: "Lord of the rings",
    author: "J.R.R Tolkien",
    isbn: "GR1238454",
    year: 2015,
    pages: 400
  },
  {
    category: "Fantasy",
    title: "Harry Potter",
    author: "Autorius",
    isbn: "GR1238454",
    year: 2015,
    pages: 400
  },
  {
    category: "Trileriai",
    title: "Jurasic Park",
    author: "Michael Crichton",
    isbn: "GR1238454",
    year: 2015,
    pages: 400
  }
];

class UI {
  static displayBooks(bookList) {
    const books = bookList;
    books.forEach((book, i) => UI.addookToList(book, i));
  }

  static addookToList(book, aIndex) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    storedBooks.forEach((anItem, i) => {
      if (anItem.title === book.title & anItem.isbn === book.isbn) {
        row.id = i;
      }
    });

    row.innerHTML = `
      <td>${book.category}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>${book.year}</td>
      <td>${book.pages}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete" onClick="UI.removeRecord(this)">X</a></td>
    `;

    list.appendChild(row);
  }

  static addBook() {
    let aNewBook = {};
    aNewBook["category"] = document.querySelector('#category').value;
    aNewBook["title"] = document.querySelector('#title').value;
    aNewBook["author"] = document.querySelector('#author').value;
    aNewBook["isbn"] = document.querySelector('#isbn').value;
    aNewBook["year"] = document.querySelector('#year').value;
    aNewBook["pages"] = document.querySelector('#pages').value;

    storedBooks.unshift(aNewBook);
    UI.clearBooks();
    UI.displayBooks(storedBooks);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('year').value = '';
    document.getElementById('pages').value = '';
  }

  static clearBooks() {
    const list = document.querySelector('#book-list');
    let child = list.lastElementChild;
    while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
    }
  }

  static switchCategory(aValue) {
    let filteredBooks = [];
    UI.clearBooks();

    if (aValue == 'all') {
      UI.displayBooks(storedBooks);
    }
    else {
      storedBooks.forEach((anItem) => {
        //alert(anItem.category);
        if (anItem.category === aValue) {
          filteredBooks.push(anItem);
        }
      })
      UI.displayBooks(filteredBooks);
    }
  }

  static removeRecord(aButton) {
    let aParent = aButton.parentNode.parentNode;
    let child = aParent.lastElementChild;
    while (child) {
      aParent.removeChild(child);
      child = aParent.lastElementChild;
    }
    delete storedBooks[aParent.id];
    aParent.remove();
  }

  static doSearch() {
    let filteredBooks = [];
    let aValue = categorySelect.value;
    let aSearchText = aSearch.value;
    //alert(aSearchText);

    if (aSearchText == '') {
      UI.clearBooks();
      UI.displayBooks(storedBooks);
    }
    else if (aValue == 'all') {
      storedBooks.forEach((anItem) => {
        if (anItem.title.toUpperCase().includes(aSearchText.toUpperCase())) {
          filteredBooks.push(anItem);
        }
        else if (anItem.author.toUpperCase().includes(aSearchText.toUpperCase())) {
          filteredBooks.push(anItem);
        }
        else if (anItem.isbn.toUpperCase().includes(aSearchText.toUpperCase())) {
          filteredBooks.push(anItem);
        }
        else if (anItem.year.toString().includes(aSearchText.toUpperCase())) {
          filteredBooks.push(anItem);
        }
      });
    }
    else {
      storedBooks.forEach((anItem) => {
        if (anItem.category === aValue) {
          if (anItem.title.toUpperCase().includes(aSearchText.toUpperCase())) {
            filteredBooks.push(anItem);
          }
          else if (anItem.author.toUpperCase().includes(aSearchText.toUpperCase())) {
            filteredBooks.push(anItem);
          }
          else if (anItem.isbn.toUpperCase().includes(aSearchText.toUpperCase())) {
            filteredBooks.push(anItem);
          }
          else if (anItem.year.toString().includes(aSearchText.toUpperCase())) {
            filteredBooks.push(anItem);
          }
        }
      });
    }

    if (filteredBooks.length > 0) {
      UI.clearBooks();
      UI.displayBooks(filteredBooks);
    }
  }
}

const categorySelect = document.getElementById('categorySelect');
categorySelect.value = 'all';
categorySelect.addEventListener('change', function () { UI.switchCategory(this.value); }, false);

const btnAddBook = document.querySelector('#btnAddBook');
document.addEventListener('DOMContentLoaded', UI.displayBooks(storedBooks));

const aSearch = document.getElementById('search');
aSearch.value = '';
aSearch.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    //alert('qq');
    UI.doSearch();
  }
}, false);

document.querySelector('#category').value = 'Detektyvai'
document.querySelector('#title').value = '';
document.querySelector('#author').value = '';
document.querySelector('#isbn').value = '';
document.querySelector('#year').value = '';
document.querySelector('#pages').value = '';