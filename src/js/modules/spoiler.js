$(document).ready(function () {
  $('.spoiler-title').click(function (event) {
    if ($('.header__list').hasClass('one')) {
      $('.spoiler-title').not($(this)).removeClass('_active');
      $('.spoiler-list').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('_active').next().slideToggle(300);
  });
});
