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

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 60,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
});


const content = document.querySelectorAll('.testi');
const slider  = document.querySelectorAll('.swiper-slide');
swiper.on('slideChange', function () {
    Array.from(content).forEach(function(element) {
        let index = element.getAttribute('data-index'); 
        if (index == swiper.activeIndex) {
           
            document.querySelector('.space-testi').classList.add('animate__animated', 'animate__fadeIn', 'slow');

            var elm = document.querySelector('.space-testi');
            var newone = elm.cloneNode(true);

            elm.parentNode.replaceChild(newone, elm);
            document.querySelector('.space-testi').innerHTML = element.innerHTML;
        }

    });

    Array.from(slider).forEach(function(element, key) {
        if(element.getAttribute("id") == "active") {
            element.setAttribute("id", "non-active");
        }

        if (swiper.activeIndex == key) {
           if(element.getAttribute("id") == "non-active") {
               element.setAttribute("id", "active");
           }
        }
    });

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