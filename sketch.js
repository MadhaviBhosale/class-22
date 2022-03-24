var space, shooterPlane
var spaceImg, PlaneImg



function preload(){

 spaceImg = loadImage("bg.png")
 PlaneImg = loadImage("plane.png")

}

function setup() {
 createCanvas(windowWidth, windowHeight)
 
 space =createSprite(750,400,300,300);
 space.addImage(spaceImg);
 space.scale = 4.5
 
 shooterPlane = createSprite(500,200,300,300)
 shooterPlane.addImage(PlaneImg)
 shooterPlane.scale = 0.5
}

function draw() {
 
   shooterPlane.x = World.mousex
 
 

    


drawSprites();
    
}