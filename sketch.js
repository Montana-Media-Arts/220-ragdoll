// A reference to our box2d world
var world;
// A list for all of our boxes
var box;

var boundaries = [];
//var bg;
var spring;

let worldPos = {
    x: 0,
    y: 0,
    mouseX: 0,
    mouseY: 0
};

var body;
//function preload() {
//  bg = loadImage("backgrounds/skyone.jpg");
//}
var head, rleg, uppertorso, lowtorso, lleg, rarm, larm;

//
 function preload(){
  head= loadImage("bodyImg/coralinehead.png");
  rleg = loadImage("bodyImg/coralineRleg.png")
  uppertorso= loadImage("bodyImg/coralineUpperTorso.png");
  lowtorso = loadImage("bodyImg/coralineLowerTorso.png")
  lleg = loadImage("bodyImg/coralineLleg.png");
  rarm= loadImage("bodyImg/coralineRarm.png");
  larm = loadImage("bodyImg/coralineLarm.png");
};




function setup() {

    createCanvas(windowWidth, windowHeight);


    // Initialize box2d physics and create the world
    world = createWorld();
    //world.SetGravity(new box2d.b2Vec2(0, 10)); < this didn't even do anything
     spring = new Spring(mouseX, mouseY);
     springBod = new Spring(mouseX, mouseY);

     //limb = new Limb (width / 2, height / 2);
     body = new Body(height / 2, width / 2);
     // box = new Box(width / 2, height / 2, 30, 30);


    boundaries.push(new Boundary(width / 2, height / 2 + 100, 100, 10, 50));
    boundaries.push(new Boundary(3 * width / 4, height - 50, width / 2 - 50, 10, 50));
    boundaries.push(new Boundary(width / 2 - 100, height * (2 / 3), width / 2 - 100, 10, 50));
}


function draw() {


    background(2, 87, 142);

    // We must always step through time!
    var timeStep = 1.0 / 30;
    world.Step(timeStep, 10, 10);



    /* CREATE CAMERA SANBOX */
    push();
    worldPos = findCenter(body);
    translate(-worldPos.x, -worldPos.y);
    worldPos.mouseX = mouseX + worldPos.x;
    worldPos.mouseY = mouseY + worldPos.y;

    noStroke();
    //box.display();


    body.display();

    spring.update(worldPos.mouseX,worldPos.mouseY);
    springBod.update(worldPos.mouseX,worldPos.mouseY);

    spring.display();
    springBod.display();

    // limb.display();


    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].display();
  
    }
    /* END CAMERA SANBOX */

}

function mouseReleased() {

    spring.destroy();
    springBod.destroy();
}


function mousePressed() {

     // Box mouse control

     if (body.torsoLo.contains(worldPos.mouseX, worldPos.mouseY)) {
          springBod.bind(worldPos.mouseX, worldPos.mouseY, body.torsoLo);
     }
     if (body.torsoHi.contains(worldPos.mouseX, worldPos.mouseY)) {
          springBod.bind(worldPos.mouseX, worldPos.mouseY, body.torsoHi);
     }
     if (body.leftLeg.contains(worldPos.mouseX, worldPos.mouseY)) {
          springBod.bind(worldPos.mouseX, worldPos.mouseY, body.leftLeg);
     }
     if (body.rightLeg.contains(worldPos.mouseX, worldPos.mouseY)) {
          springBod.bind(worldPos.mouseX, worldPos.mouseY, body.rightLeg);
     }
     if (body.leftArm.contains(worldPos.mouseX, worldPos.mouseY)) {
          springBod.bind(worldPos.mouseX, worldPos.mouseY, body.leftArm);
     }
     if (body.rightArm.contains(worldPos.mouseX, worldPos.mouseY)) {
          springBod.bind(worldPos.mouseX, worldPos.mouseY, body.rightArm);
     }
     if (body.head.contains(worldPos.mouseX, worldPos.mouseY)) {
          springBod.bind(worldPos.mouseX, worldPos.mouseY, body.head);
     }

}


function findCenter( centerObj ){

    let x = centerObj.anchor.x - ( width/2);
    let y = centerObj.anchor.y - ( height/2);

    return { x: x, y: y };
}
