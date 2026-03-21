const shiftButton = document.getElementById('shiftToggle');
const breakButton = document.getElementById('breakToggle');
const display = document.getElementById('timeDisplay');

let startTime = null;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 1000);
    isRunning = true;
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = null;
    elapsedTime = 0;
    isRunning = false;
    updateDisplay();
}


shiftButton.addEventListener("click", () => {
    const pressed = shiftButton.getAttribute('aria-pressed') === 'true';
    const shiftState = !pressed;

    shiftButton.setAttribute('aria-pressed', shiftState);
    shiftButton.textContent = shiftState ? "End Shift" : "Start Shift";

    breakButton.disabled = !shiftState;

    if (shiftState) {

        resetTimer();
        startTimer();
    } else {
       
        resetTimer();

        breakButton.setAttribute('aria-pressed', 'false');
        breakButton.textContent = "Start Break";
        shiftButton.disabled = false;
    }
});

breakButton.addEventListener("click", () => {
    const pressed = breakButton.getAttribute('aria-pressed') === 'true';
    const breakState = !pressed;

    breakButton.setAttribute('aria-pressed', breakState);
    breakButton.textContent = breakState ? "End Break" : "Start Break";

    if (breakState) {
        pauseTimer();
        shiftButton.disabled = true;
    } else {
        startTimer();
        shiftButton.disabled = false;
    }
});