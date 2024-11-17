var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true, // Remove quotes around true
  fade: true, // Remove quotes around true
  grabCursor: true, // Remove quotes around true
  autoplay: {
      delay: 2500, // Set the delay (in milliseconds) between slides
      disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
