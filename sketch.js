var database,canvas;
var form,player,game;
var gameState=0,playerCount;
var allPlayers;
var car1,car2,car3,car4,cars;
var carimg1,carimg2,carimg3,carimg4,track,ground;

function preload(){
  carimg1=loadImage("images/car1.png");
  carimg2=loadImage("images/car2.png");
  carimg3=loadImage("images/car3.png");
  carimg4=loadImage("images/car4.png");
  track=loadImage("images/track.jpg");
  ground=loadImage("images/ground.png");
}

function setup(){
  database=firebase.database();
  createCanvas(displayWidth-50,displayHeight-50);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
    if(playerCount===4){
      game.update(1);
    }
    if(gameState===1){
      clear();
      game.play();
    }
    if(gameState===2){
      game.end();
    }
}
