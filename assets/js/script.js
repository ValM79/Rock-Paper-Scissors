/** 
 * Declare constants for DOM elements
 * and possible choices 
*/

const buttons = document.getElementsByClassName('control');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const message = document.getElementById('message');
const choices  = ['rock', 'paper', 'scissers'];

/**
 * Add event listener to all the button
 */

for (let button of buttons) {
    console.log(button, 'button')
    button.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-choice');
        playerGame(playerChoice);
    });
}
