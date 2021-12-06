
var s = document.getElementById("background");

function setup() { 
	createCanvas (660, 610); 
	background(200,192,255); 
}

function draw() { 

	// Head & Ears, these are just circles plcaed in the locations on the canvas 
	fill(0, 0, 0)
	ellipse(500, 150, 200, 220); // xPos, yPos, width, height (position by center)
	ellipse(150, 150, 200, 220);
	ellipse(320, 350, 350, 350);
	

	// Skin, a combination of circles and ovals layed overtop of the black head and ears (colour changed)
	fill(232, 191, 160)
	noStroke();
	ellipse(260, 320, 140, 250);
	ellipse(380, 320, 140, 250);
	ellipse(365, 237, 115, 100);
	ellipse(275, 237, 115, 100);

	// Eyes, three ellipses layered over one another to create the appearance of Mickey's eyes 
	fill(0, 0, 0) 
	ellipse(287, 315, 40, 110);

	fill(257, 255, 255) 
	ellipse(287, 316, 30, 100);

	fill(0, 0, 0) 
	ellipse(290, 347, 20, 45);



	fill(0, 0, 0) 
	ellipse(348, 315, 40, 110);

	fill(253, 255, 255) 
	ellipse(348, 316, 30, 100);

	fill(0, 0, 0) 
	ellipse(345, 347, 20, 45);

	
	// curve
// face, this is the bottom half of Mickey's face,cthis shape has a wide curve oriented towards the bottomm on the Y axis 
	fill(232, 191, 160)
	beginShape();
		curveVertex(200, 375);
		curveVertex(200, 375);
		 curveVertex(131, 430);
		curveVertex(260, 530);
		curveVertex(370, 530);
		 curveVertex(508, 440);
		curveVertex(480, 375);
		curveVertex(480, 375);
	endShape();

// Cheek, two ellipses were layed over one another to create the effect of the stroke around the top round part of the cheeks
	strokeWeight(4)
	stroke(0, 0, 0);
	ellipse(481, 399, 85, 105);
	noStroke();
	ellipse(476, 402, 85, 107);

	strokeWeight(4)
	stroke(0, 0, 0);
	ellipse(163, 399, 85, 105);
	noStroke();
	ellipse(168, 402, 85, 107);

// Cheek outline, this outlines from the ball of each cheek and under the chin 
	noFill()
	strokeWeight(4)
	stroke(0, 0, 0); 
	beginShape();
		curveVertex(135, 438);
		curveVertex(135, 438);
			curveVertex(209, 505);
		curveVertex(275, 535);
		curveVertex(345, 535);
			curveVertex(427, 506);
		curveVertex(509, 438);
		curveVertex(509, 438);
	endShape();

// Chin, this shape has a curve oriented towards the bottomm on the Y axis 
	noStroke();
	fill(232, 191, 160) 
	beginShape();
		curveVertex(225, 500);
		curveVertex(225, 500);
		curveVertex(275, 560);
		curveVertex(345, 560);
		curveVertex(405, 500);
		curveVertex(405, 500);
	endShape();

// Chin line
	noFill()
	strokeWeight(4)
	stroke(0, 0, 0); 
	beginShape();
		curveVertex(230, 500);
		curveVertex(230, 500);
		curveVertex(275, 560);
		curveVertex(345, 560);
		curveVertex(400, 500);
		curveVertex(400, 500);
	endShape();

// mouth, curved shape representing the black of Mickey's mouth 
	noStroke();
	fill(0, 0, 0) 
	beginShape();
		curveVertex(225, 440);
		curveVertex(225, 440);
		curveVertex(275, 520);
		curveVertex(345, 520);
		curveVertex(400, 440);
		curveVertex(400, 440);
	endShape();

// Top Lip, shape layered over mouth to create the top lip, this one has a sharper point 
// This is done by indicating that the two most bottom curve point are closer together 
	noStroke();
	fill(232, 191, 160) 
	beginShape();
		curveVertex(200, 430);
		curveVertex(200, 430);
		curveVertex(285, 470);
		curveVertex(335, 470);
		curveVertex(430, 430);
		curveVertex(430, 430);
	endShape();

// Nose Line, layered above the skin and positioned under the eyes 
	stroke(0, 0, 0)
	strokeWeight(4)
	fill(232, 191, 160) 
	beginShape();
		curveVertex(250, 380);
		curveVertex(250, 380);
		curveVertex(280, 368);
		curveVertex(342, 368);
		curveVertex(375, 380);
		curveVertex(375, 380);
	endShape();

//  Upper lip line, creates Mickey's smile 
	noFill()
	beginShape();
		curveVertex(200, 420);
		curveVertex(200, 420);
		curveVertex(275, 470);
		curveVertex(360, 470);
		curveVertex(425, 420);
		curveVertex(425, 420);
	endShape();


// Nose, ellipse layed/ positioned on top of the other shapes 
	fill(0, 0, 0) 
	ellipse(313, 410, 100, 60);


// Smile lines, these are the two small curved lines on either side of the smile, it was trickey to position these
// I have to reorient the vertexs completely, this took some trial and error.    
	noFill()
	beginShape();
		curveVertex(182, 430);
		curveVertex(182, 430);
		curveVertex(192, 420);
		curveVertex(200, 417);
		curveVertex(220, 415);
		curveVertex(220, 415);
	endShape();

	beginShape();
		curveVertex(398, 420);
		curveVertex(398, 420);
		curveVertex(418, 418);
		curveVertex(428, 418);
		curveVertex(444, 428);
		curveVertex(444, 428);
	endShape();


// Tounge, three shapes layed ontop of of another  
	noStroke();
	fill(255, 41, 33)
	beginShape();
		curveVertex(310, 505);
		curveVertex(310, 505);
		 curveVertex(315, 494);
		  curveVertex(330, 492);
		 curveVertex(345, 496);
		curveVertex(354, 505);
		curveVertex(354, 505);
	endShape();

// WithLine
	stroke(0, 0, 0)
	strokeWeight(4)
	fill(255, 41, 33)
	beginShape();
		curveVertex(265, 505);
		curveVertex(265, 505);
		 curveVertex(275, 497);
		  curveVertex(290, 493);
		 curveVertex(310, 496);
		curveVertex(320, 505);
		curveVertex(320, 505);
	endShape();

	noStroke();
	fill(255, 41, 33) 
	beginShape();
		curveVertex(267, 505);
		curveVertex(267, 505);
		curveVertex(278, 516);
		 curveVertex(310, 525);
		curveVertex(343, 516);
		curveVertex(354, 505);
		curveVertex(354, 505);
	endShape();

}

function mousePressed() {

	// changes the colour of the background, (RGB set to random) -- >

	s = background (random (255), random (255), random(255)); 
}


function keyPressed() { // clear the page, sets the background back to the original colour -- >

	if (key == " ") {
		background(200,192,255);
	}
}


