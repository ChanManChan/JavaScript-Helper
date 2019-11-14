class Person{
  constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
  }
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

//extend this Person class with a customer class
class Customer extends Person{  //<--sub class of Person
constructor(firstName,lastName,phone,membership){
  //when we instantiate a Customer and since its extending a Person we want to call the Person constructor and we do that with a function called super()
  super(firstName,lastName); //<--this just calls the parent class constructor
  //anything extra thats going to be just in the customer class and not in the Person class has to be defined below
  this.phone=phone;
  this.membership=membership;
}
static getMemberShipCost(){
  return 500;
}
}
const nandu=new Customer('Nanda','Gopal','9444527047','silver');
console.log(nandu);
console.log(nandu.greeting()); //<--there is no greeting in Customer but we are extending Person therefore we can use anything in Person
console.log(Customer.getMemberShipCost());