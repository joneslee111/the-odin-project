function game() {
    let playerScore = 0;
    let computerScore = 0;
    let maxScore = 4;

    for (i = 0; (playerScore || computerScore) <= maxScore; i++) {
    // player inputs their move
        function playerSelection() {
            let playerInput = prompt('Please pick Rock, Paper, or Scissors. First to 5 wins.');
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
                    computerScore++;
                    return 'lose';
                } else if (computerChoice == 'scissors') {
                    playerScore++;
                    return 'win';  
                }

            }  else if (playerChoice == 'paper') {
                if (computerChoice == 'rock') {
                    playerScore++;
                    return 'win';
                } else if (computerChoice == 'scissors') {
                    computerScore++;
                    return 'lose';
                }

            } else if (playerChoice == 'scissors') {
                if (computerChoice == 'paper') {
                    playerScore++;
                    return 'win';
                } else if (computerChoice == 'rock') {
                    computerScore++;
                    return 'lose';
                }
            } else {
                return 'Players move is not valid';
            }
        }
        playRound();
        console.log(playRound(playerChoice, computerChoice));


}
        console.log(playerScore);
        console.log(computerScore);
}

game();