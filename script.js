let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//function to randomly generate numbers to be assigned as Target Number
const generateTarget = () => {
  return Math.floor(Math.random() *10);
}

const compareGuesses = (currentHumanGuess, computerGuess) => {
  if ( currentHumanGuess <=  computerGuess) {
    return true;
  }
  else { return false;}
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++
  }
  if (winner === 'computer') {
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++
}
