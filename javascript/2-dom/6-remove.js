
// Remove Element

const lists = document.querySelectorAll("li");

// lists[0].remove();

// lists.forEach(function(ele){
//     ele.remove();
// })

const firstLi = document.querySelector("li:first-child");
const link  = firstLi.children[0];


let val;

val = link.className;
val = link.classList; 

val.add("Javid");
val.remove("test");
// console.log(val.contains("Jagan"));
val.replace("Javid", "Jagan");

console.log(val);