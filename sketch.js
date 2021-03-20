var car,wall,speed,weight;




function setup() {
  createCanvas(800,400);
  car=createSprite(200, 200, 50, 50);
  car.shapeColor="grey";
  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(500,200,60,height/2);
  wall.shapeColor="violet";
}

function draw() {
  background("black");
  car.velocityX = speed;
    if(wall.x-car.x<(car.width+wall.width)/2)
    {
      car.velocity=0;
      var deformation=0.5*weight*speed*speed/22500;
      if (deformation>180)
      {
        car.shapeColor=color(255,0,0);
      }
      if (deformation<180&&deformation>100)
      {
        car.shapeColor=color(230,230,0);
      }
      if (deformation<100)
      {
        car.shapeColor=color(0,255,0)
      }
    }
  drawSprites();
}