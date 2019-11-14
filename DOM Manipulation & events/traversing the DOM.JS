//we are going to be dealing with parents and children of specific nodex or whatever node we select.
let val;
const list=document.querySelector('ul.collection');//<--its going to be the 'ul', the 'ul' that wraps those list items 
const listItem=document.querySelector('li.collection-item:first-child');//<--theres more than one of these but its going to select the first one.
val=listItem;
val=list; //<--here we get the entire 'ul' with li's contained within it.

//Get the child nodes
val=list.childNodes; //<--node list of all the child nodes(here we are getting text nodes because of the </li> line break) but we dont want the text nodex therefore we have another mehtod of getting only the children.
val=list.childNodes[0]; //<--gives us the text node
val=list.childNodes[0].nodeName;
val=list.childNodes[1].nodeType;
val=list.childNodes[3].nodeType;
//TYPE OF NODES
//1-ELEMENT
//2-ATTRIBUTE(DEPRECATED)
//3-TEXT NODE
//8-COMMENT
//9-DOCUMENT ITSELF
//10-DOCTYPE

//Get children element nodes
val=list.children;  //<--HTML collection and not a node list
//child nodes gives us all different types of nodes not just elements and children is going to give us just the elements
val=list.children[0];
list.children[0].textContent='NOVEMBER 5!';
//Children of children
list.children[3].children[0].id='test-link';
val=list.children[3].children[0];  //<--give us the fourth childs delete link

//first child
val=list.firstChild; //<--just like with child nodes 'firstChild' will give us the first node
val=list.firstElementChild; //<--gives us the first actual element not giving us any text nodes
//last child
val=list.lastChild;
val=list.lastElementChild; //<--actual last list item is fetched

//count child elements
val=list.childElementCount;

//get parent node
val=listItem.parentNode; //<--it fetches the first list items parent that is the 'ul'
val=listItem.parentElement; //<--in most cases its going to be the same exact thing
val=listItem.parentElement.parentElement; //<--parent of the 'ul' is the class="card-action"

//get next sibling
val=listItem.nextSibling; //<--text node
val=listItem.nextElementSibling; //<--next list item.
val=listItem.nextElementSibling.nextElementSibling.previousElementSibling; //<--second one

//get previous sibling
val=listItem.previousSibling; //<--text node
val=listItem.previousElementSibling; //<--its going to be null because we are dealing with the first list item here. so there is no previous sibling
console.log(val); 