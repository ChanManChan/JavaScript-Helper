/*DOM(document object model) :- how to select elements in the DOM,how to change them ,how to work with them,how to style things,work with events,traverse the DOM....SO BASICALLY WORKING WITH THE UI

But the document object is part of the window object as with many other things
window(or the browser) is the global object in the client side javaScript
window object has a lot to it,things that javaScript developers use all the time like global storage,new FetchAPI,navigator object,geolocation and even includes methods like alert and promt and confirm.

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.(its a javascript runtime that runs as a standalone process on your machine
and the machine is the environment in Node.js....while in client side javaScript,the window or the browser is the global environment).

Node.js and chrome both use the same JavaScript engine called the V8 and it works the same way just in different environments

Run time environment - Everything you need to execute a program, but no tools to change it.

Build environment- Given some code written by someone, everything you need to compile it or otherwise prepare an executable that you put into a Run time environment. Build environments are pretty useless unless you can see tests what you have built, so they often include Run too. In Build you can't actually modify the code.

Development environment - Everything you need to write code, build it and test it. Code Editors and other such tools. Typically also includes Build and Run.
*/

//WINDOW METHODS/OBJECTS/PROPERTIES

//window.console.log(123);

//ALERT
//window.alert('Hello World !');

//PROMT
//const input=prompt();
//window.alert(input);

//CONFIRM (often used when we are deleting something bcz someone could click delete by accident)
//if(confirm('Are you sure?')){
  //console.log('YES');
//}else{
  //console.log('NO');
//}

let val;
//outer height and width(might need that for styling or some interactive application)
val=window.outerHeight;    //<-----current height of the browser window
val=window.outerWidth;     //<--current width of the browser window

//inccer height and width
val=window.innerHeight;    //<--white space within the window excluding the console portion
val=window.innerWidth;    

//scroll points (figure out where we are interms of scrolling)
val=window.scrollY;
val=window.scrollX;

//LOCATION object
val=window.location.hostname;
val=window.location.port;
val=window.location.href;  //<--gives us the protocol,the host name and the port
val=window.location.search;  //<--its going to show us the query string (?id=1&name=Nandu&member=standard)

//REDIRECT
//window.location.href='http://google.com';

//RELOAD
//window.location.reload();

//History Object
//window.history.go(-2);  //<--parameter indicates to which point the browser has to redirect you to according to the past visited sites.

val=window.history.length;  //<--how many sites are behind us

//NAVIGATOR OBJECT(not the window or the environment,the actual browser itslef eg:-chrome ,firefox etc...)
val=window.navigator;   //<-- to look at the object
val=window.navigator.appName;  //<-- going to return "NetScape" unless we are on IE
val=window.navigator.appVersion;
val=window.navigator.userAgent;  //<-- generation 5.0
val=window.navigator.platform;
val=window.navigator.vendor;
val=window.navigator.language;

console.log(val);