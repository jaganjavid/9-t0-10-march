
// Tag, Class, id

// document.getElementById()

// console.log(document.getElementById("task-title"));
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);


const taskTitle = document.getElementById("task-title");


// Change Style
taskTitle.style.backgroundColor = 'blue';
taskTitle.style.color = 'white';
taskTitle.style.padding = '10px';

// Change Content
taskTitle.innerText = "Task Title";
taskTitle.innerHTML = "<p>Task Title</p>";

// document.querySelector(); //***

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-action"));
// console.log(document.querySelector("h5"));

document.querySelector("li").style.backgroundColor = "blue";
document.querySelector("ul li").style.backgroundColor = "red";
document.querySelector("ul li:nth-child(3)").style.backgroundColor = "orange";

