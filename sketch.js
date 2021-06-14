var movingRect, fixedRect;
var rect1,rect2,rect3;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(200, 200, 100, 50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  rect1 = createSprite(200, 200, 50, 50);
  rect1.shapeColor = "green";
  rect2 = createSprite(300, 200, 50, 50);
  rect2.shapeColor = "green";

  rect3 = createSprite(100, 200, 50, 50);
  rect3.shapeColor = "green";
}

function draw() {
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect, fixedRect)===true){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
if (isTouching(movingRect, rect1)===true){
  movingRect.shapeColor = "red";
  rect1.shapeColor = "red";
}else{
  movingRect.shapeColor = "green";
  rect1.shapeColor = "green";
}
 
if (isTouching(movingRect, rect2)===true){
  movingRect.shapeColor = "red";
  rect2.shapeColor = "red";
}else{
  movingRect.shapeColor = "green";
  rect2.shapeColor = "green";
}

if (isTouching(movingRect, rect3)===true){
  movingRect.shapeColor = "red";
  rect3.shapeColor = "red";
}else{
  movingRect.shapeColor = "green";
  rect3.shapeColor = "green";
}
  background(0,0,0);  
  drawSprites();
}
 