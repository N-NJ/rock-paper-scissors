//Computer choosing based on numbers & array item for each number
let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}
const playerSelection = document.querySelector("#playerSelection");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");
const humanScoreSpan = document.createElement("span");
const computerScoreSpan = document.createElement("span");
const announce = document.createElement("p");
const finalScore = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

function getSelection(e) {
  let target = e.target.id;
  console.log(target);
  let computerChoice = getComputerChoice();
  switch (target) {
    case "rock":
      playRound("rock", computerChoice);
      break;
    case "paper":
      playRound("paper", computerChoice);
      break;
    case "scissors":
      playRound("scissors", computerChoice);
      break;
  }
}
playerSelection.addEventListener("click", getSelection);

result.append(humanScoreSpan, `-`, computerScoreSpan);
result.appendChild(announce);
function playRound(humanChoice, computerChoice) {
  //checking for tie
  if (humanChoice === computerChoice) {
    announce.textContent = `It's a tie! You both chose ${humanChoice}`;
    humanScore++;
    computerScore++;
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    return humanScore, computerChoice;
  }
  //switch case checking for all lose conditions if not valid => it's a win.
  switch (true) {
    case humanChoice === `rock` && computerChoice === `paper`:
    case humanChoice === `paper` && computerChoice === `scissors`:
    case humanChoice === `scissors` && computerChoice === `rock`:
      computerScore++;
      announce.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
      humanScoreSpan.textContent = humanScore;
      computerScoreSpan.textContent = computerScore;
      break;
    //default case of winning
    default:
      humanScore++;
      announce.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
      humanScoreSpan.textContent = humanScore;
      computerScoreSpan.textContent = computerScore;
  }
  return humanScore, computerScore;
}
