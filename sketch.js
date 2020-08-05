var dustbin1,dustbin2,dustbin3,ground1,ball1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;             
	//Create the Bodies Here.
   dustbin1 = new dustbin(700,660,200,20);
   dustbin2 = new dustbin(600,620,20,100);
   dustbin3 = new dustbin(790,620,20,100);
   
   ground1 = new ground();

   ball1 = new ball();
   if(keyCode === LEFT_ARROW){
   ball1.x=660;
   ball1.x=660;
   }
 
   Engine.run(engine);
}
function keyPressed (){
  if(keyCode===UP_ARROW){
   Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
  }
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  ball1.display();
  drawSprites();
}
