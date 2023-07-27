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
  e.preventDefault();
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
box.forEach((box) => {
  box.addEventListener("animationend", () => {
    box.style.opacity = 1;
  });
});

function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (!is_touch_enabled()) {
  console.log("touch enabled");
}

let isHorizontalScrolling = false;
let initialX = 0;
let initialScrollLeft = 0;

document.addEventListener("mousedown", (event) => {
  if (isWithinHorizontalSection(event.clientX, event.clientY)) {
    console.log("mouse is within the container");
    isHorizontalScrolling = true;
    initialX = event.clientX;
    initialScrollLeft = scrollContainer.scrollLeft;
    event.preventDefault(); // Prevent text selection while dragging
  }
});

document.addEventListener("mouseup", () => {
  isHorizontalScrolling = false;
});

document.addEventListener("mousemove", (event) => {
  if (isHorizontalScrolling) {
    const deltaX = event.clientX - initialX;
    scrollContainer.scrollLeft = initialScrollLeft - deltaX;
  }
});

document.addEventListener("wheel", (event) => {
  // console.log("wheel");
  if (isWithinHorizontalSection(event.clientX, event.clientY)) {
    event.preventDefault(); // Prevent default vertical scrolling only when inside horizontal section
    const delta = event.deltaY;
    scrollContainer.scrollLeft += delta;
  }
});

function isWithinHorizontalSection(clientX, clientY) {
  // console.log("yes");
  const containerRect = scrollContainer.getBoundingClientRect();
  const buttonRect = scrollButton.getBoundingClientRect();
  const containerTop = containerRect.top;
  const containerBottom = containerRect.bottom;
  const buttonLeft = buttonRect.left;
  const buttonRight = buttonRect.right;

  return (
    clientY >= containerTop &&
    clientY <= containerBottom &&
    clientX >= buttonLeft &&
    clientX <= buttonRight
  );
}

scrollContainer.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

// function to add header animation
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const threshold = 70;
  const header = document.querySelector(".header");

  if (scrollTop > threshold) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// function to update the progress bar for programs section based on scroll position
function updateProgramBar() {
  const programBarFill = document.getElementById("program-bar-fill");
  const programSection = document.getElementById("slider");

  const scrollPercentage =
    (programSection.scrollLeft /
      (programSection.scrollWidth - programSection.clientWidth)) *
    100;

  const programBarFillPosition = scrollPercentage * 0.8;
  programBarFill.style.left = programBarFillPosition + "%";
}

document.getElementById("slider").addEventListener("scroll", updateProgramBar);
updateProgramBar();

// function to update the progress bar for gallery section based on scroll position
function updateGalleryBar() {
  const galleryBarFill = document.getElementById("gallery-bar-fill");
  const gallerySection = document.getElementById("gallery");

  const scrollPercentage =
    (gallerySection.scrollLeft /
      (gallerySection.scrollWidth - gallerySection.clientWidth)) *
    100;

  const galleryBarFillPosition = scrollPercentage * 0.8;
  galleryBarFill.style.left = galleryBarFillPosition + "%";
}

document.getElementById("gallery").addEventListener("scroll", updateGalleryBar);
updateGalleryBar();
