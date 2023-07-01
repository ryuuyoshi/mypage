
$(function(){
  /* ここにjQueryのコードを書く */
  $(".item").click(function(){
    var $ans = $(this).find(".answer");
    var $span = $(this).find('.element2').find("span")

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

  $('back').click(function(){
  
  
  }):


});