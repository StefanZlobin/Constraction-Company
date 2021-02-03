$('.directions__column-hover').hide();

$('.directions__column').hover(function () {
   $(this).find($('.directions__column-hover')).fadeIn('slow');
}, function () {
   $(this).find($('.directions__column-hover')).fadeOut('fast');
});