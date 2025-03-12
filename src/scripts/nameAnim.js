import gsap from "gsap";

console.log(gsap.version);

function animateName() {
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
    ease: "power3.inOut",
    stagger: 0.1,
  });

  tl.to(".l", { y: 0, duration: .5, ease: "power2.inOut" }, "-=0.75")
    .to(".i", { y: 0, duration: .5, ease: "power2.inOut" }, "-=0.9")
    .to(".s", { y: 0, duration: .5, ease: "power2.inOut" }, "-=0.8")
    .to(".a", { y: 0, duration: .5, ease: "power2.inOut" }, "-=0.7");
}

document.addEventListener("DOMContentLoaded", animateName);
