//GSAP
// Tell GSAP we are using the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- 1. HERO ANIMATION (Runs instantly on load) ---
const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

tl.to(".hero__title", { opacity: 1, y: 0 })
  .to(".hero__description", { opacity: 1, y: 0 }, "-=0.6") // Starts slightly early
  .to(
    ".hero__buttons button",
    { opacity: 1, scale: 1, duration: 0.5 },
    "-=0.4",
  );

// --- 2. SCROLL ANIMATION (Triggers when user scrolls down) ---
gsap.to(".features__item, .about__description, .about__img", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.2, // This creates the "one-after-the-other" waterfall effect!
  scrollTrigger: {
    trigger: ".features",
    start: "top 75%", // Starts when the top of the section hits 75% of the viewport height
    toggleActions: "play none none none", // Plays once and stays visible
  },
});

//HAMBURGER
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");
const nav = document.querySelector(".header__wrapper");
const navLinks = document.querySelector(".header__nav-links");

openMenu.addEventListener("click", () => {
  nav.classList.add("active-menu");
  navLinks.classList.add("active-list");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active-menu");
  navLinks.classList.remove("active-list");
});
