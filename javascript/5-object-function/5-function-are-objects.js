
function greet(){
    console.log("Hai");
}

greet();

greet.language = "Vanakam";

console.log(greet.language);


const name = "Akash";

const add = function(x, y){
    console.log(x + y)
}

function result(a){
    a(5,5)
}

result(add)


function applyFunction(x) {
    return x(10, 10);
}

applyFunction(function(x, y){
    console.log(x + y)
}); 

const y = function(){
    console.log("Hello after 5s")
}

setTimeout(y, 5000)


