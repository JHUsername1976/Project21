var bullet, wall;
var speed, weight;

var thickness;





function setup() {
  createCanvas(1600,400);
  speed = random(223,300);
  weight = random(22,56);
  thickness = random(22,80);

  bullet = createSprite(50, 200, 30, 30);
  bullet.shapeColor = rgb(230,200,200);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background(0,255,255);  
 
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);

  if(damage > 10){
    bullet.shapeColor = rgb(255,0,0);
  }
  if(damage < 10){
    bullet.shapeColor = rgb(0,255,0);
  }
}

  
  drawSprites();
}



function hasCollided(bullet1,wall1){
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }return false;
}