//Computer choosing based on numbers & array item for each number
let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}
// Human choice checking for null and returning choice as lowercase
function getHumanChoice() {
  let keepGoing = true;
  let choice = prompt("Please Write your choice: rock, paper, scissors");
  if (choice === null) {
    return choice;
  }
  while (keepGoing) {
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "scissors" || choice === "paper") {
      keepGoing = false;
    } else {
      choice = prompt("Please enter a valid choice (rock, paper, scissors)");
    }
  }

  return choice.toLowerCase();
}
//Game logic has round function in it, break loop if player cancelled a round
function playGame() {
  let humanScore = 0,
    computerScore = 0;
  let n = 1;
  function playRound(humanChoice, computerChoice) {
    //checking for tie
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}`);
      humanScore++;
      computerScore++;
      return humanScore, computerChoice;
    }
    //switch case checking for all lose conditions if not valid => it's a win.
    switch (true) {
      case humanChoice === `rock` && computerChoice === `paper`:
      case humanChoice === `paper` && computerChoice === `scissors`:
      case humanChoice === `scissors` && computerChoice === `rock`:
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        break;
      //default case of winning
      default:
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    return humanScore, computerScore;
  }
  //looping for 5 rounds
  while (n <= 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    //checking if round cancelled, cancel game by setting n > 5, set humanScore to null to avoid game tie condition
    if (humanChoice === null) {
      console.log("Game Cancelled, please refresh the page to play again.");
      n = 6;
      humanScore = null;
    } else {
      playRound(humanChoice, computerChoice);
      console.log(humanScore, computerScore);
      n++;
    }
  }
  //announcing final score by comparing humanScore to computerScore
  if (humanScore > computerScore) {
    console.log(`You win the game!`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game, better luck next time!`);
  } else if (humanScore === computerScore) {
    console.log(`The game's a tie!`);
  }
}
playGame();
//Loop to restart game based on user choice to confirm.
let keepGoing = true;
while (keepGoing) {
  if (confirm(`Play again?`)) {
    playGame();
  } else {
    keepGoing = false;
    console.log("see you next time!");
  }
}
