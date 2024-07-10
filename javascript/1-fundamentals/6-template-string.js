
const name = "Javid";
const age = 26;
const job = "Web developer";
const city = "chennai";

let html;

// Without Template String
html = "My name is " + name + " " + "im" + " " + age + " " + "my job is " + job + " in " + city;

console.log(html);

// With template strings

html = `My name is ${name} im ${age} my job is ${job} and im from ${city}`;

console.log(html)