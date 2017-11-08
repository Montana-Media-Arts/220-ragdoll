// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A fixed boundary class

  // A boundary is a simple rectangle with x,y,width,and height
function Boundary(x_,y_, w_, h_, radius) {
  // But we also have to make a body for box2d to know about it
  // Body b;

  this.x = x_;
  this.y = y_;
  this.w = w_;
  this.h = h_;
  this.r = radius;

  var fd = new box2d.b2FixtureDef();
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;

  var bd = new box2d.b2BodyDef();

  bd.type = box2d.b2BodyType.b2_staticBody;
  bd.position.x = scaleToWorld(this.x);
  bd.position.y = scaleToWorld(this.y);
  fd.shape = new box2d.b2CircleShape();
  fd.shape.m_radius = scaleToWorld( this.r );

  // fd.shape.SetAsBox(this.w/(scaleFactor*2), this.h/(scaleFactor*2));
    this.body = world.CreateBody(bd).CreateFixture(fd);

  // Draw the boundary, if it were at an angle we'd have to do something fancier
  this.display = function() {
    fill(34, 41, 57);
    stroke(127);
      ellipse(this.x,this.y,this.r,this.r);
  };

  this.move = function() {
    // this.y = y_--;
  };

  this.reset = function() {
    if (this.y < 0) {
      this.y = height-5;
    }
  };
}
