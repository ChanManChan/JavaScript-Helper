const posts=[ //<-- mimic our server
  {title:'Post one', body:'This is post one'},
  {title:'Post two',body:'This is post two'}
  ];
  function createPost(post){
    return new Promise(function (resolve,reject){
      //resolve:- when we are done with what we are doing
      //reject:-if some kind of error that we want to throw
      setTimeout(function(){
        posts.push(post);
        //mimic error
        const error=false;
        if(!error){
          resolve();
        }else{
          reject('Error: Something went wrong!');
        }
      },2000); //<--mimic the server response time 
    });
  }
  
  function getPosts(){ //<--get our posts and display it in our browser
    setTimeout(function(){
      let output='';
      posts.forEach(function(post){
        output+=`<li>${post.title}</li>`;
      });
      document.body.innerHTML=output;
    },1000);
  }
  createPost({title:'Post three',body:'This is post three'}).then(getPosts).catch(function(err){
    console.log(err);
  }); //<--alternatives to callback
  
  //The FetchAPI is a new standard to make HTTP request other than Ajax and XHR and the Fetch API actually returns a promise