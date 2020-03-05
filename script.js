const titleInput = document.getElementById('new-title');
const authorInput = document.getElementById('new-author');
const genreInput = document.getElementById('new-genre');
const readInput = document.getElementById('read-status');
const addBtn = document.getElementById('add-button');
const container = document.getElementById('container');
const removeBtnClass = document.getElementsByClassName('remove-button');


let myLibrary = [];

function book(title, author, genre, readStatus, remove) {
    this.title = titleInput.value
    this.author = authorInput.value
    this.genre = genreInput.value
    this.readStatus = readInput.checked
    this.remove
};

function addBookToLibrary() {
    let newBook = new book();

    myLibrary.unshift(newBook);

};


function updateLibrary () {
    for (i = 0; i < myLibrary.length; i++) {
        savedBook = myLibrary[i];
        readChecked = myLibrary[i].readStatus;

        const bookEntry = document.createElement('tr');
        bookEntry.classList.add('book-entry');

        const titleEntry = document.createElement('td');
        titleEntry.textContent = savedBook.title;
        bookEntry.appendChild(titleEntry);

        const authorEntry = document.createElement('td');
        authorEntry.textContent = savedBook.author;
        bookEntry.appendChild(authorEntry);

        const genreEntry = document.createElement('td');
        genreEntry.textContent = savedBook.genre;
        bookEntry.appendChild(genreEntry);

        const readEntry = document.createElement('td');
        const readBtn = document.createElement('button')
        readBtn.classList.add('read-button');

        if (readChecked) {
            readBtn.innerHTML = 'Read';
        } else {
        readBtn.innerHTML = 'Unread'; 
        }

        readBtn.addEventListener('click', function() {
            if (readBtn.innerHTML == 'Read'){
                readBtn.innerHTML = 'Unread';
                savedBook.readStatus = false;
            } else {
                readBtn.innerHTML = 'Read';
                savedBook.readStatus = true;
            }
        });

        readEntry.appendChild(readBtn);
        bookEntry.appendChild(readEntry);

        const removeEntry = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-button');
        removeBtn.innerHTML = 'Remove';

            
        removeEntry.appendChild(removeBtn);
        bookEntry.appendChild(removeEntry);
        container.appendChild(bookEntry);
    }
    removeArray = Array.from(removeBtnClass);
    for (j=0; j<removeArray.length; j++) {
        removeArray[j].addEventListener('click', function() {
            myLibrary.splice(this, 1);
            container.innerHTML = '<tr><th class = "table-header">Book Title</th><th class = "table-header">Author</th><th class = "table-header">Genre</th><th class = "table-header">Read</th><th class = "table-header">Remove</th></tr>';
            updateLibrary();
        }.bind(j));
    }

};





addBtn.addEventListener('click', function () {
    container.innerHTML = '<tr><th class = "table-header">Book Title</th><th class = "table-header">Author</th><th class = "table-header">Genre</th><th class = "table-header">Read</th><th class = "table-header">Remove</th></tr>';
    addBookToLibrary();
    updateLibrary();
});

