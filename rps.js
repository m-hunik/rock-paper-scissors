// function getHumanChoice() {
//   let result = prompt("Rock, paper or scissors?");
//   let cResult = result.toLowerCase();

//   if (cResult === "rock" || cResult === "paper" || cResult === "scissors") {
//     return cResult;
//   } else {
//     console.log("Only r, p or s!");
//     return "rock";
//   }
// }

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
const resultDiv = document.querySelector("#results");
let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. Draw!`
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. You win!`
  } else {
    computerScore++;
    resultMessage = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. You lose!`
  }
  resultDiv.innerHTML = `<p>${resultMessage}</p>
  <p>Score - You: ${humanScore} | Computer: ${computerScore}</p>`;

  checkWinner();
}

function checkWinner() {
const resultDiv = document.querySelector("#results");
  if (humanScore === 5) {
    resultDiv.innerHTML += `<p>You win the game! Refresh to play again.</p>`
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.innerHTML += `<p>Computer wins the game! Refresh to play again.</p>`
    disableButtons();
    }
}

function disableButtons() {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissors").disabled = true;
}

/*function playGame(rounds = 5) {

    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < rounds; i++) {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(3);
        let result = playRound(humanChoice, computerChoice);

        if (result === "human") {humanScore++;}
        else if (result === "computer") {computerScore++;}

        console.log("Human: " + humanScore + " " + "Computer: " + computerScore);
    }
}

playGame();*/

// Targets particular nodes with selectors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Attaches listeners to the nodes
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
