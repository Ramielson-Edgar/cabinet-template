const btnAccountCardSetting = document.querySelectorAll('.account-setting');
const accountCards = document.querySelectorAll('.account-card')
const sideMenu = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toogle');
const labels = document.querySelectorAll('.list.label .list__item');
const labelList = document.querySelectorAll('.list.label');
const labelDropdownMenu = document.querySelectorAll('.dropdown-menu.label')
const banner = document.querySelector(".banner .inner");
const bannerSlider = document.querySelector(".banner-carousel");

const allpipsTradingAccounts = document.querySelectorAll('.account-card.allpips-trading')
const allpipsDemoAccounts = document.querySelectorAll('.account-card.allpips-demo')

const mt4TradingAccounts = document.querySelectorAll('.account-card.mt4-trading')
const mt4DemoAccounts = document.querySelectorAll('.account-card.mt4-demo')

const accountFeedBackItems = document.querySelectorAll('.list.account-feedback .list__item')


window.addEventListener('DOMContentLoaded', () => {
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

      if (window.innerWidth > 767) {
         accountCards.forEach(card => {
            const labels = card.querySelectorAll('#list-label-xl .list__item');
            const listLabel = card.querySelector('.list.label');
            const dropdownContainer = card.querySelector('.dropdown.program');
            const dropdown = card.querySelector('#list-label-xs');
            const indicator = card.querySelector('.indicator');


            if (labels.length > 4) {
               listLabel.classList.add('is-hide');
               cloneLabels(dropdownContainer, dropdown, labels, indicator);
            }
         });

         console.log('если више 767')
      } else {
         updateLabelIndicator()
         console.log('если ниже 767')
      }
   }

   function cloneLabels(dropdownContainer, dropdown, labels, indicator) {
      dropdownContainer.classList.add('is-show');
      dropdown.innerHTML = '';

      labels.forEach(label => {
         const clonedLabel = label.cloneNode(true)
         dropdown.appendChild(clonedLabel)
      })

      indicator.textContent = dropdown.children.length;
   }

   hideLabelMenu();

   function updateLabelIndicator() {

      return document.querySelectorAll('.dropdown.program').forEach(menu => {
         const lable = menu.querySelectorAll('#list-label-xs .list__item');
         const indicator = menu.querySelector('.indicator');
         indicator.textContent = lable.length;
      })

   }

   function accountFeedBack() {
      const allpipsLive = allpipsTradingAccounts.length;
      const allpipsDemo = allpipsDemoAccounts.length;

      const mt4Live = mt4TradingAccounts.length;
      const mt4Demo = mt4DemoAccounts.length;

      accountFeedBackItems.forEach(item => {

         if (item.classList.contains('allpips-live')) {
            const title = item.querySelector('.text')
            title.textContent = allpipsLive;
         }


         if (item.classList.contains('allpips-demo')) {
            const title = item.querySelector('.text')
            title.textContent = allpipsDemo;
         }


         if (item.classList.contains('mt4-live')) {
            const title = item.querySelector('.text')
            title.textContent = mt4Live;
         }


         if (item.classList.contains('mt4-demo')) {
            const title = item.querySelector('.text')
            title.textContent = mt4Demo;
         }

      })

   }

   accountFeedBack()

   function bannerToggleControl() {
      return document
         .querySelectorAll(".toggle__checkbox")
         .forEach(function (checkbox) {

            const isBannerHidden = localStorage.getItem('isBannerHidden')

            if (isBannerHidden === 'true') {
               checkbox.checked = true;
               bannerSlider.classList.add("is-hide");
               banner.classList.add("is-active");
            } else {
               checkbox.checked = false;
               bannerSlider.classList.remove("is-hide");
               banner.classList.remove("is-active");
            }

            checkbox.addEventListener("change", function () {

               if (checkbox.checked === true) {
                  bannerSlider.classList.add("is-hide");
                  banner.classList.add("is-active");
                  localStorage.setItem('isBannerHidden', 'true');
               }

               if (checkbox.checked === false) {
                  bannerSlider.classList.remove("is-hide");
                  banner.classList.remove("is-active");
                  localStorage.clear()
               }
            });
         });

   }

   bannerToggleControl()



})


