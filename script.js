let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}
function getHumanChoice() {
  let keepGoing = true;
  let choice = prompt("Please Write your choice: rock, paper, scissors");
  if (choice === null) {
    return console.log(
      "Game Cancelled, please refresh the page to play again."
    );
  }
  while (keepGoing) {
    if (
      choice.toLowerCase() === "rock" ||
      choice.toLowerCase() === "scissors" ||
      choice.toLowerCase() === "paper"
    ) {
      keepGoing = false;
    } else {
      choice = prompt("Please enter a valid choice (rock, paper, scissors)");
    }
  }

  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;
  let n = 1;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}`);
      humanScore++;
      computerScore++;
      return humanScore, computerChoice;
    }
    switch (true) {
      case humanChoice === `rock` && computerChoice === `paper`:
      case humanChoice === `paper` && computerChoice === `scissors`:
      case humanChoice === `scissors` && computerChoice === `rock`:
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        break;
      default:
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    return humanScore, computerScore;
  }
  while (n <= 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore, computerScore);
    n++;
  }
  if (humanScore > computerScore) {
    console.log(`You win the game!`);
  } else if (computerScore > humanScore) {
    console.log(`You lose the game, better luck next time!`);
  } else {
    console.log(`The game's a tie!`);
  }
}
playGame();
let keepGoing = true;
while (keepGoing) {
  if (confirm(`Play again?`)) {
    playGame();
  } else {
    keepGoing = false;
    console.log("see you next time!");
  }
}
