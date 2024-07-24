let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}
console.log(getComputerChoice());
