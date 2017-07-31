;(function($){
    'use strict';

    // preoader
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
    })
    
    //owl-carousel
    var $loop = $('.loop')
    if($loop.length > 0){
        $loop.owlCarousel({
        center: true,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        margin:5,
        responsive:{
            300:{
                items:2
            },
            768:{
                items:3
            },
            1170:{
                items:5
            }
        }
    });
    }

    //owl-carousel testimonial
    var $loopTesti = $('.loop-testi')
    if($loopTesti.length > 0){
        $loopTesti.owlCarousel({
        center: true,
        loop:true,
        smartSpeed:600,
        responsive:{
            300:{
                items:1
            },
            1170:{
                items:3
            }
        }
    });

    }

    //wow
    new WOW().init();

    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    // Google map initialize
      var $mapholder = $('.map-holder');
      if ($mapholder.length > 0) {
        var map = new GMaps({
          div: '#gmap',
          lat: -12.043333,
          lng: -77.028333
        });

        $mapholder.on('click', function () {
          $(this).children().css("pointer-events", "auto");
        });

        $mapholder.on('mouseleave', function() {
          $(this).children().css("pointer-events", "none");
        });
      }


})(jQuery); 

(function () {
       $(document).on("scroll", onScroll);
 
        $('.menu li a[href^="#"], .demo a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
 
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
 
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
 
    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('.menu a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.menu li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    } 
}());