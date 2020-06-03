
// ハンバーガーメニュー
$('#js-nav-toggle').on('click', function () {
$('#js-nav-toggle,.header_nav,#mask').toggleClass('show');
});
// 要素の回転・拡大アニメーション
window.onload = function() {
  $('.js-move-trigger').each(function(){
    if($(this).hasClass('move-element-rotate2D')) {
      $(this).addClass('move-rotate2D');
    } else if($(this).hasClass('move-element-rotateX')){
      $(this).addClass('move-rotateX');
    } else if($(this).hasClass('move-element-rotateY')){
      $(this).addClass('move-rotateY');
    } else if($(this).hasClass('move-element-scale')){
      $(this).addClass('move-scale');
    } else if($(this).hasClass('move-element-skew')) {
      $(this).addClass('move-skew');
    }
  });
}
// 要素のフェードインアニメーション
$(window).scroll(function(){
  $('.js-fade-trigger').each(function(){
    var position = $(this).offset().top;
		var scroll = $(window).scrollTop();
    var windowHeight = $(window).scrollTop();
    
    if(scroll > position - windowHeight - 500){
      if($(this).hasClass('fade-element-up')) {
        $(this).addClass('fade-common');
      }  else if($(this).hasClass('fade-element-down')) {
        $(this).addClass('fade-common');
      } else if($(this).hasClass('fade-element-left')) {
        $(this).addClass('fade-common');
      } else if($(this).hasClass('fade-element-right')) {
        $(this).addClass('fade-common');
      } else if($(this).hasClass('fade-elem')) {
        $(this).find('.fade-element-up').addClass('fade-common');
        $(this).find('.fade-element-down').addClass('fade-common');
        $(this).find('.fade-element-left').addClass('fade-common');
        $(this).find('.fade-element-right').addClass('fade-common');
      }
    }
  });
});