const testimonials = document.querySelectorAll(".testimonial");
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialNumber = document.querySelector(".testimonial-number");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let counter = 0;
showTestimonial(0);

function showTestimonial(n) {
  let i;
  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  testimonialNumber.textContent = `0${n + 1}`;
  testimonials[n].style.display = "block";
}

nextBtn.addEventListener("click", () => {
  counter++;
  if (counter > testimonials.length - 1) {
    counter = 0;
  }
  showTestimonial(counter);
});

prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = testimonials.length - 1;
  }
  showTestimonial(counter);
});

let isDragging = false;
let startPosX = 0;
let scrollLeft = 0;

const scrollContainer = document.querySelector(".slider");
const scrollButton = document.querySelector(".slide-button");

scrollButton.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPosX = e.clientX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollButton.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.clientX - scrollContainer.offsetLeft;
  const distance = x - startPosX;
  scrollContainer.scrollLeft = scrollLeft - distance;
});

scrollButton.addEventListener("mouseup", () => {
  isDragging = false;
});

scrollButton.addEventListener("mouseleave", () => {
  isDragging = false;
});

scrollContainer.addEventListener("click", (e) => {
  let style = getComputedStyle(scrollContainer);
  const left =
    e.clientX - parseInt(style.marginLeft) - 20 + scrollContainer.scrollLeft;
  const right = e.clientY - scrollContainer.getBoundingClientRect().top;
  scrollButton.style.left = `${left}px`;
  scrollButton.style.top = `${right}px`;
});

const box = document.querySelectorAll(".hero-text");
console.log(box);
box.forEach((box) => {
  box.addEventListener("animationend", () => {
    box.style.opacity = 1;
  });
});
