function Body(x, y) {

  this.torsoHi = new Box(x, y + 20, 10, 30);
  this.torsoLo = new Box(x, y - 15, 10, 40);
  // this.shoulders = new Box(x, y+20, 30, 10);
  this.leftArm = new Box(x + 15, y - 10, 10, 40);
  this.rightArm = new Box(x - 15, y - 10, 10, 40);
  this.head = new Box(x, y + 50, 25, 25);
  this.leftLeg = new Box(x - 10, y - 65, 10, 50);
  this.rightLeg = new Box(x + 10, y - 65, 10, 50);
  // this.pelvis = new Box(x, y-35, 10, 20);

  this.anchor = scaleToPixels(this.torsoHi.body.GetWorldCenter());

  var rjd = new box2d.b2RevoluteJointDef();


  rjd.Initialize(this.torsoHi.body, this.torsoLo.body, this.torsoHi.body.GetWorldCenter());
  joint = world.CreateJoint(rjd); //attach the right arm to upper body

  rjd.Initialize(this.torsoHi.body, this.rightArm.body, this.torsoHi.body.GetWorldCenter());
  joint = world.CreateJoint(rjd); //attach the right arm to upper body

  rjd.Initialize(this.torsoHi.body, this.leftArm.body, this.torsoHi.body.GetWorldCenter());
  joint = world.CreateJoint(rjd); //attach the left arm to upper body

  rjd.Initialize(this.torsoLo.body, this.rightLeg.body, this.torsoLo.body.GetWorldCenter());
  joint = world.CreateJoint(rjd); //attach the right leg to lowtorso

  rjd.Initialize(this.torsoLo.body, this.leftLeg.body, this.torsoLo.body.GetWorldCenter());
  joint = world.CreateJoint(rjd); //attach the left leg to lowtorso

  // rjd.Initialize(this.torsoLo.body, this.rightLeg.body, this.torsoLo.body.GetWorldCenter());
  // joint = world.CreateJoint(rjd); //attach the right leg to lowtorso
  //
  // rjd.Initialize(this.torsoLo.body, this.leftLeg.body, this.torsoLo.body.GetWorldCenter());
  // joint = world.CreateJoint(rjd); //attach the left leg to lowtorso

  var headJoint = new box2d.b2RevoluteJointDef();

  headJoint.Initialize(this.head.body, this.torsoHi.body, this.head.body.GetWorldCenter());
  headJoint.enableLimit = true;
  headJoint.upperAngle = PI/8;
  headJoint.lowerAngle = -PI/8;
  joint = world.CreateJoint(headJoint); //attach the head to torso

  // headJoint.Initialize(this.torso.body, this.head.body, this.torso.body.GetWorldCenter());
  // joint = world.CreateJoint(headJoint);

  // headJoint.Initialize(this.torsoLo.body, this.head.body, this.torsoLo.body.GetWorldCenter());
  // joint = world.CreateJoint(headJoint)

  this.display = function() {

    this.anchor = scaleToPixels(this.torsoHi.body.GetWorldCenter());
    fill(0);
    noStroke();
    ellipse(this.anchor.x, this.anchor.y, 8, 8);



    this.anchor = scaleToPixels(this.torsoHi.body.GetWorldCenter());

    this.head.display(head); //black
    this.leftArm.display(larm); //white
    this.rightArm.display(rarm); //dark grey
    this.torsoHi.display(uppertorso); //black
    this.torsoLo.display(lowtorso); //dark dark grey
    this.leftLeg.display(lleg); //black
    this.rightLeg.display(rleg); //dark dark grey

  };
};
