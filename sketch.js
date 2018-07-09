var fireworks = [];
var gravity;
var time = 1;
var number = 1;
var add = 235;
var song;

function setup() {
  song = loadSound('payday.mp3');
  createCanvas(1350, 645);
  colorMode(RGB);
  gravity = createVector(0, 0.15);
  stroke(255);
  strokeWeight(4);
  background(0);
  textFont("sans-serif", 30);
}

function draw() {
  background(0);
  fire();
  coutUp();
}

function mousePressed() {
  song.play();
}

function fire() {
  colorMode(HSB);
  if (random(1) < 0.1) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function coutUp() {
	time += 1;
	noStroke();
	fill(255);
	text(number, windowWidth/5, windowHeight/5);
	if(number > 365) text("a year", windowWidth/5, windowHeight*2/5 - 50);
	if(number >= 600) text("days", windowWidth*2/5, windowHeight*2/5 - 50);	
	if(number >= 600) text("+   " + add, windowWidth*1.5/5, windowHeight*2/5 - 50);
	if(number <= 50) {if(time % 5 == 0) number += 1;}
	else if(number <= 100) {if(time % 4 == 0) number += 1;}
	else if(number <= 150) {if(time % 4 == 0) number += 3;}
	else if(number <= 200) {if(time % 3 == 0) number += 3;}
	else if(number <= 250) {if(time % 2 == 0) number += 3;}
	else if(number <= 400) {if(time % 1 == 0) number += 4;}
	else if(number <= 500) {if(time % 2 == 0) number += 3;}
	else if(number <= 550) {if(time % 3 == 0) number += 2;}
	else if(number < 600) {if(time % 7 == 0) number += 2;}
	else if(number < 605) {if(time % 20 == 0) {number += 1; add += 1;}}
	else if(number < 610 ) {if(time % 30 == 0) {number += 1; add +=1;}}
	else if(number <= 617) {if(time % 50 == 0) {number += 1; add += 1;}}
	else {number = 618; add = 253;}
}
