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

// 마우스 따라 움직이는 눈
// $(document).mousemove(function (event) {
//   $('.eye').each(function () {
//     const eye = $(this);
//     const centerX = eye.offset().left + eye.width() / 2;
//     const centerY = eye.offset().top + eye.height() / 2;

//     const angle = Math.atan2(event.pageY - centerY, event.pageX - centerX);
//     const rotateDeg = angle * (180 / Math.PI) + 90;

//     eye.css('transform', `rotate(${rotateDeg}deg)`);
//   });
// });

// 랜덤 텍스트 이벤트
$(function () {
  function movTxt(num) {
    const nextIdx = (num + 1) % $('.keyword-contents .introduction-wrapper .random-text-box .random-keyword').length;

    $('.keyword-contents .introduction-wrapper .random-text-box .random-keyword').removeClass('event').eq(nextIdx).addClass('event');

    setTimeout(() => movTxt(nextIdx), 2000);
  };

  movTxt(0);
});

// 가로 스크롤
gsap.registerPlugin(ScrollTrigger);

  const horizontalScroll = gsap.timeline({
    scrollTrigger: {
      trigger: '.project-contents',
      pin: true,
      scrub: true,
      start: 'top top',
      end: () => `+=${document.querySelector('.project-wrapper').offsetWidth - window.innerWidth}`
    }
  });

  horizontalScroll.to('.project-wrapper', {
    x: () => -(document.querySelector('.project-wrapper').scrollWidth - window.innerWidth),
    ease: 'none'
  });

// skill 클릭 이벤트
$('.skill-contents .skill-wrapper li').on('click', (e) => {
  $(e.currentTarget).toggleClass('show').siblings().removeClass('show');
});

// 헤더 변경 스크롤트리거
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