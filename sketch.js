var gravity=0.1;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodgroup, obstaclesgroup;
var score;
var survivaltime=0
function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  var survivalTime=0;
  
  //creating monkey
   monkey=createSprite(200,516,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1
  
  ground = createSprite(200,550,700,10);
  ground.velocityX=-4;
 obstaclesgroup = createGroup();
  foodgroup = createGroup();
  
  
}


function draw() {
  
  background(255);
  textSize(20);
  fill("black")
  stroke("black"); 
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivaltime,230,100);
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
     monkey.velocityY=-4;
     }
  monkey.velocityY=monkey.velocityY+0.8;
 monkey.collide(ground);
spawnFood();
  spawnObstacles();
  drawSprites();
  
  
}



function spawnFood() {
  if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=600;
    banana.velocityX=-4;
    
    banana.y=Math.round(random(120,200));
    
  
    foodgroup.add(banana);
  }  
  
}

function spawnObstacles() {
  if(frameCount % 300 === 0){
 var  obstacle = createSprite(300,520,20,20)
  obstacle.addImage(obstacleImage);
  obstacle.lifetime=300;
    obstacle.scale=0.15;
  obstaclesgroup.add(obstacle);
  }
  
  
}
