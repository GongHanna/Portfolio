/* 해당 컨텐츠로 부드러운 이동 */
$(".header .side-menu-wrapper .side-menu li a").each(function (idx, elem) {
  $(elem).on("click", (e) => {
    e.preventDefault();

    const contentsHt = $("section").eq(idx).offset().top;
    scrollTo({
      top: contentsHt,
      behavior: "smooth",
    });
  });
});
$(".footer .footer-menu li a").each(function (idx, elem) {
  $(elem).on("click", (e) => {
    e.preventDefault();

    const contentsHt = $("section").eq(idx).offset().top;
    scrollTo({
      top: contentsHt,
      behavior: "smooth",
    });
  });
});

/* 마우스 따라 움직이는 눈 모양 이벤트 */
document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const deltaX = e.clientX - eyeCenterX;
    const deltaY = e.clientY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(eyeRect.width / 10, Math.sqrt(deltaX * deltaX + deltaY * deltaY));
    const offsetX = distance * Math.cos(angle);
    const offsetY = distance * Math.sin(angle);

    eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

/* main-title animation */
var animatedText = document.querySelectorAll(".animated-text");

function animate(element) {
  var textArray = element.innerText.split("");
  element.firstChild.remove();

  var elArray = textArray.map((letter, index) => {
    if (letter == " ") letter = "&nbsp;";
    var el = document.createElement("span");
    el.className = "letter";
    el.innerHTML = letter;
    el.style.animationDelay = index / textArray.length + "s";
    element.appendChild(el);
    return el;
  });
  element.innerHtml = elArray;
}

Array.from(animatedText).map(animate);

/* 랜덤 텍스트 이벤트 */
$(function () {
  function movTxt(num) {
    const nextIdx =
      (num + 1) %
      $(
        ".keyword-contents .introduction-wrapper .random-text-box .random-keyword"
      ).length;

    $(
      ".keyword-contents .introduction-wrapper .random-text-box .random-keyword"
    )
      .removeClass("event")
      .eq(nextIdx)
      .addClass("event");

    setTimeout(() => movTxt(nextIdx), 2000);
  }

  movTxt(0);
});

/* 뷰포트기준 500px 넘을 때만 가로 스크롤 이벤트 */
let horizontalScrollTrigger;

function initHorizontalScroll() {
  if ($(window).width() > 500) {
    gsap.registerPlugin(ScrollTrigger);

    if (!horizontalScrollTrigger) {
      const horizontalScroll = gsap.timeline({
        scrollTrigger: {
          trigger: ".project-contents",
          pin: true,
          scrub: true,
          start: "top top",
          end: () =>
            `+=${document.querySelector(".project-wrapper").offsetWidth -
            window.innerWidth
            }`,
        },
      });

      horizontalScroll.to(".project-wrapper", {
        x: () =>
          -(
            document.querySelector(".project-wrapper").scrollWidth -
            window.innerWidth
          ),
        ease: "none",
      });

      horizontalScrollTrigger = horizontalScroll.scrollTrigger;
    }
  } else {
    // 특정 가로 스크롤 트리거만 해제
    if (horizontalScrollTrigger) {
      horizontalScrollTrigger.kill();
      horizontalScrollTrigger = null;
    }
    gsap.set(".project-wrapper", { x: 0 }); // 원래 위치로 되돌리기
  }
}

// 초기화 호출
initHorizontalScroll();

// 윈도우 크기 변경 이벤트에 대응
$(window).resize(function () {
  initHorizontalScroll();
});

/* skill 클릭 이벤트 */
$(".skill-contents .skill-wrapper li").on("click", (e) => {
  $(e.currentTarget).toggleClass("show").siblings().removeClass("show");
});

/* 스크롤 시 text animation */
gsap.utils.toArray(".rolled-over-txt").forEach((txt) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: txt,
        start: "50% 100%",
        end: "100% 100%",
        scrub: 1,
      },
    })
    .fromTo(
      txt,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        duration: 5,
      }
    );
});
