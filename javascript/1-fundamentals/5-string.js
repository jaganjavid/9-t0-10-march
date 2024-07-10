
const firstName = "Jagan";
const lastName = "Javid";
const age = 26;
const str = "Hello im jagan and im a web dev";
const tags = "webDev,UIUX,Designer";


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + "Doe"
val += " Doe"

val = "Hello , My name is " + firstName + " and I am " + age;

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", firstName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// CharAt
val = firstName.charAt('2');

// Slice

const fruit = "Apple";

val = fruit.slice(1,3);

// Split() its return a array
val = tags.split(",");

// Replace
val = str.replace("jagan", "javid");

// Include
val = str.includes("javid");

console.log(val);