function getHumanChoice() {
  let result = prompt("Rock, paper or scissors?");
  let cResult = result.toLowerCase();

  if (cResult === "rock" || cResult === "paper" || cResult === "scissors") {
    return cResult;
  } else {
    console.log("Only r, p or s!");
    return "rock";
  }
}

function getComputerChoice(max) {
  let random = Math.floor(Math.random() * max);

  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose:  ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice == computerChoice) {
    console.log("Draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    return "human";
  } else {
    console.log("You lose!");
    return "computer";
  }
}

// function playGame(rounds = 5) {

//     let humanScore = 0;
//     let computerScore = 0;

//     for(let i = 0; i < rounds; i++) {

//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice(3);
//         let result = playRound(humanChoice, computerChoice);

//         if (result === "human") {humanScore++;}
//         else if (result === "computer") {computerScore++;}

//         console.log("Human: " + humanScore + " " + "Computer: " + computerScore);
//     }
// }

// playGame();

const rock = document.querySelector("button");
const paper = document.querySelector("button");
const scissors = document.querySelector("button");

button.addEventListener("click", playRound);
