$(document).ready(function () {
   $('.preview__play-button').css({ display: 'none' });

   $('.preview__column').hover(function () {
      $(this).find($('.preview__play-button')).fadeIn('slow');
   }, function () {
      $(this).find($('.preview__play-button')).fadeOut('fast');
   })
})