var database,canvas;
var form,player,game;
var gameState=0,playerCount;
var allPlayers;
function setup(){
  database=firebase.database();
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
}
function draw(){
    background("white");
    if(playerCount===4){
      game.update(1);
    }
    if(gameState===1){
      clear();
      game.play();
    }
}