//take a variable and changing the data type
let val;

//NUMBER TO STRING
val=String(555);
val=String(4+4);
//BOOLEAN TO STRING
val=String(true);
//DATA TO STRING
val=String(new Date());
//ARRAY TO STRING
val=String([1,2,3,4,5,6]);
//toString()
val=(5).toString();
val=(true).toString();

//STRING TO NUMBER
val=Number('5');
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('Hello');
val=Number([1,2,3]);
val=parseInt('100.20');
val=parseFloat('100.51');

//OUTPUT
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// //allows us to specify decimals
// console.log(val.toFixed(2));


//TYPE COERSION(changing of types but javascript does it for us)

const val1=String(5);
//in this case js change val2 to string and concatenated it with val1
const val2=6;
const sum=Number(val1+val2);
console.log(sum);
console.log(typeof sum);
