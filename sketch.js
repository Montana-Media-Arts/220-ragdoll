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

//function preload() {
//  bg = loadImage("backgrounds/skyone.jpg");
//}

function setup() {

    createCanvas(windowWidth, windowHeight);


    // Initialize box2d physics and create the world
    world = createWorld();
    //world.SetGravity(new box2d.b2Vec2(0, 10)); < this didn't even do anything

    //limb = new Limb (width / 2, height / 2);

    spring = new Spring();

    box = new Box(width / 2, height / 2, 30, 30);

    boundaries.push(new Boundary(width / 2, height / 2 + 100, 100, 10));
    boundaries.push(new Boundary(3 * width / 4, height - 50, width / 2 - 50, 10));
    boundaries.push(new Boundary(width / 2 - 100, height * (2 / 3), width / 2 - 100, 10));
}


function draw() {

    background(0);

    // We must always step through time!
    var timeStep = 1.0 / 30;
    world.Step(timeStep, 10, 10);


    /* CREATE CAMERA SANBOX */
    push();
    worldPos = findCenter(box);
    translate(-worldPos.x, -worldPos.y);
    worldPos.mouseX = mouseX + worldPos.x;
    worldPos.mouseY = mouseY + worldPos.y;


    box.display();


    spring.update(worldPos.mouseX, worldPos.mouseY);
    spring.display();

    //limb.display();



    // boundary sandbox



    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].display();
        boundaries[i].move();
        boundaries[i].reset();
    }


    /* END CAMERA SANBOX */
    pop();


}

function mouseReleased() {
    spring.destroy();
}

function mousePressed() {
    if (box.contains(worldPos.mouseX, worldPos.mouseY)) {
        spring.bind(worldPos.mouseX, worldPos.mouseY, box);
    }
}
