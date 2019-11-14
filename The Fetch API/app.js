//Move on from Ajax and XHR to Fetch API which is a newer standard to deal with HTTP requests

document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getExternal);

//Get local text file data
function getText(){
  fetch('test.txt')
        .then(res=> res.text())
        .then(data=>{
          console.log(data);
          document.querySelector('.output').innerHTML=data;
        })
        .catch(err=>console.log(err)); //<--fetch returns promises
}
//Get local json data
function getJSON(){
  fetch('posts.json')
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          let output='';
          data.forEach(post=>{
            output+=`<li>${post.title}</li>`;
          });
          document.querySelector('.output').innerHTML=output;
        })
        .catch(err=>console.log(err));
}

//Get from external API
function getExternal(){
  fetch('https://api.github.com/users')
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          let output='';
          data.forEach(user=>{
            output+=`<li>${user.login}</li>`;
          });
          document.querySelector('.output').innerHTML=output;
        })
        .catch(err=>console.log(err));
}