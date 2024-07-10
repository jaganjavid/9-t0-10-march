

// const sayHello = function(){
//     return "Hello";
// }

// console.log(sayHello());

// Arrow Function

// const sayHello = () => {
//     return "Hello";
// }

// console.log(sayHello());

// One line function does not need a braces

// const sayHello = () => "Hello";
// const sayHello = () => ({msg:"Hello"});

// Simgle param does not nees a parenthesis

// const sayHello = name => console.log(`Hello ${name}`);
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Jagan", "Javid");

const users = ["Javid", "Jagan", "Akash"];

// users.forEach(function(user){
//    console.log(user);
// })

// users.forEach(user => {
//     console.log(user);
// })

users.forEach((user, index) => {
    console.log(`${index} - ${user}`);
})
