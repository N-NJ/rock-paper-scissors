let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}
function getHumanChoice() {
  let keepGoing = true;
  let choice = prompt("Please Write your choice: rock, paper, scissors");
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
console.log(getHumanChoice());
