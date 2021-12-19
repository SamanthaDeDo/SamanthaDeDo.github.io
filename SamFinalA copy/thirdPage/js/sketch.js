var u = document.getElementById("star");
var star;

function setup(){
    createCanvas(windowWidth/2, 650);
    noCursor();
    rectMode(CENTER);

  star = { //star element to define behavior of shooting star. 
  starX : mouseX,
  starY : mouseY,
  size : random(4,12)
}

}

function draw(){
    noStroke();
    background(20,35,50,80);

  fill(255);

  push();
    //Draw shooting star, push and pop was applied to keep the fill() from affecting the rest of the sketch. 
  ellipseMode(CENTER); 
  fill(r, g, b); // Colour of the star is set to random. 
  ellipse(star.starX, star.starY, star.size, star.size);
  star.starX = star.starX+1; //Move shoouting star. 
  star.starY = star.starY-1;
  star.size = star.size - 0.04 //Decreases the size of shooting star and let it fade away.
  pop();

    // Moon shape and its smaller ellipse components, to add texture to the moon. All styled the same and positioned accordengly. 
    ellipse(590,200, 180, 180);

    push()
    stroke(10, 10);
    fill(15, 10);
    ellipse(590,200, 10, 10);
    ellipse(630,200, 15, 15);
    ellipse(530,200, 10, 10);
    ellipse(590,260, 15, 15);
    ellipse(570,160, 10, 10);
    ellipse(610,150, 20, 20);
    ellipse(615,130, 10, 10);
    ellipse(570,190, 10, 10);
    ellipse(560,230, 13, 13);
    ellipse(620,235, 13, 13);
    ellipse(530,155, 20, 20);
    ellipse(539,255, 20, 20);
    ellipse(639,255, 14, 14);
    ellipse(645,175, 14, 14);
    ellipse(650,208, 14, 14);
    pop()

// Taurus constellation - this is made up of a series of lines and ellipeses. This was mainly a challange because it required a lot of trial 
// and error when plotting the x and y positions. 
    fill (250, 10);
    noStroke();
    ellipse(170,108, 3, 3);
    ellipse(100,148, 5, 5);

    ellipse(240,200, 4, 4);
    ellipse(180,240, 3, 3);

    ellipse(250,230, 5, 5);
    ellipse(220,265, 2, 2);

    ellipse(255,275, 4, 4);

    ellipse(300,325, 2, 2);

    ellipse(420,390, 4, 4);
    ellipse(415,375, 3, 3);

    stroke(255, 2);
    line(170, 108, 240, 200);
    line(100,148, 180, 240);

    line(250,230, 240, 200);
    line(220,265, 180, 240);

    line(250,230, 255,275);
    line(220,265, 255,275);

    line(300,325, 255,275);

    line(300,325, 415,375);
    line(420,390, 415,375);

    // Makes the spaceship appear within the sketch. The page is set to noCursor(), allowing the spaceshoip to act as a mouse for the view.
   spaceShip();

   // Starry sky backgroung, displaying a series of ellipses at random sizes to be able to emulate a night sky. 
   // The background refreshing gives the illusion that the lights are twinckeling, however they are just being constantly redrawn. 
    var sparkle = {
        locationX: random(width),
        locationY: random(height),
        size: random(1, 4)
    }

    fill (250);
    noStroke();
    ellipse(mouseX, mouseY, sparkle.size, sparkle.size);
    ellipse(sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
}


 // change the colour (randomize) and shooting star generator -- >
 // The stars are set to appear at a random position within the shetch and are set to a spacific size range.
function mousePressed() {
star = {
  starX : random(width),
  starY : random(height),
  size : random(1,10)
}
 r = random(255);
 g = random(255);
 b = random(255);
 u = star (random (255), random (255), random(255)); 
}

let r;
let g;
let b; 

// this is a shape constricted of many parts, dipicting a rocket ship, the shapes have been positioned in relation to the cursor. 
// Each shape is positioned and styled accordingly. #pinkrocketship 
function spaceShip() {
  beginShape();
  background(0,10);
  fill(214, 73, 139); 
  curveVertex(mouseX+15, mouseY-33);
  curveVertex(mouseX+15, mouseY-33);
  curveVertex(mouseX, mouseY-50);
  curveVertex(mouseX-15, mouseY-33);
  curveVertex(mouseX-15, mouseY-33);
  endShape();
  fill(220);
  rectMode(CENTER);
  rect (mouseX,mouseY,30,60);
  fill(224, 18, 113);
  ellipse (mouseX,mouseY-15,15,15);
  fill(224, 200, 211);
  ellipse (mouseX,mouseY-15,12,12);
  fill(224, 18, 113);
  triangle(mouseX-15,mouseY+35,mouseX-20,mouseY+50,mouseX-5,mouseY+35);
  triangle(mouseX+15,mouseY+35,mouseX+20,mouseY+50,mouseX+5,mouseY+35)
}  
