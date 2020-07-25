//make the variables for the hour,minute and seconds
var hr,min,sec;

//make the variables for their angles
var hrAngle,minAngle,secAngle;

function setup() {
  createCanvas(500,500);

  //set the angleMode to degrees
  angleMode(DEGREES);

  
}

function draw() {

  background(0);  

  //translate 0 to 200(to set the range in the map) and give a rotation value
  translate(200,200);
  rotate(-90);

  //give the time variables the predefined values
  hr = hour();
  min = minute();
  sec = second();
  

  //writing the rotation algorithm
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);
  //minAngle = map(minute)

  //making the seconds arm {
  push();
  //rotating the hand on the basis of the seconds
  rotate(secAngle);
  stroke(0,255,50);
  strokeWeight(5);
  line(0,0,75,0);
  pop();
  // }

  //making the minutes arm {
  push();
  rotate(minAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,90,0);
  pop();
// }

  //making the hour arm {
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(9);
  line(0,0,60,0);
   pop();
// }

/*making the arcs (make sure not to fill the map or else the arms will not be visible)*/

strokeWeight(10);
noFill();

//the seconds arc
stroke(0,255,50);
arc(0,0,250,250,0,secAngle);

//the minutes arc
stroke(255,0,0);
arc(0,0,275,275,0,minAngle);

//the hour arc
stroke(0,0,255);
arc(0,0,300,300,0,hrAngle);

//print the time in the console
print(hr);
print(min);
print(sec);

//and....VOILA!!! Your clock is made!
  
 
}