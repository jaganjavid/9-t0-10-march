
const github = new Github();
const ui = new UI();

document.getElementById("userform").addEventListener("submit", function(e){

    e.preventDefault();

    // Get the input value
    let userText = document.querySelector("#searchUser").value;
    

    if(userText !== ""){
       
        github.getUser(userText)
        .then(data => {
            ui.showProfile(data)
        }).catch(error => console.log(error));

    }
   
})