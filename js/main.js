(function ($) {
  "use strict";
  $(window).on("load", function () { // makes sure the whole site is loaded
    //preloader
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
  });
  $(document).ready(function () {
    //typed js
    var typed = new Typed(".typed", {
      strings: ["I Develop.", "I Innovate", "I Invent.", "I ❤ Minimalism.", "I ❤ Creativity.", "I faciliate Indivisuals. ", "I empower the world."],
      typeSpeed: 75,
      backDelay: 500,
      loop: true
    });
    //contact
    $('input').blur(function () {
      if ($(this).val()) $(this).addClass('used');
      else $(this).removeClass('used');
    });
  });
  //header
  function inits() {
    window.addEventListener('scroll', function (e) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300,
        header = document.querySelector(".for-sticky");
      if (distanceY > shrinkOn) {
        classie.add(header, "opacity-nav");
      } else {
        if (classie.has(header, "opacity-nav")) {
          classie.remove(header, "opacity-nav");
        }
      }
    });
  }
  window.onload = inits();
})(jQuery);