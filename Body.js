function Body(x, y) {

     this.torso = new Box(x, y, 120, 10, false);
     this.leftArm = new Box(x, y, 10, 30, false);
     this.rightArm = new Box(x, y, 10, 30, false);
     this.head = new Box(x + 30, y, 15, 15, false);
     this.leftLeg = new Box(x-5, y, 10, 60, 60, false);
     this.rightLeg = new Box(x+5, y, 10, 60, 60, false);


     // Define joint as between two bodies
     var rjd = new box2d.b2RevoluteJointDef();

     rjd.Initialize(this.torso.body, this.leftArm.body, this.torso.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);
     rjd.lowerAngle = 3.9;
     rjd.upperAngle = 5.49;

     rjd.Initialize(this.torso.body, this.rightArm.body, this.torso.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);

     this.anchor = scaleToPixels(this.torso.body.GetWorldCenter());





     rjd.Initialize(this.torso.body, this.leftLeg.body, this.torso.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);

     rjd.Initialize(this.torso.body, this.rightLeg.body, this.torso.body.GetWorldCenter());
     joint = world.CreateJoint(rjd);

     this.display = function() {
          this.torso.display();
          this.leftArm.display();
          this.rightArm.display();
          this.head.display();
          this.leftLeg.display();
          this.rightLeg.display();

          this.anchor = scaleToPixels(this.torso.body.GetWorldCenter());
          fill(0);
          noStroke();
          ellipse(this.anchor.x, this.anchor.y, 8, 8);
     };
}
