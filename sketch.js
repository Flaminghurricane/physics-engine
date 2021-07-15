
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object, object2;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world; 

object = Bodies.circle(200,100,50); 
object2 = Bodies.circle(300,100,50); 
World.add(world,[object,object2]);


}
function draw()
{ 
Engine.update(engine);


  background(0);
  rectMode(CENTER);
    circle(object.position.x,object.position.y,50);
    circle(object2.position.x,object2.position.y,50);
}
