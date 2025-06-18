var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    pagination: {
        el: ".swiper-pagination",
      },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-100%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
