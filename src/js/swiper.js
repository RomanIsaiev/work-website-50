// import Swiper JS
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper1 = new Swiper('.mySwiper1', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
    },
  },
});
