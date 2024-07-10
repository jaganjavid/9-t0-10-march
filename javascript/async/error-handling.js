

async function fetchData(url){

    try{

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Network response was not ok");
        }else{
            const data = await response.json();
            console.log("Data Fecthed", data);
        }
    }catch(error){
      console.error("Fetching data failed", error);
    }

}

fetchData("https://jsonplaceholder.typicode.com/users")