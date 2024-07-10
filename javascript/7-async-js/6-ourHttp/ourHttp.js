
function OurHttp(){
    this.http = new XMLHttpRequest();
}


// Make an HTTP Request

OurHttp.prototype.get = function(url , callback){

    this.http.open("GET", url, open);

    let self = this;

    this.http.onload = function(){

       if(self.http.status === 200){
         callback(null, self.http.responseText);
       } else{
        callback("Error: " + self.http.status);
       }

       function a(){
        console.log(this)
       }

       a();
    }

    this.http.send();

}

// Make an Http Post Request
OurHttp.prototype.post = function(url, data, callback){

    this.http.open("POST", url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));

}



// Make an Http Put Request
OurHttp.prototype.put = function(url, data, callback){

    this.http.open("PUT", url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));

}


// Make an Http Delete Request
OurHttp.prototype.delete = function(url,callback){

    this.http.open("DELETE", url, true);

    let self = this;

    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, "POST DELETED");
        }else{
            callback("Error: " + self.http.status);
        }
    }

    this.http.send();

}