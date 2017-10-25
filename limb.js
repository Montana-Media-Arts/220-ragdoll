//starting out with constructing a limb class consisting of two bodies joined

//subproblems
  //make the boxes correctly
  //set the correct anchor points
  //make sure they can't bend into themselves

  //extra goals:
    //add feet/hands
    //define an arm and leg parameter and limit rotation accordingly

function Limb(x, y) {
  this.box1 = new Box(x, y, 5, 10, false);
  this.box2 = new Box(x, y, 5, 10, false);

  var rjd = new box2d.b2RevoluteJointDef();

  rjd.Initialize(this.box1.body, this.box2.body, this.box1.body.GetWorldCenter());

  joint = world.CreateJoint(rjd);

  this.display = function() {
    this.box2.display();
    this.box1.display();

    var anchor = scaleToPixels(this.box1.body.GetWorldCenter());
    fill(0);
    noStroke();
    ellipse(anchor.x, anchor.y, 4, 4); //a temporary elbow
  };
}
