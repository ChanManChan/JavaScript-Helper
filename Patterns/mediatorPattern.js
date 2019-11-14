//its a Behavioural pattern like the observer pattern called the mediator pattern and the idea is to have a mediator which is basically an interface for communicating with colleagues which are just mediated objects

const User=function (name) {  
  this.name=name;
  this.chatroom=null;
}
User.prototype={
  send:function (message,to) {  
    this.chatroom.send(message,this,to);
  },
  recieve:function (message,from) {  
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom=function () {   //<-- Chatroom is the mediator and the Users are the colleagues of the Chatroom
  let users={}; //list of users
  return{
    register:function(user){
      users[user.name]=user;
      console.log(users);
      user.chatroom=this;
    },
    send:function(message,from ,to){
      if(to){
        //single user message
        to.recieve(message,from);
      }else{
        //Mass message
        for(key in users){
          if(users[key]!==from){
            users[key].recieve(message,from);
          }
        }
      }
    }
  }
}

const nandu=new User('Nandu');
const jeff=new User('Jeff');
const sara=new User('Sara');

const chatroom=new Chatroom();

chatroom.register(nandu);
chatroom.register(jeff);
chatroom.register(sara);

nandu.send('Hello jeff!',jeff);
sara.send('Nandu you are the worst person ever...i want you to die in hell',nandu);
jeff.send('Hello everyone except Nandu -_-');