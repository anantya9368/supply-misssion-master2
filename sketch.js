var helicopterIMG,helicopterSprite;
var packageSprite,packageIMG;
var packageBody,ground;
var line1,line2,line3;
const Engine= Matter.engine;
const World= Matter.world;
const Bodies= Matter.Bodies;
const Body= Matter.body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	

}

function setup() {
	createCanvas(800, 700);
	
	

		rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  line1=createSprite(width/2,height-50,200,20);
  line1.shapeColor=color("red");
  line2=createSprite(510,610,20,100);
  line2.shapeColor=color("red");
  line3=createSprite(310,610,20,100);
  line3.shapeColor=color("red");

	
	

	packageBody = Bodies.circle(width/2 , 200 , 10 , {isStatic:true});
	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	

   
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 Matter.Body.setStatic(packageBody,false)
 }
  }