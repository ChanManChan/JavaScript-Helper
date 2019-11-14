//for loop(when we know how many times its going to run,use for loop)
for(let i=0;i<=10;i++){
  if(i===2){
    console.log(`${i} is not my favourite number`);
    continue;
  }
  if(i===5){
    console.log(`Stop the loop`);
    break;
  }
  console.log(`Number ${i}`);
}

//while loop(when its unclear how many times to run use while loop)
let i=0;
while(i<10){
  console.log(`Number ${i}`);
  i++;
}

//DO WHILE LOOP
let j=10;
do{
  console.log(`Number in do while ${j}`);
  j++;
}while(j<10);

//example
const cars=['Ford','Cheby','Honda','Toyota'];
for(let i=0;i<cars.length;i++){
  console.log(`The car is : ${cars[i]}`);
}

//FOR EACH -it takes in a callBack function
cars.forEach(function(car,index,array){
  console.log(`${index} : ${car}`);
  //going to loop through and show the entire array each time 
  console.log(array);
});


//MAP-returns a different array
//given below an array of objects of users
const users=[
  {id:1,name:'Nandu'},
  {id:2,name:'Gopal'},
  {id:3,name:'crab'},
  {id:4,name:'bomb'}
];

//its going to lopp through and return each id inside of an array
const ids=users.map(function(user){
  return user.id;
});
console.log(`ID of the users ${ids}`);


//FOR IN LOOP - often used for objects
const user ={
  firstName:'John',
  lastName:'Doe',
  age:24
}
for(let x in user){
  //just printing 'x' will print out all the keys
  console.log(x);
  //get both the key and the value (looping through the object and getting the key value pair)
  console.log(`${x} : ${user[x]}`);
}