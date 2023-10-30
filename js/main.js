const btnAccountCardSetting = document.querySelectorAll('.account-setting')
const accountCardMenu = document.querySelector('.account-card .menu')
const sidebar = document.querySelector('.sidebar')
const toggleBtn = document.querySelector('.toogle')
 
 

btnAccountCardSetting.forEach(button => {
    button.addEventListener('click', () => {
        const accountCard = button.closest('.account-card');
        const accountCardMenu = accountCard.querySelector('.menu');
        accountCardMenu.classList.toggle('is-active');
    });
});

 

toggleBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('hide')
    badge.style.display = "flex"

})


 