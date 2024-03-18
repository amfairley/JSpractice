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
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame("addition");
})
/**
 * The main game 'loop', called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {

    // Reset answer box
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    //Make a random number
    let num1 = (Math.floor(Math.random() * 25) + 1);
    let num2 = (Math.floor(Math.random() * 25) + 1);

    if (gameType === "addition") {
        displayAddtionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractionQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivideQuestion(num1, num2);
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
        incrementScore();
    } else {
        alert(`Oh no, the correct answer was actually ${calculatedAnswer[0]}, not ${userAnswer}.`);
        incrementWrongAnswer();
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
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "÷") {
        return [operand1 / operand2, "division"];
    } else {
        alert `Unrecognised operator ${operator}`;
        throw `Unrecognised operator ${operator}. Aborting.`;
    }
}

/**
 * Adds to the correct score value
 */
function incrementScore() {
    // Take the value from the DOM
    let currentScore = parseInt(document.getElementById('score').innerText);
    // Put it back into the DOM and add 1
    document.getElementById('score').innerText = ++currentScore;
}

/** 
 * Adds to the incorrect score value
 */
function incrementWrongAnswer() {
    // Take the value from the DOM
    let currentScore = parseInt(document.getElementById('incorrect').innerText);
    // Put it back into the DOM and add 1
    document.getElementById('incorrect').innerText = ++currentScore;
}

function displayAddtionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = (operand1 * operand2);
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "÷";
}