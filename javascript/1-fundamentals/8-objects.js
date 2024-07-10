

const person = {
    firstName:"Jagan",
    lastName: "Javid",
    age:26,
    email:"jj@gmail.com",
    hadDinner:false,
    hobbies:["music", "sports"],
    address:{
        city:"chennai",
        state:"TN"
    },
    // Method
    getFullName: function(){
        return person.firstName + " " + person.lastName;
    }
}

console.log(person);
console.log(person.firstName); // ***
console.log(person.lastName);
console.log(person.age);
console.log(person["email"]);
console.log(person.hobbies[0]);
console.log(person.address.city);
console.log(person.getFullName())