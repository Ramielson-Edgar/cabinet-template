"usu strict";

window.addEventListener("scroll", stepCounter);

const circles = document.querySelectorAll('svg #circle')
const firstStep = document.querySelector('.list-features.step .list-features__item:first-child .list-features__header')

function hasReached(el) {
    if (el === null)
        return false;
    const topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight)
        return true;
    else return false;
}

function stepCounter() {
    if (!hasReached(firstStep)) return;

    circles.forEach((circle,) => {
        let target = +circle.dataset.target;
       
        let strokeValue = 450 - 450 * (target / 100);
        circle.style.setProperty("--target", strokeValue);
    });


    circles.forEach(
        (el) => (el.style.animation = "progress 2s var(--ease-out-slow) forwards")
    );
}