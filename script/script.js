const heroSwiper = new Swiper('.hero-swiper', {
    // Optional parameters
    loop: true,
    autoplay:{
        delay:4000
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
   
  });


  const burgerSwiper = new Swiper('.burger-swiper', {
    // Optional parameters
    loop: true,
    autoplay:{
        delay:4000
    },
    spaceBetween:40,

     // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
      slidesperview: 1,
    },
    520:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    },
  },
  
  
  });
  