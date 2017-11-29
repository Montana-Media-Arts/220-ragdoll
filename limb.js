//starting out with constructing a limb class consisting of two bodies joined

//subproblems
//make the boxes correctly
//set the correct anchor points
//make sure they can't bend into themselves

//extra goals:
//add feet/hands
//define an arm and leg parameter and limit rotation accordingly


// var head, rleg, body, lleg, rarm, larm;
//
// // //if you leave a comment leave your initials too -sr
// function preload(){
//   head= loadImage("bodyImg/coralinehead.png");
//   rleg = loadImage("bodyImg/coralineRleg.png")
//   body= loadImage("bodyImg/coralinebody.png");
//   lleg = loadImage("bodyImg/coralineLleg.png");
//   rarm= loadImage("bodyImg/coralineRarm.png");
//   larm = loadImage("bodyImg/coralineLarm.png");
//
// }

function Limb(x, y) {
    this.box1 = new Box(x, y, 20, 60);
    this.box2 = new Box(x, y, 20, 70);

    var rjd = new box2d.b2RevoluteJointDef();

    rjd.Initialize(this.box1.body, this.box2.body, this.box1.body.GetWorldCenter());
    rjd.lowerAngle = -0.5 * TWO_PI;
    rjd.upperAngle = 0.25 * TWO_PI;
    //!!! revolute joints have angle limits built in
    //and while i realize i'm trying to accomplish something that we don't even need
    //to accomplish, this is a good discovery nonetheless. -sr
    rjd.enableLimit = true;

    this.contains = function(x, y) {
        var worldPoint = scaleToWorld(x, y);
        var f = this.box2.body.GetFixtureList();
        var c = this.box1.body.GetFixtureList();
        //console.log(c);
        var inside = f.TestPoint(worldPoint);
        return inside;
    };

    joint = world.CreateJoint(rjd);

    this.display = function() {
        this.box2.display();
        this.box1.display();

        var anchor = scaleToPixels(this.box1.body.GetWorldCenter());
        fill(0);
        noStroke();
        ellipse(anchor.x, anchor.y, 4, 4); //a temporary elbow  -sr
    };

}
