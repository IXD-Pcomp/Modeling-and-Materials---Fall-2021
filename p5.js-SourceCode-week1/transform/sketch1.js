function setup() {
  createCanvas(720, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(102);
  
  //Draw a white rectangle in the middle of the screen  
  fill(255);
  
  rect(width/2, height/2, 100,100);

  translate(50,50);
  
    // Draw a black rectangle
  fill(0);
  
  rect(width/2, height/2, 100,100);
}
