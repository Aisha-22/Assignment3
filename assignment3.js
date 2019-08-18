let timer = document.getElementById("myTimer");
let start = document.getElementById("myPlay");
let stop = document.getElementById("myStop");
let moves = document.getElementById("myMoves");

// let myMiliseconds = 0;
let mySeconds = 0;
let myMinute = 0;
let myHour = 0;
let myTime;
var myMoves = 0;

//get the current time from system
function getTheCurrentTime(){
    currentDay = new Date();
    currentTime = currentDay.getHours() + ":" + currentDay.getMinutes() + ":" + currentDay.getSeconds() + ":" + currentDay.getMilliseconds();
    console.log(currentTime);
    return currentTime
}

document.getElementById("theTime").innerHTML = "The time is " + getTheCurrentTime();
function increaseTimer() {
    mySeconds++;
    if (mySeconds >= 60) {
        mySeconds = 0;
        myMinute++;
        if (myMinute >= 60) {
            myMinute = 0;
            myHour++;
        }
    }
    
    timer.textContent = (myHour ? (myHour > 9 ? myHour : "0" + myHour) : "00") + ":" + (myMinute ? (myMinute > 9 ? myMinute : "0" + myMinute) : "00") + ":" + (mySeconds > 9 ? mySeconds : "0" + mySeconds);

    //  timerout();
}
function timerout() {
   
 myTime = setInterval(increaseTimer, 499);
}



/* play button to start timer */


function startTimer() {
    myMoves++
    var myMovesNumber = document.getElementById("myMoves").innerHTML = myMoves;
    console.log('Number of moves is ' + myMoves);
    // myMovesNumber.innerHTML = myMoves++;
     timerout();
     document.getElementById('stopOrStopText').innerHTML = "THE TIMER HAS STARTED";
     document.getElementById("timerStartTime").innerHTML = "The timer started at " + getTheCurrentTime();
     
    
}

/* pause button to stop timer*/
function pauseTimer() {
    clearTimeout(myTime);
    document.getElementById('stopOrStopText').innerHTML = "THE TIMER WAS PAUSED";
}

/* Clear  and stop button to stop timer and reset timer*/
function resetTimer() {
    clearTimeout(myTime);
    timer.textContent = "00:00:00";
    moves.textContent = "0";

    mySeconds = 0; myMinute = 0; myHour = 0; myMoves = 0;
    document.getElementById('stopOrStopText').innerHTML = "THANKS FOR PLAYING";
    document.getElementById("timerStopTime").innerHTML = "The timer stopped at " + getTheCurrentTime();
}