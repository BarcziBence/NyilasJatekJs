
var IsRunning = false;
var stateId = 0;
var correct = 0;
var incorrect = 0;
var timer;

function Start(){
    IsRunning = true;
    timer = setTimeout(Stop, 20000);
    stateId = Next();
    correct = 0;
    incorrect = 0;
}

function Stop(){
    IsRunning = false;
    clearTimeout(timer);
    document.getElementById('displayer').innerHTML = 'Átlagos reakcióidő: ' + Number.parseFloat(20/correct).toFixed(2) + ' másodperc<br>Helyes találatok: ' + correct + '<br>Helytelen találatok: ' + incorrect;
}

function Arrow(dir){
    if(stateId == dir) { correct = correct + 1; }
    else {incorrect = incorrect + 1; }
    stateId = Next(); 
    
}

function Next(){
    if(IsRunning == true){
        var value = Math.floor(Math.random() * 4 ) + 1;
    switch(value){
        case 1:
            document.getElementById('displayer').innerHTML = 'UP';
            break;
        case 2:
            document.getElementById('displayer').innerHTML = 'LEFT';
            break;
        case 3:
            document.getElementById('displayer').innerHTML = 'DOWN';
            break;
        case 4:
            document.getElementById('displayer').innerHTML = 'RIGHT';
            break;
    }
    return value
    }
}

document.addEventListener(
    "keydown",
    (event) => {
        var keyName = event.key;
        switch(keyName){
            case "ArrowUp":
                Arrow(1)
                break;
            case "ArrowLeft":
                Arrow(2)
                break;
            case "ArrowDown":
                Arrow(3)
                break;
            case "ArrowRight":
                Arrow(4)
                break;
        }
    }
)


  
