(function($) {
    "use strict";
    $(window).on("load", function() {
        // makes sure the whole site is loaded
        //preloader
        $("#status").fadeOut();
        // will first fade out the loading animation
        $("#preloader").delay(450).fadeOut("slow");
        // will fade out the white DIV that covers the website.
    });
    $(document).ready(function() {
        //typed js
        var typed = new Typed(".typed",{
            strings: ["I Develop.", "I Innovate", "I Invent.", "I ❤ Minimalism.", "I ❤ Creativity.", "I faciliate Indivisuals. ", "I empower the world."],
            typeSpeed: 75,
            backDelay: 500,
            loop: true
        });
        //contact
        $('input').blur(function() {
            if ($(this).val())
                $(this).addClass('used');
            else
                $(this).removeClass('used');
        });
    });
    //header
    function inits() {
        window.addEventListener('scroll', function(e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop
              , shrinkOn = 300
              , header = document.querySelector(".for-sticky");
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

    $("#toggleTimeline").click(function() {
        if ($(this).hasClass("active")) {
            $(this).html('Show Timeline <span class="glyphicon glyphicon-chevron-down"></span>');
            $(this).addClass('inactive');
            $(this).removeClass('active');
            $(".timeline-feed").fadeOut(200);
            $(".sortButtonsContainer").fadeOut(200);
        } else {
            $(this).html('Hide Timeline <span class="glyphicon glyphicon-chevron-up"></span>');
            $(this).addClass('active');
            $(this).removeClass('inactive');
            $(".timeline-feed").fadeIn(200);
            $(".sortButtonsContainer").fadeIn(200);
        }
    });
<<<<<<< HEAD

    var sort = [];
    $('.sortButtons').click(function() {
        if ($(this).hasClass('selected')) {
            sort.splice(sort.indexOf($(this).attr('data-sort-class')), 1);
            $(this).removeClass('selected');
        } else {
            sort.push($(this).attr('data-sort-class'));
            $(this).addClass('selected');
        }

        if (sort.length == 0) {
            $('.timeline-item').css({
                'opacity': '',
                'height': '',
                'padding': '',
                'margin': ''
            });
            $('.timeline-item *').show();
        } else {
            $('.timeline-item').css({
                'opacity': '0',
                'height': '0',
                'padding': '0',
                'margin': '0'
            });
            $('.timeline-item *').hide();
            sort.forEach(function(e, i) {
                $(e).css({
                    'opacity': '',
                    'height': '',
                    'padding': '',
                    'margin': ''
                });
                $(e + " *").show();
            });
        }

    });

    function r(e) {
        $(e).remove();
    }
    r('.list-card');
    r('.timeline-item-warning');
    r('.logo-blank.js-logo-blank');
    r('.timeline-item-date > span');
    r('.description-expander');
    r('.description-content-truncated');
    r('#item-3234779');
    r('.generic.assessment .timeline-item-tags');

}
)(jQuery);
=======
  }
  window.onload = inits();

  $("#toggleTimeline").click(function(){
    if ($(this).hasClass("active")){
      $(this).html('Show Timeline <span class="glyphicon glyphicon-chevron-down"></span>');
    $(this).addClass('inactive');
    $(this).removeClass('active');
    $(".timeline-feed").fadeOut(200);
    $(".sortButtonsContainer").fadeOut(200);
    }
    else{
      $(this).html('Hide Timeline <span class="glyphicon glyphicon-chevron-up"></span>');
      $(this).addClass('active');
    $(this).removeClass('inactive');
    $(".timeline-feed").fadeIn(200);
    $(".sortButtonsContainer").fadeIn(200);
    }
  });

var sort = [];
$('.sortButtons').click(function(){
  if ($(this).hasClass('selected')){
    sort.splice(sort.indexOf($(this).attr('data-sort-class')), 1);
    $(this).removeClass('selected');
  }
  else{
    sort.push($(this).attr('data-sort-class'));
    $(this).addClass('selected');
  }

  if(sort.length == 0){
    $('.timeline-item').css({
        'opacity': '',
        'height': '',
        'padding': '',
        'margin': '' 
      });
    $('.timeline-item *').show();
  }
  else{
      $('.timeline-item').css({
        'opacity': '0',
        'height': '0',
        'padding': '0',
        'margin': '0' 
      });
      $('.timeline-item *').hide();
    sort.forEach(function(e, i) {
      $(e).css({
        'opacity': '',
        'height': '',
        'padding': '',
        'margin': '' 
      });
      $(e + " *").show();
    });
  }

  console.log(sort);

});

})(jQuery);
>>>>>>> origin/master
