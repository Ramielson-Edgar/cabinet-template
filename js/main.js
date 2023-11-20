const btnAccountCardSetting = document.querySelectorAll('.account-setting');
const accountCards = document.querySelectorAll('.account-card')
const sideMenu = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toogle');
const labels = document.querySelectorAll('.list.label .list__item');
const labelList = document.querySelectorAll('.list.label');
const labelDropdownMenu = document.querySelectorAll('.dropdown-menu.label')

const allpipsTradingAccounts = document.querySelectorAll('.account-card.allpips-trading')
const allpipsDemoAccounts = document.querySelectorAll('.account-card.allpips-demo')

const mt4TradingAccounts = document.querySelectorAll('.account-card.mt4-trading')
const mt4DemoAccounts = document.querySelectorAll('.account-card.mt4-demo')

const accountFeedBackItems = document.querySelectorAll('.list.account-feedback .list__item')



btnAccountCardSetting.forEach(button => {
    button.addEventListener('click', () => {
        const accountCard = button.closest('.account-card');
        const accountCardMenu = accountCard.querySelector('.menu');
        accountCardMenu.classList.toggle('is-active');
    });
});



toggleBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('hide')

})


function hideLabelMenu() {
    accountCards.forEach(card => {
        const labels = card.querySelectorAll('.list.label .list__item');
        const listLabel = card.querySelector('.list.label');
        const dropdownContainer = card.querySelector('.dropdown.program');
        const dropdown = card.querySelector('.list.label.dropdown-menu')
        const indicator = card.querySelector('.indicator')
 
        if (labels.length > 4) {
            listLabel.classList.add('is-hide')
            cloneLabels(dropdownContainer, dropdown, labels, indicator)
        }
    })
}

hideLabelMenu()


function cloneLabels(dropdownContainer,dropdown, labels, indicator) {
    dropdownContainer.classList.add('is-show');
    indicator.textContent = labels.length;
    dropdown.innerHTML ="";

    labels.forEach( label => {
        const cloneLabel = label.cloneNode(true)
        dropdown.appendChild(cloneLabel)
    })
}

function accountFeedBack () {
   const allpipsLive = allpipsTradingAccounts.length;
   const allpipsDemo = allpipsDemoAccounts.length;

   const mt4Live = mt4TradingAccounts.length;
   const mt4Demo = mt4DemoAccounts.length;

   accountFeedBackItems.forEach(item=> {

     if(item.classList.contains('allpips-live')) {
        const title = item.querySelector('.text')
        title.textContent = allpipsLive;
     }

         
     if(item.classList.contains('allpips-demo')) {
        const title = item.querySelector('.text')
        title.textContent = allpipsDemo;
     }

              
     if(item.classList.contains('mt4-live')) {
        const title = item.querySelector('.text')
        title.textContent = mt4Live;
     }

              
     if(item.classList.contains('mt4-demo')) {
        const title = item.querySelector('.text')
        title.textContent = mt4Demo;
     }

   })

}

accountFeedBack () 