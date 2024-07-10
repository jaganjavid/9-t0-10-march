class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }

    // Display Profile User

    showProfile(user){

        if(user.message === "Not Found"){
            this.profile.innerHTML = `<h3>Not Found</h3>`
        }else{
            this.profile.innerHTML = `
              
                    <div class="card card-body">
                    <div class="row">
                        <div class="col-md-3">
                        <img class="mb-3" width="100%" src=${user.avatar_url} alt="">
                        <a href=${user.html_url} target="_blank" class="btn btn-primary">View Profile</a>
                        </div>
                        <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos : ${user.public_repos}</span>
                        <span class="badge bg-secondary">Followers : ${user.followers}</span>
                        <span class="badge bg-info">Following : ${user.following}</span>

                        <br>
                        <br>

                        <ul class="list-group">
                           <li class="list-group-item">Company : ${user.company}</li>
                           <li class="list-group-item">Location : ${user.location}</li>
                           <li class="list-group-item">Bio : ${user.bio}</li>
                        </ul>
                        </div>
                    </div>
                </div>
               
            
            `
        }
    }
}