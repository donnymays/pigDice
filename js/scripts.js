let test = new Game();
let DIE = 0

function Game () {
this.players = []; //[tom, bob]
this.playerIndex;//   0     1
this.playerCount = 0;
//this.gameVariationList = ['default', '2dice'];
//this.gameVariationSelected = default

}
Game.prototype.addPlayer = function (player) {
  this.players.push(player);
  this.playerCount++;
}
Game.prototype.nextPlayer = function () {
  this.players[this.playerIndex].turnScore = 0;
  if(this.playerIndex + 1 < this.playerCount) {
    this.playerIndex++;
  } else {
    this.playerIndex = 0;
  }
}
Game.prototype.turn = function () {
  this.players[this.playerIndex].turn();
}




function Player (name) {
  this.name = name;
  this.score = 0;
  this.turnScore = 0;
  //this.isHumen = true
}
Player.prototype.rollDice = function() {
  return Math.floor(Math.random() * 6) + 1; 
}
Player.prototype.turn = function () {
  
  if(DIE === 1) {
    return false;
  } else {
    this.turnScore += dice;
    return true;
  }
}
Player.prototype.submitTurnScore = function () {
  this.score += this.turnScore;
}



$(document).ready(function () {

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


});