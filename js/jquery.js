// 漢堡選單動畫
$('.hamburger').on('click', function (){
    $('.hamburger').toggleClass("is-active");
    $('.mobile-nav').toggleClass('is-active');
});
//loading
setTimeout(function () {
    setTimeout(function () {
      $('.loading').addClass('is-loaded');
      setTimeout(function () {
        AOS.init({
          once: true
        });
      }, 500);
    }, 1000);
  }, 1000);