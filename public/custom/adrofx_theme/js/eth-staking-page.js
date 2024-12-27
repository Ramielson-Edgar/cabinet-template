
window.addEventListener('DOMContentLoaded', () => {
    const animation = document.getElementById('staking-banner');
    const selectItems = document.querySelectorAll('.dropdown.network-select .dropdown-menu .dropdown-item');
    const menu = document.querySelector('.currnet-chain');
    const ethInputElement = document.getElementById("amount-ethereum");
    const btnHideAmount = document.querySelector('.js-eth-amount');

    let isHideAmount = false;
    let inputValue = null;
 


    const params = {
        container: animation,
        redenr: 'svg',
        autoplay: true,
        loop: true,
        path: `./public/custom/adrofx_theme/lottie-json/ethereum.json`,
    }

    function runLottieAnimationBanner() {
        return lottie.loadAnimation(params);
    }

    runLottieAnimationBanner()

    function getSelectItems() {
        selectItems.forEach(item => {
            onHandleCopyContent(item)
        })
    }

    getSelectItems()

    function onHandleCopyContent(item) {
        item.addEventListener('click', () => {

            const content = item.querySelector('.link');
            if (content) {
                const clone = content.cloneNode(true);
                if (menu) {
                    menu.innerHTML = '';
                    menu.appendChild(clone);
                }
            }
        })

    }


 
    function getEthInputAmount() {
        ethInputElement.addEventListener('change', (e) => {
            inputValue = e.target.value;  
        });
    }
 
    function onClickGetInputAmount() {
        btnHideAmount.addEventListener('click', () => {
            if (!isHideAmount) {
                isHideAmount = true;
                replaceAmountToSymbol(inputValue);  и
            } else {
                isHideAmount = false;
                ethInputElement.value = inputValue;  
            }
        });
    }
 
    function replaceAmountToSymbol(value) {
        if (!value) return;         
        const text = String(value);
        const sumbols = text.replace(/\d/g, '*');
        ethInputElement.type ='text';
        ethInputElement.value = sumbols; 
    }

 
    getEthInputAmount();
    onClickGetInputAmount();
})