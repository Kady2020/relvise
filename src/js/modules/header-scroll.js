$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $('.header,.header__logo,.header__burger,.spoiler__title,.header__link').addClass('scroll');
  }
  else {
    $('.header,.header__logo,.header__burger,.spoiler__title,.header__link').removeClass('scroll');
  }
});
