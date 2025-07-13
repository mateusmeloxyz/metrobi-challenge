/* alextade.me | All Rights Reserved. */

$(document).ready(function () {
  var u1 = 50;
  var u2 = 10;
  var d1 = 10;
  var d2 = 12.5;
  var d2r = 12.5;
  var d3 = 80;
  var d3per = "80%";
  var t = 0;
  var l = 0;
  var $calc = $(".calc");
  var $d2 = $(".d2-output > p > span:nth-child(1)");
  var $turtle = $(".turtle");
  var $point2 = $(".point2");
  var $hours = $(".hours");
  var $minutes = $(".minutes");
  var $seconds = $(".seconds");
  var $hoursval = $(".hours > span:nth-child(1)");
  var $minutesval = $(".minutes > span:nth-child(1)");
  var $secondsval = $(".seconds > span:nth-child(1)");
  var decimalTime = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  function calcs() {
    $calc.removeClass("hey1");
    $calc.removeClass("hey2");

    if (u1 > 0 && u2 > 0 && d1 > 0) {
      if (u1 > u2) {
        l = u2 / u1;
        t = d1 / ((1 - l) * u1);
        d2 = d1 / (1 - l);

        d2r = Math.round(d2 * 10000) / 10000;
        $d2.empty();
        $d2.text(d2r);

        decimalTime = t * 60 * 60;
        hours = Math.floor(decimalTime / (60 * 60));
        decimalTime = decimalTime - hours * 60 * 60;
        minutes = Math.floor(decimalTime / 60);
        decimalTime = decimalTime - minutes * 60;
        seconds = Math.round(decimalTime);

        if (hours > 0) {
          $hours.removeClass("hideit");
          $hoursval.empty();
          $hoursval.text(hours);
        } else {
          $hours.addClass("hideit");
        }
        if (minutes > 0) {
          $minutes.removeClass("hideit");
          $minutesval.empty();
          $minutesval.text(minutes);
        } else {
          $minutes.addClass("hideit");
        }
        if (seconds > 0) {
          $seconds.removeClass("hideit");
          $secondsval.empty();
          $secondsval.text(seconds);
        } else {
          $seconds.addClass("hideit");
        }

        /* for the graphic */
        d3 = (100 / d2) * d1;
        d3per = d3 + "%";
        $turtle.css("left", d3per);
        $point2.css("left", d3per);
      } else {
        $calc.addClass("hey2");
      }
    } else {
      $calc.addClass("hey1");
    }
  } /* end calcs */

  $(".calc input").on("change paste keyup", function () {
    u1 = Number($("#u1").val());
    u2 = Number($("#u2").val());
    d1 = Number($("#d1").val());
    calcs();
  });

  calcs();
});
