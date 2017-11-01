//image for background?
var img;
 // A reference to our box2d world
var world;
// A list for all of our boxes
var box;

var boundaries = [];

var spring;

//function preload()

  // load image
  img = loadImage("skytwo.jpg");

function setup() {
     createCanvas(windowWidth, windowHeight);

     // Initialize box2d physics and create the world
     world = createWorld();
     //world.SetGravity(new box2d.b2Vec2(0, 10)); < this didn't even do anything

     spring = new Spring();

     box = new Box(width / 2, height / 2, 30, 30);

     boundaries.push(new Boundary(width / 2, height / 2 + 100, 100, 10));
     boundaries.push(new Boundary(3 * width / 4, height - 50, width / 2 - 50, 10));
     boundaries.push(new Boundary(width / 2 - 100, height * (2 / 3), width / 2 - 100, 10));
}

function draw() {
    // load image
    img = loadImage("skytwo.jpg");

     background(img);

     // display image (img, x, y)
     //image(img, 0, 0);


     // We must always step through time!
     var timeStep = 1.0 / 30;
     world.Step(timeStep, 10, 10);

     box.display();

     spring.update(mouseX,mouseY);
     // spring.display();

     for (var i = 0; i < boundaries.length; i++) {
          boundaries[i].display();
     }
}

function mouseReleased() {
     spring.destroy();
}

function mousePressed() {
     if (box.contains(mouseX, mouseY)) {
          spring.bind(mouseX, mouseY, box);
     }
}
