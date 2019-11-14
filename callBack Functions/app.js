const posts=[ //<-- mimic our server
{title:'Post one', body:'This is post one'},
{title:'Post two',body:'This is post two'}
];
// function createPost(post){
//   setTimeout(function(){
//     posts.push(post);
//   },2000); //<--mimic the server response time 
// }

// function getPosts(){ //<--get our posts and display it in our browser
//   setTimeout(function(){
//     let output='';
//     posts.forEach(function(post){
//       output+=`<li>${post.title}</li>`;
//     });
//     document.body.innerHTML=output;
//   },1000);
// }
//createPost({title:'Post three',body:'This is post three'});
//getPosts(); //<-- was not able to fetch Post three due to the simulated server delay

function createPost(post,callback){
  setTimeout(function(){
    posts.push(post);
    callback();//<- within the two seconds getPosts() is called as it is passed as callback function
  },2000); //<--mimic the server response time 
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
createPost({title:'Post three',body:'This is post three'},getPosts); //<--all the three posts are fetched here
