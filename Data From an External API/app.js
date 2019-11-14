//example of how to use AJAX to work with an external API
document.querySelector('.get-jokes').addEventListener('click',getJokes);


function getJokes(e){
  const number=document.querySelector('input[type="number"]').value;
  console.log(number);
  const xhr=new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
  xhr.onload=function(){
    if(this.status===200){
      //const response=this.responseText;
      //console.log(response); //<--this is a JSON string but we should turn it into an object so that we can loop through
      const response=JSON.parse(this.responseText);
      console.log(response); //<--now its an actual object
      let output='';
      if(response.type==='success'){
        response.value.forEach(function(joke){
          output+=`<li>${joke.joke}</li>`;
        });
      }else{
        output+='<li>Something went wrong</li>'
      }
      document.querySelector('.jokes').innerHTML=output;
    }
  }
  
  xhr.send();
  e.preventDefault();
}