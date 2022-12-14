$(window).scroll(function () {
  if ($(window).scrollTop() > 120) {
    $('.header,.menu__link').addClass('scroll');
  }
  else {
    $('.header,.menu__link').removeClass('scroll');
  }
});
