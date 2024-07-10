


var person = new Object();


person.firstName = "Jagan"; //***
person["lastName"] = "Javid";
person.age = 27;

person.address = new Object();
person.address.city = "Chennai";

// Methode

person.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// document.body.innerText = person.getFullName();