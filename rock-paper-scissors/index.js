function game() {
    let maxRound = 4
    let playerScore = 0;
    let computerScore = 0;

    for (let roundNum = 0; roundNum <= maxRound; roundNum++) {
        
        // player inputs their move
        function playerSelection() {
            let playerInput = prompt('Please pick Rock, Paper, or Scissors. Best of 5 rounds.');
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
                maxRound++
                return 'tie'
            } else if (playerChoice === 'rock') {
                if (computerChoice === 'paper') {
                    computerScore++;
                    return 'lose';
                } else if (computerChoice === 'scissors') {
                    playerScore++;
                    return 'win';  
                }

            }  else if (playerChoice ==='paper') {
                if (computerChoice ==='rock') {
                    playerScore++;
                    return 'win';
                } else if (computerChoice === 'scissors') {
                    computerScore++;
                    return 'lose';
                }

            } else if (playerChoice === 'scissors') {
                if (computerChoice === 'paper') {
                    playerScore++;
                    return 'win';
                } else if (computerChoice === 'rock') {
                    computerScore++;
                    return 'lose';
                }
            } else {
                maxRound++;
                return 'Players move is not valid';
            }
        }
        console.log(playRound(playerChoice, computerChoice));
        console.log(playerScore);
        console.log(computerScore);

        // reveals winner based on score at the end of the last round
        function endGame(playerScore, computerScore) {
            if (roundNum === maxRound) {
                if (computerScore > playerScore) {
                    return 'Computer Wins'
                } else if (playerScore > computerScore) {
                    return 'Player Wins'
                } else {
                    return "It's a tie!"
                }
            } else {
                return 'Keep Playing!'
            }
        }
        console.log(endGame(playerScore, computerScore));
    }
}
game();