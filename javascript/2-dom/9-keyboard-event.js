

const taskInput = document.getElementById("task");

// Key UP
taskInput.addEventListener("keyup", runEvent()); // ***

// Key Down
// taskInput.addEventListener("keydown", runEvent); 

// key Press
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blue
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Copy
// taskInput.addEventListener("copy", runEvent);

// Paste
// taskInput.addEventListener("paste", runEvent)

function runEvent(event){
    console.log(event.type);
    console.log(event.target);
}