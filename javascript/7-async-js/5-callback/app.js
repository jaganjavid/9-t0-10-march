
const posts = [
    {title:"Post one", body: "This is a post one"},
    {title:"Post two", body: "This is a post two"},
];

// Sync

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// Async

function createPost(post, callback){
     
    setTimeout(function(){
        posts.push(post);

        callback();
    }, 2000);

}

function getPost(){
    setTimeout(function(){
        posts.forEach(function(post){

            const div = document.createElement("div");

            div.innerHTML = `<strong> 
             ${post.title} - ${post.body}
            </strong>`;

            document.querySelector("#posts").appendChild(div);

        })
    }, 1000);
}

// Sync

// getPost();
// createPost({title:"Post Three", body: "This is a post Three"});


createPost({title:"Post Three", body: "This is a post Three"}, getPost);






