
var objectLiteral = {
    firstName: "Jagan",
    isAProgrammer: true
};


console.log(objectLiteral);

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse(`{"firstName":"Jagan","isAProgrammer":true}`);

console.log(jsonValue);