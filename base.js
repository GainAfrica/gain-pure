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

// second hamburger menu
const hamburgerIcon = document.querySelector(".navbar-toggler-icon");
const hamburgerBar = document.querySelectorAll(".hamburger-bar");
const hamburgerBar1 = document.querySelector(".hamburger-bar-1");
const hamburgerBar2 = document.querySelector(".hamburger-bar-2");
const mobileNav = document.querySelector(".mobile-nav");

// Animation for "X"
////////////////////
////////////////////
let isRotated = false;
function rotateBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.add("rotate");
  });
}
function unrotateBar() {
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
function drawBAr() {
  hamburgerBar.forEach((bar) => {
    bar.classList.add("draw-bar");
  });
}

function eraseBar() {
  hamburgerBar.forEach((bar) => {
    bar.classList.remove("draw-bar");
  });
}

function clearBars() {
  hamburgerBar.forEach((bar) => {
    bar.classList.remove("translate");
  });
}

function barsAway() {
  hamburgerBar.forEach((bar) => {
    bar.classList.add("translate");
  });
}

hamburgerIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  if (isRotated) {
    rotateBar();
    eraseBar();
    growBar();
    dropBar();
    barsAway();
    setTimeout(barsAway, 300);
    isRotated = false;
  } else {
    reduceBar();
    clearBars();
    unrotateBar();
    setTimeout(raiseBar, 300);
    setTimeout(drawBAr, 350);
    isRotated = true;
  }
});
