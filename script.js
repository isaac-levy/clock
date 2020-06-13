for (var i = 0; i < 12; i++) {
  var tick = $(`<div id=${i} class="hourTick"></div>`);
  var deg = 30 * i;
  var degrees = deg * (Math.PI / 180);
  var x = 240.5 + Math.sin(degrees) * 225;
  var y = 218 + Math.cos(degrees) * 225;
  tick.css("left", `${x}px`);
  tick.css("top", `${y}px`);
  tick.css("transform", `rotateZ(${-deg}deg)`);
  $("#clockRim").append(tick);
}
for (var i = 0; i < 60; i++) {
  var tick = $(`<div id=${i} class="minuteTick"></div>`);
  var deg = 6 * i;
  var degrees = deg * (Math.PI / 180);
  var x = 242 + Math.sin(degrees) * 225;
  var y = 233 + Math.cos(degrees) * 225;
  tick.css("left", `${x}px`);
  tick.css("top", `${y}px`);
  tick.css("transform", `rotateZ(${-deg}deg)`);
  $("#clockRim").append(tick);
}

function updateTime() {
  var date = new Date();
  var dates = [
    (date.getUTCHours() - 4) % 12,
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  ];
  //Rotating the arms according to the current time
  $("#secondRotator").css("transform", `rotateZ(${dates[2] * 6}deg)`);
  $("#minuteRotator").css("transform", `rotateZ(${dates[1] * 6}deg)`);
  $("#hourRotator").css(
    "transform",
    `rotateZ(${dates[0] * 30 + dates[1] / 2}deg)`
  );
}

updateTime();
$(function () {
  setInterval(function () {
    updateTime();
  }, 1000);
});
