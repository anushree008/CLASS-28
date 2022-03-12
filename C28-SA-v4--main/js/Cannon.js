class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() {
    // change the angle in the upward direction when the left arrow key was pressed
   //  changed the angle in the downward direction when the right arrow key was pressed
   if (keyIsDown (RIGHT_ARROW) && this.angle<0.4) {
     this.angle = this.angle +0.02;
   } 
   if (keyIsDown (LEFT_ARROW) && this.angle>-0.4) {
    this.angle = this.angle -0.02;
  } 
   fill("#fc036f");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    pop();
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();

    console.log(this.angle);
  }
}
