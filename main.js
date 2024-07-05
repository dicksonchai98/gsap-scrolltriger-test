gsap.registerPlugin(ScrollTrigger);

gsap.from(".content", {
  scrollTrigger: {
    trigger: ".content", // start the animation when ".box" enters the viewport (once)
    scrub: 2,
    end: "bottom bottom",
  },
  x: -1000,
  duration: 3,
});
gsap.from(".img1", {
  scrollTrigger: {
    trigger: ".img1", // start the animation when ".box" enters the viewport (once)
    scrub: 2,
    end: "bottom bottom",
  },
  x: 2000,
  duration: 3,
});
gsap.from(".img2", {
  scrollTrigger: {
    trigger: ".img2", // start the animation when ".box" enters the viewport (once)
    scrub: 2,
    end: "bottom bottom",
  },
  x: -1000,
  duration: 3,
});
gsap.from(".img3", {
  scrollTrigger: {
    trigger: ".img3", // start the animation when ".box" enters the viewport (once)
    scrub: 2,
    end: "bottom bottom",
  },
  x: 2000,
  duration: 3,
});

console.log("hrllo");
