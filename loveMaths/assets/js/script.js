// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    // Get all the html buttons
    let buttons = document.getElementsByTagName('button');
    // Iterate throught the buttons html collection
    for (let button of buttons) {
        // Add event listener to buttons
        button.addEventListener("click", function () {
            // Check the attribute, if it is the submit button, check the answe
            // Otherwise set the gametype to the value of the data-type
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }

        })

    }
    runGame("addition");
})
/**
 * The main game 'loop', called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {
    //Make a random number
    let num1 = (Math.floor(Math.random() * 25) + 1);
    let num2 = (Math.floor(Math.random() * 25) + 1);

    if (gameType === "addition") {
        displayAddtionQuestion(num1, num2);
    } else {
        alert(`Unknown game-type ${gameType}`);
        // Stop the game from running and print the error message to console
        throw `Unknown game-type ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first value in the
 * calculateCorrectAnswer array
 */
function checkAnswer() {
    // Get the guess directly from the DOM
    let userAnswer = parseInt(document.getElementById('answer-box').value);

    // Correct answer
    let calculatedAnswer = calculateCorrectAnswer();

    // Compare user answer with correct answer array
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert("Hey, you got it right :)");
    } else {
        alert(`Oh no, the correct answer was actually ${calculatedAnswer[0]}, not ${userAnswer}.`);
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operand and operator from the dom and returns the correct answer
 */
function calculateCorrectAnswer() {
    let operator = document.getElementById('operator').innerText;
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert `Unrecognised operator ${operator}`;
        throw `Unrecognised operator ${operator}. Aborting.`;
    }
}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAddtionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractionQuestion() {}

function displayMultiplyQuestion() {}

function displayDivideQuestion() {}