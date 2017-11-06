// A rectangular box

function Box(x, y, w, h) {
  this.w = w;
  this.h = h;

  // Define a body
  var bd = new box2d.b2BodyDef();
  bd.type = box2d.b2BodyType.b2_dynamicBody;
  bd.position = scaleToWorld(x,y);

  // Define a fixture
  var fd1 = new box2d.b2FixtureDef();
  // Fixture holds shape
  fd1.shape = new box2d.b2PolygonShape();
  fd1.shape.SetAsBox(scaleToWorld(this.w/2), scaleToWorld(this.h/2));

  // Some physics
  fd1.density = 10.0;
  fd1.friction = 1;
  fd1.restitution = 0.6;

  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd1);

  // Some additional stuff
  this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5,5));

  // this.contains = function(x,y) {
  //   var worldPoint = scaleToWorld(x, y);
  //   var f = this.body.GetFixtureList();
  //   var inside = f.TestPoint(worldPoint);
  //   return inside;
  // };


  this.killBody = function() {
    world.DestroyBody(this.body);
  }

  this.done = function() {
    var pos = scaleToPixels(this.body.GetPosition());
    if (pos.y > height+this.w*this.h) {
      this.killBody();
      return true;
    }
    return false;
  };

  // Drawing the box
  this.display = function() {
    // Get the body's position
    var pos = scaleToPixels(this.body.GetPosition());
    this.pos = pos;
    // Get its angle of rotation
    var a = this.body.GetAngleRadians();

    // Draw it!
    rectMode(CENTER);
    push();
    translate(pos.x,pos.y);
    rotate(a);
    fill(127);
    stroke(200);
    strokeWeight(2);
    rect(0, 0, this.w, this.h);
    pop();
  };
}
