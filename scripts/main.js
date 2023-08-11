// programs section
let isHorizontalScrolling = false;
let initialX = 0;
let initialScrollLeft = 0;

const programContainer = document.getElementById("program-container");
const dragButton = document.querySelector(".drag-button");

programContainer.addEventListener("mousedown", (event) => {
  event.preventDefault(); // prevent text selection while dragging
});

// get the drag button to appear anywhere on the program container
programContainer.addEventListener("click", (e) => {
  const left = e.clientX;
  const right = e.clientY - programContainer.getBoundingClientRect().top;
  dragButton.style.left = `${left}px`;
  dragButton.style.top = `${right}px`;
});

document.addEventListener("mousedown", (event) => {
  if (isWithinHorizontalSection(event.clientX, event.clientY)) {
    event.preventDefault(); // prevent text selection while dragging
    isHorizontalScrolling = true;
    initialX = event.clientX;
    initialScrollLeft = programContainer.scrollLeft;
  }
});

// initialize variables to store the cursor position
let mouseX = 0;
let mouseY = 0;

// function to update the position of the drag button element
function updateCirclePosition() {
  // calculate the difference between the current position and the target position
  const deltaX = mouseX - parseInt(dragButton.style.left || 0, 10);
  const deltaY =
    mouseY -
    parseInt(dragButton.style.top || 0, 10) -
    programContainer.getBoundingClientRect().top;

  // apply smooth movement by updating the position with a fraction of the difference
  const easeAmount = 0.15;
  dragButton.style.left =
    parseInt(dragButton.style.left || 0, 10) + deltaX * easeAmount + "px";
  dragButton.style.top =
    parseInt(dragButton.style.top || 0, 10) + deltaY * easeAmount + "px";

  // call requestAnimationFrame() recursively to create a smooth animation loop
  requestAnimationFrame(updateCirclePosition);
}

// attach the mousemove event listener to update the cursor position
document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  if (isHorizontalScrolling) {
    const deltaX = event.clientX - initialX;
    programContainer.scrollLeft = initialScrollLeft - deltaX;
  }
});

// start the animation loop
updateCirclePosition();

document.addEventListener("mouseup", () => {
  isHorizontalScrolling = false;
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

// changing the drag button properties when a link is hovered
const links = document.querySelectorAll("a");

function onLinkHover() {
  dragButton.style.backgroundColor = "rgba(0,0,0,0.5)";
  dragButton.style.width = "10px";
  dragButton.style.height = "10px";
  dragButton.textContent = "";
}

// Function to reset circle properties when a link is not hovered
function onLinkHoverOut() {
  dragButton.style.backgroundColor = "rgb(229, 231, 235)";
  dragButton.style.width = "112px";
  dragButton.style.height = "112px";
  dragButton.textContent = "DRAG";
}

links.forEach((link) => {
  link.addEventListener("mouseenter", onLinkHover);
  // link.addEventListener("mouseleave", () => {
  //   setTimeout(() => {
  //     onLinkHoverOut();
  //   }, 5000);
  // });
  // link.addEventListener("mousemove", onLinkHover);
});

// add a global mousemove event to reset circle properties when the cursor is not over any link
document.addEventListener("mousemove", (event) => {
  if (!Array.from(links).some((link) => link.contains(event.target))) {
    onLinkHoverOut();
  }
});

// enable program overlay
const overlayBtn1 = document.querySelector(".overlay-btn-1");
const overlayBtn2 = document.querySelector(".overlay-btn-2");
const exitBtn1 = document.querySelector(".exit-btn-1");
const exitBtn2 = document.querySelector(".exit-btn-2");

overlayBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".overlay-1").classList.add("show");
});

overlayBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".overlay-2").classList.add("show");
});

exitBtn1.addEventListener("click", () => {
  document.querySelector(".overlay-1").classList.remove("show");
});

exitBtn2.addEventListener("click", () => {
  document.querySelector(".overlay-2").classList.remove("show");
});

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

// // ####################################

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

// // ####################################

// gallery section
const swiper = new Swiper(".mySwiper", {
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  // slidesPerView: 4,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // loop: true,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  // spaceBetween: 80,
  grabCursor: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// // ####################################

// get the elements to animate
const titleElement = document.querySelectorAll(".fade-up");

// create the intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // if the element is in the viewport, add the animation class
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      // if the element is not in the viewport, remove the animation class
      // entry.target.classList.remove("animate");
    }
  });
});

// observe the elements
titleElement.forEach((element) => {
  observer.observe(element);
});

// for touch devices
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
