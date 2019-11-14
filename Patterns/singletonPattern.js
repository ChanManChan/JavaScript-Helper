//it can only return one instance of an object at a time..repeated calls to the constructor will just return the same instance
//why use singleton ? bcz we may want only one user object created at a time (maybe a logged in user will prevent you from having two users from being created at once)

const Singleton=(function () {
    let instance;
    function createInstance() {
      const object=new Object({id:1,name:'Nandu'});
      return object;
    }
    return{
      getInstance:function () {  
        if(!instance){
          instance=createInstance();
        }
        return instance;
      }
    }
})();

const instanceA=Singleton.getInstance();
const instanceB=Singleton.getInstance();

console.log(instanceA===instanceB); //<-even instanceB gave us back the same instance
// console.log(instanceA);
// console.log(instanceB);