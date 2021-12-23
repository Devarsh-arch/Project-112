prediction1= "";
prediction2= "";
Webcam.set({
    height: 300,
    width:350,
    image_format: 'png',
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach("#camera");
console.log('ml5 version', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6srd8Bmu-/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'">'
    });
}
function Check(){
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    if(results[0].label == "Good"){
        document.getElementById("prediction_para_1").innerHTML= "&#128077;";
        prediction1= "Meaning Of Prediction 1 Is All The Best";
        speak();
    }
    else if(results[0].label == "Bad"){
        document.getElementById("prediction_para_1").innerHTML= "&#128078;";
        prediction1= "Meaning Of Prediction 1 Is That You Didn't Do Something Good";
        speak();
    }
    else if(results[0].label == "Victory"){
        document.getElementById("prediction_para_1").innerHTML= "&#9996;";
        prediction1= "Meaning Of Prediction 1 Is That Was A Marvelous Victory";
        speak();
    }
    else if(results[0].label == "Amazing"){
        document.getElementById("prediction_para_1").innerHTML= "&#128076;";
        prediction1= "Meaning Of Prediction 1 Is This Is Looking Amazing";
        speak();
    }
    else if(results[0].label == "High-Five"){
        document.getElementById("prediction_para_1").innerHTML= "&#9995;";
        prediction1= "Meaning Of Prediction 1 Is You/Someone Wants To Give You/Someone A High-Five";
        speak();
    }
    if(results[1].label == "Good"){
        document.getElementById("prediction_para_2").innerHTML= "&#128077;";
        prediction2= "Meaning Of Prediction 2 Is All The Best";
        speak();
    }
    else if(results[1].label == "Bad"){
        document.getElementById("prediction_para_2").innerHTML= "&#128078;";
        prediction2= "Meaning Of Prediction 2 Is That You Didn't Do Something Good";
        speak();
    }
    else if(results[1].label == "Victory"){
        document.getElementById("prediction_para_2").innerHTML= "&#9996;";
        prediction2= "Meaning Of Prediction 2 Is That Was A Marvelous Victory";
        speak();
    }
    else if(results[1].label == "Amazing"){
        document.getElementById("prediction_para_2").innerHTML= "&#128076;";
        prediction2= "Meaning Of Prediction 2 Is This Is Looking Amazing";
        speak();
    }
    else if(results[1].label == "High-Five"){
        document.getElementById("prediction_para_2").innerHTML= "&#9995;";
        prediction2= "Meaning Of Prediction 2 Is You/Someone Wants To Give You/Someone A High-Five";
        speak();
    }
}
function speak(){
    var synth= window.speechSynthesis;
    speak_this_1= prediction1;
    speak_this_2= prediction2;
    var UtterThis= new SpeechSynthesisUtterance(speak_this_1 + speak_this_2);
    UtterThis.rate= 0.5;
    synth.speak(UtterThis);
}