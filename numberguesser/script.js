let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a target to guess
let generateTarget = () => {
    return Math.floor(Math.random() * 9);
};

// Compare guesses
let compareGuesses = (human, computer, target) => {
    const userGuess = Math.abs(target - human);
    const computerGuess = Math.abs(target - computer);
    return userGuess <= computerGuess;
};

// Update score
let updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

// Next round
function advanceRound() {
    currentRoundNumber += 1;
};