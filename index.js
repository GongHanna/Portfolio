// a 요소가 가지고 있는 기본 이벤트 제거
$('a[href="#"]').on('click', (e) => {
  e.preventDefault();
});

// 로고 클릭 시 페이지 맨 위로 이동
$('.header .logo').on('click', (e) => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// skill 클릭 이벤트
$('.skill-contents .skill-wrapper li').on('click', (e) => {
  $(e.currentTarget).toggleClass('show').siblings().removeClass('show');
});

// 스크롤트리거
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
      }
    });
  }
});

const headerInvert = {
  trigger: '.common-trigger',
  start: '50% 100%',
  end: '100% 0',
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

// .rolled-over-txt
gsap.utils.toArray('.rolled-over-txt').forEach((txt) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: txt,
      start: '100% 100%',
      end: '100% 0',
      scrub: 1
    }
  }).fromTo(
    txt,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      ease: 'none',
      duration: 5
    }
  );
});