(function() {

  var startTime = new Date();
  console.log('First load', startTime);

  function time() {
    var currentTime = new Date();
    console.log(currentTime);
  }

  window.setInterval(time, 1000);
})();
