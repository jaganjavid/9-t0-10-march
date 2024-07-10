

var arr = [
    1,
    false,
    {
        name:"Tony"
    },
    function(name){
        var greeting = "Hello";
        return greeting + " " + name;
    },
    "Hey",
    undefined,
    null,
    [1,2,3]
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2].name);
console.log(arr[3]("Jagan"));
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7][1]);