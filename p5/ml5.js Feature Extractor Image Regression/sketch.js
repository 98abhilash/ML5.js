let mobilenet;

let video; 

let predictor;

let slider;

let value = 0;

let addButton;

//let button1;
//let button2;

let train;

function modelReady()
{
 	console.log("Model is ready");
  
}

function videoReady()
{
	
	console.log("Video is Ready");
	
}

function whileTraining(loss)
{
	if(loss == null)
		{
			console.log("Training Complete");
			predictor.predict(gotResults);
		}
	else
		{
			console.log(loss);
		}
}

function gotResults(error, results)
{
  if(error)
  {
    console.error(error);
  }
  else{
    
	value = results;
	
	predictor.predict(gotResults);
  }
}
//
//function imageReady()
//{
//  image(img,0,0,width,height);
//  
//}



function setup()
{
	createCanvas(640,400);
	background(0);
	video = createCapture(VIDEO);
	//  img.crossOrigin = "Anonymous";
	  //img.hide();
	video.hide();
	mobilenet = ml5.featureExtractor('MobileNet', modelReady);
	predictor = mobilenet.regression(video, videoReady);
	
	slider = createSlider(0,1,0.5,0.01);
	
	
	addButton = createButton("Add Image");
	addButton.mousePressed(function() {
	{
		predictor.addImage(slider.value());	
		
	}
	
	});
	train = createButton('Training Button');
	
	train.mousePressed(function(){
		predictor.train(whileTraining);
	});
	
}

function draw() 
{
	background(0);	
	image(video,0,0);
	fill(0,255,0);
	rect(value*width,height/2,50,50);
}