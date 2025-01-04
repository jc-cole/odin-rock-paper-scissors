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
    // using object property shorthand
    return {
        result, 
        humanChoice, 
        computerChoice,
    }
}

function updateScore(resultObject) {
    if (resultObject.result === "win") {
        humanScore++;
    }

    if (resultObject.result=== "lose") {
        computerScore++;
    }
    const humanScoreDiv = document.querySelector("#human-score");
    const computerScoreDiv = document.querySelector("#computer-score");
    humanScoreDiv.textContent = `You: ${humanScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}

function updateResult(resultObject) {
    const resultDiv = document.querySelector("#results");
    resultDiv.textContent = (resultObject.result === "tie") ? 
    `You tied!\n\nThe computer chose ${resultObject.computerChoice}.` :
    `You ${resultObject.result}!\n\nThe computer chose ${resultObject.computerChoice}.`;
}

function endGame() {
    const resultDiv = document.querySelector("#results");
    const result = (humanScore === computerScore) ? "tied" : (humanScore > computerScore) ? "win" : "lose";
    const message = `You ${result}!\r\n\r\nFinal score:\r\nYou: ${humanScore}\r\nComputer: ${computerScore}`;
    resultDiv.textContent = message;
    buttons.forEach((button) => {
        button.disabled = true;
        button.style.backgroundColor = "gray";
    });
}


let humanScore = 0;
let computerScore = 0;

let rounds = 0;

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const resultObject = playRound(button.id, getComputerChoice());
        updateScore(resultObject);
        updateResult(resultObject);
        rounds++;
        if (rounds == 5) {
            endGame();
        }
    });
});

