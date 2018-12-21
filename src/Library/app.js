let books = [];

function getFromServer() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        books = JSON.parse(xhr.responseText);
        renderBooks(books);
      }
    }
    xhr.open("GET", "https://rsu-library-api.herokuapp.com/books", true);
    xhr.send();
}

document.addEventListener("DOMContentLoaded", getFromServer);

function renderBooks(arr) {
    let library = document.querySelector('.library');
    library.innerHTML = '';
    arr.forEach(item => {
      let book = createBook(item);
      library.appendChild(book);
    });
}

function createBook(item){

    let book = document.createElement('div'); //обертка
    book.className = 'book';
    book.id = item.id;

    let cover = document.createElement('div');  //обложка
    let link = item.image_url;
    cover.className = 'cover';
    cover.style.backgroundImage = `url(${link})`;
    book.appendChild(cover);

    let title = document.createElement('h3'); //название книги
    title.className = 'title';
    title.innerHTML = item.title;
    book.appendChild(title);

    let author = document.createElement('span');  //автор книги
    author.className = 'author';
    author.innerHTML = 'by ' + item.author.firstName + ' ' + item.author.lastName;
    book.appendChild(author);

    let rating = document.createElement('div'); //рейтинг книги
    rating.className = 'rating';
    book.appendChild(rating);
    for (let i = 1; i <= 5; i++){
      const star = document.createElement('i');
      if (item.rating >= i){
            star.setAttribute('class', 'fa fa-star');
        } else {
            star.setAttribute('class', 'fa fa-star-o');
        }
        star.dataset.rating = i;
        rating.append(star);
    }
    return book;
}

// установка рейтинга, эффект при наведении
const lib = document.querySelector('.library');
lib.addEventListener('click', addRating);

function addRating(event) {
  let star = event.target.closest('.rating > i');
  let allStars = star.parentNode.children;
  let bookId = star.parentNode.parentNode.id
    if (star.className === 'fa fa-star-o') {
      star.className = 'fa fa-star';
      for (let i = 0; i<=star.dataset.rating-1; i++) {
        allStars[i].className = star.className;
      }
    } else {
      star.className = 'fa fa-star';
      for (let i = 4; i>=star.dataset.rating; i--) {
        allStars[i].className = 'fa fa-star-o';
      }
    }
  books[bookId-1].rating = +star.dataset.rating;
}

// фильтры топ+сбоку
document.body.addEventListener('click',filterCategory)

function filterCategory(event) {
  let category = event.target.htmlFor;
  let genreBooks = [];
  let categoryBooks = [];
  if (event.target.tagName === 'LABEL') {
    switch(category) {
      case 'All': 
        categoryBooks = books;
        break;
      case 'Recent': 
        categoryBooks = [...books].sort((a,b) => b.updatedAt - a.updatedAt);
        break;
      case 'Popular':
        categoryBooks = [...books].sort((a,b) => b.rating - a.rating);
        break;
      case 'Free': 
        categoryBooks = [...books].filter(a => a.cost === 0);
        break;
    }
    renderBooks(categoryBooks);
  }
  if (event.target.className === 'genre') {
    let genre = event.target.innerText.trim();
    switch(genre) {
      case "Must Read Titles":
        genreBooks = [...books].filter(a => a.categories.includes('must_read'));
        break;
      case "Best Of List": 
        genreBooks = [...books].filter(a => a.categories.includes('best'));
        break;
      case "Classic Novels": 
        genreBooks = [...books].filter(a => a.categories.includes('classic'));
        break;
      case "Non Fiction":
        genreBooks = [...books].filter(a => a.categories.includes('non_fiction'));
        break;
    }
    renderBooks(genreBooks);
  }
}

//поиск
const searchField = document.querySelector('input[type=text]');
searchField.addEventListener('input', search);

function search(event) {
  let input = event.target.value.toLowerCase();
  let searchBooks = [...books].filter(a => a.title.toLowerCase().indexOf(input) !== -1)
  renderBooks(searchBooks)  
}

//добавление книги
const form = document.querySelector('.book_form');
form.addEventListener('submit', pushBook)

function pushBook(event) {
	let book = {
			id: books.length,
            title: document.querySelector('#Title').value, 
            author: {
            firstName: document.querySelector('#FName').value,
            lastName: document.querySelector('#LName').value
            },
			categories: document.querySelector('#Genres').value,
            createdAt: new Date().getTime(),
			updatedAt: new Date().getTime(),
            image_url: document.querySelector('#Cover').value || "https://rsu-library-api.herokuapp.com/static/images/nocover.jpg",
            rating: document.querySelector('#Rating').value,   
            cost: +document.querySelector('#Price').value
        }
        books.push(book);
        renderBooks(books);
		document.querySelector('.book_form').style.display = 'none';
		document.querySelector('.background').style.display = 'none';
		$('.notification').slideDown(1000).delay(3000).slideUp(1000);
		
		//История
		
}

$('.addbook').click(function() {
  $('.book_form').css("display","flex");
  $('.background').show();
})

$('.background, .book_form i').click(function() {
  $('.book_form').hide();
  $('.background').hide();
})



