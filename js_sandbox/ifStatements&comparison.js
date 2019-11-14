const id='100';
//here type is ignored
if(id==100){
  console.log('CORRECT');
}else{
  console.log('INCORRECT');
}

//equal to value and type
if(id===100){
console.log('CORRECT');
}else{
  console.log('INCORRECT');
}

//not equal to value and type
if(id!==100){
  console.log('CORRECT');
}else{
  console.log('INCORRECT');
}

//check whether 'id' is defined or not
if(typeof id!=='undefined'){
  console.log(`The ID is ${id}`);
}else{
  console.log(`NO ID`);
}

//ternary operator
console.log(id===100?`${id} is correct`:`${id} is not correct`);

