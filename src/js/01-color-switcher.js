const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeBodyBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onStartBtnClick() {
  if (!intervalId) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(changeBodyBgColor, 1000);
  }
}

function onStopBtnClick() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

stopBtn.disabled = true; 




// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');

// let intervalId = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

// function changeBodyBgColor() {
//   document.body.style.backgroundColor = getRandomHexColor();
// }

// function onStartBtnClick() {
//   if (!intervalId) {
//     startBtn.disabled = true;
//     intervalId = setInterval(changeBodyBgColor, 1000);
//   }
// }

// function onStopBtnClick() {
//   if (intervalId) {
//     clearInterval(intervalId);
//     intervalId = null;
//     startBtn.disabled = false;
//   }
// }

// startBtn.addEventListener('click', onStartBtnClick);
// stopBtn.addEventListener('click', onStopBtnClick);
