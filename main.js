music=""
music2=""

leftHandX = 0;
leftHandY = 0;

rightHandX = 0;
rightHandY = 0;

scoreRightHand = 0;
scoreLeftHand = 0;

function preload()
{
    music= loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose',gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);

}

function modelLoaded() 
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftHandX = results[0].pose.leftHand.x;
        leftHandY = results[0].pose.leftHand.y;
        console.log("leftHandX = "+leftHandX +"leftHandY = "+leftHandY);

        rightHandX = results[0].pose.rightHand.x;
        rightHandY = results[0].pose.rightHand.y;
        console.log("rightHandX = "+rightHandX +"rightHandY = "+rightHandY);

    }
}