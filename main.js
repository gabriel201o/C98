var SpeechRecognition =window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}


recognition.onresult = function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;

    document.getElementById("text_box").innerHTML = Content;
    console.log(Content);
}