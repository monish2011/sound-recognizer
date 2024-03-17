function startClassification(){
    navigator.mediaDevices.getUserMedia({audio});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/m9o7LoqXM/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}