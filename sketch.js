const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var ground;

var ball1,ball2,ball3;
var rope1,rope2,rope3;
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(600,600,1200,20);
ball1 = new Ball1(200,300,80,80);
ball2 = new Ball2(200,200,80,80);
ball3 = new Ball3(200,200,80,80);
  rope1 = new Rope1(ball1.body,{x:500,y:50});
  rope2 = new Rope2(ball2.body,{x:550,y:100});
  rope3 = new Rope3(ball3.body,{x:600,y:150});

}

function draw() {
	background(180);
	Engine.update(engine);
   ground.display(); 
   
   
  ball1.display();
  ball2.display();
  ball3.display();
  rope1.display();
  rope2.display();
  rope3.display();
  
  
  }
  function mouseDragged()
  {
  
	Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY});
  
  }