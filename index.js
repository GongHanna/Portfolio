// 해당 컨텐츠로 부드러운 이동
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

// main-title animation
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

// 랜덤 텍스트 이벤트
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

// 뷰포트기준 500px 넘을 때만 가로 스크롤 이벤트
if ($(window).width() > 501) {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalScroll = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-contents",
      pin: true,
      scrub: true,
      start: "top top",
      end: () =>
        `+=${
          document.querySelector(".project-wrapper").offsetWidth -
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
}

// skill 클릭 이벤트
$(".skill-contents .skill-wrapper li").on("click", (e) => {
  $(e.currentTarget).toggleClass("show").siblings().removeClass("show");
});

// 스크롤 시 text animation
gsap.utils.toArray(".rolled-over-txt").forEach((txt) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: txt,
        start: "100% 100%",
        end: "50% 50%",
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
