$(document).ready(function() {
 $('.slider-center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: true,
    dots: true,
    prevArrow: "<img src='images/left.png' class='prev' alt='1'>",
    nextArrow: "<img src='images/right.png' class='next' alt='2'>",
    
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1
        }
      },
      
    ]
  });

}); /* End js code */