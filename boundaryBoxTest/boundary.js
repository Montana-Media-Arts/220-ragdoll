// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A fixed boundary class

  // A boundary is a simple rectangle with x,y,width,and height
function Boundary(x_,y_, w_, h_) {
  // But we also have to make a body for box2d to know about it
  // Body b;

  this.x = x_;
  this.y = y_;
  this.w = w_;
  this.h = h_;

  //this is irrelevant bc i can't figure out how to use it
  this.vector = new box2d.b2Vec2(random(-5, 5), random(2, 5))

  var fd = new box2d.b2FixtureDef();
  fd.density = 1.0;
  fd.friction = .01;
  fd.restitution = 0.2;

  var bd = new box2d.b2BodyDef();

  bd.type = box2d.b2BodyType.b2_kinematicBody;
  bd.position.x = scaleToWorld(this.x);
  bd.position.y = scaleToWorld(this.y);
  fd.shape = new box2d.b2PolygonShape();
  fd.shape.SetAsBox(scaleToWorld(this.w/2), scaleToWorld(this.h/2));
  this.body = world.CreateBody(bd).CreateFixture(fd);


  // Draw the boundary, if it were at an angle we'd have to do something fancier
  this.display = function() {
    fill(30,127,155);
    stroke(0);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);

    push();
    fill(255);
    text(bd.position.x, 100, 100);
    text(bd.position.y, 100, 200);
    pop();
  };

  this.move = function() {
    this.y = y_--;
  }

  this.boxMove = function() {
    bd.position.y = scaleToWorld(--this.y);
  }

  this.reset = function() {
    if (this.y < 0) {
      this.y = height--;
    }
  }

}
