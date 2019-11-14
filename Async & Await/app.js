// async function myFunc(){ //<--add 'async' to the beginning of the function keyword and by just doing that makes this function return a promise
//   //return 'Hello';
//   const promise=new Promise((resolve,reject)=>{
//       setTimeout(()=>resolve('Hello'),1000);
//   });
//   const error=false;
//   if(!error){
//     const res=await promise; //Wait until promise is resolved
//     return res;
//   }else{
//     await Promise.reject(new Error('Something went wrong...'));
//   }
// }

// //just adding this 'async' makes this return a promise which is really nice instead of wrapping this in return new Promise and all that!

// //console.log(myFunc());
// myFunc()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err));

async function getUsers(){
  //await response of the fetch call
  const response=await fetch('https://jsonplaceholder.typicode.com/users');
  //Only proceed once its resolved
  const data=await response.json();
  //only proceed once second promise is resolved
  return data;
}
getUsers().then(users=>console.log(users));