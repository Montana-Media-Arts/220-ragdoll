
// A reference to our box2d world
var world;

// A list for all of our boxes
var boxes = [];

function setup() {
    createCanvas(200, 200);

    // Initialize box2d physics and create the world
    world = createWorld(new box2d.b2Vec2(0, 0));
    world.SetGravity(new box2d.b2Vec2(0, 10));

    for (var i = 0; i < 2; i++) {
      boxes[i] = new Limb(100, 100);
    }

}

function draw() {
    background(51);

    // We must always step through time!
    var timeStep = 1.0 / frameRate();
    world.Step(timeStep, 10, 10);

    //!OH NO NEW CODE!

    // Display all the boxes
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
}
