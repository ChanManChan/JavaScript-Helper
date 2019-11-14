document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  //Create an XHR Object
  const xhr=new XMLHttpRequest();

  //OPEN //<--specify the type of request we want to make and the URL (or the file name) we want to make it to
  xhr.open('GET','data.txt',true);
  console.log('READYSTATE',xhr.readyState);  //<--@ this point readyState is '1' ie. server connection is established

  //Optional -Used for spinners/loader //<--if you want to display something while its actually loading or fetching the data use
  xhr.onprogress=function(){
    console.log('READYSTATE',xhr.readyState);  //<--displays step 3 on readyState Values
  }



  xhr.onload=function(){  //<--at this stage we are already at step 4 in the readyState Values
    console.log('READYSTATE',xhr.readyState); //<--we are already @ readyState 4
    if(this.status===200){
      console.log(this.responseText); //<-- contents of the data.txt file
      document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`; //<--no page refresh required!
    }
  }

  //old methods
  // xhr.onreadystatechange=function(){
  //   console.log('READYSTATE',xhr.readyState); //<-- when onreadystatechange runs it goes through every step in readyState values.
  //   if(this.status===200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }
  xhr.onerror=function(){
    console.log('Request error...');
  }
  xhr.send();

  //HTTP Statuses
  //200: "OK"
  //403: "Forbidden"
  //404: "Not Found"

  //readyState Values
  //0: request not initialized
  //1: server connection established
  //2: request received
  //3: processing request
  //4: request finished and response is ready

}