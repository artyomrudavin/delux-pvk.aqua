$(function () {

  // Sticky header
  $(window).scroll(function(){
    var header = $('.l-header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) header.addClass('sticky');
    else header.removeClass('sticky');
  });

  $('input[type="tel"]').each(function() {
    $(this).inputmask('+38 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9');
  })

  $('.blog-slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 300,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '3rem',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
