noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 420);
    canvas.position(560, 120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#c71585");
    fill('#89cff0');
    stroke('#89cff0');
    text(noseX, noseY, difference,);
    textSize(30)
    document.getElementById("textsites").innerHTML = "width and height of the text will be ="+difference+"px";
}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX ="+ leftWristX + "rightWristX =" + rightWristX + "Difference =" + difference);
    }
}
