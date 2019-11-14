function greet(firstName='John',lastName='Doe'){
  // if(typeof firstName==='undefined'){firstName='John'}
  // if(typeof lastName=='undefined'){lastName='Doe'}
  //console.log('Hello');
  return 'Hello '+firstName+' '+lastName;
}
//console.log(greet());

//function expressions
const square=function(x=3){
return x*x;
};
//console.log(square()); 

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
//declare and run at the same time

(function(){
  console.log(`IIFE Ran...`);
})();

(function(name){
  console.log(`Hello ${name}`);
})(`Nandu`);

//PROPERTY METHODS
//when a function is put inside an object it becomes a method
const todo={
  add:function(){
    console.log(`Add todo...`);
  },
  edit:function(id){
    console.log(`Edit todo ${id}`);
  }
}
//we can also define functions for this object outside
todo.delete=function(){
  console.log(`Delete todo...`);
}
todo.add();
todo.edit(22);
todo.delete();