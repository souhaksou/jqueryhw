$(document).ready(function () {
  // 下拉式選單
  $(".cart>li>a").click(function (e) {
    e.preventDefault();
    $(this).parent().siblings().find("ul").slideUp();
    $(this).parent().find("ul").slideToggle();
  });
  //  Scroll to top效果
  $(".toTop").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 500);
  });
});
//  swiper效果
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
