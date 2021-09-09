import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const anim = () => {
  gsap.to(".full-page-image", {
    scrollTrigger: {
      trigger: ".full-page-scrollytell",
      start: "top top",
      end: "bottom bottom",
      pin: ".full-page-image",
      pinSpacing: false,
      scrub: 5,
    },
    ease: "sine",
    scale: 1.15,
  });

  gsap.utils.toArray(".full-page-paragraph-container").forEach((el, index) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "center 100%",
        end: "center center",

        scrub: true,
      },
    });

    tl.set(el, { transformOrigin: "center center" }).fromTo(
      el,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    );
  });

  gsap.to(".full-page-image", {
    scrollTrigger: {
      trigger: ".full-page-scrollytell",
      start: "top center",
      end: "top center",
    },
    ease: "sine",
    duration: 1,
    opacity: 0.9,
  });

  gsap.to("h1", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".full-page-scrollytell",
      start: "top top",
      end: "top top",
      scrub: 1,
    },
  });
};
