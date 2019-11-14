//A map is an object that holds key value pair and any value whether its an object or object reference type or primitive can be used as a key or value which is very different than an object literal (we can use an object as a key here)

//Maps =key-value pairs - can use ANY type as a key or value
const map1=new Map();

//Set Keys
const key1='some string',
      key2={},
      key3=function(){};

//Set map values by key
map1.set(key1,'Value of key1');
map1.set(key2,'Value of key2');
map1.set(key3,'Value of key3');

//Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

//Count values
console.log(map1.size); //<--there are 3 key-value pairs

//Iterating MAPS
//Loop using for...of to get keys and values
for(let [key,value] of map1){
  console.log(`${key}: ${value}`);
}

//Iterate keys only
for(let key of map1.keys()){
  console.log(key);
}

//Iterate values only
for(let value of map1.values()){
  console.log(value);
}

//Loop with forEach
console.log('For Each Below...');
map1.forEach((value,key)=>{
  console.log(`${key}: ${value}`);
})

//Convert to Arrays
//Create an array of the key value pairs
console.log('Map to Array Below...');
const keyValueArr=Array.from(map1);
console.log(keyValueArr);

//Create an array of the values
console.log('Map(only values) to Array Below...');
const valueArr=Array.from(map1.values());
console.log(valueArr);

//Create an array of the keys
console.log('Map(only keys) to Array Below...');
const keyArr=Array.from(map1.keys());
console.log(keyArr);