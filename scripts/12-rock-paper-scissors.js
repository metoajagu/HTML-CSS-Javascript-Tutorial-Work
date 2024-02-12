
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;
// const autoPlay = () => {

// };
function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.auto-play-button')
    .innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.auto-play-button')
      .innerHTML = 'Auto Play';
  }
}

// Onclick alternative code method
document.querySelector('.js-autoplay-button')
  .addEventListener('click', () => {
    autoPlay();
  })

//This Code below does the same things as just adding onclick = playGame()  
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock')
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
  playGame('scissors');
}); 

//  Adding eventListener with Keydown function, being able to play the game using keyboard 'r' = rock, 'p' = paper and 's' = scissors

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    playGame('rock');
  } else if (event.key === 'p'){
    playGame('paper');
  } else if (event.key === 's'){
    playGame('scissors');
  } else if (event.key === 'a'){
    autoPlay();
  } else if (event.key === 'Enter'){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScoreElement();
  }
  console.log(event.key);
})

function playGame(playerMove){
  const computerMove = pickComputerMove();

  // Initializes a result variable for the result of the game.
  let result = '';

  // Second conditional is used to compare the computer's move to the move you chose, so since this is for the Rock button it loses for paper, wins for scissors and ties for Rock.
  if (playerMove === 'scissors'){
    if (computerMove === 'rock') {
    result = 'You Lose';
    } else if (computerMove === 'paper'){
      result = 'You Win';
    }else if (computerMove === 'Tie'){
    result = 'You Win';
    }

  } else if (playerMove === 'paper'){
    if (computerMove === 'rock') {
      result = 'You Win';
    } else if (computerMove === 'paper'){
      result = 'Tie';
    }else if (computerMove === 'scissors'){
      result = 'You Lose';
    }
    
  } else if (playerMove === 'rock'){
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper'){
      result = 'You Lose';
    } else if (computerMove === 'scissors'){
      result = 'You Win';
    }
  }

  if (result === 'You Win'){
    score.wins += 1;
  } else if (result === 'You Lose'){
    score.losses += 1;
  } else if(result === "Tie"){
    score.ties += 1;
  }

  // Local Storage Object: You can save the score of the game using localStorage Object
  // When you update the score you can use the setItem method found in the localStorage object to save an item [the score object] in local storge but you have to make sure it is a string so you can use the stringify method found in the JSON object to convert the score object to a string. Then outside the scope of this function you can update and keep the score object using the [getItem] method in localStorage and the parse() method in JSON to return the string version of score back into an object
  localStorage.setItem('score', JSON.stringify(score));


  updateScoreElement();

  // Inserted the images for each of the moves and subsitituted the player's move the using string interpolation in JS
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = ` YOU: 
  <img class= "move-icon" src = "/images/${playerMove}-emoji.png">
  <img class= "move-icon" src = "images/${computerMove}-emoji.png"> COMPUTER`;
}

// It was simpler to make the score update into a function and call it wherever you want to update the score directly into the html document
function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Onclick alternative code technique for Reset button:
document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score')
    updateScoreElement();    
  })


function pickComputerMove(){
  // Determine a random number that will symbolize the computers move using Math.random()
  const randomNumber = Math.random();
  // Initialize a variable that will hold the computer's move
  let computerMove = '';
  // Using a conditional compare the random number to the 3 parts from 0 - 1 Ex. 0 - 1/3, 1/3 - 2/3 and 2/3 to 1. When the conditonal is passed the computerMove variable is updated.
  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove ='rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove ='scissors';
  } else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove ='paper';
  }

  return computerMove;
}