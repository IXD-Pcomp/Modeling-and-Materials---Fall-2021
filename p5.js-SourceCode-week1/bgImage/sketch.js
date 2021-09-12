let bg;
let y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('images/img7.jpg');
  createCanvas(480,418);
}

function draw() {
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++;
  if (y > height) {
    y = 0;
  }
}
noStroke();
let c = color(0, 126, 255, 102);
fill(c);
rect(15, 15, 35, 70);
let value = alpha(c); // Sets 'value' to 102
fill(value);
rect(50, 15, 35, 70);