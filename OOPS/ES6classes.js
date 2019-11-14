class Person{
  constructor(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthday=new Date(dob);
  }
  greeting(){  //<--any methods that we add inside of the class will automatically get added to the prototype
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge(){
    const diff=Date.now()-this.birthday.getTime();
    const ageDate=new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }
  getsMarried(newLastName){
    this.lastName=newLastName;
  }
  static addNumbers(x,y){
    return x+y;
  }
}
const nandu=new Person('Nanda','Gopal','03-18-1995');
console.log(nandu.calculateAge());
nandu.getsMarried('RockStar');
console.log(nandu.greeting());
//console.log(nandu.addNumbers(1,2)); //<-- this is a static method and its not part of this instance
console.log(Person.addNumbers(1,2));