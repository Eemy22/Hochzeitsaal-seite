let menu = document.querySelector("#menu-bar");
let nav = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("nav-toggle");
});
window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("nav-toggle");
};
// slider images




const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;

var slideNumber = 0;

// image slider next button
nextBtn.addEventListener("click", () => {
  
  slides.forEach((slide) => {
    
    slide.classList.remove("active");
  });
  slideIcons.forEach((icon) => {
    icon.classList.remove("active");
  });
  slideNumber++;

  if (slideNumber >=(numberOfSlides -1)) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

// image slider prev button

prevBtn.addEventListener("click", () => {
  slides.forEach((slide) =>{
     slide.classList.remove('active')
  });
  slideIcons.forEach((slideIcon) =>{
     slideIcon.classList.remove('active')
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides -1;
    
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
})
 
// images slide autopaly

var playSlider ;
var repeater =()=>{

   playSlider = setInterval(function(){
    slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      slideIcons.forEach((icon) => {
        icon.classList.remove("active");
      });

      slideNumber++;
    
      if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
      }
    
      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
      
  },5000);

}


repeater();

