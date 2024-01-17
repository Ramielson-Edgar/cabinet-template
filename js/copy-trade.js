document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.splide')

    const splide = new Splide(slider, {
        type: "loop",
        perPage: 5,
        perMove: 1,
        gap: 10,
        arrows: false,
        navigation: false,
        autoplay: true,
        pagination: false,
        interval: 2500,
        focus: "center",
        breakpoints: {
            1198: {
                destroy: true,
                gap: 20,
            },
            575: {
                destroy: false,
                perPage: 1,
                perMove: 1,
                gap: 10,
                pagination: true,
            }
        }
    });

    splide.mount();


    gsap.registerPlugin(ScrollTrigger);

 
    let videos = gsap.utils.toArray(".list.video .list__item");
    let item = gsap.utils.toArray(".list.header .list__item");
    let imgs = gsap.utils.toArray(".benefits-item");
    let mainContainer = document.querySelector('.grid.start');

    ScrollTrigger.matchMedia({
        

        // large
        "(min-width: 1198px)": function () {
    
            gsap.to(videos, {
               x: - (mainContainer.scrollWidth - videos.length - 401) ,
                ease: "none",
                scrollTrigger: {
                    trigger: ".grid.start",
                    start: "-=50px top",
                    pin: true,
                    scrub: 1,
                    end: `+=${mainContainer.offsetWidth}`,
                },
            });


            gsap.to(item, {
               yPercent: -100 * (item.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".grid.start",
                    start: "-=50px top",
                    scrub: 1,
                    end: `+=${mainContainer.offsetWidth}`,
                },
            });


            gsap.to(".progress__line", {

                scrollTrigger: {
                    trigger: ".progress",
                    start: "-100px top",
                    scrub: 1,
                    end: () => `+=${document.querySelector(".grid.start").offsetWidth}`,
                    onUpdate: (self) => {
                        const text = document.querySelector('.title.count')
                        const line = document.querySelector('.progress__line')
                        let progressCount = Math.fround(self.progress).toFixed(2) * 100;
                        line.style.height = progressCount / 1.3 + "%"

                        if (progressCount <= 10) {
                            text.innerHTML = 1 + "."
                        }

                        if (progressCount >= 20) {
                            text.innerHTML = 2 + "."
                        }

                        if (progressCount >= 50) {
                            text.innerHTML = 3 + "."
                        }

                    },
                },

            });

            imgs.forEach((img) => {
                gsap.to(img, {
                    y: 0,
               
                    scrollTrigger: {
                        trigger: img,
               
                        scrub: true,
                    },
                });
            });
        },



        // small
        "(min-width:320px) and (max-width:992px)": function () {

            imgs.forEach((img) => {
                gsap.to(img, {
                    y: 0,
                    ease:"none",
                    scrollTrigger: {
                        trigger: img,
                        scrub: true,
                    },
                });
            });
        },
    });


    ScrollTrigger.refresh();
})


