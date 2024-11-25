'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
score0El.textContent = 0;

const score1El = document.getElementById('score--1');
score1El.textContent = 0;
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let imgdice = document.querySelector('.dice');
let playing = true;
let score = [0, 1];
let playerActive = 0;
let current = 0;
imgdice.classList.add('hidden');

const switchPlayers = function () {
  document.getElementById(`current--${playerActive}`).textContent = 0;
  current = 0;
  playerActive = playerActive == 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    imgdice.classList.remove('hidden');
    imgdice.src = `dice-${dice}.png`;

    if (dice !== 1) {
      current += dice;
      document.getElementById(`current--${playerActive}`).textContent = current;
    } else {
      switchPlayers();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[playerActive] += current;
    document.getElementById(`score--${playerActive}`).textContent =
      score[playerActive];
    if (score[playerActive] >= 20) {
      playing = false;
      imgdice.classList.add('hidden');
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${playerActive}`)
        .classList.remove('player-active');
    } else {
      switchPlayers();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  score = [0, 1];
  playerActive = 0;
  current = 0;
  imgdice.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
