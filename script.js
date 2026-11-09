
let books = JSON.parse(localStorage.getItem("books")) || [];
function displayBooks() {

    let result = document.getElementById("result");
    result.innerHTML = "";

    books.forEach((book, index) => {

        result.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>
                    <button onclick="editBook(${index})" class="bg-green-800 m-3 text-white px-3 py-1 rounded hover:bg-green-600">Edit</button>
                    <button onclick="deleteBook(${index})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
            </tr>
        `;

    });
}
function addBook(e) {

    e.preventDefault();

    let book = {
        name: document.getElementById("bookName").value,
        author: document.getElementById("author").value,
        category: document.getElementById("category").value
    };

    let index = document.getElementById("editIndex").value;
    if (index === "") {
        books.push(book);
    } else {
        books[index] = book;
    }
    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
   clearForm();
}
function editBook(index) {

    document.getElementById("bookName").value = books[index].name;
    document.getElementById("author").value = books[index].author;
    document.getElementById("category").value = books[index].category;

    document.getElementById("editIndex").value = index;

    document.getElementById("submitBtn").innerText = "Update Book";
}

function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks();}

function clearForm() {

    document.getElementById("bookForm").reset();
    document.getElementById("editIndex").value = "";
    document.getElementById("submitBtn").innerText = "Add Book";
}
displayBooks();
