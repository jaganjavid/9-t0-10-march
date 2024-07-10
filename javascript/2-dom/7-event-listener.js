

document.querySelector(".clear-tasks").addEventListener("click", onClick);


let count = 0;
// document.getElementById("task-title").innerText = count;

function onClick(){
    

    count = count + 1;

    document.getElementById("task-title").innerText = count;

}