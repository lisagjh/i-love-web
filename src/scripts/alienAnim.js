import { gsap } from "gsap";

const tl = gsap.timeline({ delay: 0.1 });
const box = document.querySelector(".box");

tl.to(box, {
  y: -20,
  duration: 1.5,
  ease: "sine.out",
  repeat: -1,
  yoyo: true,
});

document.addEventListener("mousemove", (event) => {
  const cursorX = event.clientX;
  const cursorY = event.clientY;

  // Select all the eyes and pupils (both left and right)
  const eyes = document.querySelectorAll(".eyeball");
  const pupils = document.querySelectorAll(".pupil");

  // Loop through each pair of eye and pupil
  eyes.forEach((eye, index) => {
    const pupil = pupils[index]; // Get the corresponding pupil
    moveEye(eye, pupil, cursorX, cursorY);
  });
});

const body = document.querySelector(".body");

body.addEventListener("click", (event) => {
  console.log("click!");
  const eyebrows = document.querySelectorAll(".eyebrow");
  const mouth = document.querySelector(".mouth");

  gsap.to(eyebrows, {
    transformOrigin: "50% 50%",
    y: 10,
    scale: 2,
    yoyo: true,
    repeat: 1,
    duration: 1,
  });

  gsap.to(mouth, {
    transformOrigin: "50% 50%",
    scale: 0.4,
    yoyo: true,
    repeat: 1,
    duration: 0.5,
  });
});

// Function to move the pupils
function moveEye(eyeArea, pupil, cursorX, cursorY) {
  const rectEye = eyeArea.getBoundingClientRect();
  const centerX = rectEye.left + rectEye.width / 2;
  const centerY = rectEye.top + rectEye.height / 2;

  const deltaX = cursorX - centerX;
  const deltaY = cursorY - centerY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  // Adjusted pupil movement limits
  const maxHorizontalMove = rectEye.width / 4; // Horizontal limit
  const maxVerticalMoveTop = rectEye.height / 1; // Limit for top movement
  const maxVerticalMoveBottom = rectEye.height / 9; // Smaller limit for bottom movement

  // Determine max movement based on cursor position
  let maxMove;
  if (deltaY < 0) {
    maxMove = Math.min(maxHorizontalMove, maxVerticalMoveTop); // Apply top limit
  } else {
    maxMove = Math.min(maxHorizontalMove, maxVerticalMoveBottom); // Apply bottom limit
  }

  // Limit the pupil movement distance
  const limitedDist = Math.min(distance, maxMove);

  const angle = Math.atan2(deltaY, deltaX);
  const pupilX = limitedDist * Math.cos(angle);
  const pupilY = limitedDist * Math.sin(angle);

  // Move the pupil with GSAP
  gsap.to(pupil, {
    x: pupilX,
    y: pupilY,
  });
}
