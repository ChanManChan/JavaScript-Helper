//Module Pattern :- allows us to break part of our code into self contained modules with private properties and methods

//Basic structure
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
(function(){ //<--Blueprint for the module pattern
  //Declare private vars and functions
  return{
    //Declare public var and functions
  }
})();


//Standard Module Pattern
const UICtrl=(function(){
  let text='Hello World!';

  const changeText=function(){
    const element=document.querySelector('h1');
    element.textContent=text;
  }
  return{ //<--public 
    callChangeText: function(){
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();
//UICtrl.changeText(); //<--error because 'changeText()' is private!


//Revealing Module Pattern
const ItemCtrl=(function(){
  let data=[];

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item=>{
      return item.id===id;
    });
  }

  return{ 
    add:add, //<--revealing the private methods
    get:get
  }
})();

ItemCtrl.add({id:1,name:'Nandu'});
ItemCtrl.add({id:2,name:'Gopal'});
console.log(ItemCtrl.get(2));

//Main differences between the Revealing module and the standard module pattern is that we are returning an object literal that directly reveals the methods that are private!
