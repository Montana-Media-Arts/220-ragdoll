<<<<<<< HEAD

//Ryan checking in

=======
>>>>>>> 2fd3746e7f97f68c159e1311aee35f079789d838
// A reference to our box2d world
var world;

// A list for all of our boxes
var boxes = [];

function setup() {
    createCanvas( windowWidth, windowHeight );

    // Initialize box2d physics and create the world
    world = createWorld(new box2d.b2Vec2(0, 0));
    world.SetGravity(new box2d.b2Vec2(0, 10));

}

function draw() {
    background(51);

    // We must always step through time!
    var timeStep = 1.0 / frameRate();
    world.Step(timeStep, 10, 10);


    // Display all the boxes
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
}
