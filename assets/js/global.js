// 헤더 햄버거 메뉴 버튼 클릭 시 이벤트 발생
$('.header .side-menu-wrapper .side-menu-btn').on('click', () => {
  $('.header .side-menu-wrapper .side-menu-btn').toggleClass('active');
  $('.header .side-menu-wrapper .side-menu').slideToggle().toggleClass('show');
});