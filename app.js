
var mainPage = document.querySelector('.main-page');
var drinkPage = document.querySelector('.drink-page');
var foodPage = document.querySelector('.food-page');
var enterPage = document.querySelector('.enter-page__button');
var enterPageTwo = document.querySelector('.enter-page__button-two');

enterPage.addEventListener('click', function () {
  drinkPage.classList.add('display');
  foodPage.classList.add('display');
    mainPage.classList.toggle('display');
    // wróc do początkowego stanku
});

document.querySelector('.main-page__button_drink').addEventListener('click', function () {
    mainPage.classList.add("display");
    drinkPage.classList.toggle('display');
});

document.querySelector('.main-page__button_food').addEventListener('click', function () {
     mainPage.classList.add("display");
    foodPage.classList.toggle('display');
});



enterPageTwo.addEventListener('click', function () {
  drinkPage.classList.add('display');
  foodPage.classList.add('display');
    mainPage.classList.toggle('display');
    // wróc do początkowego stanku
});


document.querySelector('.food-page__button').addEventListener('click', function () {
    drinkPage.classList.toggle('display');
    foodPage.classList.remove('display');
});

document.querySelector('.drink-page__button').addEventListener('click', function () {
    foodPage.classList.toggle('display');
    drinkPage.classList.remove('display');
});
