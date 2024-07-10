let val;

const list = document.querySelector(".collection"); // ul

const listItem = document.querySelector(".collection li:nth-child(1)");


val = list;
val = list.childNodes;

// Get the children element nodeF
val = list.children; // ***
val = list.children[0];
val = list.children[1];
val = list.children[1].innerText = "Hello";
val = list.children[1].style.color = "red";

// First Child
val = list.firstElementChild;

// Last Child
val = list.lastElementChild;

// Count the child
val = list.childElementCount;

// Get parent element
val = list.parentElement;


// Get a pervious element
val = listItem.previousElementSibling;

// Get a next element
// val = listItem.nextElementSibling;

console.log(val);