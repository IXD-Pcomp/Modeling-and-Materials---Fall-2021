let angle = 0;

function setup() {
  createCanvas(720, 400);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(102);
  translate(200,200);
    rotate(angle);
  //Draw a white rectangle in the middle of the screen  
  fill(255);
  rect(0, 0, 100,100);
    angle += 1;
    // Draw a black rectangle
  fill(0);
  rect(120, 120, 100,100);
}