var jaxon, jaxon_running, edges
var path
var pathImage
var coin
var coinImg
function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png")
  pathImage = loadImage("path.png")
  coinImg = loadImage("coin.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200)
  path.addImage(pathImage);
  path.y = path.height/2
  path.scale=1.5
  path.velocityY=5
 
 
  right_boundary = createSprite(0,800.50,800)
  right_boundary.visible=false
  
  left_boundary= createSprite(400,0,50,800)
  left_boundary.visible=false
  
  jaxon = createSprite(200,400,100,50)
  jaxon.addAnimation("Running", jaxon_running)
  jaxon.scale=0.2
  coin = createSprite(70,300,20,20)
  coin.addImage(coinImg)
  coin.scale=0.8
}

function draw() {
  background(180);
  path.velocityY=5

 
 
 jaxon.x=World.mouseX
 jaxon.y=World.mouseY
 edges = createEdgeSprites()
 jaxon.collide(right_boundary)
 jaxon.collide(left_boundary)
 if(path.y > 400){
  path.y = path.height/2;  
  }
  drawSprites();

}
