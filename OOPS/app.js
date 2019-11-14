// const nandu={ //<--object literal,when we want to deal with just one object
//   name:'Nandu',
//   age:30
// }
// console.log(nandu);
// console.log(nandu.name);

//multiple instances of certain type of object
//Person constructor
function Person(name,age,dob){ //<--'this' keyword is very important ! it refers to the current instance of the object
  this.name=name;
  this.age=age;
  //console.log(this); //<--logs twice because we instantiated two objects
  this.birthday=new Date(dob);
  this.calculateAge=function(){
    const diff=Date.now()-this.birthday.getTime();
    const ageDate=new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }
}
console.log(this); //<--we get the window object('this' inside the global scope not inside of a function)
//this.alert(1); //<--alert is part of the window object

//instantiate a person object
const nandu=new Person('Nandu',36,'03-18-1995');
const gopal=new Person('Gopal',30,'03-30-1996');
console.log(nandu.calculateAge());