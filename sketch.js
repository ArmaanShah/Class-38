var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var cars;
var cars1;
var cars2;
var cars3;
var cars4;
var database;
var allPlayers;
var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
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
}
