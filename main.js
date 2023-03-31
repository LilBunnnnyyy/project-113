function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    y=createCapture(VIDEO);
    y.hide();
}
function draw(){
    image(y,150,120,320,240);
    fill("red");
    stroke("red");
    circle(100,80,80);
    fill("red");
    stroke("red");
    circle(550,80,80);
    fill("red");
    stroke("red");
    circle(550,400,80);
    fill("red");
    stroke("red");
    circle(100,400,80);
    fill("green");
    stroke("green");
    rect(140,70,370,20);
    fill("green");
    stroke("green");
    rect(140,390,370,20);
    fill("green");
    stroke("green");
    rect(90,120,20,240);
    fill("green");
    stroke("green");
    rect(540,120,20,240);
}
function take_snapshot(){
save("pic.png");
}