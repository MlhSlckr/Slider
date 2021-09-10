const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.querySelectorAll('.slider');

let counter = 0;

slides.forEach(function (slider, index) {
  slider.style.left = `${index * 100}%`;
})

function carousel() {
  if (counter > slides.length - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1
  }
  slides.forEach(function (slider) {
    slider.style.transform = `translateX(-${counter * 100}%)`
  })
}

nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
  console.log(counter)
})

prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
  console.log(counter)
})
