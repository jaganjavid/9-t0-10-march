
const http = new OurHttp();


// Get Post
http.get("https://jsonplaceholder.typicode.com/users", function(err, posts){
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
});

// Data

const data = {
    title:"Custom post",
    body:"This is my custom post"
}

// http.post("https://jsonplaceholder.typicode.com/users", data, function(err, post){
 
//   if(err){
//     console.log(err)
//   } else{
//     console.log(post);
//   }

// })

// http.put("https://jsonplaceholder.typicode.com/users/5", data, function(err, post){
 
//   if(err){
//     console.log(err)
//   } else{
//     console.log(post);
//   }

// })


// http.delete("https://jsonplaceholder.typicode.com/users/7",function(err, post){
 
//   if(err){
//     console.log(err)
//   } else{
//     console.log(post);
//   }

// })



