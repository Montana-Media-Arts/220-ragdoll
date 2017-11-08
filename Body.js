function Body(x, y) {

     this.torsoHi = new Box(x, y+20, 10, 30);
     this.torsoLo = new Box(x, y-15, 10, 40);
     this.shoulders = new Box(x, y+20, 30, 10);
     this.leftArm = new Box(x+15, y-10, 10, 40);
     this.rightArm = new Box(x-15, y-10, 10, 40);
     this.head = new Box(x, y+50, 25, 25);
     this.leftLeg = new Box(x-10, y-65, 10, 50);
     this.rightLeg = new Box(x+10, y-65, 10, 50);
     this.pelvis = new Box(x, y-35, 10, 20);

     // Define joint as between two bodies
     var rjd = new box2d.b2RevoluteJointDef();

     rjd.Initialize(this.torsoHi.body, this.shoulders.body, this.torsoHi.body.GetWorldCenter());
     joint = world.CreateJoint(rjd); //attach the shoulders to upper body

     rjd.Initialize(this.shoulders.body, this.leftArm.body, this.shoulders.body.GetWorldCenter());
     joint = world.CreateJoint(rjd); //attach the left arm to shoulder
    //  joint.lowerAngle = 3.9;
    //  joint.upperAngle = 5.49;

     rjd.Initialize(this.shoulders.body, this.rightArm.body, this.shoulders.body.GetWorldCenter());
     joint = world.CreateJoint(rjd); //attach the right arm to shoulder


     this.anchor = scaleToPixels(this.torsoHi.body.GetWorldCenter());

     rjd.Initialize(this.torsoLo.body, this.torsoHi.body, this.torsoLo.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);  //attach the two torsos

     rjd.Initialize(this.head.body, this.torsoHi.body, this.head.body.GetWorldCenter());
     rjd.enableLimit = true;
     rjd.upperAngle = PI/8;
     rjd.lowerAngle = -PI/8;
     joint = world.CreateJoint(rjd); //attach the head to torso

     rjd.Initialize(this.torsoLo.body, this.pelvis.body, this.pelvis.body.GetWorldCenter());
     joint = world.CreateJoint(rjd); //attach the pelvis to lower body

     rjd.Initialize(this.pelvis.body, this.rightLeg.body, this.pelvis.body.GetWorldCenter());
     joint = world.CreateJoint(rjd); //attach the right leg to pelvis

     rjd.Initialize(this.pelvis.body, this.leftLeg.body, this.pelvis.body.GetWorldCenter());
     joint = world.CreateJoint(rjd); //attach the left leg to pelvis

     this.display = function(head, larm, rarm, torsoHi, torsoLo, lleg, rleg) {
          this.head.display(head); //black
          this.leftArm.display(larm); //white
          this.rightArm.display(rarm); //dark grey
          this.torsoHi.display(torsoHi); //black
          this.torsoLo.display(torsoLo); //dark dark grey
          this.leftLeg.display(lleg); //light grey
          this.rightLeg.display(rleg); //black
          //this.pelvis.display(30); //slightly less black
          //this.shoulders.display(300) //white

          this.anchor = scaleToPixels(this.torsoHi.body.GetWorldCenter());
          fill(0);
          noStroke();
          ellipse(this.anchor.x, this.anchor.y, 8, 8);
     };
}
