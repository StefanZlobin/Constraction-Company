$(function () {
   $('.projects__slider-items').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0%',
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2500,
      adaptiveHeight: true,
   });

   $('.projects__slider-item').hover(function () {
      $(this).find($('.projects__more-info')).fadeIn('slow');
   }, function () {
      $(this).find($('.projects__more-info')).fadeOut('fast');
   })
})