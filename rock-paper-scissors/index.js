// const array = ['rock', 'paper', 'scissors'];
const playerSelection = 'rock';
// const computerPlay = 'rock';

// computer randomly selects from an array and returns the value
function computerPlay() {
    const array = ['rock', 'paper', 'scissors'];
    let move = array[Math.floor(Math.random() * array.length)];
    return move;
}


let computerSelection = computerPlay();
console.log(computerSelection);


// game decides winner based on computers choice
function playRound(playerSelection, computerSelection) {
    
    // if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'tie';
        } else if (computerSelection == 'scissors') {
            return 'win';
        } else {
            return 'lose';
        }
       

}





console.log(playerSelection); // console.logging players selection of rock

console.log(playRound(playerSelection, computerSelection));
