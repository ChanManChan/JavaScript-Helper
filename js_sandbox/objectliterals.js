//defining an object literal
const person={
  //here we can put key value pairs
  firstName:'Nanda',
  lastName:'Gopal',
  age:24,
  email:'ngopal253@gmail.com',
  hobbies:['gaming','learning','watching shows'],
  //embedded objects
  address:{
    city:'Miami',
    state:'Florida'
  },
  getBirthYear: function(){
    //when we are inside an object like this we need to use the "this" keyword
    //"this" is related to the object
    return 2019-this.age;
  }
}

let val;
//print the object itself
val=person;
//print the first name attribute
val=person.firstName; //*** 
val=person['lastName'];
val=person.age;
val=person.hobbies;
val=person.hobbies[1];
//prints out the whole object
val=person.address;
val=person.address.state;
val=person.address['city'];
val=person.getBirthYear();

//OUTPUT ONLY
console.log(val);

//array of objects
const people=[
  {name:'John',age:30},
  {name:'Mike',age:23},
  {name:'Smith',age:55}
];
for(let i=0;i<people.length;i++){
  console.log(people[i].name);
}