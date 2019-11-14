const clearBtn=document.querySelector('.clear-tasks');
const card=document.querySelector('.card'); //<--the slight white protruding card shaped element which contains everything else in the DOM
const heading=document.querySelector('h5'); //<--grab it by its tag

//CLICK
clearBtn.addEventListener('click',runEvent);
//Double Click
clearBtn.addEventListener('dblclick',runEvent);
//MouseDown
clearBtn.addEventListener('mousedown',runEvent);
//MouseUp
clearBtn.addEventListener('mouseup',runEvent);
//MouseEnter
card.addEventListener('mouseenter',runEvent);
//MouseLeave
card.addEventListener('mouseleave',runEvent);
//MouseOver <--will fire off when we go into another element thats inside the main element(keeps on firing with every element passed through)
card.addEventListener('mouseover',runEvent);
//Mouseout  <--will fire off when we go out from another element thats inside the main element
card.addEventListener('mouseout',runEvent);
//Event Handler (takes in the event object(e.))
//Mousemove  <--any movement(we can use this for extremely interactive stuff like games)
card.addEventListener('mousemove',runEvent);
function runEvent(e){
console.log(`EVENT TYPE: ${e.type}`);
heading.textContent=`MouseX: ${e.offsetX} ; MouseY: ${e.offsetY}`;
document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
}