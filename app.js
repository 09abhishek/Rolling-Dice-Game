/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Defining the all required variables.

var scores, roundscore, activePlayer, dice, zero;

scores = [0,0];
roundscore = 0;
activePlayer = 1;
zero = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = zero;
document.getElementById('score-1').textContent = zero;
document.getElementById('current-0').textContent = zero;
document.getElementById('current-1').textContent = zero;

document.querySelector('.btn-roll').addEventListener('click', function() {
// 1. we are getting a random number (1-6).
dice = Math.floor(Math.random() * 6) + 1;

// Display the proper dice number.
var diceDOM =  document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src="dice-" + dice + '.png';												 
													 });









