
// IIFE (Immediately Invoked Function Expression)

(function(global, name1){

    var greeting = "Hey";
    global.x = "Vanakam";

    console.log("IIFE", greeting + " " + name1);
    
})(window, "Javid");

console.log(x);
x = "Hola";

console.log(x);
console.log(window.x);


