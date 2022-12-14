$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header,.header__logo,.header__burger,.menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.header__logo,.menu__link').click(function (event) {
    $(".header,.header__logo,.header__burger,.menu").removeClass('active');
    $('body').removeClass('lock');
  });
});
