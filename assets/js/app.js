document.getElementById('year').innerText = new Date().getFullYear();

const btnSearch = document.querySelector('.btn-search');
const inputSearch = document.getElementById('search');
const iconButtonSearch = document.getElementById('iconButtonSearch');

btnSearch.addEventListener('click', function (e) {
    e.preventDefault();

    if (inputSearch.classList.contains('hide')) {
        inputSearch.classList.remove('hide');
        inputSearch.classList.remove('animate__fadeOutRight');
        inputSearch.classList.add('animate__animated', 'animate__fadeInRight')
        iconButtonSearch.classList.remove('fa-search');
        iconButtonSearch.classList.add('fa-times');

    } else {
        inputSearch.classList.remove('animate__fadeInRight');
        inputSearch.classList.add('animate__animated', 'animate__fadeOutRight');
        iconButtonSearch.classList.remove('fa-times');
        iconButtonSearch.classList.add('fa-search');
        inputSearch.addEventListener('animationend', function () {
            if (inputSearch.classList.contains('animate__fadeOutRight')) {
                inputSearch.classList.add('hide');

            }
        });
    }



});
(function ($) {
    "use strict"; //Start of use Strict

    //preloader
    var preloader = $('#preloader');
    $(window).on('load', function () {
        setTimeout(function () {
            preloader.fadeOut('slow', function () { $(this).remove(); });
        }, 300)
    });

    $('.scroll-to-top').hide();
    // Scroll to top button appear
    $(window).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

})(jQuery);

$(document).ready(function () {
    $(".preloader").fadeOut();
    $(".owl-carousel").owlCarousel({
        nav: true,

        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        lazyload: true,
        loop: true,
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
        touchDrag: false,
        mouseDrag: false
    });

    AOS.init({
        once: true
    });
    
});