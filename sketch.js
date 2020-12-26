
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject= new Roof(400,250,275,25);

	bobObject1= new Bob(250,350);
	bobObject2= new Bob(300,350);
	bobObject3= new Bob(350,350);
	bobObject4= new Bob(400,350);
	bobObject5= new Bob(450,350);

	rope1= new Rope(bobObject1.body,roofObject.body,-100,0);
	rope2= new Rope(bobObject2.body,roofObject.body,-50,0);
	rope3= new Rope(bobObject3.body,roofObject.body,0,0);
	rope4= new Rope(bobObject4.body,roofObject.body,50,0);
	rope5= new Rope(bobObject5.body,roofObject.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

roofObject.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-600,y:0});
}
}
