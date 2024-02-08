
let timerElement = document.getElementById('button');
let startButton = document.getElementById('start');

let isPomodoro = true;
let isRunning = false;
let minutes, seconds;
let timerInterval;

function updateTimer() {
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formatteSeconds = String(seconds).padStart(2, '0');
    timerElement.textContent = '${formattedMinutes}:${formattedSeconds';

    if (minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        isRunning = false;

        if (isPomodoro) {
            startPauseTimer();
        } else {
            startPomodoroTimer();
        }
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
    }
}

function startPomodoroTimer() {
    isPomodoro = true;
    minutes = 25;
    seconds = 0;
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);

    startButton.classList.remove('timer-active-pause');
    timerElement.innerText = 'Concentrati ora';
    updateTimer();
}

function startPauseTimer() {
    isPomodoro = false;
    minutes = 10;
    seconds = 0;
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);

    startButton.classList.add('timer-active-pause');
    timerElement.innerText = 'Riposati ora';
    updateTimer();
}

function startTimer() {
    if (!isRunning) {
        startButton.classList.add('timer-active-tomato');
        startPomodoroTimer();
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isPomodoro = true;
    startPomodoroTimer();
}

startButton.addEventListener('click', startTimer);