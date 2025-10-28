// Function to play five rounds.
function playGame() {

    // Local variables to keep score.
    let humanScore = 0
    let computerScore = 0

    // Local variable to track games played
    let gamesPlayed = 1

    // While loop to play give rounds.
    while (gamesPlayed < 6) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        outcome = playRound(humanSelection, computerSelection);
        console.log(outcome)
        gamesPlayed += 1
    }
    console.log(`Final Score: \nHuman: ${humanScore}\nComputer: ${computerScore}`)

    function playRound(humanChoice, computerChoice) {
        // Making human string lowercase.
        let accurate_humanChoice = humanChoice.toLowerCase();
        console.log(accurate_humanChoice, computerChoice)

        // Game logic
        if (accurate_humanChoice == 'rock' & computerChoice == 'rock' || accurate_humanChoice == 'paper' & computerChoice == 'paper' || accurate_humanChoice == 'scissors' & computerChoice == 'scissors') {
            return `Draw, you both selected ${accurate_humanChoice}.`;
        }
        else if (accurate_humanChoice == 'rock' & computerChoice == 'scissors' || accurate_humanChoice == 'paper' & computerChoice == 'rock' || accurate_humanChoice == 'scissors' & computerChoice == 'paper') {
            humanScore += 1
            return `You win, ${accurate_humanChoice} beats ${computerChoice}!`;
        }
        else if (accurate_humanChoice == 'rock' & computerChoice == 'paper' || accurate_humanChoice == 'paper' & computerChoice == 'scissors' || accurate_humanChoice == 'scissors' & computerChoice == 'rock') {
            computerScore += 1
            return `You lose, ${computerChoice} beats ${accurate_humanChoice}!`;
        }
    }
}
playGame()

// Function to obtain a computer choice in the game using the Math function.
function getComputerChoice() {
    let computer_choice = Math.floor(Math.random() * 3);

    if (computer_choice == 0) {
        let computer_move = "rock";
        return computer_move;
    }
    else if (computer_choice == 1) {
        let computer_move = "paper";
        return computer_move;
    }
    else if (computer_choice == 2) {
        let computer_move = "scissors";
        return computer_move;
    }
}

// Function to obtain a human choice with a prompt.
function getHumanChoice() {
    let human_choice = prompt("Your choice:");
    return human_choice;
}