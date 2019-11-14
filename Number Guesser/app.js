//Game values
let min=1,
max=10,
winningNum=getRandomNum(min,max),
guessesLeft=3;
//UI Elements
const gameWrapper=document.querySelector('#game'),minNum=document.querySelector('.min-num'),
            maxNum=document.querySelector('.max-num'),guessBtn=document.querySelector('#guess-btn'),
            guessInput=document.querySelector('#guess-input'),message=document.querySelector('.message');

//Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;  
//Play again event listener
gameWrapper.addEventListener('mousedown',function(e){  //<--'click' doesnt wait it automatically reloads the page as soon as clicked ! therefore use 'mousedown'
  if(e.target.className==='play-again'){
    window.location.reload();
  }
});
//Listen for guess
guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);
  //Validate
  if(isNaN(guess)||guess<min||guess>max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }else{
 //check if won
 if(guess===winningNum){
  gameOver(true,`${winningNum} is correct, YOU WIN!`);
}else{
  //Wrong Number
  guessesLeft-=1;
  if(guessesLeft===0){
      //Game Over
      gameOver(false,`Game Over ,The correct number was ${winningNum}`);
  }else{
    //Game continues
    guessInput.style.borderColor='red';
    //Clear Input
    guessInput.value='';
    //Tell user its the wrong number
    setMessage(`${guess} is not correct,${guessesLeft} guesses left`,'red');
  }
  }
  }
});
//Game Over
function gameOver(won,msg){
      let color;
      won===true?color='green':color='red';
      //Disable input
      guessInput.disabled=true;
      //Change border color
      guessInput.style.borderColor=color;
      //Set message
      setMessage(msg,color);
      //Play Again?
      guessBtn.value='Play Again';
      guessBtn.className+='play-again'; 
}      

function setMessage(msg,color){
  message.style.color = color;
  message.textContent = msg;
}

//Get Winning Number
function getRandomNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}