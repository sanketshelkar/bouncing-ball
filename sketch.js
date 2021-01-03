var canvas;
var music;
var box;
var plate;
var plate2;
var plate3;
var plate4;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces


   
    //create box sprite and give velocity
    box = createSprite(100, 100, 20, 20)

    //velocity
    box.velocityY = 1
    
    //plate
    plate = createSprite(100,590,90,10)
    plate2 = createSprite(300,590,90,10)
    plate3 = createSprite(500,590,90,10)
    plate4 = createSprite(700, 590, 90, 10)
    
}

function draw() {
    background(0);
    //create edgeSprite

    //shapecolour
    plate.shapeColor = "green"
    plate2.shapeColor = "green"
    plate3.shapeColor = "green"
    plate4.shapeColor = "green"
    box.shapeColor = "white"

    
    //add condition to check if box touching surface and make it box
    if (plate.isTouching(box) && box.bounceOff(plate)) {
    
        box.shapeColor = "red"
        plate.shapeColor = "blue"
        music.play();

    }

    //
    if (plate2.isTouching(box) && box.bounceOff(plate2)) {
    
        box.shapeColor = "red"
        plate2.shapeColor = "red"
      

    }

    //
    if (plate3.isTouching(box) && box.bounceOff(plate3)) {
    
        box.shapeColor = "red"
        plate3.shapeColor = "white"
         

    }

    //
    if (plate4.isTouching(box) && box.bounceOff(plate4)) {
    
        box.shapeColor = "red"
        plate4.shapeColor = "yellow"

    }



    //gravity
     box.velocityY = box.velocityY + 0.2

    //touching and spawning
    if (mousePressedOver(plate)) {
        
        box.x = Math.round(random(300, 500))
        box.x = Math.round(random(700,100))
    }
    

    //drawSprites
    drawSprites();
}

