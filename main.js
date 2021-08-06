noseX = 0;
noseY = 0;

function preload()
{
    filter_mustache = loadImage("https://i.postimg.cc/N0JFs8vV/mustache-removebg-preview.png");
}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    video.size(300, 300);

    posenet = ml5.poseNet(video, modelLoaded);

    posenet.on('pose', gotPosed);
}
function modelLoaded()
{
    console.log("Posenet is initialized!")
}

function gotPosed(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(filter_mustache, noseX-170, noseY-50);
}
function save_image()
{
    save("mustache-filter")
}