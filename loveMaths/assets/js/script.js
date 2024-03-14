// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    // Get all the html buttons
    let buttons = document.getElementsByTagName('button');
    // Iterate throught the buttons html collection
    for (let button of buttons) {
        // Add event listener to buttons
        button.addEventListener("click", function () {
            // Check the attribute, if it is the submit button make an alert
            // Otherwise set the gametype to the value of the data-type
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}!`);
            }

        })

    }
})

function runGame() {}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAddtionQuestion() {}

function displaySubtractionQuestion() {}

function displayMultiplyQuestion() {}

function displayDivideQuestion() {}