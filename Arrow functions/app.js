// const sayHello=function(){ //<-- turn this into an arrow function
//   console.log('Hello');
// }
// const sayHello=()=>{ //<--Arrow function
//   console.log('Hello');
// }

//One line function does not need braces
//const sayHello=()=>console.log('Hello'); //<--function body was only one line so this way is also fine

//const sayHello=()=>'Hello'; //<--returning
//const sayHello=()=>({msg:'Hello'}); //wrap it in parentheses to return object literals

//const sayHello=(name)=>console.log(`Hello ${name}`); //<--if its a single parameter then we dont even need parentheses

//Single param does not need parenthesis
//const sayHello=name=>console.log(`Hello ${name}`); 

//for more than one param we need parenthesis
const sayHello=(firstName,lastName)=>console.log(`Hello ${firstName} ${lastName}`);
sayHello('Nanda','Gopal');
//console.log(sayHello());

const users=['Nandu','Appu','Chittu'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });

//Make it shorter using arrow functions
// const nameLengths=users.map((name)=>{
//   return name.length;
// });

//Shortest
const nameLengths=users.map(name=>name.length);
console.log(nameLengths);


//Now go back an change the Fetch API Sandbox example according to this new  standard !!!