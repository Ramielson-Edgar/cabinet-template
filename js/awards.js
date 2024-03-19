document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#awards-splide', {
        type: 'loop',
        focus: 'center',
        gap: 10,

        pagination: false,
        arrows: false,

        autoScroll: {
            speed: 2,
        },

        perPage: 7,
        breakpoints: {
            2000: {
                perPage: 5,
            },
            1198: {
                perPage: 3,
            },
            991: {
                perPage: 3,
            },
            800: {
                perPage: 2,
            },
            600: {
                perPage: 1,
            }
        },
  
    });

    splide.mount( window.splide.Extensions );
});