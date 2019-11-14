const personPrototypes={
  greeting:function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried:function(newLastName){
    this.lastName=newLastName;
  }
}
const mary=Object.create(personPrototypes);
mary.firstName='Mary';
mary.lastName='Williams';
mary.age=40;
mary.getsMarried('Thompson');
console.log(mary.greeting());

const brad=Object.create(personPrototypes,{
  firstName:{value:'Nandu'},
  lastName:{value:'Gopal'},
  age:{value:24}
});

console.log(brad);
console.log(brad.greeting());