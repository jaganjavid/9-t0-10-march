
// document.getElementsByClassName("")

// console.log(document.getElementsByClassName("collection-item"));

// const liItems = document.getElementsByClassName("collection-item"); // HTML COLLECTION


// console.log(liItems);

// liItems[0].style.color = "red";
// liItems[3].innerText = "Hello student";

// for(let i = 0; i<liItems.length; i++){
//   liItems[i].style.color = "blue";
// }

// Convert to array

// let lists = Array.from(liItems);

// console.log(lists);

// lists.forEach(function(element){
    // element.style.color = "red"
    // console.log(index);
// })

const listItems = document.querySelectorAll(".collection-item"); // nodeList

listItems.forEach(function(element){
    element.style.color = "red";
})

