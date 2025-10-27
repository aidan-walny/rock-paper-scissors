// Global variables to keep score.
let humanScore = 0
let computerScore = 0

// Function to play a single round.
function playRound(humanChoice, computerChoice) {

}
playRound(getComputerChoice(), getHumanChoice());

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
// computer_decision = getComputerChoice();
// console.log(computer_decision)

// Function to obtain a human choice with a prompt.
function getHumanChoice() {
    let human_choice = prompt("Your choice:");
    // Testing the user input.
    // console.log(human_choice)
    return human_choice;
}
// human_decision = getHumanChoice();
// console.log(human_decision)