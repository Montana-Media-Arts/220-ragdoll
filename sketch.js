
// A reference to our box2d world
var world;

// A list for all of our boxes
var box;

var boundaries = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Initialize box2d physics and create the world
    world = createWorld();
    //world.SetGravity(new box2d.b2Vec2(0, 10)); < this didn't even do anything

    box = new Box(width/2, height/2, 10, 10);

    boundaries.push(new Boundary(width/2, height/2+100, 100, 10));
}

function draw() {
    background(51);

    // We must always step through time!
    var timeStep = 1.0 /30;
    world.Step(timeStep, 10, 10);

    for (var i = 0; i < boundaries.length; i ++) {
      boundaries[i].display();
    }

    box.display();
}
