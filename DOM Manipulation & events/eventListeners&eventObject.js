// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('Hello Nandu !');

//     e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click',onclick);

function onclick(e){
//console.log('Clicked');
let val;
//val equal to the even object(e)
val=e;
//Event target element
val=e.target;
val=e.target.id;
val=e.target.className;
val=e.target.classList;
e.target.innerText='Working!';

//Event type
val=e.type; //<--click event because .addEventListener('click'......); we can change it to 'mouseover'
//TimeStamp
val=e.timeStamp;

//Coords event relative to the window
val=e.clientY; //<--no. of pixels from the top (y-axis)
val=e.clientX; //<--no. of pixels from the left side of the screen(x-axies)

//Coords event relative to the element
val=e.offsetY; //<--within the button itself
val=e.offsetX;

console.log(val);
}