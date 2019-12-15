let video;

function setup()
{
    createCanvas(320,240);
    video = createCapture(VIDEO);
    video.size(320,240);
    let features: any
    features = ml5.featureExtractor('MobileNet',modelReady);
}

function draw()
{
    image(video,0,0);
}

function modelReady()
{
    console.log("model ready");
}

function mousePressed()
{
    const logits = features.infer(video);
    console.log(logits);
}