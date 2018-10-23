
var mainPage = document.querySelector('.main-page');
var drinkPage = document.querySelector('.drink-page');
var foodPage = document.querySelector('.food-page');
var enterPage = document.querySelector('.enter-page__button');

document.querySelector('.main-page__button_drink').addEventListener('click', function () {
    mainPage.style.display = "none";
    drinkPage.classList.toggle('display');
});

document.querySelector('.main-page__button_food').addEventListener('click', function () {
    mainPage.style.display = "none";
    foodPage.classList.toggle('display');
});

enterPage.addEventListener('click', function () {
   drinkPage.style.display = "none";
   foodPage.style.display = "none";
  mainPage.style.display = "block";
    // wróc do początkowego stanku
});

//Start Page 