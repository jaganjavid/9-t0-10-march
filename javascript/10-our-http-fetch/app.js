
const http = new OurHttp();


http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err));


// User data
const data = {
    name:"jagan javid",
    username: "jagan_javid",
    email:"jj@gamil.com"
}


http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put("https://jsonplaceholder.typicode.com/users/2", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/2")
.then(data => console.log(data))
.catch(err => console.log(err));


