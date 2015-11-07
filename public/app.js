(function() {
  var clock = document.querySelector('.clock');
  var progress = document.querySelector('.progress');
  var startTime = new Date();
  console.log('First load', startTime);
  window.setInterval(time, 1000);

  function time() {
    var currentTime = new Date();
    console.log(currentTime);
    var nowSec = padZeros(currentTime.getSeconds());
    var nowMin = padZeros(currentTime.getMinutes());
    var nowHour = padZeros(currentTime.getHours());

    clock.innerHTML = `${nowHour}:${nowMin}:${nowSec}`;

    console.log(nowSec / 60);
    progress.style.width = nowSec / 60 * 25 + '%';

    var secColor = colorSpan(nowSec, 60);
    var minColor = colorSpan(nowMin, 60);
    var hourColor = colorSpan(nowHour, 60);
    console.log(secColor);
    console.log(minColor);
    console.log(hourColor);
    debugger;

  }

  function padZeros(time) {        //if >10 add 0 in front of value.
    if (time < 10) {
      return '0' + time;           // console.assert(padZeros(1) == '01');
    }                           // console.assert(padZeros(30) == '30');

    return time;
  }

  var colorSpan = (digit, span) => {
    return Math.floor(digit / span * 255);
  };

})();

  // console.assert(padZeros(1) == '01');
  // console.assert(padZeros(30) == '30');
