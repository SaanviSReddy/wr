const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

function setup(){
createCanvas(2000,800);
engine = Engine.create();
world = engine.world;

ground = new Ground(1000,790,2000,20);

}


function draw(){
Engine.update(engine);
ground.display();
}