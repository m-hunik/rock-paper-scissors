function getComputerChoice (max) {
    let random = Math.floor(Math.random() * max);

    if (random == 1) {
        return "rock";
    } else if (random == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice(3));

