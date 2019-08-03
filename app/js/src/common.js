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
});