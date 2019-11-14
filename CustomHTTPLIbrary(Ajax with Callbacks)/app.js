const http=new easyHTTP;

//Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts',function(error,response){ //now we are doing it asynchronously with the callbacks
// if(error){
//   console.log(error);
// }else{
//   console.log(response);
// }
// });

//Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(error,response){ //now we are doing it asynchronously with the callbacks
// if(error){
//   console.log(error);
// }else{
//   console.log(response); //<--single post of id==1
// }
// });

//Create data
const data={
  title:'Custom Post',
  body:'This is a custom post'
};
//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });

//Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
  if(err){
    console.log(err);
  }else{
    console.log(post);
  }
});

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(error,response){ //now we are doing it asynchronously with the callbacks
if(error){
  console.log(error);
}else{
  console.log(response);
}
});