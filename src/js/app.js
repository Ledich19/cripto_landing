import * as flsFunctions from "./modules/functions.js";
import burger from "./modules/burger-menu.js";
//import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
document.addEventListener("DOMContentLoaded", () => {
  // flsFunctions.isWebp();
  burger();

  const swiper = new Swiper(".swiper", {

    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

});
