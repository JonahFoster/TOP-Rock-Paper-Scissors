function getComputerChoice() {
    // Define words variable
    let words = ["rock", "paper", "scissors"];
    // Randomly select a word
    let n = Math.floor(Math.random() * words.length);

    return words[n];

}

function getPlayerChoice() {
    var input = prompt('Enter Rock, Paper, or Scissors:').toLowerCase();
    return input;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer Wins! Paper beats Rock."
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player Wins! Rock beats Scisors."
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer Wins! Scissors beats Paper."
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player Wins! Paper beats Rock."
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer Wins! Scissors beats Rock."
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player Wins! Scissors beats Paper."
    }
}

function game() {
    let playerScore = 0, computerScore = 0;

    for (i = 0; i < 5; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        if (result.includes("Player Wins")) {
            playerScore++
            console.log("You win the round.")
        }
        else if (result.includes("tie")){
            console.log("It is a tie.")
        }
        else {
            computerScore++
            console.log("You lost the round.")
        }
    }
    console.log("Final: Player - " + playerScore + " Computer - " + computerScore);
}

game();