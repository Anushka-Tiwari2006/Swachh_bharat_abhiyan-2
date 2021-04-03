var r1,r2,r3,ground,junk, back;
var garbage ,dust;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
back = loadImage("junk.png");
dust = loadImage("dustbingreen.png");



}

function setup() {
	createCanvas(800, 700);

 


	engine = Engine.create();
	world = engine.world;

  
  garbage = createSprite(600,600,20,20);
  garbage.addImage(dust);
  garbage.scale = 0.55;

	ground = new Ground(600,height,1200,20)
	r1= new Dustbin(600,680,130,20);
	r2=new Dustbin(540,615,20,150);
    r3=new Dustbin(660,615,20,130);

   junk = new Paper(80,650,70) ;
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);
  

  
  
  ground.display();
  junk.display();
 
  r1.display();
  r2.display();
  r3.display();
  
  drawSprites();
  
  

}

function keyPressed(){

if (keyCode===UP_ARROW){

  Matter.Body.applyForce(junk.body, junk.body.position,{ x:730, y: -730});



}





}

