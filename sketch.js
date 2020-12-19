const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var base1,base2,base3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,
box13,box14,box15,box16,box46,box47,box48,box49;
var box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,
box28,box29;
var box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,
box41,box42,box43,box44,box45;
var polygon, polygonImg, slingshot;

function preload(){
    polygonImg = loadImage("polygon.png")
}

function setup(){
    createCanvas(1200, 700)

    engine = Engine.create();
    world = engine.world;
    
    //create bodies here
    base1 = new Ground(480, 600, 280, 10)
    base2 = new Ground(680, 230, 250, 10)
    base3 = new Ground(1000, 480, 250, 10)

    
    box1 = new Box(370, 580, 30, 40)
    box2 = new Box(400, 580, 30, 40)
    box3 = new Box(430, 580, 30, 40)
    box4 = new Box(460, 580, 30, 40)
    box5 = new Box(490, 580, 30, 40)
    box6 = new Box(520, 580, 30, 40)
    box7 = new Box(550, 580, 30, 40)
    box46 = new Box(580, 580, 30, 40)


    box8 = new Box(400, 540, 30, 40)
    box9 = new Box(430, 540, 30, 40)
    box10 = new Box(460, 540, 30, 40)
    box11 = new Box(490, 540, 30, 40)
    box12 = new Box(520, 540, 30, 40)
    box47 = new Box(550, 540, 30, 40)

    box13 = new Box(430, 500, 30, 40)
    box14 = new Box(460, 500, 30, 40)
    box15 = new Box(490, 500, 30, 40)
    box48 = new Box(520, 500, 30, 40)

    box16 = new Box(460, 460, 30, 40)
    box49 = new Box(490, 460, 30, 40)

    box17 = new Box(600, 200, 30, 40)
    box18 = new Box(630, 200, 30, 40)
    box19 = new Box(660, 200, 30, 40)
    box20 = new Box(690, 200, 30, 40)
    box21 = new Box(720, 200, 30, 40)
    box22 = new Box(750, 200, 30, 40)

    box23 = new Box(630, 160, 30, 40)
    box24 = new Box(660, 160, 30, 40)
    box25 = new Box(690, 160, 30, 40)
    box26 = new Box(720, 160, 30, 40)

    box27 = new Box(660, 120, 30, 40)
    box28 = new Box(690, 120, 30, 40)

    box29 = new Box(675, 80, 30, 40)

    box30 = new Box(910, 460, 30, 40)
    box31 = new Box(940, 460, 30, 40)
    box32 = new Box(970, 460, 30, 40)
    box33 = new Box(1000, 460, 30, 40)
    box34 = new Box(1030, 460, 30, 40)
    box35 = new Box(1060, 460, 30, 40)
    box36 = new Box(1090, 460, 30, 40)

    box37 = new Box(940, 420, 30, 40)
    box38 = new Box(970, 420, 30, 40)
    box39 = new Box(1000, 420, 30, 40)
    box40 = new Box(1030, 420, 30, 40)
    box41 = new Box(1060, 420, 30, 40)

    box42 = new Box(970, 380, 30, 40)
    box43 = new Box(1000, 380, 30, 40)
    box44 = new Box(1030, 380, 30, 40)

    box45 = new Box(1000, 340, 30, 40)

 
    var options = {
        friction:1.0
    }
    polygon = Bodies.circle(50,200,40,options)
    World.add(world,polygon);
    

    slingshot = new SlingShot(this.polygon,{x:100, y:430})

    
    Engine.run(engine);
}

function draw(){
    background(255)
    strokeWeight(2);
    base1.display();
    base2.display();
    base3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box46.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box47.display();

    box13.display();
    box14.display();
    box15.display();
    box48.display();

    box16.display();
    box49.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();

    box23.display();
    box24.display();
    box25.display();
    box26.display();

    box27.display();
    box28.display();

    box29.display();

    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();

    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();

    box42.display();
    box43.display();
    box44.display();

    box45.display();
  
    slingshot.display();

    imageMode(CENTER)
    fill("red")
    image(polygonImg,polygon.position.x, polygon.position.y, 60,60)
    drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x:mouseX , y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){ 
        Matter.Body.setPosition(this.polygon,{x:100, y:434}) 
        slingshot.attach(this.polygon) 
    }
}