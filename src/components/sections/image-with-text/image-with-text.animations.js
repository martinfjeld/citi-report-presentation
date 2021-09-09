import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const anim = () => {
  gsap.to(".full-page-image", {
    scrollTrigger: {
      trigger: ".full-page-scrollytell",
      markers: true,
      start: "top top",
      end: "bottom bottom",
      pin: ".full-page-image",
      pinSpacing: false,
      scrub: 1,
    },
    ease: "sine",
    scale: 1.1,
  });
};
