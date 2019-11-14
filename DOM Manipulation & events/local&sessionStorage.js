//set local storage item <--this will stay until we manually clear it out in our settings or through your program and session storage will go away once our browser is closed (once the session ends).Other than that the API is the exact same.
// localStorage.setItem('name','John');  //<--set data in your browser
// localStorage.setItem('age','39');

// sessionStorage.setItem('name','Nandu');  

//REMOVE FROM STORAGE
//localStorage.removeItem('name');

//GET FROM STORAGE
// const name=localStorage.getItem('name');
// const age=localStorage.getItem('age');

// //CLEAR LOCAL STORAGE
// localStorage.clear();
// console.log(name,age);

document.querySelector('form').addEventListener('submit',function(e){
  const task=document.getElementById('task').value;
   let tasks;
   if(localStorage.getItem('tasks')===null){
     tasks=[];
   }else{
     tasks=JSON.parse(localStorage.getItem('tasks')); //<--after this push the task thats coming through the form onto the variable tasks along with the previous data.
   }
   tasks.push(task);
   localStorage.setItem('tasks',JSON.stringify(tasks));  //<--getting overwritten therefore create an array of tasks and store that as a string
  alert('Task saved!');
  //console.log(task);
  e.preventDefault();
});

const tasks=JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
console.log(task);
});