var child, parent, database;
var appState = "start", start;
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    if(appState == "start"){
        start = new Start();
    }
}
function draw(){
    
}