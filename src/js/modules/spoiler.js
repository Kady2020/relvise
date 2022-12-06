$(document).ready(function () {
  $('.header__link').click(function (event) {
    if ($('.header__list').hasClass('one')) {
      $('.header__link').not($(this)).removeClass('_active');
      $('.header__sub-list').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('_active').next().slideToggle(300);
  });
});
