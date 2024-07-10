
// By value (Primitive Types)

var a = 5;
var b;

b = a;

a = 2;

console.log(a);
console.log(b);

// By Reference (all object (including function))

var c = {
    greeting:"Hai"
}

var d;

d = c;

d.greeting = "Hello";

c = {
    greeting: "Hola"
}

console.log(c);
console.log(d);