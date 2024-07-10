
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    // Add Book to list

    addBookToList(book) {

        console.log(this);

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

    }

    deleteBook(target) {
        if (confirm("Are you sure?")) {
            if (target.className === "delete") {
                target.parentElement.remove();
            }
        }
    }

    clearField() {
        // document.querySelector("#title").value = "";
        // document.querySelector("#author").value = "";
        // document.querySelector("#isbn").value = "";

        document.querySelector("#book-form").reset();
    }

    filterBooks(){

        const searchText = document.querySelector("#search").value.toLowerCase();

        // Get all book rows
        const rows = document.querySelectorAll("#book-list tr");

        // Loop each book 
        rows.forEach(function(row) {
            
            const titleCell = row.querySelector("td:nth-child(1)");
            const authorCell = row.querySelector("td:nth-child(2)");

            if(titleCell.innerText.toLowerCase().includes(searchText) || authorCell.innerText.toLowerCase().includes(searchText)){
                row.style.display = "";
                console.log("Yes")
            } else{
                row.style.display = "none";
                console.log("no")
            }
           

        })

    }
}



class Store{


    static getBooks() {
        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;

    }
   

   static addBook(book){

        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));

        console.log("Add");


    }

    static displayBooks(){
        
        const books = Store.getBooks();


        books.forEach(function(book){
            const ui = new UI();

            ui.addBookToList(book);
         })


         console.log("Display");

        
    }

   

}


// DOM LOADED

document.addEventListener("DOMContentLoaded", Store.displayBooks);


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
        Store.addBook(book);
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


document.querySelector("#search").addEventListener("input", function(){
     // Instantiate UI
     const ui = new UI();

     ui.filterBooks();
})



function test(a,b){
    return a + b;
}

function test2(){
    console.log(test(5, 5));
}

test2();

