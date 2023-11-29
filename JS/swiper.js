const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    autoHeight: false,
    centeredSlides: false,

    // Default parameters
    slidesPerView: 2,
    spaceBetween: 30,

    autoplay: {
        delay: 5000,
    },

    speed: 1000,
    spaceBetween: 100,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

      // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 5
    }

  }
  
  });