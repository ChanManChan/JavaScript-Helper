const user={
  email:'jdoe@gmail.com'
};

try{
  //Produce a ReferenceError
  //myFunction();

  //Produce a TypeError
  //null.myFunction();

  //Produce SyntaxError ...eval() <--evaluates javascript within a string
  //console.log(eval('2+2')); //<--op = 4
  //console.log(eval('"Hello World"'));  //<-- this is fine but...because its evaluating it as a string
  //console.log(eval('Hello World'));  //<-- this produces Syntax Error because its looking at 'Hello' and 'World' as variables

  //Produce URIError
  //decodeURIComponent('%');

  if(!user.name){
    //throw 'User has no name!';
    throw new SyntaxError('User has no name!!!!');
  }
}catch(e){  //<-- elegant way of handling errors
  console.log(`User Error: ${e.message}`);
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
}finally{ //<--runs no matter what
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');