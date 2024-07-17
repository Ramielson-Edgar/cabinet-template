window.addEventListener('DOMContentLoaded', () => {

    const platformButtons = document.querySelectorAll('.list.tab .list__item button');
    const buttonsIndicator = document.querySelector('.list.tab .indicator');
    const slideTrackItem = document.querySelector('.slide-track');
    const imgContainerPlatforms = document.querySelector('.img-container.platforms');
    const platformsCover = document.querySelector('.img-container.platforms .platform-cover');
 
    function onHandleMoveIndicator() {

        platformButtons.forEach(el => {
            el.addEventListener('click',()=> {

                platformsCover.classList.add('is-hide')
      
                buttonsIndicator.style.opacity = 1;

                if(el.classList.contains('left')) {
                    buttonsIndicator.classList.remove('right');
                    slideTrackItem.classList.remove('end');
                    imgContainerPlatforms.classList.remove('active')
                    
    
                } else {
                    buttonsIndicator.classList.add('right');
                    slideTrackItem.classList.add('end');
                    imgContainerPlatforms.classList.add('active')
                }
            
            });
        })
    
    }

    onHandleMoveIndicator()
 


 











})