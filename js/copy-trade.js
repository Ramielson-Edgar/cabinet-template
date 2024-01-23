document.addEventListener('DOMContentLoaded', () => {
    let videos = gsap.utils.toArray(".list.video .list__item");
    let imgs = gsap.utils.toArray(".benefits-item");
    let mainContainer = document.querySelector('.horizontal');
    const instrumentsTitle = gsap.utils.toArray(".list.instruments .list__item .mask .title");
    const instrument = gsap.utils.toArray(".list.instruments .list__item");

    const slider = document.querySelector('.splide')

    const splide = new Splide(slider, {
        type: "loop",
        perPage: 10,
        perMove: 1,
        gap: 10,
        arrows: false,
        navigation: false,
        autoplay: true,
        pagination: false,
        interval: 2500,
        focus: "center",
        breakpoints: {
            2500: {
                perPage: 7,
                perMove: 1,
            },

            1800: {
                perPage: 5,
                perMove: 1,
            },
            1400: {
                perPage: 4,
            },
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


    ScrollTrigger.matchMedia({


        "(min-width: 575px)": function () {
            gsap.to(videos, {
                xPercent: -100 * (videos.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: '.horizontal',
                    start: "-=70px top",
                    pin: true,
                    scrub: true,
                    end:`+=${mainContainer.scrollWidth}`
                }
            })

            gsap.to('.wrapper.blue', {
                scrollTrigger:{
                    trigger:'.wrapper.blue',
                    start:"-=90px top",
                    end:"bottom top",
            
                },
                backgroundColor: "#1363DF",
                duration: .5,
            })


            instrument.forEach(el=> {
                const video = el.querySelector('.video');
                video.pause();
                video.currentTime = 0;

                el.addEventListener('mouseenter', ()=> {
                    video.play()
                })
 
                el.addEventListener('mouseleave', ()=> {
                    video.pause();
                    video.currentTime = 0;
                })
            })
 
      
        },

 
   

        // small
        "(min-width:320px)": function () {
            gsap.to(instrumentsTitle, {
                scrollTrigger: {
                    trigger: ".list.instruments",
                },

                y: 0,
            })


            imgs.forEach((img) => {
                gsap.to(img, {
                    y: 0,
                    ease: "none",
                
                    scrollTrigger: {
                        trigger: img,
                        scrub: true,
                    },
                });
            });
        },


    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

})


