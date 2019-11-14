//way of creating an interface for creating objects;
//often used in applications to manage and maintain and manipulate collections of object that are different but at the same time have many common characteristics and a good example of that would be a member(some kind of paid membership application or website where your members may have different types but still have the same properties and methods)

function MemberFactory() {  
  this.createMember=function (name,type) {  
    let member;
    if(type==='simple'){
      member=new SimpleMembership(name); //,--now create constructors for these subclasses like 'SimpleMembership' etc etc
    }else if(type==='standard'){
      member=new StandardMembership(name);
    }else if(type==='super'){
      member=new SuperMembership(name);
    }
    
    member.type=type;

    member.define=function () {  
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership=function (name) {  
  this.name=name;
  this.cost='$5';
}
const StandardMembership=function (name) {  
  this.name=name;
  this.cost='$15';
}
const SuperMembership=function (name) {  
  this.name=name;
  this.cost='$25';
}

const members=[];

const factory=new MemberFactory();

//Below is factory, producing objects one by one
members.push(factory.createMember('Nanda Gopal','simple'));
members.push(factory.createMember('Good Boah','super'));
members.push(factory.createMember('Boah Boah','simple'));
members.push(factory.createMember('Tim smith','standard'));

console.log(members);

members.forEach(member=>{
  member.define();
});