let mobilenet;

let img; 

function modelReady()
{
  console.log("Model is ready");
  mobilenet.predict(img, gotResults);
}

function gotResults(error, results)
{
  if(error)
  {
    console.error(error);
  }
  else{
    console.log(results);
  }
}
 
function imageReady()
{
  image(img,0,0,width,height);
  
}


function setup()
{
  createCanvas(640,480);
  background(0);
  img = createImg('images/image2.jpg', imageReady);
//  img.crossOrigin = "Anonymous";
  img.hide();
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);

}

