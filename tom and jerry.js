var PLAY = 1;
var END = 0;
var gameState = PLAY;

var cat, catImage, cat_walking, cat_sitting;

var mouse, mouse_moving, mouse_cheese, mouse_searching;

var garden, gardenImage;

function preload() {
    //load the images here
    catImage = loadImage(cat, "cat4.png");
    cat_walking = loadAnimation(cat_walking, "cat2.png", "cat3.png");
    cat_sitting = loadImage(cat_sitting, "cat1.png");

    mouse_moving = loadAnimation(mouse, "mouse2.png","mouse3.png");
    mouse_cheese = loadImage(mouse_cheese, "mouse1.png");
    mouse_searching = loadImage(mouse_searching, "mouse4.png");

    gardenImage = loadImage(garden,"garden.png");
    

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(1000,800,1500,1500);
    garden.addImage("garden",gardenImage);

    cat = createSprite(600,600,40,20);
    cat.addAnimation("running", cat_running);
    cat.addImage("cat", catImage);
    cat.addImage("catSitting", cat_sitting);

    mouse = createSprite(200,600,10,20);
    mouse.addAnimation("moving",mouse_moving );
    mouse.addImage("mouseCheese", mouse_cheese);
    mouse.addImage("mouseSearching", mouse_searching);


}

function draw() {

   
    //Write condition here to evalute if tom and jerry collide


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
