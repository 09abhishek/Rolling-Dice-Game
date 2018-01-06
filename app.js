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


	function write_fire(e){
			var t,n,r;stars[e+"r"]=createDiv("|",12);
			boddie.appendChild(stars[e+"r"]);
			for(t=bits*e;t<bits+bits*e;t++){stars[t]=createDiv("*",13);
			boddie.appendChild(stars[t])}
	}
	function createDiv(e,t){
		var n=document.createElement("div");
			n.style.font=t+"px monospace";n.style.position="absolute";n.style.backgroundColor="transparent";
			n.appendChild(document.createTextNode(e));
			return n
	}
	function launch(e){
				colour[e]=Math.floor(Math.random()*colours.length);
			Xpos[e+"r"]=swide*.5;Ypos[e+"r"]=shigh-5;bangheight[e]=Math.round((.5+Math.random())*shigh*.4);
			dX[e+"r"]=(Math.random()-.5)*swide/bangheight[e];
			if(dX[e+"r"]>1.25)stars[e+"r"].firstChild.nodeValue="/";
			else if(dX[e+"r"]<-1.25)stars[e+"r"].firstChild.nodeValue="\\";
			else stars[e+"r"].firstChild.nodeValue="|";
			stars[e+"r"].style.color=colours[colour[e]]
	}
	function bang(e){
			var t,n,r=0;for(t=bits*e;t<bits+bits*e;
			t++){n=stars[t].style;n.left=Xpos[t]+"px";n.top=Ypos[t]+"px";
			if(decay[t])decay[t]--;else r++;if(decay[t]==15)n.fontSize="7px";
			else if(decay[t]==7)n.fontSize="2px";
			else if(decay[t]==1)n.visibility="hidden";
			Xpos[t]+=dX[t];Ypos[t]+=dY[t]+=1.25/intensity[e]}if(r!=bits)setTimeout("bang("+e+")",speed)
	}
	function stepthrough(e){
			var t,n,r;var i=Xpos[e+"r"];var s=Ypos[e+"r"];Xpos[e+"r"]+=dX[e+"r"];
			Ypos[e+"r"]-=4;if(Ypos[e+"r"]<bangheight[e]){n=Math.floor(Math.random()*3*colours.length);
			intensity[e]=5+Math.random()*4;for(t=e*bits;t<bits+bits*e;t++){Xpos[t]=Xpos[e+"r"];
			Ypos[t]=Ypos[e+"r"];dY[t]=(Math.random()-.5)*intensity[e];
			dX[t]=(Math.random()-.5)*(intensity[e]-Math.abs(dY[t]))*1.25;decay[t]=16+Math.floor(Math.random()*16);
			r=stars[t];if(n<colours.length)r.style.color=colours[t%2?colour[e]:n];
			else if(n<2*colours.length)r.style.color=colours[colour[e]];
			else r.style.color=colours[t%colours.length];r.style.fontSize="13px";
			r.style.visibility="visible"}bang(e);launch(e)}stars[e+"r"].style.left=i+"px";
			stars[e+"r"].style.top=s+"px"
	}
	function set_width(){
		var e=999999;
		var t=999999;if(document.documentElement&&document.documentElement.clientWidth){if(document.documentElement.clientWidth>0)e=document.documentElement.clientWidth;
		if(document.documentElement.clientHeight>0)t=document.documentElement.clientHeight}if(typeof self.innerWidth!="undefined"&&self.innerWidth){if(self.innerWidth>0&&self.innerWidth<e)e=self.innerWidth;
		if(self.innerHeight>0&&self.innerHeight<t)t=self.innerHeight}if(document.body.clientWidth){if(document.body.clientWidth>0&&document.body.clientWidth<e)e=document.body.clientWidth;
		if(document.body.clientHeight>0&&document.body.clientHeight<t)t=document.body.clientHeight}if(e==999999||t==999999){e=800;t=600}swide=e;shigh=t
	}
	var bits=80;var speed=33;
	var bangs=5;var colours=new Array("#03f","#f03","#0e0","#93f","#0cf","#f93","#f0c");var bangheight=new Array;var intensity=new Array;var colour=new Array;var Xpos=new Array;
	var Ypos=new Array;var dX=new Array;var dY=new Array;var stars=new Array;var decay=new Array;var swide=800;var shigh=600;var boddie;
	window.onload=function(){
		if(document.getElementById){
			var e;
			boddie=document.createElement("div");
			boddie.id = 'crackId';
			boddie.style.position="fixed";
			boddie.style.top="0px";boddie.style.left="0px";boddie.style.overflow="visible";boddie.style.width="1px";
			boddie.style.height="1px";boddie.style.backgroundColor="transparent";
			document.body.appendChild(boddie);
			set_width();
			for(e=0;e<bangs;e++){
				write_fire(e);launch(e);setInterval("stepthrough("+e+")",speed)
			}
			$("#crackId").hide();
		}
	};
	window.onresize=set_width;
	
	
	


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
			
			$("#crackId").show();
			
			
			
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
		$("#crackId").hide();
	}
	


	
	
	

