
$(function(){
  /* ここにjQueryのコードを書く */
$(".pick").click(function(){
  var $ans = $(this).find(".answer");
  var $span = $(this).find("span")

  if($ans.hasClass("close")){
    $ans.removeClass("close");
    $ans.slideUp();
    $span.html("+");
  } else {
    $ans.addClass("close");
    $ans.slideDown();
    $span.html("-");
    };
});


});