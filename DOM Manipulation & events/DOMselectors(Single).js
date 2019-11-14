//these document object methods that allow us to pull different things from the DOM.
//jquery adds bloat to the application
//SINGLE ELEMENT SELETOR will allow you to grab one element by its id or its class
//document.getElementById()
console.log(document.getElementById('task-title')); //<--console output just like in the DOM
//Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className); //<--<h5 id="task-title"class="test">Tasks</h5>

const taskTitle=document.getElementById('task-title');

//CHANGE STYLING
taskTitle.style.background='#333'; //<--h5 has a dark background
taskTitle.style.color='#fff'; //<--text color is white
taskTitle.style.padding='5px'; //<-- size
//document.getElementById('task-title').style.display='none'; //<--completely get rid of h5

//CHANGE THE CONTENT
taskTitle.textContent='Task List !';
taskTitle.innerText='My Tasks';
//some times we want to insert HTML infact we do that quite a bit in vanilla java script when we are working with the DOM (you want to fetch something through the fetch API or ajax or something and you want to insert a chunk of HTML and this is where innerHTML comes in)
taskTitle.innerHTML='<span style="color:red">Task List</span>';


//document.querySelector()  <---newer and much more powerful because we dont have to select things by ID , we can select them by anything (basically works like jQuery we can put any CSS Selector in here)
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));  //<--<span class="card-title">Task List</span>
console.log(document.querySelector('h5'));  //<--more than one h5 on the page,its going to get the first one


document.querySelector('li').style.color='red'; //<--single element selector(only going to get the first one)
document.querySelector('ul li').style.color='blue';
document.querySelector('li:last-child').style.color='green';
document.querySelector('li:nth-child(3)').style.color='violet';
document.querySelector('li:nth-child(4)').textContent='Nandu kuttan Alone!';
document.querySelector('li:nth-child(odd)').style.background='#ccc'; //<--only the first odd is affected, its not going to do every odd because its a single element selector
document.querySelector('li:nth-child(even)').style.background='#333'; //<--only the first even

