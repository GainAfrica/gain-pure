// testimonials section
const testimonials = document.querySelectorAll(".testimonial");
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialNumber = document.querySelector(".testimonial-number");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let counter = 0;
showTestimonial(0);

// function to transition between testimonials
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

// programs section
let isDragging = false;
let startPosX = 0;
let scrollLeft = 0;

const programContainer = document.getElementById("program-container");
const dragButton = document.querySelector(".drag-button");

programContainer.addEventListener("mousedown", (event) => {
  event.preventDefault(); // prevent text selection while dragging
});

// get the drag button to appear anywhere on the program container
programContainer.addEventListener("click", (e) => {
  // let style = getComputedStyle(programContainer);
  const left = e.clientX;
  const right = e.clientY - programContainer.getBoundingClientRect().top;
  dragButton.style.left = `${left}px`;
  dragButton.style.top = `${right}px`;
});

let isHorizontalScrolling = false;
let initialX = 0;
let initialScrollLeft = 0;

document.addEventListener("mousedown", (event) => {
  if (isWithinHorizontalSection(event.clientX, event.clientY)) {
    isHorizontalScrolling = true;
    initialX = event.clientX;
    initialScrollLeft = programContainer.scrollLeft;

    event.preventDefault(); // prevent text selection while dragging
  }
});

window.addEventListener("wheel", (event) => {
  if (isWithinHorizontalSection(event.clientX, event.clientY)) {
    // Get the cursor position
    const mouseX = event.clientX;
    const mouseY = event.clientY - programContainer.getBoundingClientRect().top;

    // Update the position of the circle element to follow the cursor
    dragButton.style.left = mouseX + "px";
    dragButton.style.top = mouseY + "px";
  }
});

document.addEventListener("mousemove", (event) => {
  if (isWithinHorizontalSection(event.clientX, event.clientY)) {
    // Get the cursor position
    const mouseX = event.clientX;
    const mouseY = event.clientY - programContainer.getBoundingClientRect().top;

    // Update the position of the circle element to follow the cursor
    dragButton.style.left = mouseX + "px";
    dragButton.style.top = mouseY + "px";
  }
});

document.addEventListener("mouseup", () => {
  isHorizontalScrolling = false;
});

document.addEventListener("mousemove", (event) => {
  if (isHorizontalScrolling) {
    const deltaX = event.clientX - initialX;
    programContainer.scrollLeft = initialScrollLeft - deltaX;
  }
});

// function to check if the mouse is within the program section
function isWithinHorizontalSection(clientX, clientY) {
  const containerRect = programContainer.getBoundingClientRect();
  const buttonRect = dragButton.getBoundingClientRect();
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

// function to update the progress bar for programs section based on scroll position
function updateProgramBar() {
  const programBarFill = document.getElementById("program-bar-fill");

  const scrollPercentage =
    (programContainer.scrollLeft /
      (programContainer.scrollWidth - programContainer.clientWidth)) *
    100;

  const programBarFillPosition = scrollPercentage * 0.8;
  programBarFill.style.left = programBarFillPosition + "%";
}

programContainer.addEventListener("scroll", updateProgramBar);
updateProgramBar();

// gallery section
const gallery = document.getElementById("gallery");
const galleryContainer = document.getElementById("gallery-container");
const galleryNextBtn = document.querySelector(".gallery-next-btn");
const galleryPrevBtn = document.querySelector(".gallery-prev-btn");

galleryNextBtn.addEventListener("click", () => {
  galleryContainer.scrollLeft += 800;
});

galleryPrevBtn.addEventListener("click", () => {
  galleryContainer.scrollLeft -= 800;
});

// function to update the progress bar for gallery section based on scroll position
function updateGalleryBar() {
  const galleryBarFill = document.getElementById("gallery-bar-fill");

  const scrollPercentage =
    (galleryContainer.scrollLeft /
      (galleryContainer.scrollWidth - galleryContainer.clientWidth)) *
    100;

  const galleryBarFillPosition = scrollPercentage * 0.8;
  galleryBarFill.style.left = galleryBarFillPosition + "%";
}

document
  .getElementById("gallery-container")
  .addEventListener("scroll", updateGalleryBar);
updateGalleryBar();

// function is_touch_enabled() {
//   return (
//     "ontouchstart" in window ||
//     navigator.maxTouchPoints > 0 ||
//     navigator.msMaxTouchPoints > 0
//   );
// }
// if (!is_touch_enabled()) {
//   console.log("touch enabled");
// }

// Get the elements to animate
const titleElement = document.querySelectorAll(".fade-up");

// Create the intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the element is in the viewport, add the animation class
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      // If the element is not in the viewport, remove the animation class
      entry.target.classList.remove("animate");
    }
  });
});

// Observe the elements
titleElement.forEach((element) => {
  observer.observe(element);
});
// observer.observe(titleElement);
// observer.observe(paragraphElement);
