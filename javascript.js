function getComputerChoice() {
    let choices = {
        0: "rock",
        1: "paper",
        2: "scissors"
    }
    return choices[Math.floor(3 * Math.random())];
}

function getUserChoice() {
    let validInput = false;
    let choice = "";
    let input = "";
    while (!validInput) {
        input = prompt("Choose rock, paper, or scissors. ");
        choice = input ? input.toLowerCase() : "invalid";
        if (choice && ["rock", "paper", "scissors"].includes(choice)) {
            validInput = true;
            break;
        } else {
            alert("Invalid input. Please enter rock, paper, or scissors.")
        }
    }
    return choice;
}

function capitalize(str) {
    let first = str.at(0);
    return first.toUpperCase() + str.slice(1);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let cases = {
        "paperrock": "win",
        "paperscissors": "lose",
        "paperpaper": "tie",
        "rockrock": "tie",
        "rockpaper": "lose",
        "rockscissors": "win",
        "scissorsrock": "lose",
        "scissorsscissors": "tie",
        "scissorspaper": "win"
    }
    let result = cases[humanChoice + computerChoice]

    if (result === "win") {
        humanScore++;
    }

    if (result === "lose") {
        computerScore++;
    }

    return (result === "tie") ? `You tied!\n\nThe computer chose ${computerChoice}.` : `You ${result}!\n\nThe computer chose ${computerChoice}.`;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        alert(playRound(getUserChoice(), getComputerChoice()));
    }
    let result = (humanScore === computerScore) ? "tied" : (humanScore > computerScore) ? "win" : "lose";
    alert(`You ${result}!\n\nFinal score:\nYou: ${humanScore}\nComputer: ${computerScore}`)
}

playGame();
