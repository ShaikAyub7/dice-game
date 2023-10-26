'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl   = document.querySelector('.dice');
const btnRoll  = document.querySelector('.btn--roll');
const btnNew   = document.querySelector('.btn--new');
const btnHold  = document.querySelector('.btn--hold');
//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//rolling dice

btnRoll.addEventListener('click', function(){

const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

});