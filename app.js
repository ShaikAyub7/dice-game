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
const winner = document.querySelector(".player2");
//starting condition
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1El.textContent = 0;
  score0El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  winner.classList.add("hidden");

  // document.querySelector.classList.remove('.player');
  // player = false;
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//rolling dice functionality//

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // alert('you got one. you want to continue');

   

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      currentEl0.textContent = currentScore;
      document.querySelector('body').style.backgroundColor = "#333";
      // document.querySelector('body').style. = "";
      
      // document.querySelector(".player--0").style.backgroundColor = "#222";
    } else {
      // alert('you got one. you want to continue');
      switchPlayer();
    }
  }
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "enter") {
    document.querySelector(".btn--roll");
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    console.log(scores[activePlayer]);
    scores[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      winner.classList.remove("hidden");

      // document.querySelector('.player').textContent = 'congratulations';
      // btnRoll.classList.remove('btn--roll');
      // document.querySelector(".btn").style.btn = '';

      // document.querySelector('.player');
      // player.classList.remove("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

console.log(init)
