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