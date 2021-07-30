var box
function setup() {
  createCanvas(700,400);
  box = createSprite(40,37,10,20)
}

function draw() 
{
  background(30);
  if(keyDown("left")){
    box.x-=3
  }
  if(keyDown("right")){
    box.x+=3
  }
  if(keyDown("up")){
    box.y-=3
  }
  if(keyDown("down")){
    box.y+=3
  }

drawSprites()
}




