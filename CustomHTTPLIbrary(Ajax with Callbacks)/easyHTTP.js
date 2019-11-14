//ES5 Ajax library
function easyHTTP(){
  this.http=new XMLHttpRequest();
}
//Make and HTTP GET Request
easyHTTP.prototype.get=function(url,callback){
  this.http.open('GET',url,true);

  let self=this; //<--we can capture 'this' in another scope
  this.http.onload=function(){
    if(self.http.status===200){ //<--undefined because we are inside a function and when we are inside a function the 'this' Keyword pertains to that function (in a different scope)
      //console.log(this.http.responseText); //<--to fix this in ES5 without using arrow function is given above the onload method
      //console.log(self.http.responseText);
      //return self.http.responseText; //<--undefined ! therefore use callback functions
      callback(null,self.http.responseText);
    }else{
      callback('Error: '+self.http.status);
    }
  }
  this.http.send();
}
//Make and HTTP POST Request
easyHTTP.prototype.post=function(url,data,callback){
  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  let self=this;
  this.http.onload=function(){
    callback(null,self.http.responseText);
  }
  this.http.send(JSON.stringify(data));//<--a regular javascript object has to be converted to JSON string
}
//Make and HTTP PUT Request (update a certain post)
easyHTTP.prototype.put=function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  let self=this;
  this.http.onload=function(){
    callback(null,self.http.responseText);
  }
  this.http.send(JSON.stringify(data));//<--a regular javascript object has to be converted to JSON string
}
//Make and HTTP DELETE Request
easyHTTP.prototype.delete=function(url,callback){
  this.http.open('DELETE',url,true);

  let self=this; //<--we can capture 'this' in another scope
  this.http.onload=function(){
    if(self.http.status===200){ //<--undefined because we are inside a function and when we are inside a function the 'this' Keyword pertains to that function (in a different scope)
      //console.log(this.http.responseText); //<--to fix this in ES5 without using arrow function is given above the onload method
      //console.log(self.http.responseText);
      //return self.http.responseText; //<--undefined ! therefore use callback functions
      callback(null,'Post Deleted!'); //response is going to be an empty object because we are deleting the post and its not going to return a post it deleted
    }else{
      callback('Error: '+self.http.status);
    }
  }
  this.http.send();
}