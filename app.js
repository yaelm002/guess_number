let min = 1,
    max= 10,
    winningNum = randomNum(min,max),
    guessLeft = 2;


    console.log(winningNum);
//DOM


const game = document.querySelector(".game"),
      minNumber= document.querySelector(".min-num"),
      maxNumber= document.querySelector(".max-num"),
      guessInput= document.querySelector("#guess-input"),
      guessBtn = document.querySelector("#guess-btn"),
      message = document.querySelector(".message");


 //min max initializieren     
minNumber.textContent = min;
maxNumber.textContent = max;

game.addEventListener("mousedown", function(e){
  if(e.target.className==="play-again"){
    window.location.reload();
  }
})

guessBtn.addEventListener("click", function(){
    let guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess< min || guess || max){
      setMessage(` Please enter a number between ${min} and ${max}`, "red");
     // gameOver(false, ` Please enter a number between ${min} and ${max}` );
    }
    if (guess === winningNum){
      //setMessage(`${guess} is Correct ! you Win `, "green");

      gameOver(true, `${guess} is Correct ! you Win `);
   
    }else{
      guessLeft--;
      if (guessLeft === 0){
          gameOver(false , `you have no more try , the right number was ${winningNum}`);
          //guessBtn.disabled= true;
      }else {
          setMessage( `you still have ${guessLeft} try another time`,"red");
      }

      guessInput.value = '';

    }
})


function setMessage( msg,color ){
  message.textContent = msg;
  message.style.color= color;
  guessInput.style.borderColor= color;
}

function gameOver( won ,msg){

  let color ;

  won === true ? color ="green" : color = "red";

    guessInput.disabled= true;
    message.style.color= color;
    guessInput.style.borderColor= color;

      setMessage(msg);


    guessBtn.value = "play again";
    guessBtn.className += "play-again";

}

function randomNum(min,max){
   return Math.floor(Math.random()*(max-min+1) +min);
}