/*loading-Icon*/

window.addEventListener("load", () =>{
const loader = document.querySelector(".loader");

loader.className += " hidden";
console.log(loader);
});

/* Scroll navBar active */

window.addEventListener("scroll", () =>{
    const scrollBackground = document.querySelector('.navbar');

    scrollBackground.classList.toggle('active', window.scrollY > 0)
})

/* navbar icon */

const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

window.addEventListener(
    "resize", () => {
      if (document.body.clientWidth > 720) {
        nav.classList.remove("open");
        navIcon.forEach((icon) => {
          icon.classList.remove("hidden");
        });
        navOpenIcon.classList.add("hidden");
      }
    },
    { passive: false }
  );