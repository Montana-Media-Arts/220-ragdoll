//starting out with constructing a limb class consisting of two bodies joined

//subproblems
  //make the boxes correctly
  //set the correct anchor points
  //make sure they can't bend into themselves

  //extra goals:
    //add feet/hands
    //define an arm and leg parameter and limit rotation accordingly

//if you leave a comment leave your initials too -sr


function Limb(x, y) {
  this.box1 = new Box(x, y, 50, 130, false);
  this.box2 = new Box(x, y, 50, 130, false); //the box class has a final parameter
  //that'll set it to a static (true) or dynamic (false) body. mostly for testing
  //purposes. we won't need to make the ragdoll static -sr

  var rjd = new box2d.b2RevoluteJointDef();

  rjd.Initialize(this.box1.body, this.box2.body, this.box1.body.GetWorldCenter());
  rjd.lowerAngle = -0.5 * TWO_PI;
  rjd.upperAngle = 0.25 * TWO_PI; //!!! revolute joints have angle limits built in
  //and while i realize i'm trying to accomplish something that we don't even need
  //to accomplish, this is a good discovery nonetheless. -sr
  rjd.enableLimit = true;



  joint = world.CreateJoint(rjd);

  this.display = function() {
    this.box2.display();
    this.box1.display();

    var anchor = scaleToPixels(this.box1.body.GetWorldCenter());
    fill(0);
    noStroke();
    ellipse(anchor.x, anchor.y, 4, 4); //a temporary elbow  -sr
  };

  //this code is more or less ripped straight from the revolute joint example
  //it feels like it's the correct joint to use, but i could just be wrong -sr
}
