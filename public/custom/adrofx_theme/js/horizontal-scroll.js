gsap.registerPlugin(ScrollTrigger);

let windowWidth = window.innerWidth;
let horLength = document.querySelector(".list-features.horizontal-scroll").scrollWidth;
let sections = gsap.utils.toArray(".list-features.horizontal-scroll .list-features__item");
let itemWidth = document.querySelector(".list-features.horizontal-scroll .list-features__item").offsetWidth;


ScrollTrigger.matchMedia({

  "(min-width:900px)": function () {
    gsap.to(".list-features.horizontal-scroll", {
      x: () => `-${horLength - windowWidth + windowWidth / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".top-choose",
        start: "70px top",
        end: () => `+=${horLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
  },


  "(min-width: 600px) and (max-width:899px)": function () {
    gsap.to(".list-features.horizontal-scroll", {
      x: () => `-${horLength - windowWidth + windowWidth / 4}px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".top-choose",
        start: "50px top",
        end: () => `+=${horLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
  },


  "(min-width:320px) and (max-width:575px)": function () {
    gsap.to(".list-features.horizontal-scroll", {
      x: () => `-${horLength - windowWidth + 50}px`,
      ease: "none",
      scrollTrigger: {
        trigger: ".top-choose",
        start: "300px top",
        end: () => `+=${horLength}`,
        markers:true,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
  },

  // all 
  "all": function () {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
  }

});
 

window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
})
