
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;

var rect1;
var rect2;
var rect3;

var paper;

function setup() {
	createCanvas(2000,400);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	ground = createSprite(width/2,300,width,15);
	ground.shapeColor = "yellow";
	rect1 = createSprite(1000,243,20,100);
	rect1.shapeColor = "red";
	rect2 = createSprite(1000+70,283,150,20);
	rect2.shapeColor = "red";
	rect3 = createSprite(1070+70,243,20,100);
	rect3.shapeColor = "red";

 	paper = new Paper(200,200,20,20);
}

function draw() {
  background(0);
  Engine.update(engine);
  
  drawSprites();

  paper.display();
}