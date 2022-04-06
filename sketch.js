
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var groundObj;
var ground2;
var ground3;


function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
  
	var ball_options = {
		isStatic: false,
		restitution: 0.9,
		frition:0,
		density: 1.2

	}
	ground2= new Ground(200,150,100,170)
	ground3= new Ground(180,190,190,100)
	
	//crear los cuerpos aquí.

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

	groundObj= new Ground(width/2,470,width,20); 

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y,30);
  rect(Ground.position.x, Ground.position.y,width*2,1);
  



  drawSprites();
 
}



