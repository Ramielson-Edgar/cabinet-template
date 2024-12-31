window.addEventListener("DOMContentLoaded", () => {
    const animation = document.querySelector("#staking-banner");
    const ethInputSearch = document.querySelector("#eth-search");
    const btnHideAmount = document.querySelector(".js-eth-amount");
    const renderContiner = document.querySelector(".js-dropdown-button");
    const ethInputElement = document.querySelector("#amount-ethereum");
    const dropdownButton = document.querySelector(".js-dropdown-button");
    const selectItems = document.querySelectorAll(".dropdown.network-select .dropdown-menu .dropdown-item");
    const networkSearch = document.querySelector(".dropdown.network-select .inner.search");
    const dropdownMenu = document.querySelector('.dropdown.network-select .dropdown-menu');


    let isHideAmount = false;
    let inputValue = null;

    const params = {
        container: animation,
        redenr: "svg",
        autoplay: true,
        loop: true,
        path: `./public/custom/adrofx_theme/lottie-json/ethereum.json`,
    };

    function runLottieAnimationBanner() {
        return lottie.loadAnimation(params);
    }

    runLottieAnimationBanner();

    function getSelectItems() {
        selectItems.forEach((item) => {
            onHandleCopyContent(item);
        });
    }

    getSelectItems();

    function onHandleResetSearchState() {
        dropdownButton.style.display = "block";
        networkSearch.style.display = 'none';

    }

    function onHandleCopyContent(item) {
        item.addEventListener("click", () => {
            const content = item.querySelector(".link");
            if (content) {
                const clone = content.cloneNode(true);
                if (renderContiner) {
                    renderContiner.innerHTML = "";
                    renderContiner.appendChild(clone);

                    onHandleResetSearchState();
                    showNetworkList();
                    dropdownMenu.classList.remove('is-open');
                }
            }
        });
    }

    function getEthInputValue() {
        return ethInputElement.addEventListener("input", (event) => {
            let target = event.target.value = event.target.value.replace(/[a-zA-Z]/g, '');
            return inputValue = target;
        });
    }

    function onClickChangeIcon(event) {
        const button = event.currentTarget;
        const iconClose = button.querySelector(".icon-close");
        const iconOpen = button.querySelector(".icon-open");

        if (iconClose && iconOpen) {
            iconClose.classList.toggle("is-open");
            iconOpen.classList.toggle("is-open");
        }
    }

    function onClickChageInputValueToSymbols() {
        btnHideAmount.addEventListener("click", (event) => {
            replaceInputValueToSymbols(inputValue);
            onClickChangeIcon(event)
        });
    }

    function replaceInputValueToSymbols(inputValue) {

        if (!isHideAmount) {
            isHideAmount = true;
            ethInputElement.type = 'password';
        } else {
            isHideAmount = false;
            ethInputElement.type = 'number';
            return inputValue;
        }
    }



    function onHandleRunSearchNetwork() {
        networkSearch.style.display = 'none';

        return dropdownButton.addEventListener("click", (e) => {
            dropdownButton.style.display = "none";
            dropdownMenu.classList.add('is-open');
            networkSearch.style.display = "flex";

            searchNetwork();
            window.addEventListener('keyup', handleKeyPress);

            onClickCloseDropDownMenu()
        });
    }


    onHandleRunSearchNetwork();


    function handleKeyPress({ code }) {
        if (code === 'Escape') {
            dropdownMenu.classList.remove('is-open');
        }
    }

    function onClickCloseDropDownMenu() {
        const section = document.querySelector('.js-container');
        section.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target === section) {
                handleClose()
            }
        })

    }

    function handleClose() {
        dropdownMenu.classList.remove('is-open');
        window.removeEventListener('keyup', handleKeyPress);
        networkSearch.style.display = 'none';
        dropdownButton.style.display = 'flex';
    }


    function resetInputValue() {
        networkSearch.classList.add("is-show");
        ethInputSearch.value = '';
    }

    function searchNetwork() {
        resetInputValue();

        ethInputSearch.addEventListener("input", (e) => {
            const target = e.target.value;
            const normalize = target.toLowerCase();
            getNetwork(normalize);
        });
    }

    function hideNetworksFromList() {
        return selectItems.forEach((item) => (item.style.display = "none"));
    }

    function showNetworkList() {
        return selectItems.forEach((item) => (item.style.display = "block"));
    }

    function getNetwork(target) {
        selectItems.forEach((item) => {
            const link = item.querySelector(".link");
            const network = link.querySelector(".js-search-label");
            const networkName = network.textContent;

            if (target === networkName) {
                hideNetworksFromList();
                item.style.display = "block";
                getSelectItems(item);
            }
        });
    }



    getEthInputValue();
    onClickChageInputValueToSymbols();
});
