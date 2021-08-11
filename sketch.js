const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;






var form, player, game;


var goalpostleft,goalpostright,ground,ball,player1,player2,players,ballImg,ballb;

function preload(){
  ground = loadImage("images/0000.png")
  goalpostright = loadImage("images/goal post 1.png")
  goalpostleft = loadImage("images/goal post 2.png")
  ballImg = loadImage("images/ball.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  engine = Engine.create();
    world = engine.world;
  ballb = bodies.circle(displayWidth*9.6/20,displayHeight*7/8,20,{restitution:0.5,density:1,isStatic:true})
  
}


function draw(){
  Engine.update(engine);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    clear();
    game.stop();
  }

}
