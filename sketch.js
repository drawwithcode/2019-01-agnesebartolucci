function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(30);
  background(color('black'));

}

function draw() {

  translate(width/2,height/2);
  rotate(frameCount);

  let angle = sin(frameCount) * 300;
  let angletwo = sin(frameCount) * 650;

  stroke(lerpColor(color('#ff7d48'), color('#7a52e3'), sin(frameCount)));
  strokeWeight(1);
  noFill();
  rect(0, 0, angle, angle+90);
  rect(0, 0, angle+90, angle);
  line(0, 0, 0, angle);
  line(0, 0, angle, 0);
  line(0, 0, 0, -angle);
  line(0, 0, -angle, 0);

  fill(0,0,0,20);
  ellipse(0,0,angletwo,angletwo);

}
