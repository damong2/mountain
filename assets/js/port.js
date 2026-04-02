const horizontal = document.querySelector("#port");
const horSection = gsap.utils.toArray(".port_item");

gsap.to(horSection, {
  xPercent: -100 * (horSection.length - 1),
  ease: "none",

  scrollTrigger: {
    trigger: horizontal,
    start: "top 56px",
    // end : "+=3000",
    end: () => "+=" + horizontal.offsetWidth,

    pin: true,
    scrub: 1,
    // markers: true,

    invalidateOnRefresh: true, //refrexh 될 때마다 다시 계산
    anticipatePin: 1, // pin 시작할 때 화면 튀는 현상 줄여주는 옵션
  },
});
