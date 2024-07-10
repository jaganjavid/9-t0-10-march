

function Person(fisrtName,lastName){
    this.fisrtName = fisrtName,
    this.lastName = lastName
    // this.fullName = function(){
    //       return this.fisrtName + " " + this.lastName;
    // }
}



Person.prototype.fullName = function(){
    return this.fisrtName + " " + this.lastName;
}


const javid = new Person("Jagan", "Javid");
const jagan = new Person("Javid", "Jagan");


console.log(jagan);
console.log(javid);




// javid.__proto__.__proto__.fullName = function(){
//     return this.fisrtName + " " + this.lastName;
// };

// console.log(javid);

// console.log(javid.fullName());


const arr = [1,2,3];

arr.__proto__.hello = function(){
    console.log("Hello");
};

console.log(arr);
arr.hello();


// const arr2 = [4,5,6];

// console.log(arr2);

