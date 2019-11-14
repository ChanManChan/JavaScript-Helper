const heading =document.querySelector('h5');
const select=document.querySelector('select');

const form=document.querySelector('form'); //<--select it by the form tag <form id="task-form">...if we have a big application with multiple forms we have to be more specific than just 'form'! like use the id or class or something like that.In this case we only have one form so no worries

const taskInput=document.getElementById('task'); //<--<input type="text" name="task" id="task" value="Walk the dog">

//if you want to clear out the form from java script
taskInput.value=''; //<--clear it out

//below keydown
//taskInput.addEventListener('keydown',runEvent);

//below KEYUP
//taskInput.addEventListener('keyup',runEvent); //<--when we release the key its going to register

//below KEYPRESS
//taskInput.addEventListener('keypress',runEvent);

//FOCUS
//taskInput.addEventListener('focus',runEvent); //<--click inside of an input and you set it to the focus mode

//BLUR
//taskInput.addEventListener('blur',runEvent);

//CUT
//taskInput.addEventListener('cut',runEvent);

//PASTE
//taskInput.addEventListener('paste',runEvent);

//INPUT
taskInput.addEventListener('input',runEvent); //<--anything we do with the input is going to fire it off (like cut,paste,undo and regular typing)

//CHANGE
select.addEventListener('change',runEvent);

//form.addEventListener('submit',runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value); //<--logs everything we type

  //heading.innerText=e.target.value;

  //console.log(taskInput.value);  //<--get input value

  //e.preventDefault(); //<--now even though the action goes to index.php its not going to redirect!
}