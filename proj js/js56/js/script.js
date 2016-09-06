var counter = 0,
timerId = 0,
startStopDefine = false;

function startTimer() {
  if (startStopDefine == false) {
    timerId = setInterval(function() {
      counter += 4;

      var mil = counter % 1000;
      if (mil < 100) {mil = '0' + mil};
      if (mil < 10) {mil = '0' + mil};
      var sec = Math.floor(counter/1000)%60;
      if (sec < 10) {sec = '0' + sec};
      var min = Math.floor(counter/60000)%60;
      if (min < 10) {min = '0' + min};
      var hour = Math.floor(counter/3600000)%24;
      if (hour < 10) {hour = '0' + hour};

      hours.innerHTML = hour;
      mins.innerHTML = min;
      secs.innerHTML = sec;
      millisecs.innerHTML = mil;
      start.style.display = 'none';
      pause.style.display = 'block';
    }, 1);
    startStopDefine = true;
  } else {
    pauseTimer();
    }
}

function pauseTimer() {
  clearInterval(timerId);
  startStopDefine = false;
  start.style.display = 'block';
  pause.style.display = 'none';
}

function clearTimer() {
  start.style.display = 'block';
  pause.style.display = 'none';
  clearInterval(timerId);
  startStopDefine = 0;
  counter = 0;
  millisecs.innerHTML = '000';
  secs.innerHTML = '00';
  mins.innerHTML = '00';
  hours.innerHTML = '00';
}

start.addEventListener('click', startTimer);
clear.addEventListener('click', clearTimer);
pause.addEventListener('click', pauseTimer);
