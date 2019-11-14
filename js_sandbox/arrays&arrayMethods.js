//create some arrays
const numbers=[43,56,33,231,8,2,78];
const numbers2=new Array(101,1,16,78,71,93,2,108);//second way is by using array constructor
const fruit=new Array('Apple','Orange','PineApple','Grapes','JackFruit');
const mixed=new Array(22,'Nandu',20001,'Gopal',true,undefined,null,{a:1,b:2},new Date());

let val;
//get array length
val=numbers.length;
//check if array
val=Array.isArray(numbers);
//get a single value from an array
val=numbers[1];
//Insert into array
numbers[2]=99;
//find index of value
val=numbers.indexOf(99);

//MUTATING ARRAYS
numbers.push(500);//   <-----@ the end
//add on to front
numbers.unshift(240);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice values
numbers.splice(1,3);
//reverse
numbers.reverse();

//CONCATENATE ARRAYS
val=numbers.concat(numbers2);
//SORTING ARRAYS
val=fruit.sort();
val=numbers2.sort(); //  <---sorts by the first digit from the left
//use the compare function
val=numbers2.sort(function(a,b){
      return a-b;
});
//reverse sort
val=numbers2.sort(function(a,b){
      return b-a;
});
//Find
function under80(num){
  return num<80;
}
val=numbers2.find(under80);  //<--first number under the given value from the left

//OUTPUT
console.log(val);
console.log(numbers);