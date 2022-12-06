$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header,.header__burger,.header__menu,.header__sub-list,.header__button").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.header__sub-link,.header__button').click(function (event) {
    $(".header,.header__burger,.header__menu,.header__sub-list,.header__button").removeClass('active');
    $('body').removeClass('lock');
  });
});
