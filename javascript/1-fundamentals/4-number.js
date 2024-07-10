
const num1 = 100;
const num2 = 50;

let val;

// Simple math with number

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;


// MATH OBJECT

val = Math.PI;
val = Math.round(2.4); 
val = Math.round(2.6);//***
val = Math.ceil(2.1); // Upper number//***
val = Math.floor(2.9); // Lower number//***
val = Math.sqrt(64);
val = Math.abs(-5); // always return back the positive value
val = Math.min(-5,4,54,65,7);
val = Math.max(-5,4,54,65,7);
val = Math.random();//***

val = Math.round(Math.random() * 10);


console.log(val);