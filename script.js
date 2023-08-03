function getComputerChoice() {
    let num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // console.log(num);

    switch(num) {
        case 1:
            return "ROCK";
            break;
        
        case 2:
            return "PAPER";
            break;

        case 3:
            return "SCISSORS";
            break;
    }
}

console.log("CPU:" + getComputerChoice())

function playRound(playerSelection, computerSelection) {

    playerSelectionUpper = playerSelection.toUpperCase();
    console.log("PLAYER:" + playerSelectionUpper);

    if(playerSelectionUpper == "ROCK" && computerSelection == "ROCK"){
        return "Draw";
    }
    else if(playerSelectionUpper == "ROCK" && computerSelection == "PAPER"){
        return "CPU Wins: Paper beats Rock";
    }
    else if(playerSelectionUpper == "ROCK" && computerSelection == "SCISSORS"){
        return "Player wins: Rock beats scissors";
    }
    else if(playerSelectionUpper == "PAPER" && computerSelection == "ROCK"){
        return "Player wins: Paper beats Rock";
    }
    else if(playerSelectionUpper == "PAPER" && computerSelection == "PAPER"){
        return "Draw";
    }
    else if(playerSelectionUpper == "PAPER" && computerSelection == "SCISSORS"){
        return "CPU Wins: Scissors beats Paper";
    }
    else if(playerSelectionUpper == "SCISSORS" && computerSelection == "ROCK"){
        return "CPU wins: Rock beats scissors";
    }
    else if(playerSelectionUpper == "SCISSORS" && computerSelection == "PAPER"){
        return "Player Wins: Scissors beats Paper";
    }
    else if(playerSelectionUpper == "SCISSORS" && computerSelection == "SCISSORS"){
        return "Draw";
    }
}


const playerSelection = prompt("Enter your move:");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
