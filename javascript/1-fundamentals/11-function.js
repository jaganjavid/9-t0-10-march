
// Two phases


// 1 - Create
// 2 - Use

// Function decalaration - Function Statement
console.log(greet("Jagan", "Javid"));

function greet(firstName = "John", lastName = "Doe"){

//    if(typeof firstName === "undefined"){firstName = "Jonn"} 
//    if(typeof lastName === "undefined"){lastName = "Doe"} 

   return `Vanakam ${firstName} ${lastName}`;
}

// console.log(greet("Jagan", "Javid"));


// Function Expression
const add = function(x = 5){
  console.log(x + 5);
}

add();


// IIFE (immediately invoked function expression)

const run = (function(){
    console.log("IIFE RUN")
})();





