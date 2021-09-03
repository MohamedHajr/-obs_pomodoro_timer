const milliSecondsInaMinute = 60 * 1000;
const studyDuration = milliSecondsInaMinute * 30;
const restDuration = milliSecondsInaMinute * 10;
const sessions = 6

//Titles
const breakTitle = "Break Time"
const studyTitle = "Pomodoro"


let interval;
let timeLeft = studyDuration;
let count = 0;
let studyStarted = true;


function stopCountDown() {
  clearInterval(interval)
}

function updateTimeString() {
  const minutes = Math.floor(timeLeft / milliSecondsInaMinute)
  const seconds = Math.floor(timeLeft / 1000) % 60
  const milliseconds = Math.floor(timeLeft  / 100) % 20

  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0') + ":" 
  document.getElementById("seconds").innerHTML =seconds.toString().padStart(2, '0') + ":"
  document.getElementById("milliseconds").innerHTML =  milliseconds.toString().padStart(2, '0');


}

function updateCountdown() {
  timeLeft = timeLeft - 100;

  updateTimeString();

  if(timeLeft <= 1000) {
    stopCountDown()
    studyStarted = !studyStarted   
    startCountDown()
  }
}

function startCountDown() {
  if(studyStarted){
    count = count + 1 
    timeLeft = studyDuration
    document.getElementById("title").innerHTML = studyTitle
    document.getElementById("counter").innerHTML = count
  } else {
    timeLeft = restDuration
    document.getElementById("title").innerHTML = breakTitle
    document.getElementById("counter").innerHTML = ""
  }

  interval = setInterval(updateCountdown, 100);
}

startCountDown()

