function Body(x, y) {

     this.torso = new Box(x, y - 30, 120, 10, false);
     this.leftArm = new Box(x, y, 10, 40, false);
     this.rightArm = new Box(x, y, 10, 40, false);

     // Define joint as between two bodies
     var rjd = new box2d.b2RevoluteJointDef();

     rjd.Initialize(this.torso.body, this.leftArm.body, this.torso.body.GetWorldCenter());
     rjd.Initialize(this.torso.body, this.rightArm.body, this.torso.body.GetWorldCenter());

     joint = world.CreateJoint(rjd);

     this.display = function() {
          this.torso.display();
          this.leftArm.display();
          this.rightArm.display();

          var anchor = scaleToPixels(this.torso.body.GetWorldCenter());
          fill(0);
          noStroke();
          ellipse(anchor.x, anchor.y, 8, 8);
     };
}
