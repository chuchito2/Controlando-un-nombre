noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(":D");
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log(" leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function draw()
{
  background('#35DDC1');

  console.log(difference);
  document.getElementById("square_side").innerHTML = "El tamaño de fuente de texto será de = " + difference + "px";
  fill('#00C8D4');
  stroke('#0052A4');
  textSize(difference);
  text("Iker", 50, 400);
}
