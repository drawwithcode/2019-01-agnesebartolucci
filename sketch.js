function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(30);
}

function draw() {

  background(0,20);

  translate(width/2,height/2);
  rotate(frameCount);

  let angle = sin(frameCount) * 300;

  stroke(lerpColor(color('#00ffed'), color('#f00b51'), sin(frameCount)));
  strokeWeight(1);
  noFill();
  rect(0, 0, angle, angle+90);
  rect(0, 0, angle+90, angle);
  line(0, 0, 0, angle);
  line(0, 0, angle, 0);
  line(0, 0, 0, -angle);
  line(0, 0, -angle, 0);
  ellipse(0,0,angle + 400);

}
