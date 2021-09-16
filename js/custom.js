$(window).scroll(function(){
    if ($(window).scrollTop() >= 70) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});
$('.burger-menu').click( function(e) {
    $(this).toggleClass('active');
    $('.menu').slideToggle();
})
$(document).ready(function() {
  $('.service-gallery').magnificPopup({
    type:'image',
    delegate:'a',
    gallery: {
        enabled:true,
    }



        });
});