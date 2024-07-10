

// Book Construtor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {
    UI.prototype.addBookToList = function (book) {

        const list = document.querySelector("#book-list");

        // Create a tr element

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="delete">
            <a href="#" class="btn btn-danger">X</a>
            </td>
        `;

        list.appendChild(row);

    },

        UI.prototype.deleteBook = function (target) {
            if (confirm("Are you sure?")) {
                if (target.className === "delete") {
                    target.parentElement.remove();
                }
            }
        },

        UI.prototype.clearField = function () {
            // document.querySelector("#title").value = "";
            // document.querySelector("#author").value = "";
            // document.querySelector("#isbn").value = "";

            document.querySelector("#book-form").reset();
        }

}


// Event Listen for submit

document.querySelector("#book-form").addEventListener("submit", function (e) {

    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;


    // All Instance

    const book = new Book(title, author, isbn);
    const ui = new UI();



    // Validate

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill all the field");
    } else {

        ui.addBookToList(book);
        ui.clearField();
    }

})


// Delete Event listener

document.querySelector("#book-list").addEventListener("click", function (e) {

    e.preventDefault();

    if (e.target.parentElement.className === "delete") {


        // Instantiate UI
        const ui = new UI();

        // Delete Book

        ui.deleteBook(e.target.parentElement);

    } else {
        console.log("no")
    }

})


// Clear Event listener


document.querySelector(".clear-btn").addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector("#book-list").innerHTML = null;


})