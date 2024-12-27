
window.addEventListener('DOMContentLoaded', () => {
    const animation = document.getElementById('staking-banner');
    const selectItems = document.querySelectorAll('.dropdown.network-select .dropdown-menu .dropdown-item');
    const menu = document.querySelector('.currnet-chain');
    const ethAmount = document.getElementById("amount-ethereum");
    const btnHideAmount = document.querySelector('.js-eth-amount');


    const params = {
        container: animation,
        redenr: 'svg',
        autoplay: true,
        loop: true,
        path: `/custom/adrofx_theme/lottie-json/ethereum.json`,
    }

    function runLottieAnimationBanner() {
        const instance = lottie.loadAnimation(params);
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
            const clone = content.cloneNode(true);
            menu.innerHTML = '';
            menu.appendChild(clone);
        })
    }

    //При нажатии на кнопку необходимо заменять текущий текст//
    // в поле на звёздочки//


    //1. Поклику получить доступ к числу//

    //2. Заменить текст//

    function getEthInputAmount() {
        ethAmount.addEventListener('change', (e) => {
            const amount = e.currentTarget.value;
            onClickGetInputAmunt(amount)
        })
    };

    getEthInputAmount();


    function onClickGetInputAmunt(amount) {
        let isHideAmount = false;

        btnHideAmount.addEventListener('click', () => {
            const inputAmount = amount;

            if (isHideAmount === false) {
                isHideAmount = true;
                replaceAmountToSymbol(inputAmount);
            } else {
                isHideAmount = true;
               return inputAmount;
            }
        })
    }


    function replaceAmountToSymbol(inputAmount) {
        const replaced = inputAmount.replace(/\d/g, '*');
        console.log(replaced)
    }





})