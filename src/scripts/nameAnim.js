import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

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

const tl = gsap.timeline({ delay: 0.2 });

tl.to(".l, .i, .s, .a", {
  opacity: 1,
  strokeDashoffset: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.1,
});

tl.to(
  ".l",
  {
    y: 0,
    duration: 1.5,
    ease: "bounce.out",
  },
  "-=0.75"
)
  .to(".i", { y: 0, duration: 0.5, ease: "elastic.out(1,0.3)" }, "-=0.5")
  .to(".s", { y: 0, duration: 0.5, ease: "elastic.out(1,0.3)" }, "-=0.5")
  .to(".a", { y: 0, duration: 0.5, ease: "elastic.out(1,0.3)" }, "-=0.5");

gsap.to(".name", {
  scrollTrigger: ".box", // start animation when ".box" enters the viewport
  x: 500,
});
