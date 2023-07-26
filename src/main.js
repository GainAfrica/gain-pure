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
