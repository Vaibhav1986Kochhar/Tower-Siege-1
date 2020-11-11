const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  imageMode(CENTER)
  image(polygon.ing,polygon.position.x,polygon.position.y,40,40);

  function mousePressed() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }

  function mouseDragged() {
    value = value + 5;
    if (value > 255) {
      value = 0;
    }
  }

}

function draw() {
  background(255,255,255); 
  
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  drawSprites();
}