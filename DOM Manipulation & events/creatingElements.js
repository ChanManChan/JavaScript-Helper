//creating element(we can construct DOM elements from scratch from vanilla java script)
const li=document.createElement('li');
//Add class
li.className='collection-item';
//add id
li.id='new-item';
//Add attribute
li.setAttribute('title','New Item');
//create text node and append
li.appendChild(document.createTextNode('Nandu Learning JS!'));//<--put something inside of something.
//crete new link element
const link=document.createElement('a');//<--this time we are going to create an 'a' tag, a link.
//Add classes
link.className='delete-item secondary-content';
//Add icon html
link.innerHTML='<i class="fa fa-remove"></i>';
//Append link into li
li.appendChild(link);
//append li as child to 'ul'
document.querySelector('ul.collection').appendChild(li);

console.log(li);