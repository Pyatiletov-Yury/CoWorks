const scrollButton = document.querySelector('#scrollToTopBtn');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > window.innerHeight) {
        scrollButton.classList.add('top-link--visible');
    } else {
        scrollButton.classList.remove('top-link--visible');
    }
});