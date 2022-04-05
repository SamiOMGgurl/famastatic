var canvas =
document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rover_image = "roveer.jpg";
var rover_width = 50;
var rover_height = 50;
var rover_x = 100;
var rover_y= 100;
var background_image = "mars1.jpg";

var background_imgTag;
var rover_imgTag;


function add()
{
  background_image = new Image();
background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
background_imgTag.src = background_image; // load image

  rover_imgTag = new Image(); //defining a variable with a new image
rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
rover_imgTag.src = rover_image; // load image
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == "38") {
  up();
  console.log("up");
}
if (keyPressed == "40") {
  down();
  console.log("down");
}
if (keyPressed == "37") {
  left();
  console.log("left");
}
if (keyPressed == "39") {
  right();
  console.log("right");
}
}
uploadBackground();
uploadrover();
