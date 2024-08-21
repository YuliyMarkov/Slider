function saleDate() {
  let newDate = new Date();
  let saleDate = new Date(2024, 7, 23);
  let finishDate = saleDate - newDate;
  let day = Math.floor(finishDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((finishDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((finishDate % (1000 * 60 * 60)) / (1000 * 60));
  
  let dayValue = document.getElementsByClassName("time")[0]
  let hoursValue = document.getElementsByClassName("time")[1]
  let minutesValue = document.getElementsByClassName("time")[2]

  dayValue.textContent = day;
  hoursValue.textContent = hours;
  minutesValue.textContent = minutes;
}

saleDate();
setInterval(() => {
  saleDate();
}, 1000);


var swiper = new Swiper('', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    975: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    perPage: 3,
    gap: 30,
    rewind: true,
    arrows: false,
    pagination: false,
    breakpoints: {
      975: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});


