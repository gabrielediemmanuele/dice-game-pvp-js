'use strict';

//* Elements selected
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const name0Element = document.getElementById('name--0');
const name1Element = document.getElementById('name--1');

const diceElement = document.querySelector('.dice');
const newGameButton = document.querySelector('.btn--new');
const diceRollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
//* Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];

let currentScore = 0;

let activePlayer = 0;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Player Switch
    //a) change active player
    switchPlayer();
  }
});

holdButton.addEventListener('click', function () {
  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  // 2. check if player's score is >= 100
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //finish game at 100+
  if (scores[activePlayer] >= 100) {
    document.querySelector(
      `player--${activePlayer}`.classList.add('.player--winner')
    );
    document.querySelector(
      `player--${activePlayer}`.classList.remove('.player--active')
    );
  } else {
    //siwtch to the next player
    switchPlayer();
  }
});
