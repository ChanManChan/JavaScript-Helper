//REPLACE ELEMENT

//create element
const newHeading=document.createElement('h2'); 
//Add id
newHeading.id='task-title';
//new text node
newHeading.appendChild(document.createTextNode('Nandu\'s Task list'));
//get the old heading
const oldHeading = document.getElementById('task-title');
//parent
const cardAction=document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading,oldHeading);

//REMOVE ELEMENT
const lis=document.querySelectorAll('li');
const list=document.querySelector('ul');
//remove list items
lis[0].remove();
//Remove child element
list.removeChild(lis[3]);

//CLASSES & ATTR
const firstLi=document.querySelector('li:first-child');
const link=firstLi.children[0];
let val;

//CLASSES
val=link.className; //<--gives us a string of the classes
val=link.classList; //<--gives us a DOM token list but it is set up like an array
val=link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val=link;

//ATTRIBUTES
val=link.getAttribute('href');
val=link.setAttribute('href','http://google.com');
val=link.hasAttribute('href');
link.setAttribute('title','Google');
val=link.hasAttribute('title');
link.removeAttribute('title');
val=link;
console.log(val);
