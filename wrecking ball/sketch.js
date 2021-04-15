const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var rope
function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1000,height,2000,50);
   box1 = new Box(900,100,90,90)
   box2 = new Box(900,100,90,90)
   box3 = new Box(900,100,90,90)
   box4 = new Box(900,100,90,90)
   box5 = new Box(900,100,90,90)
   box6 = new Box(900,100,90,90)
   box7 = new Box(900,100,90,90)
   box8 = new Box(800,100,90,90)
   box9 = new Box(800,100,90,90)
   box10 = new Box(800,100,90,90)
   box11 = new Box(800,100,90,90)
   box12 = new Box(800,100,90,90)
   box13 = new Box(800,100,90,90)
   box14 = new Box(800,100,90,90)
   box15 = new Box(700,100,90,90)
   box16 = new Box(700,100,90,90)
   box17 = new Box(700,100,90,90)
   box18 = new Box(700,100,90,90)
   box19 = new Box(700,100,90,90)
   box20 = new Box(700,100,90,90)
   box21 = new Box(700,100,90,90)
   ball = new Ball(200,200,50)
   rope = new Rope(ball.body,{x:200, y:50})

   




}

function draw(){
   background("pink")
    
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display(); 
   box9.display(); 
   box10.display();
   box11.display(); 
   box12.display(); 
   box13.display(); 
   box14.display();
   box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}