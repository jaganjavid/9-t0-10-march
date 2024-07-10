
const posts = [
    {title:"Post One", body:"This is a post one"},
    {title:"Post Two", body:"This is a post two"},
];


function createPost(post){
    return new Promise(function(resolve, reject){

        setTimeout(function(){

            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else {
                reject("ERROR: some thing went worng");
            }

        }, 2000)

    });
}

function getPosts(){

    setTimeout(function(){
        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>` 
        });

        document.body.innerHTML = output;


    }, 1000);

}

createPost({title:"Post Three", body:"This is a post three"})
.then(getPosts)
.catch(function(err){
    console.log(err);
})

