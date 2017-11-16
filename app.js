/*

Code Developed by Abhishek Gautam.
ver. 1.0.0

GAME RULES/LOGIC:

- The game has 2 players, playing one after one.

- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score

- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn

- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.

- The first player to reach 100 points on GLOBAL score wins the game

*/

// Defining the all required variables.

var scores, roundScore, activePlayer, dice, gamePlaying;

init();


////////////// Adding event listners - on click to the the roll button. ///////////////
 
document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying) {
			// 1. we are getting a random number (1-6).

		dice = Math.floor(Math.random() * 6) + 1;

// 2. Display the proper dice number.
	
		var diceDOM =  document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src="dice-" + dice + '.png';
	
// 	3. Update the round score (but shud be reset if one comes).												
if(dice > 1) {
	
	//Add score in the roundscore () of current player.
	roundScore += dice; 
		document.querySelector('#current-' + activePlayer).textContent = roundScore;

		console.log( 'Player  : ' + activePlayer + '  playing');
			console.log('Round-Score :' + roundScore + '  Dice Score :'+ dice);
		}
			else {
				// Next Player.
				nextPlayer();
		
			}
	}
});

///////////// Adding event listners - on click to the the hold button.////////////
	
	document.querySelector('.btn-hold').addEventListener('click', function() {
	 if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
	document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			
			gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
	//Moving to next player logic.
	activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
		console.log( 'Player  : ' + activePlayer + '  playing');
		roundScore = 0;
	
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
	
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		
//		document.querySelector('.player-0-panel').classList.remove('active');
//		document.querySelector('.player-1-panel').classList.add('active');
		document.querySelector('.dice').style.display = 'none';
}
				
///////////// Adding event listners - on cl ick to the the new-game button.////////////

	document.querySelector('.btn-new').addEventListener('click', init);
	
	
function init() {
		scores = [0,0];
		roundScore = 0;
		activePlayer = 0;
		zero = 0;
		gamePlaying = true;

		// Initially we dont want to show the dice.
		document.querySelector('.dice').style.display = 'none';

		// All the parameters needs to reset to zero.
		document.getElementById('score-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.getElementById('name-0').textContent = 'Player 1';
		document.getElementById('name-1').textContent = 'Player 2';
		document.querySelector('.player-0-panel').classList.remove('Winner');
		document.querySelector('.player-1-panel').classList.remove('Winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');
	}
	

	
	
	
	
	
	

