//allows us to subscribe and unsubscribe to certain events or certain functionality.It gives us a really nice subscription  model.

function EventObserver(){
  this.observers=[];
}
EventObserver.prototype={
  subscribe:function(fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe:function (fn) {  
    //Filter out from the list whatever matches the callback function.If there is no match, the callback gets to stay on the list.The filter returns a new list and reassigns the list of observers.
    this.observers=this.observers.filter(item=>{
      if(item!==fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire:function () {  
    this.observers.forEach(item=>{
      item.call();
    });
  }
}

const click=new EventObserver();

//Event Listeners
document.querySelector('.sub-ms').addEventListener('click',()=>{
  click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click',()=>{
  click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.fire').addEventListener('click',()=>{
  click.fire();
});
document.querySelector('.sub-s').addEventListener('click',()=>{
  click.subscribe(getCurrSeconds);
});
document.querySelector('.unsub-s').addEventListener('click',()=>{
  click.unsubscribe(getCurrSeconds);
});

//click handler
const getCurMilliseconds=()=>{  
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}
const getCurrSeconds=()=>{
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}