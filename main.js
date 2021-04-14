function next(){
    m = document.getElementById("dropdown").value;
    if (m == "Mustache"){
        window.location = "boy.html";
    }else {
        window.location = "girl.html";
    }
}
function preload(){

}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
}

function draw(){

}

function save1(){
    save('filter.png');
}