if (document.URL.match("/pages/slider-page-01.html")) {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 50,
    slidesPerView: 2,
    loop: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
