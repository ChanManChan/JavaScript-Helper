//EVENT BUBBLING :- bubbling up of events through the DOM. So when an event happens on a particular element in the DOM it will actually bubble up through the parents.


//bubbles up the DOM example below:-
// document.querySelector('.card-title').addEventListener('click',function(){
// console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click',function(){
// console.log('card content');
// });
// document.querySelector('.card').addEventListener('click',function(){
// console.log('card');
// });
// document.querySelector('.col').addEventListener('click',function(){
// console.log('col');
// });

//EVENT DELEGATION:- opposite of event bubbling its where we put the listener on one of the parent elements and then we use logic inside of the event handler to target the element that we actually want.

// const deleteItem=document.querySelector('.delete-item');
// deleteItem.addEventListener('click',delItem);
document.body.addEventListener('click',delItem);

function delItem(e){
  //console.log(e.target);
  // if(e.target.className==='fa fa-remove'){ //<--but we dont want to deal with the icon, we want to deal with the 'a' tag around it,which is its parent.
  //   console.log('delete item');
  // }
  // if(e.target.parentElement.className==='delete-item secondary-content'){
  //   console.log('delete item');
  // }    <-------if we add a new class for some reason it will stop working from that point onwards because it has to match the entire class string
  if(e.target.parentElement.classList.contains('delete-item')){  //<--best way to target one of those links
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}