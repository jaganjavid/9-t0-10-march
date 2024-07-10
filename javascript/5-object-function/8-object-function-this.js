
var b = 5;

function a(){

    var b = "Hello"; 
    console.log(b);

    console.log("Statement", this); // its point to the window
    this.newVariable = "Vanakam";

}

// console.log(b);

// a();

// console.log(newVariable);

var b = function(){
    console.log("EXP", this); // its point to the window
}
// b();

var c = {
    name:"The c object",
    log: function(){
        
        var self = this;

        let setName = function(newName){
            self.name = newName;
            console.log(self);
        }

        setName("Updated again, The C Object");
        
    }
}




c.log();
console.log(c.name);



var d = "test D";

function test(){

    var d = "inner test";
    console.log(d);
    
    
}

test();