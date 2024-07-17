document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".country-card");
    const header = document.querySelector('.section-header.supporting-country');
    let cardHeight = cards[0].offsetHeight + 150; // Предполагается, что высота карт не изменяется

    // Функция инициализации карточек
    function initCards() {
        cardHeight = cards[0].offsetHeight + 150; // Обновляем высоту карт, если она может меняться
        gsap.set(cards, { clearProps: "all" }); // Сбрасываем стили для корректного перерасчета

        cards.forEach((card, index) => {
            if (index > 0) {
                // Начальная позиция карточек
                gsap.set(card, { y: index * cardHeight, zIndex: index + 1 });
            }
        });
    }

    // Функция создания анимаций
    function createAnimations() {
        initCards(); // Инициализация карточек

        cards.forEach((card, index) => {
            if (index > 0) {
                gsap.to(card, {
                    y: 0,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".country",
                        start: "top top",
                        end: () => `+=${cardHeight * cards.length}`,
                        scrub: true,
                        invalidateOnRefresh: true // Указываем, что нужно инвалидировать при обновлении
                    }
                });
            }
        });

        ScrollTrigger.create({
            trigger: ".country",
            start: "top top",
            pin: true,
            // end: () => `+=${(cards.length * cardHeight) + header.offsetHeight}`,
            end: () => {
                const dynamicEnd = (cards.length * cardHeight) + header.offsetHeight;
                const maxHeight = window.innerHeight * 2; // Примерное ограничение, можно настроить
                return `+=${Math.min(dynamicEnd, maxHeight)}`;
            },
            scrub: true,
            pinSpace: false,
        });
    }

    createAnimations(); // Первоначальный запуск анимаций

    window.addEventListener('resize', () => {
        clearTimeout(window.resizingFinished);
        window.resizingFinished = setTimeout(() => {
            ScrollTrigger.refresh(); // Автоматически пересчитает все ScrollTriggers
        }, 250);
    });
});
