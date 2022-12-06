$(window).scroll(function () {
  if ($(window).scrollTop() > 160) {
    $('.header').addClass('scroll');
  }
  else {
    $('.header').removeClass('scroll');
  }
});
