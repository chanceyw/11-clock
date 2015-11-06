(function() {
  var clock = document.querySelector('.clock');
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
  }

  function padZeros(time) {        //if >10 add 0 in front of value.
    if (time < 10) {
      return '0' + time;           // console.assert(padZeros(1) == '01');
    }                           // console.assert(padZeros(30) == '30');

    return time;
  }




  // console.assert(padZeros(1) == '01');
  // console.assert(padZeros(30) == '30');
})();
