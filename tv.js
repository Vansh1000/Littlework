img = "";

function preload(){
    img = loadImage("tv.jpeg")
}

function setup(){
canavas = createCanvas(640, 420);
canavas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("statuss").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
console.log("loaded");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(){
if (error){
    console.error(error);
}
console.log(results);
}

function draw(){
    image(img, 0, 0,640, 420);
    fill("#FF0000");
    text("TVV", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350)
}

function homepage(){
    window.location = "page1.html";
}