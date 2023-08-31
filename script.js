const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let countdown;
let totalTime = 1 * 60 * 60; // 5 minutes in seconds
let timeLeft = totalTime;

function updateTimer() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  hoursElement.textContent = hours < 10 ? "0" + hours : hours;
  minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
}

function startTimer() {
  countdown = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(countdown);
    }
  }, 1000);
}

startButton.addEventListener("click", () => {
  startTimer();
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener("click", () => {
  clearInterval(countdown);
  startButton.disabled = false;
  stopButton.disabled = true;
});

resetButton.addEventListener("click", () => {
  clearInterval(countdown);
  timeLeft = totalTime;
  updateTimer();
  startButton.disabled = false;
  stopButton.disabled = true;
});

updateTimer();
stopButton.disabled = true;
