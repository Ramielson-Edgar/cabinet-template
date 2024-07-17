document.addEventListener('DOMContentLoaded', function () {
    new Splide('#awards-splide', {
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
                perPage: 4,
            },
            991: {
                perPage: 4,
            },
            800: {
                perPage: 3,
            },
            600: {
                perPage: 1,
                fixedWidth: 280,
                gap: 15,
            }
        },

    }).mount(window.splide.Extensions);
});