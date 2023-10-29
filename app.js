"use strict";

//selecting elements//
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const currentEl0 = document.getElementById("current--0");
const currentEl1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//rolling dice functionality//

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    currentEl0.textContent = currentScore;
    // document.querySelector(".player--0").style.backgroundColor = "#222";
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  
  }

 
});

  document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "enter") {
    document.querySelector('.btn--roll');
  }
});






