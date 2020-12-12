var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup, backImage;
var survivalTime=0, score=0;

function preload(){
  
  
  backImage=loadImage("jungle.jpg");
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_09.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  background = createSprite()
  background.addImage(backImage);
  background.scale = 1.29 ;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.2 ;
  
  ground = createSprite(400,350,1500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  ground.visible=false;
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();

}

function draw() {
  
 
      
  if(background.x<0)
  {
   background.x = background.width/2;
  }
  background.velocityX = -3;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
  if(monkey.isTouching(bananaGroup)){
    
    bananaGroup.destroyEach();
    score = score+2;
    
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.2; 
  }
  
  switch(score){
    case 10:  monkey.scale = 0.24;
              break;
      
    case 20:  monkey.scale = 0.28;
              break;
      
    case 30:  monkey.scale = 0.32;
              break;
      
    case 40:  monkey.scale = 0.34  ;
              break;
      
      default: break;
  }
  

  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
    food();
    obstacles();
    drawSprites();
  
  stroke("red");
  textSize(20);
  fill("lightgreen");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("orange");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime, 100,50 );
}

function food(){
  
  if (frameCount % 80 === 0){
    var banana = createSprite(600,165,10,40);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.085 ;
    banana.velocityX = -6;
    banana.setLifetime = 50;
    bananaGroup.add(banana);
  
  } 
  
}

function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,310,10,40);
   // obstacle.y = Math.round(random(120,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2 ;
    obstacle.velocityX = -6;
    obstacle.setLifetime = 50;
    obstacleGroup.add(obstacle);

  }  
  
} 



