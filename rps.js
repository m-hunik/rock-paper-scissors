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

function playGame() {

    let roundCounter = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice(3);
    
        let humanScore = 0;
        let computerScore = 0;

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
            humanScore += 1;
        } else {
            console.log("You lose!");
            computerScore += 1;
        }

        console.log("Human: " + humanScore + " " + "Computer: " + computerScore);
    }
    playRound();
    return roundCounter += 1;
}

let scoreKeeper = playGame();
for (let i = scoreKeeper; i < 5; i++) {
    playGame();
}

