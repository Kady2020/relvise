$(document).ready(function () {
  $.each($('.menu__item'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $(document).on('click', '.menu__item', function (event) {
    $(this).parents('.radio').find('.radio__item').removeClass('active');
    $(this).parents('.radio').find('.radio__item input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
  });
});
