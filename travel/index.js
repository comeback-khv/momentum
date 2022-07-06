(function () {
    const burgerItem = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav__list');
    const burgerClose = document.querySelector('.burger-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const body = document.querySelector('.body');

    burgerItem.addEventListener('click', () => {
        burgerClose.classList.add('burger-close--active');
        nav.classList.add('nav__list--active');
        body.classList.add('body--active');
    });
    burgerClose.addEventListener('click', () => {
        burgerClose.classList.remove('burger-close--active');
        nav.classList.remove('nav__list--active');
        body.classList.remove('body--active');
    });

    for (let i = 0; i < navLinks.length; i += 1) {
        navLinks[i].addEventListener('click', () => {
            burgerClose.classList.remove('burger-close--active');
            nav.classList.remove('nav__list--active');
            body.classList.remove('body--active');
        });
    }



}

    ());