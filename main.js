nosex =0;
nosey =0;
function setup(){
canvas=createCanvas(300,300);
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}
function preload(){
clown = loadImage('https://i.postimg.cc/zBvQJZTs/download-1.png')
}
function draw(){
image(video,0,0,300,300)
//fill(0, 0, 255)
//stroke(255,0,0)
//circle(nosex,nosey,20)
image(clown,nosex,nosey,30,30)
}
function take_snapshot(){
save("myselfie.png")
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function gotPoses(results){
if(results.length>0){
    console.log(results)
    console.log("nose x="+nosex)
    console.log("nose x="+nosey)
    nosex =results[0].pose.nose.x-10;
    nosey =results[0].pose.nose.y+10;

    
}
}