const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function placeTitle(book, selector){
    const createBookTitle = document.createElement("h2");
    createBookTitle.textContent = book.title;
    selector.appendChild(createBookTitle);
}

function placeInfo(book, info, infoselector){
    const createBookInfo = document.createElement("li");
    createBookInfo.textContent = info;
    infoselector.appendChild(createBookInfo);
}

function updateLibrary(book){
    const createBookCard = document.createElement("div");
    createBookCard.setAttribute("class", "bookCard");
    createBookCard.setAttribute("id", "card" + myLibrary.length.toString());

    const bookCardPlacement = document.querySelector(".bookOverview");
    bookCardPlacement.appendChild(createBookCard);

    cardID = "#card" + myLibrary.length.toString();
    const cardSelector = document.querySelector(cardID);

    placeTitle(book, cardSelector);

    const createBookInfo = document.createElement("div");
    createBookInfo.setAttribute("class", "bookInfo");
    cardSelector.appendChild(createBookInfo);

    placeInfo(book, book.author,cardSelector);
    placeInfo(book, book.pages,cardSelector);
    placeInfo(book, book.read,cardSelector);

    
}

function addBookToLibrary(title, author, pages, read) {

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    updateLibrary(newBook)
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary("The Hobbit Two, The Hobbiting", "J.R.R Tolkien", 69, "not read");
