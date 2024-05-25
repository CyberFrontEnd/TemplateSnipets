$(document).ready(function() {
/* Multiple Items */
$('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav2',
  });
 
  $('.slider-nav2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    vertical: true,
    arrows: true,
    verticalSwiping: true,
    prevArrow: "<img src='images/icon13.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/icon14.png' class='next' alt='2'>"
  });

}); /* End js code */