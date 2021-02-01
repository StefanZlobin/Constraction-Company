$(document).ready(function () {
   $('.header__navbar-item').hover(
      function () {
         $(this).find('ul').slideDown('slow');
      }, function () {
         $(this).find('ul').slideUp('fast');
      }
   );
});