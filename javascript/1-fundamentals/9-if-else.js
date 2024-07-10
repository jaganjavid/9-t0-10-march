
// if(something){
//     do something
// } else {
//     do something else
// }



const id = 100;

// EQUAL TO VALUE

if(100 == id){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// NOT TO VALUE

if(101 != id){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}


// EQUAL TO VALUE AND TYPE

if(100 === "100"){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// NOT EQUAL TO VALUE AND TYPE

if(100 !== "100"){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// TEST IF UNDEFINED

let greet = "Vanakam"; 

if(typeof greet !== undefined){
    console.log(`true ${greet}`)
} else {
    console.log(`false ${greet}`)
}

// GREATER OR LESS THAN
if(100 >= 99){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

if(100 <= 99){
    console.log("CORRECT")
} else{
    console.log("INCORRECT")
}

// if else

const color = "blue";

if(color === "red"){
    console.log(`color is ${color}`)
} else if (color === "blue"){
    console.log(`color is ${color}`)
} else{
    console.log("I dont know the color")
}

// LOGICAL OPERATOR 

const name = "Javid";
const age = 55;


// AND - && checK both value is true

if(age >= 0 && age <= 12){
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teen`)
} else{
    console.log(`${name} is a adult`)
}

// OR - || checK ONLY ONE value is true

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} can run in race`);
}


// Ternary operator
console.log(100 === 100 ? "CORRECT" : "INCORRECT");