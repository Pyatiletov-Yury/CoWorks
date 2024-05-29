console.log();
// Находим кнопку открытия мобильной навигации по id
const mobileNavBtnOpen = document.querySelector('#openMobileNav');
// Находим кнопку закрытия мобильной навигации по id
const mobileNavBtnclose = document.querySelector('#closeMobileNav');


// Находим блок с мобильной навигацией по классу
const mobileNav = document.querySelector('.mobile-nav');

// Вешаем прослушку по клику на кнопку Открытия мобильной навигации

mobileNavBtnOpen.addEventListener('click', function () {

    // По клику добовляем класс mobile-nav--open к блоку с мобильной навигацией
    mobileNav.classList.add('mobile-nav--open');

    // Добовляем класс no-scroll к тегу body чтобы запретить скролл на странице
    document.body.classList.add('no-scroll');
})

// Вешаем прослушку по клику на кнопку Закрытия мобильной навигации

mobileNavBtnclose.addEventListener('click', function () {
    // По клику удалаем класс mobile-nav--open к блоку с мобильной навигацией
    mobileNav.classList.remove('mobile-nav--open');

    // Удалаем класс no-scroll у тега body чтобы включить скролл на странице
    document.body.classList.remove('no-scroll');
})

// Находим ссылки внутри блока с мобильной навигацией

const mobileNavLinks = mobileNav.querySelectorAll('a, button');

// Перебераем все ссылки в мобильной навигации
mobileNavLinks.forEach(function (item) {

    // Вешаем прослушку по клику на каждую "ссылку" в мобильной навигации
    item.addEventListener('click', function () {
        // По клику удалаем класс mobile-nav--open к блоку с мобильной навигацией
        mobileNav.classList.remove('mobile-nav--open');

        // Удалаем класс no-scroll у тега body чтобы включить скролл на странице
        document.body.classList.remove('no-scroll');
    })
});