// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A fixed boundary class

// A boundary is a simple rectangle with x,y,width,and height
function Boundary(x_, y_, radius) {
    // But we also have to make a body for box2d to know about it
    // Body b;

    this.x = x_;
    this.y = y_;
    this.r = radius;

    var fd = new box2d.b2FixtureDef();
    fd.density = 0.01;
    fd.friction = 0.1;
    fd.restitution = 0.9;

    var bd = new box2d.b2BodyDef();

    bd.type = box2d.b2BodyType.b2_staticBody;
    bd.position.x = scaleToWorld(this.x);
    bd.position.y = scaleToWorld(this.y);
    fd.shape = new box2d.b2CircleShape();
    fd.shape.m_radius = scaleToWorld(this.r);

    // fd.shape.SetAsBox(this.w/(scaleFactor*2), this.h/(scaleFactor*2));
    this.body = world.CreateBody(bd);
    this.body.CreateFixture(fd);

    // Draw the boundary, if it were at an angle we'd have to do something fancier
    this.display = function() {
        fill(25, 25, 25);
        stroke(127);
        ellipse(this.x, this.y, 2 * this.r, 2 * this.r);

        fill('black');
        ellipse(this.x + this.r / 4, this.y + this.r / 4, this.r / 4, this.r / 4);
        ellipse(this.x - this.r / 4, this.y + this.r / 4, this.r / 4, this.r / 4);
        ellipse(this.x + this.r / 4, this.y - this.r / 4, this.r / 4, this.r / 4);
        ellipse(this.x - this.r / 4, this.y - this.r / 4, this.r / 4, this.r / 4);

        // text(this.x, this.x + 50, this.y);
        // text(this.y, this.x + 50, this.y + 20); //identifying x and y
    };


    //BUBBLE DELETION - not currently working
    this.killBody = function() {
        world.DestroyBody(this.body);
    };

    // Is the particle ready for deletion?
    this.done = function() {
        let kill = false;
        // Let's find the screen position of the particle
        // var pos = scaleToPixels(this.body.GetPosition());
        // Is it off the bottom of the screen?
        // if (pos.y < 0 + this.w * this.h) { //commenting out this.w*this.h makes the bubbles appear, but they still don't disappear after leaving the screen

        if ( this.x < worldPos.x - width || this.x > worldPos.x + width*2 ) {
            kill = true;
        }
        if ( this.y < worldPos.y - height*2 || this.y > worldPos.y + height*4 ) {
            kill = true;
        }

        if (kill) {
            this.killBody();
            return true;
        } else {
            return false;
        }
    };
}
