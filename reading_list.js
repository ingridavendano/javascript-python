// book list class
var BookList = function() {
	this.booksRead = [];
	this.booksNotRead = [];
	this.nextBook = undefined;
	this.currentBook = undefined;
	this.lastBook = undefined;
	this.bookShelf = [];

	this.add = function(book) {
		this.bookShelf.push(book);
		if (book.read === false) {
			this.booksNotRead.push(book);
			if (this.currentBook === undefined) {
				this.currentBook = book;
			}
			else if (this.nextBook === undefined) {
				this.nextBook = book;
			}
		}
		else {
			this.booksRead.push(book);
		}
	};

	this.finishCurrentBook = function() {
		this.booksRead.push(this.currentBook);
		this.booksNotRead.shift();
		this.currentBook.readOnDate(new Date(Date.now()));
		this.lastBook = this.currentBook;
		this.currentBook = this.nextBook;
		this.nextBook = this.booksNotRead[1];
	};
};

// book class
var Book = function(title, author, genre) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.read = false;
	this.dateRead = "";

	// ideally this function takes in a Date object
	this.readOnDate = function(date) {
		this.dateRead = date;
		this.read = true;
	};
};

// creating a new book list and books
var reading = new BookList();
var gameOfThrones = new Book("Game of Thrones", "George R R Martin", "Fantasy");
var prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", "Fiction");
var crakeAndOryx = new Book("Crake and Oryx", "Margaret Atwood", "Sci-fi");

// adding books to the reading list
reading.add(gameOfThrones);
reading.add(prideAndPrejudice);
reading.add(crakeAndOryx);