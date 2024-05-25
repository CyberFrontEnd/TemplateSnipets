$(document).ready(function() {
 /* Multiple Items */
 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: "<img src='images/icon13.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/icon14.png' class='next' alt='2'>"
  });

}); /* End js code */