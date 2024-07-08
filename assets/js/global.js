/* a 요소가 가지고 있는 기본 이벤트 제거 */
$('a[href="#"]').on('click', (e) => {
  e.preventDefault();
});

/* 로고 클릭 시 페이지 맨 위로 이동 */
$('.header .logo').on('click', (e) => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* 헤더 햄버거 메뉴 버튼 클릭 시 이벤트 발생 */
$('.header .side-menu-wrapper .side-menu-btn').on('click', () => {
  $('.header .side-menu-wrapper .side-menu-btn').toggleClass('active');
  $('.header .side-menu-wrapper .side-menu').slideToggle().toggleClass('show');
});

/* 헤더 변경 스크롤트리거 */
gsap.registerPlugin(ScrollTrigger);
const triggers = document.querySelectorAll('.common-trigger');

triggers.forEach(trigger => {
  if (!trigger.classList.contains('no-trigger')) {
    ScrollTrigger.create({
      trigger: trigger,
      start: 'top top',
      end: 'bottom top',
      toggleActions: 'play reverse play reverse',
      onEnter: () => {
        gsap.to(".side-menu-btn", {
          filter: 'invert(100%)',
          duration: 0.4
        });
        gsap.to(".side-menu", {
          backgroundColor: '#fff',
          color: 'var(--primary-black)',
          duration: 0.4
        });
        gsap.to(".logo", {
          filter: 'invert(100%)',
          duration: 0.4
        });
        gsap.to(".header .code-desc", {
          filter: 'invert(100%)',
          duration: 0.4
        });
      },
      onLeave: () => {
        gsap.to(".side-menu-btn", {
          filter: 'invert(0)',
          duration: 0.4
        });
        gsap.to(".side-menu", {
          backgroundColor: 'var(--primary-black)',
          color: '#fff',
          duration: 0.4
        });
        gsap.to(".logo", {
          filter: 'invert(0)',
          duration: 0.4
        });
        gsap.to(".header .code-desc", {
          filter: 'invert(0)',
          duration: 0.4
        });
      },
      onEnterBack: () => {
        gsap.to(".side-menu-btn", {
          filter: 'invert(100%)',
          duration: 0.4
        });
        gsap.to(".side-menu", {
          backgroundColor: '#fff',
          color: 'var(--primary-black)',
          duration: 0.4
        });
        gsap.to(".logo", {
          filter: 'invert(100%)',
          duration: 0.4
        });
        gsap.to(".header .code-desc", {
          filter: 'invert(100%)',
          duration: 0.4
        });
      },
      onLeaveBack: () => {
        gsap.to(".side-menu-btn", {
          filter: 'invert(0)',
          duration: 0.4
        });
        gsap.to(".side-menu", {
          backgroundColor: 'var(--primary-black)',
          color: '#fff',
          duration: 0.4
        });
        gsap.to(".logo", {
          filter: 'invert(0)',
          duration: 0.4
        });
        gsap.to(".header .code-desc", {
          filter: 'invert(0)',
          duration: 0.4
        });
      }
    });
  }
});

const headerInvert = {
  trigger: '.common-trigger',
  start: 'top top',
  end: 'bottom top',
  toggleActions: 'play reverse play reverse',
  onEnter: () =>
    gsap.to(".global-menu-button", {
      filter: 'invert(100%)',
      duration: 0.4
    }),
  onLeave: () =>
    gsap.to(".global-menu-button", {
      filter: 'invert(0)',
      duration: 0.4
    }),
  onEnterBack: () =>
    gsap.to(".global-menu-button", {
      filter: 'invert(100%)',
      duration: 0.4
    }),
  onLeaveBack: () =>
    gsap.to(".global-menu-button", {
      filter: 'invert(0)',
      duration: 0.4
    }),
};

ScrollTrigger.create(headerInvert);