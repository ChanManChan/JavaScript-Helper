//part of ES6
const name='Nandu';
const age=31;
const job='Airport CNS';
const city='Trichy';
let html;
//lot of time we are going to insert HTML from javascript
//without template strings(es5) <----old way
html='<ul><li>Name: '+ name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';
html='<ul>'+
     '<li>Name: '+name+'</li>'+
     '<li>Age: '+age+'</li>'+
     '<li>Job: '+job+'</li>'+
     '<li>City: '+city+'</li>'+
     '</ul>';

//with template strings(es6)
function hello(){
  return 'Hello!!!!OLA!!!!!!';
}

html=`
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${4+4}</li>
    <li>${hello()}</li>
    <li>${age>30?'Over 30':'Under 30'}</li>
</ul>
`;
document.body.innerHTML=html;