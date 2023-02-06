/** NOT THE FINAL VERSION */

// Set the date we're counting down to
var countDownDate = new Date("Feb 7, 2023 15:10:0").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output
  if (distance > 0) {
    //only records output when the countdown isn't finished
    document.getElementById("days").innerHTML = days + "d ";

    document.getElementById("hours").innerHTML = hours + "h ";

    document.getElementById("minutes").innerHTML = minutes + "m ";

    document.getElementById("seconds").innerHTML = seconds + "s ";
  }
  // What happens if the countdown is over; (Initial)
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    document.getElementById("initialcontainer1").classList.add("hidden");
    document.getElementById("initialcontainer2").classList.add("hidden");
    document.getElementById("initialcontainer3").classList.add("hidden");
    document.getElementById("initialcontainer4").classList.add("hidden");

    document.getElementById("fireworks").classList.remove("hidden");

    document
      .getElementById("countdownuntil")
      .classList.add("finishedcontainer");

    document.getElementById("countdownuntil").innerHTML =
      "NOW<br>" +
      "<span class='text-white countdownB'>STREAMING!</span>" +
      "<a href='https://www.facebook.com/people/WonderMinds/100089276150786/' class='text-2xl'><br>Click here to watch our Stream!</a>";

    document
      .getElementById("stats")
      .classList.remove(
        "grid-cols-2",
        "md:grid-cols-4",
        "lg:grid-cols-4",
        "place-items-center",
        "gap-6"
      );
  }
}, 1000);
