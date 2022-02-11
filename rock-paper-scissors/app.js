let playerScore = 0;
let computerScore = 0;
let roundDecision = ''
let computerChoice;
let computerChoiceStr = '';
let buttons = document.querySelectorAll(".btn");
let playerInput = prompt('What is your name?');
let playerNameLower = playerInput.toLowerCase()
let playerName = playerNameLower.charAt(0).toUpperCase() + playerNameLower.slice(1);

const includeName = document.querySelector('.player-name');
includeName.textContent = `${playerName} vs Computer`;


console.log(playerName);
// for each button, it listens for a click and sets the 
// button id as the playerChoice
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    playRound(playerChoice, computerChoice);
  });
});

// computer randomly selects from an array and returns the value
function computerSelection() {
  const array = ['rock', 'paper', 'scissors'];
  let move = array[Math.floor(Math.random() * array.length)];
  return move;
};

// adds a container that reveals the outcome of the round
function roundOutcome() {
  const roundContainer = document.querySelector('.round-container');
  roundContainer.textContent = `That's a ${roundDecision}. Computer chose ${computerChoiceStr}`;
  roundContainer.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out", });
};

// game decides winner based on computers choice
function playRound(playerChoice, computerChoice) {
  computerChoice = computerSelection();
  computerChoiceStr = computerChoice;
  console.log(playerChoice);
  console.log(computerChoice);
  
  if (playerChoice === computerChoice) {
    console.log(playerScore);
    console.log(computerScore);
    console.log('tie');
    scoreCard();
    roundDecision = 'tie';
    roundOutcome();
    endGame();
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      scoreCard();
      console.log(playerScore);
  console.log(computerScore);
      console.log('lose');
      roundDecision = 'loss';
      roundOutcome();
      endGame();
    } else if (computerChoice === 'scissors') {
      playerScore++;
      scoreCard();
      console.log(playerScore);
  console.log(computerScore);
      console.log('win');
      roundDecision = 'win';
      roundOutcome();
      endGame();
    };
  }  else if (playerChoice ==='paper') {
    if (computerChoice ==='rock') {
      playerScore++;
      scoreCard();
      console.log(playerScore);
  console.log(computerScore);
      console.log('win');
      roundDecision = 'win';
      roundOutcome();
      endGame();
    } else if (computerChoice === 'scissors') {
      computerScore++;
      scoreCard();
      console.log(playerScore);
  console.log(computerScore);
      console.log('lose');
      roundDecision = 'loss';
      roundOutcome();
      endGame();
    };
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'paper') {
      playerScore++;
      scoreCard();
      console.log(playerScore);
  console.log(computerScore);
      console.log('win');
      roundDecision = 'win';
      roundOutcome();
      endGame();
    } else if (computerChoice === 'rock') {
      computerScore++;
      scoreCard();
      console.log(playerScore);
  console.log(computerScore);
      console.log('lose');
      roundDecision = 'loss';
      roundOutcome();
      endGame();
    };
  };
  endGame(playerScore, computerScore);
  resetGame();
};

// updates the text of the score-counter div to the current score
function scoreCard() {
  let scoreCounter = document.querySelector('.score-counter');
  scoreCounter.textContent = `${playerScore} - ${computerScore}`;
};

// reveals winner. First to 5
function endGame(playerScore, computerScore) {
  const gameOutcome = document.querySelector('.round-container');
  gameOutcome.animate([
    { opacity: 0 }, 
    { opacity: 1 }
    ],
    { duration: 1000, fill: "forwards", iterations: 1, delay: 0, easing: "ease-out"}
    );
  if (computerScore === 5) {
    console.log('Oh no! Computer wins!');
    gameOutcome.textContent = 'Oh no! Computer wins!';
    gameOutcome.setAttribute('style', 'font-size: 50px; font-weight: bold');
  } else if (playerScore === 5) {
    console.log('Player wins!');
    gameOutcome.textContent = `${playerName} wins!`;
    gameOutcome.setAttribute('style', 'font-size: 50px; font-weight: bold');
  };  
};

// a function that removes the move chocies anbd replaces with a reset button
// that refreshes the page to start a new game
function resetGame() {
  if (playerScore === 5 || computerScore === 5) {
    const getBtnsContainer = document.querySelector('.btns-container');
    removeChildNodes(getBtnsContainer);
    const resetGame = document.createElement('button');
    resetGame.classList.add('btn')
    resetGame.textContent = 'Reset';
    getBtnsContainer.appendChild(resetGame);
    
    const reset = document.querySelector('.btn');
    reset.addEventListener('click', () => {
      window.location.reload();
    });
  }; 
};

// a function that removes all chld nodes of a selected parent
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}