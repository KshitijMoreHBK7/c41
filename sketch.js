var hypnoticBall, database;
var position;
var gameState=0;
var form,player,game;

function setup(){
  database = firebase.database();
 

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";

game =new Game()
game.start();
  
}

function draw(){
  background("white");
  
    
  
}

