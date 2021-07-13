var weight=[35,58,45,12];
var ship1 ,ship1_running;
function weight_add(){
  var sum= weight[0]+weight[1]+weight[2]+weight[3];
  console.log(sum)
}
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  weight_add();
 sea=createSprite(400,400)
 ship1=createSprite(200,200);
 ship1.addAnimation("running",ship1_running);
 ship1.scale=0.5; 
 ship2=createSprite(200,200);
 ship3=createSprite(200,200);
 ship4=createSprite(200,200);

}
                      
function draw() {
  background(seaImg);
  sea.velocityY=10;
  if (sea.x< 0){
        sea.x = sea.width/2;
       }
        ship1.velocityY=10;
    if (ship1.x< 0){
        ship1.x = ship1.width/2;
       }
        ship2.velocityY=10;
    if (ship2.x< 0){
        ship2.x = ship1.width/2;
       }
        ship3.velocityY=10;
    if (ship3.x< 0){
        ship3.x = ship1.width/2;
       }
        ship4.velocityY=10;
    if (ship4.x< 0){
    ship4.x = ship1.width/2;  
  } 
  }
drawSprites();{
}