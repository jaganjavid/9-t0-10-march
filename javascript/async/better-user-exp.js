

async function fetchData(url){

    const response = await fetch(url);

    const data = await response.json();

    console.log("Data Fecthed:", data);

}

fetchData("https://jsonplaceholder.typicode.com/users");

console.log("User can still interact with the UI");