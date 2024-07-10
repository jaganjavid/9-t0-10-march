
const numbers = [1,2,3,4,5,6,7,8,9,10];

const fruits = ["apple", "orange", "lemon"];


let val;

// Get Array Length
val = numbers.length;

// Check its array
val = Array.isArray(numbers);

// Get a single value
val = numbers[0];
val = numbers[1];

// Insert into array
// val = numbers[2] = 100;

// Find the index of value
val = numbers.indexOf(66); // if array match is return the index else return -1

// Mutating Array

// Add on the End
// numbers.push(1000);

// Take off from end
// numbers.pop();
// numbers.pop();

// Take off from front
// numbers.shift();

// Add on the front
// numbers.unshift(2000);

// Splice (remove or add)

// Splice to remove
// fruits.splice(1,2);

// Splice to add
// fruits.splice(0, 0, "kiwi");

// console.log(fruits);

val = numbers.reverse(); 


console.log(val);
console.log(numbers);