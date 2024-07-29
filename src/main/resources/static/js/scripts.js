/*


document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('new-book-form');
    const booksList = document.getElementById('books');
    let currentBookId = null;

    const fetchBooks = async () => {
        const response = await fetch('/api/books');
        const books = await response.json();
        booksList.innerHTML = '';
        books.forEach(book => {
            const bookItem = document.createElement('li');
            bookItem.dataset.id = book.id; // Assuming 'id' is the unique identifier
            bookItem.innerHTML = `
                ${book.bookName} by ${book.authorName} - ₹${book.price} [${book.genre}]
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button>
            `;
            booksList.appendChild(bookItem);
        }); 

        // Attach event listeners to the buttons
        booksList.querySelectorAll('.update-btn').forEach(button => {
            button.addEventListener('click', handleUpdate);
        });
        booksList.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    };

    const addBook = async (book) => {
        await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        fetchBooks();
    };

    const updateBook = async (id, book) => {
        await fetch(`/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        fetchBooks();
    };

    const deleteBook = async (id) => {
        await fetch(`/api/books/${id}`, {
            method: 'DELETE',
        });
        fetchBooks();
    };

    const handleUpdate = (event) => {
        const bookItem = event.target.closest('li');
        const id = bookItem.dataset.id;
        if (currentBookId !== id) {
            currentBookId = id;
            bookForm.bookName.value = bookItem.innerHTML.match(/(.*) by/)[1].trim();
            bookForm.authorName.value = bookItem.innerHTML.match(/by (.*) -/)[1].trim();
            bookForm.price.value = bookItem.innerHTML.match(/- ₹(.*) \[/)[1].trim();
            bookForm.genre.value = bookItem.innerHTML.match(/\[(.*)\]/)[1].trim();
        }
    };

    const handleDelete = async (event) => {
        const bookItem = event.target.closest('li');
        const id = bookItem.dataset.id;
        await deleteBook(id);
    };

    bookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const book = {
            bookName: event.target.bookName.value,
            authorName: event.target.authorName.value,
            price: event.target.price.value,
            genre: event.target.genre.value,
        };
        if (currentBookId) {
            updateBook(currentBookId, book);
            currentBookId = null;
        } else {
            addBook(book);
        }
        event.target.reset();
    });

    fetchBooks();
});
*/




document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('new-book-form');
    const booksList = document.getElementById('books');
    let currentBookId = null;

    const fetchBooks = async () => {
        const response = await fetch('/api/books');
        const books = await response.json();
        booksList.innerHTML = '';
        books.forEach(book => {
            const bookItem = document.createElement('li');
            bookItem.dataset.id = book.id; // Assuming 'id' is the unique identifier
            bookItem.innerHTML = `
                <span>${book.bookName} by ${book.authorName} - ₹${book.price} [${book.genre}]</span>
                <div>
                    <button class="update-btn">Update</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            booksList.appendChild(bookItem);
        }); 

        // Attach event listeners to the buttons
        booksList.querySelectorAll('.update-btn').forEach(button => {
            button.addEventListener('click', handleUpdate);
        });
        booksList.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    };

    const addBook = async (book) => {
        await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        fetchBooks();
    };

    const updateBook = async (id, book) => {
        await fetch(`/api/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        fetchBooks();
    };

    const deleteBook = async (id) => {
        await fetch(`/api/books/${id}`, {
            method: 'DELETE',
        });
        fetchBooks();
    };

    const handleUpdate = (event) => {
        const bookItem = event.target.closest('li');
        const id = bookItem.dataset.id;
        if (currentBookId !== id) {
            currentBookId = id;
            bookForm.bookName.value = bookItem.innerHTML.match(/(.*) by/)[1].trim();
            bookForm.authorName.value = bookItem.innerHTML.match(/by (.*) -/)[1].trim();
            bookForm.price.value = bookItem.innerHTML.match(/- ₹(.*) \[/)[1].trim();
            bookForm.genre.value = bookItem.innerHTML.match(/\[(.*)\]/)[1].trim();
        }
    };

    const handleDelete = async (event) => {
        const bookItem = event.target.closest('li');
        const id = bookItem.dataset.id;
        await deleteBook(id);
    };

    bookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const book = {
            bookName: event.target.bookName.value,
            authorName: event.target.authorName.value,
            price: event.target.price.value,
            genre: event.target.genre.value,
        };
        if (currentBookId) {
            updateBook(currentBookId, book);
            currentBookId = null;
        } else {
            addBook(book);
        }
        event.target.reset();
    });

    fetchBooks();
});
