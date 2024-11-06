
var IsRunning = false;
var stateId = 0;
var timer;
var correct = 0;

function Start(){
    IsRunning = true;
    timer = setTimeout(Stop, 20000);
    stateId = Next();
}

function Stop(){
    IsRunning = false;
    clearTimeout(timer);
    document.getElementById('displayer').innerHTML = 'Átlagos reakcióidő: ' + correct/20 + ' másodperc';
}

function Arrow(dir){
    if(stateId == dir) 
        { 
            stateId = Next(); 
            correct = correct + 1
        }
    
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