

function fecthData(url){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Fetched data from ${url}`);
        }, 1000)
    })
}


async function fetchAllData(){
    
    const urls = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/todos", "https://jsonplaceholder.typicode.com/users"];
    const promises = urls.map(url => fecthData(url));

    await Promise.all(promises);


}

fetchAllData();
