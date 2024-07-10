const http = new Ourhttp();


// Get User
http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err));


const data = {
    name:"Jagan Javid",
    username:"JaganJavid",
    email:"jj@gmail.com"
}

http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put("https://jsonplaceholder.typicode.com/users/7", data)
.then(data => console.log(data))
.catch(err => console.log(err));


http.delete("https://jsonplaceholder.typicode.com/users/7")
.then(data => console.log(data))
.catch(err => console.log(err));