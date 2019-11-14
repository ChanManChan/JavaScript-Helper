//selectors used to select more than one element and they return either an HTML collection or a node list which are both similar to arrays execpt we cant do everything that we do with arrays but they can also be converted into arrays easily.
//document.getElementsByClassName
const items=document.getElementsByClassName('collection-item'); //<--GLOBA SCOPE
//console.log(items);
//console.log(items[0]); //<--this gives us the first list item
items[3].textContent='Hello';
items[1].style.color='red';
items[0].style.color='green';

const listItems=document.querySelector('ul').getElementsByClassName('collection-item'); //<--collection-item classes that are inside of this 'ul'.<h5 id="task-title">Tasks</h5>
//<div class="collection-item">TEST NANDU</div>  <--- this is not displayed here but where as it is displayed above.
//console.log(listItems);

//document.getElementByTagName
let lis=document.getElementsByTagName('li'); //<-- another HTML collection with all of the li's (here we are just selecting by the TAG names instead of the class name)
//console.log(lis);
//console.log(lis[0]);  //<--first one
lis[0].style.color='yellow';
lis[3].textContent='ill break your bones boah';
//and HTML collection is not an array !!!
//converet HTML collection into an array
lis=Array.from(lis);
lis.reverse();  //<--reversed
lis.forEach(function(li,index){
  //console.log(li.className);
  li.textContent=`${index}:Hello`;
});
//console.log(lis);

//querySelectorAll ,it returns a node list ,node list counts not just elements but things like text nodes and also we dont have to convert it to an array 
const fetchedItems=document.querySelectorAll('ul.collection li.collection-item'); //<--not an HTML collection but a node list.
//above inside the querySelectorAll() method we could have just passed 'li' like querySelectorAll('li'); and would have worked the same!
fetchedItems.forEach(function(item,index){ //<-- here we did not convert it to an array
  item.textContent=`${index} : RED DEAD`;
});
const liOdd=document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function(item,index){
  item.style.background='#ccc';
});
for(let i=0;i<liEven.length;i++){ //<--the for loop will still work on an HTML collection even if we dont convert it to an array because we can still use length on HTML collection.
  liEven[i].style.background='#90ee90';
}

console.log(fetchedItems);