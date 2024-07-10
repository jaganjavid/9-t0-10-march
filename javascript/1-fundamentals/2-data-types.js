

// Primitive Type

// Hold a single value

// String
const name = "Jagan";

// console.log(name);
// console.log(typeof name);

// Number 
const age = 26;

// console.log(age);
// console.log(typeof age);

// Boolean
const hadLunch = true;

// console.log(hadLunch);
// console.log(typeof hadLunch);

// Null
const hasGun = null;

// console.log(hasGun);
// console.log(typeof hasGun);

// Undefined
let undef;

// console.log(undef)
// console.log(typeof undef)



// Reference Type

// Array

const myArr = ["Jagan", "Javid", 26, true, null];

// console.log(myArr);

// console.log(myArr[3]);

// Object = Key : Value or Name : Value Pairs

const car = {
  name:"BMW",
  color:"Black",
  model: "M5",
  year:2024,
//   Method
  start: function(){
    console.log("Car Start");
  }
}

console.log(car.name); // ***
console.log(car["color"]);
console.log(car.year);
console.log(car);