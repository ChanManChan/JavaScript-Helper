let val;
val=document;  //<-- just returns the html code from index.html
val=document.all; //<--gives is an array of all the tags in html
val=document.all[0];  //<--gives us the html element
val=document.all[1];  //<--gives us the head
val=document.all[2];  //<--gives us the meta tag
val=document.all.length; //<--counts all the elements in the DOM
val=document.head; 
val=document.body;
val=document.URL;
val=document.domain;
val=document.characterSet;
val=document.contentType;

val=document.forms;  //<--to get all the forms on the page
val=document.forms[0];  //<--we only have one form in our example
val=document.forms[0].id;
val=document.forms[0].method;  
val=document.forms[0].action;  //<--<form action="index.php" id="task-form">

val=document.links;  //<--in this case it shows the 5 delete item crosses and the clear task button
val=document.links[0];  //<--if we hover over it in the console, it highlights the cross in the DOM
val=document.links[0].id;
val=document.links[0].className; //<--string of all the classes
val=document.links[0].classList;
val=document.images;
val=document.scripts; //<--jquery,materialize and app.js
val=document.scripts[2].getAttribute('src');

let scripts=document.scripts;
let scriptsArray=Array.from(scripts);  

scriptsArray.forEach(function(script){  //<--loops through and gives us each script tag
    console.log(script);
});

scriptsArray.forEach(function(script){  //<--loops through and gives us each source attribute
  console.log(script.getAttribute('src'));
});


// scripts.forEach(function(script) {
//   console.log(script);
// });   <------error because foreach is for arrays only





console.log(val);