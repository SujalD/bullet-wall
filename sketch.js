var zenia,tourus,cyclop;
 var wall,boundary1,boundary2;

function setup() {
  createCanvas(800,400);
  bullet1=createSprite(100, 100, 40, 15)
  
  bullet2=createSprite(100,300,40,15)

  wall1=createSprite(500,100,40,100)
  wall2=createSprite(510,300,70,100)



}

function draw() {
  background(0,0,0);  
  drawSprites();
  bullet2.velocityX=5;
  bullet1.velocityX=5;
 
  bullet1.shapeColor=("white")
  bullet2.shapeColor=("white")

  if (bullet1.isTouching(wall1)) {
  wall1.shapeColor=("red")
  bullet1.velocityX=0;
  }
  if (bullet2.isTouching(wall2)) {
    wall2.shapeColor=("green")
    bullet2.velocityX=0;
    }

  isTouching();

}
function isTouching() {
  if( bullet1.x-wall1.x<wall1.width/2+bullet1.width/2 && wall1.x-bullet1.x<wall1.width/2+bullet1.width/2 && bullet1.y-wall1.y<wall1.height/2+bullet1.height/2 && wall1.y-bullet1.y<wall1.height/2+bullet1.y-wall1.y<wall1.height/2+bullet1.height/2 ){
    
  }

  if( bullet2.x-wall2.x<wall2.width/2+bullet2.width/2 && wall2.x-bullet2.x<wall2.width/2+bullet2.width/2 && bullet2.y-wall2.y<wall2.height/2+bullet2.height/2 && wall2.y-bullet2.y<wall2.height/2+bullet2.y-wall2.y<wall2.height/2+bullet2.height/2 ){
  }
  

}