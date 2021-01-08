const Engine = Matter.Engine;//namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  var ground_options={//default - false
    isStatic:true
  }
  ground = Bodies.rectangle(100, 390, 600, 20,ground_options);
  World.add(myWorld, ground);

  var ball_options={
    restitution:1.0
  }

  ball = Bodies.circle(200, 100, 20,ball_options);
  World.add(myWorld, ball);

  console.log(ground);
}

function draw() {
  background("lightblue");
  Engine.update(myEngine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 600, 20);  
  drawSprites();
}