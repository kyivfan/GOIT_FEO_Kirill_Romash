var hour = document.querySelector('.hours');
var min = document.querySelector('.mins');
var sec = document.querySelector('.secs');
var mil = document.querySelector('.millisecs');

var start = document.querySelector('.start');
var pause = document.querySelector('.pause');
var clear = document.querySelector('.clear');
var flag = false;

// задаем стартовую точку даты
function startTimer() {
 if(!flag) initialDate = new Date;
}

//получаем дату
function getTime() {
  var currentDate = new Date;
  timer = new Date (currentDate - initialDate);

  milliseconds = timer.getMilliseconds();
  seconds = timer.getSeconds();
  minutes = timer.getMinutes();
  hours = timer.getUTCHours();

  if (milliseconds < 100) {
      milliseconds = '0' + milliseconds;
  }
  if (seconds < 10) {
      seconds = '0' + seconds;
  }
  if (minutes < 10) {
      minutes = '0' + minutes;
  }
  if (hours < 10) {
      hours = '0' + hours;
  }
}

//отображаем таймер
function counter() {
  getTime();
  mil.innerHTML = milliseconds;
  sec.innerHTML = seconds;
  min.innerHTML = minutes;
  hours.innerHTML = hours;
}

// интервал для показа
function displayTimer() {
  timerId = setInterval(counter, 1);
}

//пауза
function pauseTimer() {
  clearInterval(timerId);
  getTime();
  flag = true;
}

// показываем-прячем кнопки старт/стоп
function displayBtnPause() {
  start.style.display = 'none';
  pause.style.display = 'block';
}

function displayBtnStart() {
  start.style.display = 'block';
  pause.style.display = 'none';
}

// сброс таймера
function clearTimer() {
  flag = false;
  clearInterval(timerId);
  start.style.display = 'block';
  pause.style.display = 'none';
  mil.innerHTML = '000';
  min.innerHTML = '00';
  sec.innerHTML = '00';
}

start.addEventListener('click', startTimer);
start.addEventListener('click', displayBtnPause);
start.addEventListener('click', displayTimer);

pause.addEventListener('click', pauseTimer)
pause.addEventListener('click', displayBtnStart);

clear.addEventListener('click', clearTimer);
