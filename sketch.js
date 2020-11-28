var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80)
  fixedRect.shapeColor="aqua"
  movingRect.shapeColor="aqua"
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  // 25 mr 
  //25 fr
  //50
  console.log(movingRect.x - fixedRect.x)
  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor="red"
  movingRect.shapeColor="red"

  }else{
    fixedRect.shapeColor="aqua"
  movingRect.shapeColor="aqua"
  }
  drawSprites();
}