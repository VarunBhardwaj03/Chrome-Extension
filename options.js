
var b = document.getElementById('btn');
if(b){
b.addEventListener('click', tim);}
function tim() {
var strtMin = window.prompt("Enter total time");


let time = strtMin * 60;

const countdownEl = document.getElementById('countdown');


var lol = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;


        countdownEl.innerHTML = `${minutes}:${seconds}`;

        //countdownEl.innerHTML = "Take a chill pill !!";


    time--;
if(time<0){
      chrome.runtime.sendMessage({
      msg: "Time's UP!",
      data: {
        subject: "Loading",
        content: "Just completed!"
      }
      });
      clearInterval(lol);

}

}
}

//alarm.js


const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
          chrome.runtime.sendMessage({
          msg: "Alarm",
          data: {
            subject: "Loading",
            content: "Alarm completed!"
          }
          });
        }, timeToAlarm);
    }
}

// block all websites once the timer is over
