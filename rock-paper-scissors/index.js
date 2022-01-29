function game() {
    let playerScore = 0
    let computerScore = 0

    
    // player inputs their move
    function playerSelection() {
        let playerInput = prompt('Please pick Rock, Paper, or Scissors');
        let playerMove = playerInput.toLowerCase();
        return playerMove;
    }
    let playerChoice = playerSelection();
    console.log(playerChoice);

    // computer randomly selects from an array and returns the value
    function computerPlay() {
        const array = ['rock', 'paper', 'scissors'];
        let move = array[Math.floor(Math.random() * array.length)];
        return move;
    }
    let computerChoice = computerPlay();
    console.log(computerChoice);
    
    
    // game decides winner based on computers choice
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'tie'
        } else if (playerChoice == 'rock') {
            if (computerChoice == 'paper') {
                return 'lose';
            } else if (computerChoice == 'scissors') {
                return 'win';
            }
        }  else if (playerChoice == 'paper') {
            if (computerChoice == 'rock') {
                return 'win';
            } else if (computerChoice == 'scissors') {
                return 'lose';
            }
        } else if (playerChoice == 'scissors') {
            if (computerChoice == 'paper') {
                return 'win';
            } else if (computerChoice == 'rock') {
                return 'lose';
            }
        } else {
            return 'Players move is not valid';
        }
    }
    
    
    
    // console.log(playerSelection); // console.logging players selection of rock
    console.log(playRound(playerChoice, computerChoice));
    
}

game();