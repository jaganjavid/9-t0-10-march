



const button = document.querySelector("#random-jokes").addEventListener("click", getJokes);


function getJokes(){
   
    const xhr = new XMLHttpRequest();


    xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);

    

    xhr.onreadystatechange = function(){

        if(this.readyState === 4 && this.status === 200){
            const data = JSON.parse(this.response);

            // const { value:test } = data;
            const { value } = data;

            // document.querySelector(".data").innerText = data.value;
            // document.querySelector(".data").innerText = test;
            document.querySelector(".data").innerText = value;
        }
    }


    xhr.send();

}

document.addEventListener("DOMContentLoaded", getJokes);
