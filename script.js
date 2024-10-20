const slider = document.querySelector(".testimonial-slider");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
const slidesToShow = 2;

function updateSlider(index) {
  const slideWidth = slider.clientWidth / slidesToShow;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;

  // Update active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlider(currentSlide);
  });
});

let startX = 0;
let isDragging = false;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
});

slider.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const diff = startX - e.clientX;
    if (diff > 50) {
      // Move to the next slide
      if (currentSlide < dots.length - 1) {
        currentSlide++;
        updateSlider(currentSlide);
      }
      isDragging = false;
    } else if (diff < -50) {
      // Move to the previous slide
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider(currentSlide);
      }
      isDragging = false;
    }
  }
});

window.addEventListener("resize", () => {
  updateSlider(currentSlide);
});

const skillsList = document.querySelector(".skills-list");

skillsList.addEventListener("animationiteration", () => {
  skillsList.appendChild(skillsList.firstElementChild);
});

const skillsLists = document.querySelector(".skills-list");

const cloneItems = skillsLists.innerHTML;
skillsLists.innerHTML += cloneItems;
