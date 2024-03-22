document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".country-card");
    const header = document.querySelector('.section-header.supporting-country');
    const animation = gsap.timeline()
    let cardHeight;


    function initCards() {
        animation.clear()
        cardHeight = cards[0].offsetHeight + 150

        cards.forEach((card, index) => {
            if (index > 0) {
                //increment y value of each card by cardHeight
                gsap.set(card, { y: index * cardHeight })
                //animate each card back to 0 (for stacking)
                animation.to(card, { y: 0, duration: index * 0.5, ease: "none", }, 0)
                card.style.zIndex = index + 1;
            }

        
        })
    }

    initCards()
 

    ScrollTrigger.create({
        trigger: ".country",
        start: "top top",
        pin: true,
        end: () => `+=${(cards.length * cardHeight) + header.offsetHeight}`,
        scrub: true,
        animation: animation,
        invalidateOnRefresh: true,
    })

     

    ScrollTrigger.addEventListener("refreshInit", initCards)
});




