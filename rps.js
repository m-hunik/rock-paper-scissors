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
    
    if (random == 1) {
        return "rock";
    } else if (random == 2) {
        return "paper";
    } else {
        return "scissors";
    }

}

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice(3);
    
    console.log(humanChoice, computerChoice);
}

playRound();

// let humanScore = 0;
// let computerScore = 0;