//Sets are set of unique values of any type whether its primitive or reference
const set1=new Set();

//Add values to set
set1.add(100);
set1.add('A string');
set1.add({name:'Nandu'});
set1.add(true);
set1.add(100); //<-- doesn't add 100 as it is already present

const set2=new Set([1,true,'Gopal']);
console.log(set2);

console.log(set1);

//Get count
console.log(set1.size);

//Check for values
console.log(set1.has(100));
console.log(set1.has(50+50)); //<--true(100)
console.log(set1.has({name:'Nandu'})); //<--stored in the heap which makes it a reference value (mem address)


console.log({name:'Nandu'}==={name:'Nandu'}); //<-- false (both are pointing to a different memory location in the heap and its not a primitive type like a Number or string or boolean eg:- below
console.log('Hello'==='Hello'); //<--true ...because the string is a primitive value

//Delete from set
set1.delete(100);
console.log(set1);

//Iterate through sets
//for..of
console.log('For in Loop Below...')
for(let item of set1){
  console.log(item);
}
for(let item of set1.values()){
  console.log(item);
}
for(let item of set1.keys()){
  console.log(item);
}
console.log('Testing set1.entries() below...');
for(let item of set1.entries()){
  console.log(item);
}
//All of the above are same

//ForEach Loop
console.log('ForEach Loop Below...');
set1.forEach(value=>{
  console.log(value);
})

//Convert sets to array
console.log('Conversion of set to array below....');
const setArr=Array.from(set1);
console.log(setArr);

//set is just another object structure we can use with ES6+