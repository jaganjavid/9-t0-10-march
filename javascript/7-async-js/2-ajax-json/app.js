

document.querySelector("#button-1").addEventListener("click", loadCustomer);
document.querySelector("#button-2").addEventListener("click", loadCustomers);
document.querySelector("#button-3").addEventListener("click", loadExternal);


function loadCustomer(){

    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open("GET", "customer.json", true);

    // onload

    xhr.onload = function(){

        if(this.status === 200){
            console.log(this.responseText);
            const customer = JSON.parse(this.responseText);

            const output = `
              
               <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
                <li>${customer.phone}</li>
               </ul>

            `;

            document.querySelector("#output").innerHTML = output;

        }

        if(this.status === 404){

            document.querySelector("#output").innerHTML = `<h2>Not Found</h2>`;

        }

    }

    xhr.send();



}



function loadCustomers(){

    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open("GET", "customers.json", true);

    // onload

    xhr.onload = function(){

        if(this.status === 200){
            console.log(this.responseText);
            const customers = JSON.parse(this.responseText);

           let output = "";

           customers.forEach(function(customer){
             output += `
              
               <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
                <li>${customer.phone}</li>
               </ul>

            `;
           });

           document.querySelector("#output").innerHTML = output;

        }

        if(this.status === 404){

            document.querySelector("#output").innerHTML = `<h2>Not Found</h2>`;

        }

    }

    xhr.send();



}



function loadExternal(){

    document.getElementById("")

    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    // onload

    xhr.onload = function(){

        if(this.status === 200){
            console.log(this.responseText);
            const posts = JSON.parse(this.responseText);

           let output = "";

           posts.forEach(function(post){
             output += `
              
               <ul>
                <li>${post.id}</li>
                <li>${post.title}</li>
                <li>${post.body}</li>
               </ul>

            `;
           });

           document.querySelector("#output").innerHTML = output;

        }

        if(this.status === 404){

            document.querySelector("#output").innerHTML = `<h2>Not Found</h2>`;

        }

    }

    xhr.send();



}