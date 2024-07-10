

const arr = [
    {
        id:1,
        text:"Sample 1"
    },
    {
        id:2,
        text:"Sample 2"
    },
    {
        id:3,
        text:"Sample 3"
    },
]

const ArrToString = JSON.stringify(arr);

console.log(arr);
console.log(typeof arr);

console.log(ArrToString);
console.log(typeof ArrToString);

const stringToArr = JSON.parse(ArrToString);

console.log(stringToArr);