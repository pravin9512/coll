var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
       
}
 
function speak(){
    var synth=window.speechSynthesis;
    data="taking your selfie in 5 seconds"
    var utter=new SpeechSynthesisUtterance(data)
    synth.speak(utter)
    Webcam.attach("camera")
    setTimeout(function() {
        snapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:100
});
camera=document.getElementById("camera")
 
function snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("selfie").innerHTML="<img id='selfieimg' src="+data_uri+">";
});
}

function save(){
    anchor=document.getElementById("link");
    img=document.getElementById("selfieimg").src;
    anchor.href=img
    anchor.click()
}

