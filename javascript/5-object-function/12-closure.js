
function greet(whattosay){
    return function(name){
        console.log(whattosay + " " + name);
    }
}

var sayHi = greet("Hi");

sayHi("Javid");

console.log(whattosay);