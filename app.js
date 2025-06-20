gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(TextPlugin)


gsap.to("[data-text='black']", {
  
  scrollY: 'calc(var(--sizeIndex)*3.5)',
  duration: 4,
  

});

gsap.to("[data-count='1']", {
  scrollTrigger: {
    trigger: "[data-countText='1']",
    start: 'top 90%',
    markers: 0,
  },
  innerText: 1078,
  duration: 4,
  snap: { innerText: 1 },

});
gsap.to("[data-count='2']", {
  scrollTrigger: {
    trigger: "[data-countText='2']",
    start: 'top 90%',
    markers: 0,
  },
  innerText: 33333,
  duration: 4,
  snap: { innerText: 1 },

});

gsap.to("[data-count='3']", {
  scrollTrigger: {
    trigger: "[data-countText='3']",
    start: 'top 90%',
    markers: 0,
  },
  innerText: 154,
  duration: 4,
  snap: { innerText: 1 },

});

gsap.to("[data-count='4']", {
  scrollTrigger: {
    trigger: "[data-countText='4']",
    start: 'top 90%',
    markers: 0,
  },
  innerText: 1984,
  duration: 4,
  snap: { innerText: 1 },

});

//photos

gsap.to('[data-photo="1"]', {
  scrollTrigger: {
    trigger: '[data-photo="1"]',
    start: 'top 90%',
    markers: 0,
  },
  width: '20vh',


});

gsap.to('[data-photo="2"]', {
  scrollTrigger: {
    trigger: '[data-photo="2"]',
    start: 'top 90%',
    markers: 0,
  },
  width: '20vh',


});
gsap.to('[data-photo="3"]', {
  scrollTrigger: {
    trigger: '[data-photo="3"]',
    start: 'top 90%',
    markers: 0,
  },
  width: '20vh',


});
gsap.to('[data-photo="4"]', {
  scrollTrigger: {
    trigger: '[data-photo="4"]',
    start: 'top 90%',
    markers: 0,
  },
  width: '20vh',



});


//parallax


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.parallax-layer').forEach(layer => {
  
  
  gsap.to(layer, {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".banner__wrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: 0,
    }
  });
});






//width: 20vh;
// gsap.fromTo('#question__section__2', {
//   xPercent: 100,
// }, {
//   scrollTrigger: {
//     trigger: '#question__section__1',
//     scrub: 1,

//     start: 'bottom bottom',
//     end: '+=100%',
//     pin: '#question__section__1',
//     markers: 0,
//   },
//   xPercent: 0,
//   duration: 3,
// });
// ScrollTrigger.create({
//   trigger: '#question__section__2',

//   start: 'top top',
//   end: 'bottom bottom',
//   pin: '.footer__image',
//   markers: false


// })




