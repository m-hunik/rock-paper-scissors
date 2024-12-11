function getHumanChoice() {

    let result = prompt("Rock, paper or scissors?");
    
    if (result == "rock") {
        return result;
    } else if (result == "paper") {
        return result;
    } else if (result == "scissors") {
        return result;
    } else {
        return "Only r, p or s!"
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

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice(3);

    console.log(`You chose:  ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice == computerChoice) {
        console.log("Draw!")
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }

}

playRound();

// let humanScore = 0;
// let computerScore = 0;