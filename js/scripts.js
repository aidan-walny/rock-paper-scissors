// console.log("Hello Wolrd.")

function getComputerChoice () {
    let computer_choice = Math.floor(Math.random() * 3)

    console.log(computer_choice)

    if (computer_choice == 0) {
        let computer_move = "rock"
        console.log(computer_move)
    }
    else if (computer_choice == 1) {
        let computer_move = "paper"
        console.log(computer_move)
    }
    else if (computer_choice == 2) {
        let computer_move = "scissors"
        console.log(computer_move)
    }
}
getComputerChoice()