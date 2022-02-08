let maxRound = 4;
let playerScore = 0;
let computerScore = 0;
let roundNum = 0;
let playerChoice; 
let computerChoice;
let buttons = document.querySelectorAll(".button");

// for each button, it listens for a click and sets the 
// button id as the playerChoice
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // console.log(button.id);
    // alert(button.id);
    // const rock = document.querySelector('#rock');
    
    playerChoice = button.id;
    playRound(playerChoice, computerChoice);
  });
});

// computer randomly selects from an array and returns the value
function computerSelection() {
  const array = ['rock', 'paper', 'scissors'];
  let move = array[Math.floor(Math.random() * array.length)];
  return move;
}



// game decides winner based on computers choice
function playRound(playerChoice, computerChoice) {
  computerChoice = computerSelection();
  console.log(playerChoice);
  console.log(computerChoice);
  
  if (playerChoice === computerChoice) {
    maxRound++;
    roundNum++;
    console.log(playerScore);
    console.log(computerScore);
    console.log('tie');
    return 'tie';
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      roundNum++;
      console.log(playerScore);
  console.log(computerScore);
      console.log('lose');
      return 'lose';
    } else if (computerChoice === 'scissors') {
      playerScore++;
      roundNum++;
      console.log(playerScore);
  console.log(computerScore);
      console.log('win');
      return 'win';  
    }
  }  else if (playerChoice ==='paper') {
    if (computerChoice ==='rock') {
      playerScore++;
      roundNum++;
      console.log(playerScore);
  console.log(computerScore);
      console.log('win');
      return 'win';
    } else if (computerChoice === 'scissors') {
      computerScore++;
      roundNum++;
      console.log(playerScore);
  console.log(computerScore);
      console.log('lose');
      return 'lose';
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'paper') {
      playerScore++;
      roundNum++;
      console.log(playerScore);
  console.log(computerScore);
      console.log('win');
      return 'win';
    } else if (computerChoice === 'rock') {
      computerScore++;
      roundNum++;
      console.log(playerScore);
  console.log(computerScore);
      console.log('lose');
      return 'lose';
    }
  } else {
    maxRound++;
    roundNum++;
    return 'Players move is not valid';
  };
  endGame(playerScore, computerScore);

};


// reveals winner based on score at the end of the last round
function endGame(playerScore, computerScore) {

if (roundNum === 5) {
  if (computerScore > playerScore) {
    return 'Computer Wins';
  } else if (playerScore > computerScore) {
    return 'Player Wins';
  } else {
    return "It's a tie!";
  };
} else {
  return 'Keep Playing!';
};
};

   


    // const rock = document.querySelector('#rock');


    // rock.addEventListener('click', () => {
    //   let playerSelection = rock.lastChild.toLowerCase();
      
    //   playRound(playerSelection, computerChoice);
    // });

  // }

  


  //}
