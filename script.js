'use strict';

//* Elements selected
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const player1 = document.getElementById('name--1');
const player2 = document.getElementById('name--2');

const diceElement = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');
const diceRollButton = document.querySelector('.btn--roll');
console.log(diceElement);

//* Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;

//* Rolling dice functionality
diceRollButton.addEventListener('click', function () {
  // 1) Generate a randome number
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  // 2) display the dice
  diceElement.classList.remove('hidden'); //a. Remove Hidden
  let diceImage = 'dice-' + diceNumber + '.png'; //b Build image string
  diceElement.src = diceImage; //c Add to the image src the string.

  // 3) Check for rolled 1: if true, switch to next player
  if (diceNumber !== 1) {
    // Add dice to current score
    currentScore += diceNumber;
    currentScore0.textContent = currentScore;
  } else {
    // Add dice to current score
  }
});
