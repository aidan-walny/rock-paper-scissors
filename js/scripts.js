// Global variables to keep score.
let humanScore = 0
let computerScore = 0

// Function to play a single round.
function playRound(humanChoice, computerChoice) {
    // Making human string lowercase.
    let accurate_humanChoice = humanChoice.toLowerCase();
    // console.log(accurate_humanChoice)
    console.log(accurate_humanChoice, computerChoice)

    // Game logic
    if (accurate_humanChoice == 'rock' & computerChoice == 'rock' || accurate_humanChoice == 'paper' & computerChoice == 'paper' || accurate_humanChoice == 'scissors' & computerChoice == 'scissors') {
        return `Draw, you both selected ${accurate_humanChoice}.`;
    }
    else if (accurate_humanChoice == 'rock' & computerChoice == 'scissors' || accurate_humanChoice == 'paper' & computerChoice == 'rock' || accurate_humanChoice == 'scissors' & computerChoice == 'paper') {
        return `You win, ${accurate_humanChoice} beats ${computerChoice}!`;
    }
    else if (accurate_humanChoice == 'rock' & computerChoice == 'paper' || accurate_humanChoice == 'paper' & computerChoice == 'scissors' || accurate_humanChoice == 'scissors' & computerChoice == 'rock') {
        return `You lose, ${computerChoice} beats ${accurate_humanChoice}!`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

outcome = playRound(humanSelection, computerSelection);
console.log(outcome)

// Function to obtain a computer choice in the game using the Math function.
function getComputerChoice() {
    let computer_choice = Math.floor(Math.random() * 3);
    // console.log(computer_choice)

    if (computer_choice == 0) {
        let computer_move = "rock";
        // console.log(computer_move)
        return computer_move;
    }
    else if (computer_choice == 1) {
        let computer_move = "paper";
        // console.log(computer_move)
        return computer_move;
    }
    else if (computer_choice == 2) {
        let computer_move = "scissors";
        // console.log(computer_move)
        return computer_move;
    }
}
// computerSelection = getComputerChoice();
// console.log(computerSelection)

// Function to obtain a human choice with a prompt.
function getHumanChoice() {
    let human_choice = prompt("Your choice:");
    // Testing the user input.
    // console.log(human_choice)
    return human_choice;
}
// humanSelection = getHumanChoice();
// console.log(humanSelection)