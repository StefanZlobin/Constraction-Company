$(function () {
   $('.about__info-target-text1').show();

   $('.about__info-target-item').click(function () {
      $('.about__info-target-text').hide();
      $('.about__info-target-text' + $(this).attr('target')).show();
   })
})

let moo = document.querySelectorAll('.about__info-target-item');
let active = moo[0]; // moo[0], чтобы при первом клике не было ошибки.

for (let i = 0; i < moo.length; i++) {
   moo[i].addEventListener('click', function () {
      if (active == this) {
         // Если active ссылается на тот же объект, что и this (на кликнутую кнопку)
         this.classList.toggle('active');
      } else {
         active.classList.remove('active');
         this.classList.add('active');

         active = this;
      }
   });
}