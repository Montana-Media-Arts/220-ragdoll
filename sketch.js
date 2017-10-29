
// A reference to our box2d world
var world;

// A list for all of our boxes
var boxes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Initialize box2d physics and create the world
    world = createWorld();
    //world.SetGravity(new box2d.b2Vec2(0, 10)); < this didn't even do anything

}

function draw() {
    background(51);

    var bx = new Box(width/2, height/2, 10, 10, false);
    boxes.push(bx);

    // We must always step through time!
    var timeStep = 1.0 / frameRate();
    world.Step(timeStep, 10, 10);

    // Display all the boxes
    for (var i = boxes.length-1; i >= 0; i--) {
        boxes[i].display();
        if (boxes[i].done()) {
          boxes.splice(i, 1);
        }
    }
}
