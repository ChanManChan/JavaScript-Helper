//Init GitHub
const github=new GitHub;
//Init UI
const ui=new UI;

//Seatch input
const searchUser=document.getElementById('searchUser');
//Seatch input event listener
searchUser.addEventListener('keyup',(e)=>{
  //Get input text
  const userText=e.target.value;
  if(userText!==''){
    //Make http call
    github.getUser(userText)
          .then(data=>{
            console.log(data);
            if(data.profileData.message==='Not Found'){
              //Show alert
              ui.showAlert('User not found','alert alert-danger mt-2');
            }else{
              //Show profile
              ui.showProfile(data.profileData);
              ui.showRepos(data.reposData);
            }
          });
  }else{
    //Clear profile
    ui.clearProfile();
  }
});