//String
const name1='Jeff'; //<--sets a primitive value to the variable 'name1'
//we could create a string as an object of you want
const name2=new String('Jeff'); //<--one thing we can do when we use this as an object is we can add properties to it
name2.foo='bar';
if(name2==='Jeff'){ //<--type is not equal to string !(its an object)
  console.log('YES!');
}else{
  console.log('NO!');
}

// console.log(name1);
// console.log(name2);


//Number
const num1=5; //<--primitive number
const num2=new Number(4); //<--object
console.log(num1);
console.log(typeof num2);

//Boolean
const bool1=true;
const bool2=new Boolean(false);
console.log(bool1);
console.log(typeof bool2);

//Functions
const getSum1=function(x,y){
  return x+y;
}
const getSum2=new Function('x','y','return x+y');
console.log(getSum1(1,1));
console.log(getSum2(2,2));

//Object
const guy1={
  name:"Nandu"
};
const guy2=new Object({name:"Gopal"});

console.log(guy1);
console.log(guy2);

//Arrays
const arr1=[1,2,3,4];
const arr2=new Array(1,2,3,4,);
console.log(arr1);
console.log(arr2);

//Regular Expressions
const re1=/\w+/;
const re2=new RegExp('\\w+'); //<--extra '\' for escaping
console.log(re1);
console.log(re2);
