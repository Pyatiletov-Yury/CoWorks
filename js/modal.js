/* Находим элементы для модального окна */
const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector('.modal'); // Модальное окно
const closeModalBtn = document.querySelector('#closeModal'); // Кнопка закрытия модального окна
const modalBody = document.querySelector('.modal__body'); // Блок с контентом модального окна

function openModal() {
    modal.classList.add('modal--open');
    document.body.classList.add('no-scroll');
};

function closeModal() {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
};

/* Открываем модалку при клике по кнопкам */
openModalBtns.forEach(function (item) {
    item.addEventListener('click', openModal);
});

closeModalBtn.addEventListener('click', closeModal);
/* Закрытие модального окна при клике на оверлее */
modal.addEventListener('click', closeModal);
modalBody.addEventListener('click', function (event) {
    event.stopPropagation();
});
// Закрываем модалку нажатием Escape
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        closeModal();
    }
});