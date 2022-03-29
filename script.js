"use strict";

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//startingConditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

//rolling the Dice
btnRoll.addEventListener('click', function(){
//1.Generate a random dice roll
    const diceResult = Math.trunc(Math.random() * 6) + 1
    console.log(diceResult);

//2.Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceResult}.png`
    
//3.Check for rolled 1: If true, 
    if(diceResult !== 1){
//add result to player's Score
    currentScore += diceResult;
    current0El.textContent = currentScore //changeLaterthisline
    }else {
// switch to next player 
    
    }
})