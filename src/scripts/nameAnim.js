import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  function getPathLength(selector) {
    const path = document.querySelector(selector);
    return path ? path.getTotalLength() : 0;
  }

  const lLength = getPathLength(".l");
  const iLength = getPathLength(".i");
  const sLength = getPathLength(".s");
  const aLength = getPathLength(".a");

  gsap.set(".l, .i, .s, .a", {
    opacity: 0,
    strokeDashoffset: (i) => [lLength, iLength, sLength, aLength][i],
    strokeDasharray: (i) => [lLength, iLength, sLength, aLength][i],
    y: -30,
  });

  const tl = gsap.timeline();

  tl.to(".l, .i, .s, .a", {
    opacity: 1,
    transformOrigin: "center center",
    strokeDashoffset: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
  });

  tl.to(".l", { y: 0, duration: 1.5, ease: "bounce.out" }, "-=0.75")
    .to(".i", { y: 0, duration: 0.5, ease: "power4.out" }, "-=0.5")
    .to(".s", { y: 0, duration: 0.5, ease: "power4.out" }, "-=0.5")
    .to(".a", { y: 0, duration: 0.5, ease: "power4.out" }, "-=0.5");

  document.querySelectorAll(".l, .i, .s, .a").forEach((letter) => {
    gsap.to(letter, {
      scrollTrigger: {
        trigger: ".about",
        scrub: 0.8,
      },
      yPercent: gsap.utils.random(-20, 30), // Each letter moves up randomly
      rotate: gsap.utils.random(-10, 10),
      ease: "power1.out",
    });
  });

  // Correcting this part:
  const nameElement = document.querySelector(".name");
  gsap.to(nameElement, {
    scrollTrigger: {
      trigger: ".about",
      scrub: 0.8,
    },
    y: -200,
    scale: 0.5,
  });
});
