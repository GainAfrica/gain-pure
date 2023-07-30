// hero text animation
const heroTexts = document.querySelectorAll(".hero-text");
heroTexts.forEach((text) => {
  text.addEventListener("animationend", () => {
    text.style.opacity = 1;
  });
});
