const sticky = [...document.querySelectorAll('.sticky')]

window.addEventListener('scroll', () => {
    
    if(!isMobile()) {
         
        for (let i = 0; i < sticky.length; i++) {
            transform(sticky[i]);
        }
    }
 

        function transform(section) {
            const offsetTop = section.parentElement.offsetTop;
            const scrollSection = document.querySelector('.list-features.horizontal-scroll');
            const maxScroll = scrollSection.scrollWidth - scrollSection.offsetWidth;
            let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
            // percentage = Math.min(Math.max(percentage, maxScroll), 70);
            // scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;

            if(window.innerWidth >= 1450) {
                percentage = Math.min(Math.max(percentage, maxScroll), 40);
                scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
            }


            if(window.innerWidth >= 992) {
                percentage = Math.min(Math.max(percentage, maxScroll), 70);
                scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
            }

            
            if(window.innerWidth <= 991) {
                percentage = Math.min(Math.max(percentage, maxScroll), 200);
                scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
            }

    
            if(window.innerWidth <= 767) {
                percentage = Math.min(Math.max(percentage, maxScroll), 200);
                scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
            }



        }
        
        function isMobile() {
            return window.matchMedia("(max-width: 575px)").matches;
        }
 
});


 
 
 