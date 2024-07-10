
const ul = document.querySelector("ul");

// Create element
const li = document.createElement("li");


// Add id
li.id = "test";

// Add Class
li.className = "collection-item"

// Add attribute
li.setAttribute("title", "New li");

// Create a text node
li.appendChild(document.createTextNode("Hello"));

// Create a new link element
const link = document.createElement("a");

link.className = "delete-item secondary-content";

// Add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`

li.appendChild(link);

ul.appendChild(li);