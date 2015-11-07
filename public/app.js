(function() {
  var clock = document.querySelector('.clock');
  var progress = document.querySelector('.progress');
  var parentColor = document.querySelector('.parent');
  var mainColor = document.querySelector('.color');
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

    progress.style.width = nowSec / 60 * 25 + '%';

    var secColor = toColorRange(nowSec, 60);
    var minColor = toColorRange(nowMin, 60);
    var hourColor = toColorRange(nowHour, 60);
    var colorSeek = `rgb(${hourColor}, ${minColor}, ${secColor})`;

    parentColor.style.background = colorSeek;
    mainColor.innerHTML = colorSeek;

  }

  function padZeros(time) {        //if >10 add 0 in front of value.
    if (time < 10) {
      return '0' + time;           // console.assert(padZeros(1) == '01');
    }                           // console.assert(padZeros(30) == '30');

    return time;
  }

  var toColorRange = (digit, span) => {
    return Math.floor(digit / span * 255);
  };

})();

  // console.assert(padZeros(1) == '01');
  // console.assert(padZeros(30) == '30');
