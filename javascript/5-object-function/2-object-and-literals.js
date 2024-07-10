

var person = {
    firstName: "Jagan",
    lastName: "Javid",
    age: 27,
    address: {
        city: "Chennai"
    },
    getFullname: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person);
console.log(person.getFullname());
