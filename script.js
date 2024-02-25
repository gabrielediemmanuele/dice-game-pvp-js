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

const winnerPlayer = document.querySelector(`.winner--player`);

//variables declarations
let scores;

let currentScore;

let activePlayer;

let playing;

function newGame() {
  //* Starting Conditions

  scores = [0, 0];

  currentScore = 0;

  activePlayer = 0;

  playing = true;

  score0Element.textContent = 0;
  currentScore0.textContent = 0;
  score1Element.textContent = 0;
  currentScore1.textContent = 0;
  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
  winnerPlayer.classList.add('hidden');
}

newGame();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

//* Rolling dice functionality
diceRollButton.addEventListener('click', function () {
  if (playing) {
    //if the game is running... -> look at the winner condition for the end.

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
  }
});

//* holdButton holdScore
holdButton.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    // 2. check if player's score is >= 100
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //finish game at 100+
    if (scores[activePlayer] >= 10) {
      //if the game is finished.
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      winnerPlayer.classList.remove('hidden');
      winnerPlayer.textContent = `Player ${activePlayer + 1} win 🏆!`;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

newGameButton.addEventListener('click', newGame);
