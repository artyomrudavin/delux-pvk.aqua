$(function () {

  // Sticky header
  $(window).scroll(function(){
    var header = $('.l-header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) header.addClass('sticky');
    else header.removeClass('sticky');
  });
});