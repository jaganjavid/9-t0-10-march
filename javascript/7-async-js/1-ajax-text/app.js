

document.querySelector("#btn").addEventListener("click", function(){
   
    // Create an XHR Object

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "dat.txt", true);

    xhr.onload = function(){

        // console.log(this);

        if(this.status === 200){
            document.querySelector("#output").innerHTML = `<h1>
             ${this.responseText}
            </h1>`
        }

        if(this.status === 404){
            document.querySelector("#output").innerHTML = `<h1>
             Not Found
           </h1>`
        }

    }


    xhr.send();



})

