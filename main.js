prediction_1="";
prediction_2="";
Webcam.set({
height:300,
width:350,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri) 
    { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }
    );
}
console.log("ml5 version-",ml5.version);
classifier=ml5.imageClassifier("",modelLoaded);
function modelLoaded(){
    console.log("model is Loaded");
}
function speak(){
    var synth=window.SpeechSynthesis;
    speak_data_1="THE FIRST PREDICTION IS "+prediction_1;
    speak_data_2="AND THE SECOND PREDICTION IS "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}