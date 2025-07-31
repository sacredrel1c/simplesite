const images = ["product1.png", "product2.png", "product3.png"];
let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderImage.src = images[currentIndex];
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
});
