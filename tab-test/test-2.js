$(function() {
  $(".open").on("click", function() {
    $(this).parent('th').nextAll('td').find('.course').toggle();
    $(this).hide();
    $(this).next().show();
  });
  $(".close").on("click", function() {
    $(this).parent('th').nextAll('td').find('.course').toggle();
    $(this).hide();
    $(this).prev().show();
  });
});