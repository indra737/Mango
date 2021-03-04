
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,tree2, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var slingshot
var boyBody
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	mango1=new Mango(1100,100,30);
   mango2= new Mango(1200,200,30)
   mango3= new Mango(1120,209,30)
   mango4= new Mango(1000,200,30)
   mango5= new Mango(1050,200,30)
   mango6= new Mango(900,200,30)

   mango7=new Mango(600,100,30);
   mango8= new Mango(650,200,30)
   mango9= new Mango(700,209,30)
   mango10= new Mango(680,200,30)
   mango11= new Mango(730,200,30)
   mango12= new Mango(580,200,30)
   stone= new Stone(200,200,15)
	treeObj=new Tree(1050,580);
	tree2= new Tree(700,580)
	groundObject=new Ground(width/2,600,width,120);
	
	slingshot= new Slingshot(stone.body,{x: 320, y: 430})
	Engine.run(engine);

}

function draw() {

  background(230);
 
tree2.display();
  treeObj.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display();
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  groundObject.display();
  stone.display();
  slingshot.show()
 image(boy ,300,340,200,300);
  detectCollison(stone,mango1)
  detectCollison(stone,mango2)
  detectCollison(stone,mango3)
  detectCollison(stone,mango4)
  detectCollison(stone,mango5)
  detectCollison(stone,mango6)
  detectCollison(stone,mango7)
  detectCollison(stone,mango8)
  detectCollison(stone,mango9)
  detectCollison(stone,mango10)
  detectCollison(stone,mango11)
  detectCollison(stone,mango12)
}


function detectCollison(lStone,lMango){
	
	
	var distance= dist(lStone.body.position.x,lStone.body.position.y,lMango.body.position.x,lMango.body.position.y)
	if(distance<=lMango.r+lStone.r){
		Matter.Body.setStatic(lMango.body,false)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    slingshot.fly();
}