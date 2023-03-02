<<<<<<< HEAD
var isAlreadyRun = false;

$(window).scroll(function () {
  $(".counter-show").each(function (i) {
    var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window / 4 > bottom_of_object - 120) {
      //bottom_of_window / 5 is the original
      if (!isAlreadyRun) {
        $(".count-number1").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 5000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.abs(now).toFixed(2) + "%");
                },
              }
            );
        });
        $(".count-number2").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 5000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
      }
      isAlreadyRun = true;
    }
  });
});
=======
var isAlreadyRun = false;

$(window).scroll(function () {
  $(".counter-show").each(function (i) {
    var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window / 4 > bottom_of_object - 120) {
      //bottom_of_window / 5 is the original
      if (!isAlreadyRun) {
        $(".count-number1").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 5000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.abs(now).toFixed(2) + "%");
                },
              }
            );
        });
        $(".count-number2").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 5000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
      }
      isAlreadyRun = true;
    }
  });
});
>>>>>>> b1223e4 (unfixed)
