const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function placeTitle(book, selector){
    const createBookTitle = document.createElement("h2");
    createBookTitle.textContent = book.title;
    selector.appendChild(createBookTitle);
}

function placeInfo(book, info, infoselector, type){
    const createBookInfo = document.createElement("li");
    createBookInfo.setAttribute("id", type + myLibrary.length.toString());
    
    if (type === "pages"){
        createBookInfo.textContent = info + " pages";
    }
    else{
    createBookInfo.textContent = info;
    };
    infoselector.appendChild(createBookInfo);
}

function createDeleteButton(cardSelector, buttonPlacement){
    const createDeleteButton = document.createElement("button");
    createDeleteButton.setAttribute("type", "button");
    createDeleteButton.setAttribute("class", "cardButton");
    createDeleteButton.setAttribute("id", "deleteButton" + myLibrary.length.toString());
    createDeleteButton.textContent = "Delete Book";
    
    createDeleteButton.addEventListener("click", () => {
        cardSelector.remove();
    })

    buttonPlacement.appendChild(createDeleteButton);
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
    createBookInfo.setAttribute("id", "bookInfo" + myLibrary.length.toString());
    cardSelector.appendChild(createBookInfo);

    const targetBookInfo = document.querySelector("#bookInfo" + myLibrary.length.toString());

    placeInfo(book, book.author,targetBookInfo, "author");
    placeInfo(book, book.pages,targetBookInfo, "pages");
    placeInfo(book, book.read,targetBookInfo, "read");

    const createButtonDiv = document.createElement("div");
    createButtonDiv.setAttribute("class", "bookButtons");
    createButtonDiv.setAttribute("id", "btnDiv" + myLibrary.length.toString());
    cardSelector.appendChild(createButtonDiv);

    createDeleteButton(cardSelector, createButtonDiv);

    const createReadButton = document.createElement("button");
    createReadButton.setAttribute("type", "button");
    createReadButton.setAttribute("class", "cardButton");
    createReadButton.setAttribute("id", "readButton" + myLibrary.length.toString());
    createReadButton.textContent = "Change read status";
    
    const readInfo = document.querySelector("#" + "read" + myLibrary.length.toString());

    createReadButton.addEventListener("click", () => {

        if (book.read === "Read"){
            book.read = "Not read"
            readInfo.textContent = "Not read"
        }
        else {
            book.read = "Read"
            readInfo.textContent = "Read"
        }
        })

    createButtonDiv.appendChild(createReadButton);

}

function addBookToLibrary(title, author, pages, read) {
    addBook(title, author, pages, read);
    updateLibrary(myLibrary[myLibrary.length - 1]);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary("The Hobbit Two, The Hobbiting", "J.R.R Tolkien", 69, "not read");

const dialog = document.querySelector(".formDialog");
const showDialogButton = document.querySelector(".showDialog");
const closeDialog = document.querySelector(".closeDialogButton");

showDialogButton.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", () => {
    dialog.close();
    bookForm.reset();
});

const addBookButton = document.querySelector("#addBookButton");
const bookForm = document.querySelector("#bookForm");

function addBookButtonClick(event){
    event.preventDefault();

    let title = document.forms["bookForm"]["title"].value
    let author = document.forms["bookForm"]["author"].value
    let pages = document.forms["bookForm"]["pages"].value
    let read = document.forms["bookForm"]["read"].value

    addBookToLibrary(title, author, pages, read);
    dialog.close();
    bookForm.reset();
};

addBookButton.addEventListener("click", addBookButtonClick);

