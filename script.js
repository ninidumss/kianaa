"use strict"


const carouselButtons = document.querySelectorAll(".carousel-btn");
const carouselButtonLeft = document.querySelector(".btn-left");
const carouselButtonRight = document.querySelector(".btn-right");
const carouselImage1 = document.querySelector(".carousel-image-1");
const carouselImage2 = document.querySelector(".carousel-image-2");
const carouselImage3 = document.querySelector(".carousel-image-3");
const numberOfImages = document.querySelectorAll(".carousel-image").length;
let imageIndex = 1;
let translateX = 0;

carouselButtonLeft.addEventListener("click", slideLeft);
carouselButtonRight.addEventListener("click", slideRight);

function slideLeft() {
  if (imageIndex !== 1) {
    imageIndex--;
    translateX += carouselImage1.offsetWidth;
    carouselImage1.style.transform = `translateX(${translateX}px)`;
    carouselImage2.style.transform = `translateX(${translateX}px)`;
    carouselImage3.style.transform = `translateX(${translateX}px)`;
  }

}

function slideRight() {
  if (imageIndex !== numberOfImages) {
    imageIndex++;
    translateX -=  carouselImage1.offsetWidth;
    carouselImage1.style.transform = `translateX(${translateX}px)`;
    carouselImage2.style.transform = `translateX(${translateX}px)`;
    carouselImage3.style.transform = `translateX(${translateX}px)`;
  }

}
var paused = false,
    interval = setInterval(function() {
      (!paused) && $('#next3').trigger('click');
    },3000);
$('.slideRight, .controls').hover(function() {
  paused = true;
},function() {
  paused = false;
});



const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
  console.log('here');
	item.addEventListener('click', function() {
    switchers.forEach(item => item.parentElement.classList.remove('is-active'))
    console.log(this.parentElement.classList);
    this.parentElement.classList.add('is-active')
  })
})



const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");
readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});


