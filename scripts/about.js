// get the elements to animate
const animationElements = document.querySelectorAll(".fade-up");

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
animationElements.forEach((element) => {
  observer.observe(element);
});
