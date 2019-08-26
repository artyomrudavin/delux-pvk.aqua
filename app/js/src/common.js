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
    autoplay: 4000,
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

  $('form').on('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    // Replace code below to AJAX `success` function
    $('#thanksModal').modal('show')
  })


  $('body').on('click', "[id^='pills-deluxe-']", function() {
    var currentImgClass = '.' + $(this).data('image');
    var currentTableClass = '.' + $(this).data('table'); // table
    var currentDeviceTab = $(this).closest('.tab-pane');
    var currentImage = currentDeviceTab.find(currentImgClass);
    var currentTable = currentDeviceTab.find(currentTableClass); // table
    currentDeviceTab.find('.is-active-img').removeClass('is-active-img');
    currentDeviceTab.find('.is-active-table').removeClass('is-active-table'); // table
    currentDeviceTab.find('.is-none-table').removeClass('is-active-table'); // table
    currentImage.addClass('is-active-img');
    currentTable.addClass('is-active-table'); // table
  })
});
