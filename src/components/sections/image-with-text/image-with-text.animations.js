import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const anim = (id, imgID, headerID, object) => {
  // Making image zoom slowly as the user scrolls
  gsap.to(`#${imgID}`, {
    scrollTrigger: {
      trigger: `#${id}`,
      start: "top top",
      end: "bottom bottom",
      pin: `#${imgID}`,
      pinSpacing: false,
      scrub: 1,
    },
    ease: "sine",
    scale: 1.15,
  });

  // Fading in the paragraphs from the bottom (100% when top hits the center of the viewport)
  gsap.utils.toArray(".full-page-paragraph-container").forEach((el, index) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "center 100%",
        end: "center center",

        scrub: 0.8,
      },
    });

    tl.set(el, { transformOrigin: "center center" }).fromTo(
      el,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    );
  });

  // Fading in the image as the user reaches the section
  gsap.to(`#${imgID}`, {
    scrollTrigger: {
      trigger: `#${id}`,
      start: "top center",
      end: "top center",
    },
    ease: "sine",
    duration: 1,
    opacity: 0.9,
  });

  // Fading in the header as the user reaches the section
  let animateHeader = gsap.timeline({
    scrollTrigger: {
      trigger: `#${id}`,
      start: "top top",
      end: "top top",
    },
  });

  animateHeader.fromTo(`#${headerID}`, { opacity: 0 }, { opacity: 1 });
};
