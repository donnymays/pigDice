let GAME = new Game();
let DIE = 0

function Game () {
this.players = []; //[tom, bob]
this.currentPlayerIndex = 0;//   0     1
this.playerCount = 0;
//this.gameVariationList = ['default', '2dice'];
//this.gameVariationSelected = default

}
Game.prototype.addPlayer = function (player) {
  this.players.push(player);
  this.playerCount++;
}
Game.prototype.nextPlayer = function () {
  this.players[this.currentPlayerIndex].turnScore = 0;
  this.players[this.currentPlayerIndex].numberTurns++;
  if(this.currentPlayerIndex + 1 < this.playerCount) {
    this.currentPlayerIndex++;
  } else {
    this.currentPlayerIndex = 0;
  }
}
Game.prototype.resetPlayers = function () {
  this.players.forEach(element => {
    element.resetPlayer();
  });
}
Game.prototype.resetGame = function () {
  this.currentPlayerIndex = 0;
  this.resetPlayers();
}
Game.prototype.rollDice = function() {
  return Math.floor(Math.random() * 6) + 1; 
}
Game.prototype.turn = function () {
  
  if(DICE === 1) {
    return false;
  } else {
    this.players[GAME.currentPlayerIndex].turnScore += DICE;
    return true;
  }

}


function Player (name) {
  this.name = name;
  this.score = 0;
  this.turnScore = 0;
  this.numberTurns = 0;
  //this.isHumen = true
}
Player.prototype.resetPlayer = function () {
  this.score = 0;
  this.turnScore = 0;
  this.numberTurns = 0;
}

Player.prototype.submitTurnScore = function () {
  this.score += this.turnScore;
}
//dom = $('#playerScoreList')
function updatePlayerListScore (dom) {
  dom.text('');
  for(let i = 0; i < GAME.playerCount; i++) {
    if(i === GAME.currentPlayerIndex) {
      dom.append('<li><strong>' + GAME.players[i].name + ': ' + GAME.players[i].score + '</strong></li>');
    }else {
      dom.append('<li>' + GAME.players[i].name + ': ' + GAME.players[i].score + '</li>');
    }
  }
}

function displayCurrentPlayerTurn () {
 
 let i = GAME.currentPlayerIndex;
 
 $('#currentPlayer').text(GAME.players[i].name);
 $("#playerTurnScore").text(GAME.players[i].turnScore);
 $("#playerTotalScore").text(GAME.players[i].score);
  //h2 #currentplayer
//<span id="playerTurnScore"></span>
//<span id="playerTotalScore"></span>
}

$(document).ready(function () {

$('#settingsButton').click(function () {
  $('#addPlayerForm').toggle();
  $('#addNewPlayer').val('');
});

$("#addPlayerForm").submit(function() {
  event.preventDefault();
  const inputtedPlayer = $("input#addNewPlayer").val();
  $("input#addNewPlayer").val("");
  GAME.addPlayer(new Player(inputtedPlayer));
  updatePlayerListScore ($('#playerScoreList'));
  displayCurrentPlayerTurn();
});

$("#newGameButton").click(function () {
  GAME.resetGame();
  updatePlayerListScore ($('#playerScoreList'));
  displayCurrentPlayerTurn();
});

$('#rollButton').click(function () {
  DICE = GAME.rollDice();
  $('#diceImg').attr('src', 'img/red_dice'+ DICE + '.png');
  //display dice
  if(GAME.turn()){
    // if(GAME.player[GAME.currentPlayerIndex].submitTurnScore >= 100) {
    //   alert('you won');
    // }
  }else{
    GAME.nextPlayer();
    
  }
  updatePlayerListScore ($('#playerScoreList'));
  displayCurrentPlayerTurn();
});
$('#holdButton').click(function () {
  GAME.players[GAME.currentPlayerIndex].submitTurnScore();
  GAME.nextPlayer();
  updatePlayerListScore ($('#playerScoreList'));
  displayCurrentPlayerTurn();
  //$('#holdButton').prop('disabled','true');

});
});


/*
  hold button should be able to be pressed before rolling/
  change player background with player change/ add player background property
  functionality for ending game at >= 100
*/



// addplayer button//////////
// name form
// submit
// inputval game.addPlayer(new player(inputval))
// reset form


// new game button //////////
// check to see if there is enough players
// reset allplayers score to 0
// switch to player 1
// switch ui to game state






// roll submit {///////////////
//     DICE =rollDice
//     displayDICE
//     player[index].turn()
//     if(turn ==true)
//         {
//          ui display updated turnscore 
//          show potential score
//           if(score + turn score >= 100){
//             gameover
//             disable roll/hold button 
//             display a congarts
//             show scores
//           }
//         }
//     else 
    
//     Game.nextPlayer()/reset turn score
//     switch ui to other player

// }

// hold submit///////////////
// {
    
//     player.score +=turnscore
    
//   Game.nextPlayer()/reset turn score
//   switch ui to other player
// }


