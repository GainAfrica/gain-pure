// header section
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

// hamburger menu
const hamburgerIcon = document.querySelector(".navbar-toggler-icon");
const hamburgerBar = document.querySelectorAll(".hamburger-bar");
const hamburgerBar1 = document.querySelector(".hamburger-bar-1");
const hamburgerBar2 = document.querySelector(".hamburger-bar-2");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = mobileNav.querySelectorAll("a");

// Animation for "X"
let isRotated = false;

function rotateBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.add("rotate");
  });
}

function unRotateBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.remove("rotate");
  });
}

function reduceBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.add("reduce");
  });
}

function growBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.remove("reduce");
  });
}

function raiseBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.add("raise");
  });
}

function dropBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.remove("raise");
  });
}

function drawBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.add("draw-bar");
  });
}

function eraseBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.remove("draw-bar");
  });
}

function clearBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.remove("translate");
  });
}

function fillBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.add("translate");
  });
}

function activateMenu() {
  reduceBar();
  clearBar();
  unRotateBar();
  setTimeout(raiseBar, 300);
  setTimeout(drawBar, 350);
}

function deactivateMenu() {
  rotateBar();
  eraseBar();
  growBar();
  dropBar();
  setTimeout(fillBar, 300);
}

hamburgerIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  if (isRotated) {
    deactivateMenu();
    isRotated = false;
  } else {
    activateMenu();
    isRotated = true;
  }
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    deactivateMenu();
    mobileNav.classList.remove("active");
    isRotated = false;
  });
});
