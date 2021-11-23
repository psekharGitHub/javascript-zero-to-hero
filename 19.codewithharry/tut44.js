console.log('Welcome to Alarm Clock');

var audio = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

const time = document.getElementById('time');
const alarm = document.getElementById('alarm');

alarm.addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log('Set Alarm')
    alarmDate = new Date(time.value);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    if (alarmDate == 'Invalid Date' || timeToAlarm < 0) {
        time.classList.add('is-invalid');
    }
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
})