var target_date = new Date().getTime() + 1000 * 3600 * 432;
var days, hours, minutes, seconds;
getCountdown();

setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;
  days = parseInt(seconds_left / 86400);
  days = days < 10 ? "0" + days : days;
  seconds_left = seconds_left % 86400;
  hours = parseInt(seconds_left / 3600);
  hours = hours < 10 ? "0" + hours : hours;
  seconds_left = seconds_left % 3600;
  minutes = parseInt(seconds_left / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = parseInt(seconds_left % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let sec = document.getElementById("seconds");
  let min = document.getElementById("minutes");
  let hour = document.getElementById("hours");
  let day = document.getElementById("days");
  day.textContent = days;
  hour.textContent = hours;
  min.textContent = minutes;
  sec.textContent = seconds;
}
