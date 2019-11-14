const firstName='Nanda';
const lastName='Gopal';
const str='Hello there my name is Nandu and im 24 years old';
const age=24;
let val;

val=firstName+lastName;
//concatenation
val=firstName+' '+lastName;
//APPEND
val='Nandu ';
val+='Gopal';

val='Hello, my name is '+firstName+' and im '+age+' years old';

//ESCAPING
val='That\'s awesome,I can\'t wait';
//Length
val=firstName.length;
//concat()
val=firstName.concat(' ',lastName);
//change case
val=firstName.toUpperCase();
val=firstName.toLowerCase();
//we can treat strings like read only arrays
val=firstName[3];
//index of a character
val=firstName.indexOf('d');//first encounter
val=firstName.lastIndexOf('a');//starts from right side
//opposite of indexOf()...charAt()
val=firstName.charAt(2);
//get last character
val=firstName.charAt(firstName.length-1);
//substrings()
val=firstName.substring(0,3);
//slice
val=firstName.slice(0,3);
val=firstName.slice(-3);//starts from the back takes the last three
//split()
val=str.split(' ');
//replace
val=str.replace('Nandu','Nanda Gopal');
//includes()
val=str.includes('foo');



//OUTPUT
console.log(val);