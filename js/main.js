const btnAccountCardSetting = document.querySelectorAll('.account-setting')
const accountCardMenu = document.querySelector('.account-card .menu')


btnAccountCardSetting.forEach(button => {
    button.addEventListener('click', () => {
        const accountCard = button.closest('.account-card');
        const accountCardMenu = accountCard.querySelector('.menu');
        accountCardMenu.classList.toggle('is-active');
    });
});