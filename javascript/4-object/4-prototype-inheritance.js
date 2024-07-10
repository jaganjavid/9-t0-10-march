

function Person(firstName, lastName){
    this.fisrtName = firstName,
    this.lastName = lastName
}

// Greeting
Person.prototype.greeting = function(){

    return `Hello there ${this.fisrtName} ${this.lastName}`;

}

const javid = new Person("Jagan", "Javid");

// Customer object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}


// inherit the person prototype
Customer.prototype = Object.create(Person.prototype);

const javidCustomer = new Customer("Javid", "Jagan", "111-111-1111", "permium");


console.log(javidCustomer);
console.log(javidCustomer.greeting());
 

