this.move = function() {
  // this.y = y_--;
  // let deltaY = -1; // <- set n pixels

  // this.testPos = this.body.m_body.m_xf.GetPosition();

  // this.testPos = scaleToPixels( this.testPos );

  // this.testPos.y += deltaY;
  // this.testPos = scaleToWorld(this.testPos);
  // this.body.m_body.m_xf.SetPosition(this.testPos);


  // this.y = scaleToPixels(this.testPos.y);
}

this.reset = function() {
  if (this.y < 0) {
    this.y = height-5;

    this.testPos.y = this.y;
    this.testPos = scaleToWorld(this.testPos);
    this.body.m_body.m_xf.SetPosition(this.testPos);

  }
}
