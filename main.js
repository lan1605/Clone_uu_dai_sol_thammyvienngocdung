const btnContact = document.querySelector(".contact"),
  btnOpen = document.querySelector(".btn-open"),
  btnClose = document.querySelector(".btn-close");
btnContact.addEventListener("click", function () {
  btnOpen.classList.add("none");
  btnClose.classList.add("block");
  if (
    btnClose.classList.contains("none") &&
    btnOpen.classList.contains("block")
  ) {
    btnOpen.classList.replace("block", "none");
    btnClose.classList.replace("none", "block");
  } else {
    btnOpen.classList.replace("none", "block");
    btnClose.classList.replace("block", "none");
  }
});
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.querySelector(".time-countdown--content");
  var daysSpan = clock.querySelector(".day :where(.number)");
  var hoursSpan = clock.querySelector(".hour :where(.number)");
  var minutesSpan = clock.querySelector(".minute :where(.number)");
  var secondsSpan = clock.querySelector(".second :where(.number)");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);

      var newTime = Date.parse(endtime);
      var nowTime = Date.parse(new Date());

      while (newTime <= nowTime) {
        newTime = newTime + 1 * 24 * 60 * 60 * 1000; // add 24hours
      }

      var deadline = new Date(newTime);
      initializeClock("countdown", deadline);
    } else {
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "Thu Aug 31 2023 15:56:25 GMT+0700 (Indochina Time)";
initializeClock("countdown", deadline);
