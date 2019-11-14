//each object in JS has a prototype and a prototype is an object itself.
//All objects inherit their properties and methods from their prototype 
//when we are dealing with object literals then your are inheritng from a prototype
//called Object.prototype!
//when we are dealing with objects that were created with a constructor then we inherit from a prototype called Person.prototype!

//Object.prototype
//Person.prototype

function Person(firstName,lastName,dob){
  this.firstName=firstName;       //each person will have there own firstName,lastName,and birthday but the calculateAge method is same for everyone(its functionality that is) 
  this.lastName=lastName;         
  this.birthday=new Date(dob);    

  // this.calculateAge=function(){   //<--this is something we should put inside the prototype and not   directly into the object!
  //   const diff=Date.now()-this.birthday.getTime();
  //   const ageDate=new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear()-1970);
  // }
}
//Calculate Age
Person.prototype.calculateAge = function(){  //<-- we moved it into the prototype and can we used just like before 
  const diff=Date.now()-this.birthday.getTime();
  const ageDate=new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
}
//Get Full Name
Person.prototype.getFullName=function(){ //<-- we are not flooding our constructor with these functions(we are putting them inside the prototype)
  return `${this.firstName} ${this.lastName}`;
}
//Gets Married
Person.prototype.getsMarried=function(newLastName){
  this.lastName=newLastName;
}
const babu=new Person('Nanda','Gopal','03-18-1995');
const bomb=new Person('Abigale','Ratchford','January 20 1996');
console.log(bomb);
console.log(babu.calculateAge());
console.log(babu.getFullName());
bomb.getsMarried('Gopal');
console.log(bomb.getFullName());
console.log(bomb.hasOwnProperty('firstName'));
console.log(bomb.hasOwnProperty('getFullName'));//<--even though we can use this its not part of the object property(this is in the prototype and its not part of the objects properties)