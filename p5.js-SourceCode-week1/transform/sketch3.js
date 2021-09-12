let angle = 0;

function setup() {
  createCanvas(720, 400);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
    background(102);
push();
    translate(200,200);
    rotate(angle);
    //Draw a white rectangle in the middle of the screen  
    fill(255);
    rect(0, 20, 100,100);
    angle += 1;
pop();
    // Draw a black rectangle
    translate(300,100);
    fill(0);
    rotate(angle-10);
    rect(120, 120, 100,100);
    
}