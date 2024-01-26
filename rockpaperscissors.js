// Cleans up the user input to all lower case
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else if (userInput === 'bomb') {
        return userInput;
    }
}

// Random number generator 0-2 for the computer choice
function getComputerChoice() {
    randNum = Math.floor(3 * Math.random());
    if (randNum === 0) {
        return 'rock';
    } else if (randNum === 1) {
        return 'paper';
    } else if (randNum === 2) {
        return 'scissors';
    }
}

// Determines the winner between the user and computer
function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'You found the secret win, congratulations!';
    } else if (userChoice === computerChoice) {
        return 'The game is a tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }
}

// Takes everything above and plays the game
function playGame(option) {
    let userChoice = getUserChoice(option);
    console.log('Your choice is: ' + userChoice + ".");
    let computerChoice = getComputerChoice();
    console.log('The computer chose: ' + computerChoice + ".");
    console.log(determineWinner(userChoice, computerChoice));
}

// To play, run playGame with a string of 'rock', 'paper', 'scissors', or 'bomb'
playGame('bomb');