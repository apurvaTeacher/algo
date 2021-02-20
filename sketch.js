var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  fixed = createSprite(300, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  moving.x = mouseX;
  moving.y = mouseY;

  console.log(moving.x - fixed.x);

  if(moving.x - fixed.x < moving.width/2 + fixed.width/2  &&
    fixed.x - moving.x < moving.width/2 + fixed.width/2)
  {
    fixed.shapeColor = "green";
    moving.shapeColor = "green";
  }
  else{
    fixed.shapeColor = "blue";
    moving.shapeColor = "blue";
  }

  drawSprites();
}