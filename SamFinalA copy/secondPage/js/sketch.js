// variable for the colour, size and location 
var u = document.getElementById("heart");

// The sketch size was based off of the first pages aesthetic structure. 
function setup() {
  createCanvas(windowWidth/2, 650);
  colorMode(HSB);
  smooth();
  noStroke();
  noLoop();
}

// Page background. 
function draw() {
  background(255);  
}

// Heart drawing function, the heart shape.
function heart(x, y, size) {
  beginShape(); 
  fill(310*x/width, 127, 255);
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

// The theme inspering this page, the random sizes, locations and colours of the hearts... -- >
// repersent the first phase in loves developmental process, the hearts signifying the seemingly randomness to love and attraction. 
// This was a cool manipulation of code found in the p5 referances, I was able to take the draw heart function from the original sketch and 
// Apply an onclick function to it, giving the view the ability to control the amount of heart displayed. I added a random colour aspect to it,
// Aesthetically it adds a colourful pop to the page, but it also signifies the idea that love can be random and come in all shapes, sizes, and significants. 

function mousePressed() {

 u = heart (random (windowWidth/2), random (650), random(255)); 
}

// clear the sketch, I felt like this was a cool touch to add to the page, allowing for multiple sketches without refeshing the page.  -- >
function keyPressed() { 

 if (key == " ") {
   background(255);
 }
}