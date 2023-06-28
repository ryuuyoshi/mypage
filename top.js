
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

  $('.fake').mouseover(
    function(){
    $(this).attre('src','アイコン\kaisya_komaru_png.png');
    $('.main-left').text('mitukatta!!');
  },
    function(){
      $(this).attre('src','アイコン\影絵.png');
      $('.main-left').text('イメージ画像');
    }
  
  );

});



アイコン\kaisya_komaru_png.png