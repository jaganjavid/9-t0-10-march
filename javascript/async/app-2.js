

// function taskOne(){
//     console.log("Task One")
// }
// function taskTwo(){
//     console.log("Task Two")
// }
// function taskThree(){
//     console.log("Task Three")
// }

// taskOne();
// taskTwo();
// taskThree();


// function taskOne(){
//     console.log("Task One");
// }

// function taskTwo(){
   
//     setTimeout(() => {
//         console.log("Task Two");
//     }, 5000)

// }

// function taskThree(){
//     console.log("Task Three");
// }

// taskOne();
// taskTwo();
// taskThree();


// Intermidiate Level

const data = [1,2,3];

// function processData(data){
//     data.forEach(item => {
//         console.log(`Processing item ${item}`); 
//     });
// }

// processData(data);
function fetchData(item){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched item ${item}`);
            resolve(item);
        }, 5000)
    })
}

async function processData(data){
    for(let item of data){
        await fetchData(item);
    }
    console.log("All items processed");
}

processData(data);

console.log("Hello");

