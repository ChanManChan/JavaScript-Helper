//Create a symbol
//unique thing about symbols is that every single one is completely unique and it makes them very valuable in terms of 
//things like object property identifiers and this is the main purpose of symbols ie. their uniqueness
const sym1=Symbol();
const sym2=Symbol('sym2');

console.log(sym1);
console.log( typeof sym2); //<--this tells us that its a primitive data value
console.log(Symbol('123')===Symbol('123')); //<--'false' as they can never be the same even if we put the same identifier '123'
console.log(`Hello ${sym1.toString()}`);

//Main reason for Symbols...Unique object keys
const KEY1=Symbol();
const KEY2=Symbol('sym2');
const myObj={};
//myObj.KEY1='Prop1'; //<--its looking at 'KEY1' as a normal property and if you want to use an actual variable then you want to use the bracket syntax '[]'
myObj[KEY1]='Prop1';  //<--the above one was not using the variable but was using 'KEY1' as a property and in this case we are using the actual symbol as a property
myObj[KEY2]='Prop2';
myObj.key3='Prop3'; //<--this isn't a symbol iys just a simple property
myObj.key4='Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

//if we loop through myObj using for in then it wouldn't actually show up in the iteration because they are not enumerable in for in iteration
//Symbols are not enumerable in for..in
for(let i in myObj){
  console.log(`${i}: ${myObj[i]}`); //<-- we just get key3 and key4 
}
//Symbols are ignored when using JSON.stringify (JSON.stringify <-- what it does is it takes javascript object literal and turns it into a JSON string)
console.log(JSON.stringify({key:'prop'})); //<--logs it as a JSON string
console.log(JSON.stringify({[Symbol('sym1')]:'prop'})); //<--empty object, it doesnt actually parse as the above one