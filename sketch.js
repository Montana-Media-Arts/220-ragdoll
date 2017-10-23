

// A reference to our box2d world
var world;

// A list for all of our boxes
var boxes = [];

function setup() {
  createCanvas(640,360);

  // Initialize box2d physics and create the world
  world = createWorld(new box2d.b2Vec2(0,0));
  world.SetGravity(new box2d.b2Vec2(0,20));

}

function draw() {
  background(51);

  // We must always step through time!
  rect(10,100,50,50);
  var timeStep = 1.0/frameRate();
  // 2nd and 3rd arguments are velocity and position iterations
  // Position Iteration, adjusts how much, each object can reposition itself, per timestep.
  world.Step(timeStep,10,10);


  // Display all the boxes
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();
  }
}
