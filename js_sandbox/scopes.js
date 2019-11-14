//GLOBAl SCOPE
var a=1;  //has a function scope
let b=2;  //<--have a block level scope
const c=3;  //<--have a block level scope

function test(){
  var a=4;
  let b=5;  
  const c=6;
  console.log('Function Scope: ',a,b,c);
}
test();

//BLOCK LEVEL SCOPE
if(true){
  //block scope
  var a=7;  //<--only global var changes drawback of java script
  let b=8;    //<--does not change the global let b;
  const c=9;  //<--does not change the global constant c;
  console.log('If Scope: ',a,b,c);
}

for(var a=0;a<10;a++){  //<--the variable a in the loop changes the value of the global a (another reason why let and const were created)
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ',a,b,c);
