//var ,let,const
// var name='Nandu';
// console.log(name);
// name='Gopal'
// console.log(name);
// //we can reassign variables if we use var or let
// //Init var
// var greeting;
// console.log(greeting);
// greeting='Hello';
// console.log(greeting);

// //characters inside a variable=letters,numbers,_,$
// //cannot start with a number
// var $name='Not nice'
// console.log($name);

// //Multi words vars(conventions)
// var firstName='John';//Camel case*****
// var first_name='John';//Underscore
// var FirstName='John';//Pascal case
// var firstname;//do no recommend   

//LET
// let name='bobo';
// console.log(name);
// name='Gopal'
// console.log(name);

//CONST(cant be reassigned)
// const name1='baba';
// console.log(name1);
//cannt reassign
//name1='bomb';
//Have to assign a value
//const greeting;

//Even though we cannot reassign person object we can change the stuff inside the person object
const person={
  name:'Nanda gopal',
  age:30
}
person.name='Nandu kuttan';
person.age=66;
//object literal
//console.log(person);

const numbers=[1,2,3,4,5];
//below is OK but
numbers.push(6);
//this is not OK
//numbers=[10,11,12,13,14];
console.log(numbers);
