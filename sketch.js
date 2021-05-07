var PLAY = 1;
var END = 0;
var gameState = PLAY;

var cat, catImage, cat_walking, cat_sitting;

var mouse, mouse_moving, mouse_cheese, mouse_searching;

var garden,bgImage;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImage = loadAnimation( "images/cat4.png");
    cat_walking = loadAnimation( "images/cat2.png", "images/cat3.png");
    cat_sitting = loadAnimation( "images/cat1.png");

    mouse_moving = loadAnimation( "images/mouse2.png","images/mouse3.png");
    mouse_cheese = loadAnimation("images/mouse1.png");
    mouse_searching = loadAnimation( "images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

    cat = createSprite(600,600,40,20);
    cat.addAnimation(catImage);
    cat.scale = 0.3;

    mouse = createSprite(200,600,10,20);
    mouse.addAnimation(mouse_cheese);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat_walking" ,cat_walking);
        cat.x =300;
        cat.scale = 0.2;
        cat.changeAnimation("cat_walking");
        mouse.addAnimation("mouse_cheese", mouse_cheese);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouse_cheese");
    }
   
    drawSprites();
}
function keyPressed(){

    //For moving and changing animation write code here
     if(keyCode === LEFT_ARROW) {
         mouse.x = mouse.x - 2;
         mouse.addAnimation("moving",mouse_moving);
         mouse.changeAnimation("moving");
         mouse.frameDelay = 25;
         cat.velocityX = -5;
         cat.addAnimation("running",cat_walking);
         cat.changeAnimation("running");
     } 
    }

