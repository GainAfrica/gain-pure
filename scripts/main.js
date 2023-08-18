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

// function to reset circle properties when a link is not hovered
function onLinkHoverOut() {
  dragButton.style.backgroundColor = "rgb(229, 231, 235)";
  dragButton.style.width = "112px";
  dragButton.style.height = "112px";
  dragButton.textContent = "DRAG";
}

links.forEach((link) => {
  link.addEventListener("mouseenter", onLinkHover);
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
const overlayBtn3 = document.querySelector(".overlay-btn-3");
const exitBtn1 = document.querySelector(".exit-btn-1");
const exitBtn2 = document.querySelector(".exit-btn-2");
const exitBtn3 = document.querySelector(".exit-btn-3");

overlayBtn1.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".overlay-1").classList.add("show");
});

overlayBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".overlay-2").classList.add("show");
});

overlayBtn3.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  console.log(document.querySelector(".overlay-3"));
  document.querySelector(".overlay-3").classList.add("show");
});

exitBtn1.addEventListener("click", () => {
  document.querySelector(".overlay-1").classList.remove("show");
});

exitBtn2.addEventListener("click", () => {
  document.querySelector(".overlay-2").classList.remove("show");
});

exitBtn3.addEventListener("click", () => {
  document.querySelector(".overlay-3").classList.remove("show");
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
const testimonialsArray = [
  {
    index: 1,
    name: "Osionela Ogiogwa",
    pictureSrc: "/assets/images/osionela.jpg",
    testimonial:
      "“I am Osionela Josephine OGIOGWA, a native of the Afemai tribe in Edo State, Nigeria. I come from a family of 2, myself being the first born. After high school, I enrolled in the Cambridge Advanced Level program for a year. <br /><br /> I came in contact with Mr Temitope Fashakin in 2022. Knowing him has been a blessing to my academic life. He took an interest  in me cause I had good grades in high school and the A Levels program; he believed that I have what it takes to go to school in the United States of <span class='dots'>...</span><span class='more'> America.  (I had 3A*s in the October/November 2021 Cambridge Advanced Level examination in Biology, Chemistry and Physics respectively). <br /><br /> The process all started under Qpat Solutions Limited, a company founded by Mr Temitope Fashakin under the umbrella organization,GAIN(Giving Aid International Network), a nongovernmental organization that invests in the academic life of young students in high school and university. This program took care of my SAT by paying for the test and also by tutoring me for the test. I had a total of 1410 at the end of the test. <br /> <br /> During my time with Qpat solutions,I was assisted with my application to six schools. I had English study sessions with excellent English Language teachers who helped to make my college essay perfect and presentable. At the end of it all, I gained admission to three schools with scholarships to two. Without the help of this organization, I wouldn't have been able to fulfill my dream of studying in the United States as a lot of steps require guidance. <br /><br /> Words can't explain my feelings of gratitude for the academic help rendered to me through Qpat solutions, the financial help from GAIN and the mentoring help from Mr. Temitope Fashakin and his crew. God bless you all. It has been an amazing journey so far and I look forward to what the Lord has in store for me.”</span> <br/><br/><button onclick='readTestimonial()' class='read-more'>Read more</button>",
  },
  {
    index: 2,
    name: "Terence Oscar-Okpala",
    pictureSrc: "/assets/images/oscar.jpg",
    testimonial:
      "“My name is Terence Oscar-Okpala I am currently a sophomore at Bethune Cookman University studying Chemistry. I grew up with 2 siblings in the city of Ibadan, Nigeria. I developed a love for science and Chemistry in high school which pushed me to explore tertiary education at universities outside my native country. I attended Oritamefa Baptist Model School for my secondary education and pursued  a Cambridge Advanced Level Certificate at the same school. My experience at the college sparked my interest in the possibilities of tertiary education aboard and encouraged me to take on the SAT and IELTS examinations to <span class='dots'>...</span><span class='more'> improve my odds. <br /><br /> After completing my certificate  and while working in my Advanced Level College, a lecturer introduced to Mr Fashakin and his organization, Giving Aids International Network. In my first conversation with him, I got to witness his infectious determination and ambition in my future which further gave my family and I confidence to go through and complete the process of application. I was given admission two weeks after but had a long and scary wait to find out if I could get a Presidential Scholarship which would determine if I could attend. Throughout the excruciating process, the words of encouragement from Mr Fashakin even after I had begun to lose confidence in myself were inspiring to me and with his help, I was able to not only able to gain admission but also a Presidential Scholarship to fund my studies. <br /><br /> Mr Fashakin’s support did not end here as he continued to provide active assistance through the visa procedures and aided me in preparation for my visa interview as well as my travel preparations. When I arrived at the US, Mr Fashakin took time out of his busy schedule to meet me at the airport, show me around and help me to get acclimated to my new surrounding making my transition all that much easier. Since the first time I stepped foot in the US till now he has never stopped sharing support and advice at every turn of my academics which have been pivotal to my stay and academic performance. <br /><br /> The most comforting part of my experience with Mr Fashakin is that he has changed my mentality about success. I used to think success is a race but I realize that It is a marathon with different stages and Mr Fashakin’s love for helping the youths of Nigeria and building successful youths that society can be proud of has convinced me that he would be supporting me and every youth he interacts with through every stage of the marathon to success.”</span><br/><br/><button onclick='readTestimonial()' class='read-more'>Read more</button>",
  },
  {
    index: 3,
    name: "Kehinde Ezekiel",
    pictureSrc: "/assets/images/kehinde.jpg",
    testimonial:
      " “I am Kehinde Ezekiel, and I hail from Lagos State, Nigeria.    Currently, I am a Ph.D. student at Scripps Research Institute.    From a young age, I had always envisioned the dreams of being    the best I could be in whatever I find myself doing; which    fueled my determination to excel in my secondary school studies    and eventually secure 8As and 1B in my WASSCE exams. My results    and dedicated actions paved the way for me to achieve my global    educational aspirations when I learned about the Giving Aid    International Network (GAIN). GAIN became  GAIN is an incredible organization that is <span class='dots'>...</span><span class='more'> committed to fostering global education by supporting and offering a range of global opportunities to students. When I enrolled in the program, I a pivotal force in    shaping my academic pursuit. <br /><br /> received invaluable assistance and lessons from the tutor in preparing for international exams like SAT, TOEFL, navigating the application process, and preparing my mindset for success. The leader of the program, Mr Temitope Fashakin not just provided the opportunity, but also offered support mentally, and in preparing for my visa interview, equipping me with the skills needed for success. I secured admission to a U.S. university with a full ride scholarship valued at approximately $100,000. <br /><br /> Throughout my four year journey in college, GAIN continued to be a pillar of support, offering valuable academic advice, assistance, and guidance in adapting to the new environment. GAIN also empowered me to pay it forward by helping other students who were preparing to study abroad, as well as students who came after me through mentorship and career guidance. Witnessing these students secure internships and excel in their pursuits after the guidance I provided fills me with immense joy and pride. <br /><br /> I am deeply grateful for the world-class experience that GAIN has provided me which has set a strong foundation for various aspects of my life. As I continue my academic pursuits, I find great joy in paying it forward by mentoring and guiding other students, just as GAIN did for me. I am excited to see how their impact continues to enrich the lives of other aspiring students around the world.”</span><br/><button onclick='readTestimonial()' class='read-more'>Read more</button>",
  },
  {
    index: 4,
    name: "Moyinoluwa Adelowo",
    pictureSrc: "/assets/images/moyin.jpg",
    testimonial:
      "“My name is Moyinoluwa Adelowo, and I was born and raised in    Nigeria. <br /><br />    I met Mr. Fashakin after my Cambridge Advanced Level Program    through one of my lecturers and knowing him has been a blessing.    Mr. Fashakin is the CEO of Giving Aid International Network    (GAIN) and QPAT Solutions. GAIN is a non-governmental    association committed to assisting students with their education    and offering  global opportunities to students. <br /><br />    When he saw my Cambridge Advanced level result(3A*s) and my    WASSCE Result (8A1s and 1B), he invited me to join the GAIN    Program, knowing I could do <span class='dots'>...</span><span class='more'> more if given the chance. He reached     out to me regarding my plans after my Advanced level program,    which I told him was to apply to schools in the U.S.    <br /><br />    The process started with preparation to take the SAT. GAIN    sponsored the exam fee and QPAT Solutions, a partner    organization, provided us with resources to study for the SAT.    The process did not end there. I had access to different    resources and people dedicated to assisting us through the    process. I applied to several schools with Mr. Fashakin’s    assistance of which I was accepted to a few and got a full-ride    scholarship from one worth over $100,000. Then Mr. Fashakin and    his team assisted me in preparing for my visa application and    the visa interview. GAIN took care of the financial burdens for    most of these processes. <br /><br />    Throughout this process, Mr. Fashakin always provided me with    timely words of advice and encouragement. I could feel the drive    he had for me to succeed. I'm grateful to God for meeting Mr.    Fashakin. He has been a blessing to my life. I'm looking forward    to the next phase of my life. ”</span><br/><br/><button onclick='readTestimonial()' class='read-more'>Read more</button>",
  },
  {
    index: 5,
    name: "Israel Oyekan",
    pictureSrc: "/assets/images/israel.jpg",
    testimonial:
      "“ I'm Israel Oyekan, and I want to share my incredible journey      with Giving Aid International Network (GAIN). GAIN has truly      been a cornerstone in my transition to higher education in the      United States. I got 8A1’s & 1B3 in WAEC and scored 1300 on the      SATs. I got an honors presidential scholarship in the United      States all thanks to the support GAIN provided me. <br /><br />      I am very grateful for the support I've received from the GAIN      program. The opportunity to connect with like-minded individuals      and driven students has been invaluable. Surrounding myself with      people who share my passion for success and who are always      willing to lend a helping hand has been instrumental in my      journey. <br /><br />      GAIN has a unique way of nurturing your dreams and helping you      transform them into reality. Mr. Temitope Fashakin’s visionary      leadership and support have created a platform where individuals      like me can thrive and positively impact society.”",
  },
];

let counter = 0;

const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialSelectors = document.querySelectorAll(".testimonial-selector");
const testimonialName = document.querySelector(".testimonial-name");
const testimonialImage = document.querySelector(".testimonial-image");
const testimonialText = document.querySelector(".testimonial-text");

const selectTestimonial = (index) => {
  const testimonial = testimonialsArray[index];
  testimonialName.textContent = testimonial.name;
  if (index === 1) {
    testimonialName.style.maxWidth = "300px";
  } else {
    testimonialName.style.maxWidth = "200px";
  }
  testimonialImage.src = testimonial.pictureSrc;
  testimonialText.innerHTML = testimonial.testimonial;
};

selectTestimonial(0);

testimonialSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    testimonialSelectors[counter].classList.remove("active");
    const number = selector.querySelector("text").textContent;
    counter = number - 1;
    selector.classList.add("active");
    selectTestimonial(counter);
    clearInterval(interval);
    interval = setInterval(changeTestimonial, 30000);
  });
});

// function to change the testimonial every 30 seconds
let interval = setInterval(changeTestimonial, 30000);
function changeTestimonial() {
  testimonialSelectors[counter].classList.remove("active");
  counter++;
  if (counter > testimonialsArray.length - 1) {
    counter = 0;
  }
  testimonialSelectors[counter].classList.add("active");
  selectTestimonial(counter);
}

// function to show more text in the testimonial
function readTestimonial() {
  const dots = testimonialContainer.querySelector(".dots");
  const moreText = testimonialContainer.querySelector(".more");
  const btnText = testimonialContainer.querySelector(".read-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// // ####################################

// gallery section
const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
const animationElements = document.querySelectorAll(".fade-up");

// create the intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // if the element is in the viewport, add the animation class
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

// observe the elements
animationElements.forEach((element) => {
  observer.observe(element);
});
