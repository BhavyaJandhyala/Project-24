var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	ground = new Ground(600,height,1200,20);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	box1 = new side(250, 610, 20, 100, {isStatic:true});
    box2 = new side(450, 610, 20, 100, {isStatic:true});
    box3 = new side(350, 650, 200, 20, {isStatic:true});


	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 //fill("white");


	Engine.run(engine);
  
}


function draw() {
  background(0);
  engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  //ground.display();
  drawSprites();
 
}



