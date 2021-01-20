$(function() {

    // scrolling nav-bar

    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {

        e.preventDefault(); // we use it to ignore jumping and just scrolling smoothly
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 65
        }, 1000)
    });

    // Closes responsive menu when a scroll trigger link is clicked
  $('.scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
    });

   // Activate scrollspy to add active class to navbar items on scroll
   $('body').scrollspy({
    target: '#mainNav',
    offset: 68
    });

    // Add class to the nav-bar

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    });

    // Add class after realoding

    $(document).ready(function () {
        if ($("#mainNav").offset().top > 100 ) {
    
            $('nav').addClass('black');
    
        } else {
    
            $('nav').removeClass('black');
        }
    });

        // Active Link Switching

    $(window).scroll(function() {
            var scrollBarLocation = $(this).scrollTop();

            scrollLink.each(function() {

                var sectionOffset = $(this.hash).offset().top;

                if ( sectionOffset <= scrollBarLocation ) {

                    $(this).parent().addClass('active');
                    $(this).parent().sibilings().removeClass('active');
                }
            })
    });

    function mediaSize() {
        if (window.matchMedia("(max-width: 991px)").matches) {
            
            $("#mainNav").addClass("black");
    
        } else {
    
            $("#mainNav").removeClass("black");
        }
    }
    
    window.addEventListener("resize", mediaSize, false);

})
/* Carousel Setting */

$(document).ready(function () {
    'use strict';
    $('.owl-carousel').owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    items:3,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


