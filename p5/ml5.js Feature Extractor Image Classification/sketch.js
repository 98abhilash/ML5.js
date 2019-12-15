let mobilenet;

let video; 

let classifier;

let label = '';

let button1;
let button2;

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
			classifier.classify(gotResults);
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
    
	label = results;
	
	classifier.classify(gotResults);
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
	createCanvas(640,550);
	background(0);
	video = createCapture(VIDEO);
	//  img.crossOrigin = "Anonymous";
	  //img.hide();
	video.hide();
	mobilenet = ml5.featureExtractor('MobileNet', modelReady);
	classifier = mobilenet.classification(video, videoReady);
	
	var col = color(50, 23, 20, 50);

	button1 = createButton('Train first object');
	
	button1.style('background-color',col);
	button1.style('font-size','18px');
	button1.style('margin','20px');

	button1.mousePressed(function(){
		classifier.addImage('First Object');
	});
	
	button2 = createButton('Train second object');

	button2.style('background-color',col);
	button2.style('font-size','18px');
	button2.style('margin','20px');
	
	button2.mousePressed(function(){
		classifier.addImage('Second Object');
	});

	train = createButton('Training Button');
	
	train.style('background-color',col);
	train.style('font-size','18px');
	train.style('margin','20px');

	train.mousePressed(function(){
		classifier.train(whileTraining);
	});
	
}

function draw() 
{
	background(0);	
	image(video,0,0);
	fill(255);
	textSize(32);
	text(label,10,height-20);
}