

class Person{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

}


const javid = new Person("Jagan", "Javid");

class Customer extends Person{
    constructor(firstName, lastName, phone,membership){
        super(firstName, lastName)
        this.phone = phone;
        this.membership = membership;
    }


}

const javidCustomer = new Customer("Javid", "Jagan", "555-555-5555", "Premium");

console.log(javidCustomer);
console.log(javidCustomer.greeting());