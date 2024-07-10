
// Non Blocking Operation

// function fetchData(){
    // let start = Date.now();

    // while(Date.now() - start < 5000) {} // Blocking for 5 secs
    // console.log("Date Fetched");
// }

// console.log("Start Fetching data");
// fetchData();
// console.log("Continue with other tasks");

// Async

function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Data Fetched");
            resolve();
        }, 5000)
    })
}

console.log("Start Fecthing data");

fetchData().then(() => {
    console.log("Continue with other task");
})

console.log("Hello");
