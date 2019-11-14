//Person constructor
function Person(firstName,lastName){
  this.firstName=firstName;
  this.lastName=lastName;
}

//Greeting
Person.prototype.greeting=function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}
const person1=new Person('Nanda','Gopal');
console.log(person1.greeting());

//Customer constructor
function Customer(firstName,lastName,phone,membership){
  Person.call(this,firstName,lastName); //<--call is a function that allows us to call another function from somewhere else in the current context
  this.phone=phone;
  this.membership=membership;
}
//Inherit the Person prototype methods
Customer.prototype=Object.create(Person.prototype);
//Make customer.prototype return Customer()
Customer.prototype.constructor=Customer;
//Create customer
const customer1=new Customer('Tom','Smith','9444527047','silver');
console.log(customer1);

//Customer greeting
Customer.prototype.greeting=function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}
console.log(customer1.greeting()); //<--not yet inheriting the prototype !
