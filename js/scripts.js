$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,

        // autoplay: true,
        autoplayTimeout: 1000,
        nav:true,
        navText: [ '', ' ' ],
        // slideBy: 3,
        // slideTransition: 'ease-in',
        dots: true,
        dotsEach: true,
        dotsSpeed: 100,
        dragEndSpeed: 800,

        responsive:{
            0:{
                items:1
            },
            600: {
                items: 3
            },
            1000:{
                items:5
            }
        }
    });
});