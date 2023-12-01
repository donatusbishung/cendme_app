const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 15,
  
// Optional parameters

speed: 1000,
spaceBetween: 100,

direction: 'horizontal',
loop: true,
allowSlideNext: true,
allowSlidePrev: true,

// If we need pagination
pagination: {
  el: '.swiper-pagination',
},

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

autoplay: {
  delay: 2000,
},

allowTouchMove: true,

// mousewheel: {
//   invert: true,
// },

  // Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 40
  },

  360: {
    slidesPerView: 1,
    spaceBetween: 20
  },

  414: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 30
  },

  768: {
    slidesPerView: 1,
    spaceBetween: 10
  },

  800: {
    slidesPerView: 2,
    spaceBetween: 30
  },

  834: {
    slidesPerView: 2,
    spaceBetween: 30
  },

  1100: {
    slidesPerView: 4,
    spaceBetween: 30
  },
}


});