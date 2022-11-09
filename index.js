//the html element
const slider = document.querySelector(".slider");

//the btns
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slides");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

//set counter
let counter = 0;

//button fuctions
prevButton.addEventListener("click", () => {
  counter--;
  carouselSlide();
});

nextButton.addEventListener("click", () => {
  counter++;
  carouselSlide();
});

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

//toggling the direction icon
slider.addEventListener("mouseover", () => {
  btns.forEach((btn) => {
    btn.style.display = "block";
  });
});

slider.addEventListener("mouseout", () => {
  btns.forEach((btn) => {
    btn.style.display = "none";
  });
});

//carousel slide function
const carouselSlide = () => {
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};