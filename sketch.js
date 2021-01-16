var canvas;
var music;
var ball;
var box1,box2,box3,box4,box5;

function preload(){
    canvas = loadImage ("canvas")
    music = loadSound("music.mp3");
    ball = loadImage ("ball");
    box1 = loadImage ("box1");
    box2 = loadImage ("box2");
    box3 = loadImage ("box3");
    box4 = loadImage ("box4");
    box5 = loadImage ("box5");
}


function setup(){
    canvas = createCanvas(400,400);
// creating ball 
    ball = createSprite ("200,50,5,5");
    ball.shapeColor="white";
    ball.scale = 0.2;

    ball.velocityX = 3;
    ball.velocityY = 3;
// creating boxes
    box1 = createSprite ("20,390,5,5");
    box1.shapeColor="red";

    box2 = createSprite ("50,390,5,5");
    box2.shapeColor="yellow";

    box3 = createSprite ("70,390,5,5");
    box3.shapeColor="green";

    box4 = createSprite ("100,390,5,5");
    box4.shapeColor="blue";
    
    box5 = createSprite ("180,390,5,5");
    box5.shapeColor="purple";
}

function draw() {
    background("pink");
   
    drawSprites();
}

function bounceOff (){
    // bounceOff funtion
    ball.bounceOff ("leftEdge");
    ball.bounceOff ("rightEdge");
    ball.bounceOff ("topEdge");
    ball.bounceOff ("bottomEdge");


   createEdges ();
}
function isTouching (){
    // isTouhing function
    if (box1.isTouching(ball)&& ball.bounceOff(box1)){
        ball.shapeColor=box1.shapeColor
    }
    if (box2.isTouching(ball)&& ball.bounceOff(box2)){
        ball.shapeColor=box2.shapeColor 
}
    if (box3.isTouching(ball)&& ball.bounceOff(box3)){
        ball.shapeColor=box3.shapeColor
}
    if (box4.isTouching(ball)&& ball.bounceOff(box4)){
        ball.shapeColor=box1.shapeColor
}
    if (box5.isTouching(ball)&& ball.bounceOff(box4)){
        ball.shapeColor=box4.shapeColor
}
}