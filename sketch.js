const Engine = Matter.Engine;
const Bodies =  Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16;
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;
var polygonImg;
var stand1,stand2;

function preload(){
  polygonImg=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


    ground1 = new Ground(385,300,255,10);
    stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
    //level 4
    
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    

    //level 3
    
    box8 = new Box(320,235,30,40);
    box9 = new Box(350,235,30,40);
    box10 = new Box(380,235,30,40);
    box11 = new Box(410,235,30,40);
    box12 = new Box(440,235,30,40);
    

    //level 2
    
    box13 = new Box(340,195,30,40);
    box14 = new Box(370,195,30,40);
    box15 = new Box(400,195,30,40);
    

    //level 1
    box16 = new Box(370,155,30,40);

    //set 2 for second stand
    //level one
    blocks1 = new Box(640,175,30,40);
    blocks2 = new Box(670,175,30,40);
    blocks3 = new Box(700,175,30,40);
    blocks4 = new Box(730,175,30,40);
    blocks5 = new Box(760,175,30,40);
    //level two
    blocks6 = new Box(670,135,30,40);
    blocks7 = new Box(700,135,30,40);
    blocks8 = new Box(730,135,30,40);
    //top
    blocks9 = new Box(700,95,30,40);


    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    SlingShot = new Slingshot(this.ball,{x:100,y:200});
}

function draw(){
    background("black");

    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    
    Engine.update(engine);
    ground1.display();
    stand1.display();
    stand2.display();
    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();
    fill("grey");
    box16.display();
    fill("gold")

    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("pink")
    blocks9.display();

    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,40,40);

    SlingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    SlingShot.fly();
  }