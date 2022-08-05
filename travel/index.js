console.log("1. Слайдер изображений в секции destinations + 50\n2.Нажатие на кнопку Login(кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n3.Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету(То есть нажатие не закрывает модал а просто меняет его наполнение). + 25\nИтого: 125 баллов");

(function () {
    const burgerItem = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav__list');
    const burgerClose = document.querySelector('.burger-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const body = document.querySelector('.body');
    const login = document.querySelector('.header__button');
    const popUp = document.querySelector('.pop-up')
    const account = document.querySelector('.nav__link--account')
    const submit = document.querySelector('.pop-up-form-sign-in')
    const loginInput = document.getElementById("username")
    const passInput = document.getElementById("userpass")
    const registerBtn = document.querySelector('.pop-up-form-register__link')
    const popUpTitle = document.querySelector('.pop-up__title')
    const popUpFormSocialList = document.querySelector('.pop-up-form__social-list')
    const popUpFormText = document.querySelector('.pop-up-form__text');
    const popUpFormForgotLink = document.querySelector('.pop-up-form-forgot-link');
    const popUpFormRegisterText = document.querySelector('.pop-up-form-register__text');
    const popUpFormSignIn = document.querySelector('.pop-up-form-sign-in');
    const sliderList = document.querySelector('.destinations__list');
    const imagesDesktop = document.querySelectorAll('.destinations__img');
    const imagesMobile = document.querySelectorAll('.destinations__img--mobile');
    const arrowLeft = document.querySelector('.slider-arrows-left');
    const arrowRight = document.querySelector('.slider-arrows-right');
    const paginationItem = document.querySelectorAll('.pagination__item');




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

    document.addEventListener('click', (event => {
        if (event.target.classList.contains('body--active')) {
            nav.classList.remove('nav__list--active');
            body.classList.remove('body--active');
            burgerClose.classList.remove('burger-close--active');
        }
        else return
    }))

    for (let i = 0; i < navLinks.length; i += 1) {
        navLinks[i].addEventListener('click', () => {
            burgerClose.classList.remove('burger-close--active');
            nav.classList.remove('nav__list--active');
            body.classList.remove('body--active');
        });
    }

    login.addEventListener('click', () => {
        popUp.classList.add('pop-up--active');
        body.classList.add('body--active');
    })

    document.addEventListener('click', (event => {
        if (event.target.classList.contains('pop-up__container')) {
            popUp.classList.remove('pop-up--active');
            body.classList.remove('body--active');
        } else return
    }))

    account.addEventListener('click', () => {
        popUp.classList.add('pop-up--active');
        body.classList.add('body--active');
    })

    submit.addEventListener('click', () => {
        alert('Login: ' + loginInput.value + '\n' + 'Password: ' + passInput.value)
    })

    registerBtn.addEventListener('click', () => {
        popUpTitle.innerHTML = "Create account";
        popUpFormSocialList.remove();
        popUpFormText.remove();
        popUpFormForgotLink.remove();
        popUpFormRegisterText.innerHTML = "Already have an account?";
        registerBtn.innerHTML = "Log in";
        popUpFormSignIn.innerHTML = "Sign up";
    })

    // slider
    let slideNumber = 2;
    const imagesDesktopSize = imagesDesktop[0].offsetWidth;
    const imagesMobileSize = imagesMobile[0].offsetWidth;

    window.addEventListener('resize', function () {
        setTimeout(function () {
            window.location.reload();
        });
    });

    if (window.innerWidth <= 391) {
        arrowLeft.addEventListener('click', () => {
            if (slideNumber == 2) {
                newDistance = imagesMobileSize + 11
                sliderList.classList.add('animation');
                slideNumber--;
                sliderList.style.transform = 'translateX(' + `${(newDistance)}px)`;
                paginationItem[0].classList.add('pagination__item--active')
                paginationItem[1].classList.remove('pagination__item--active')
                arrowLeft.classList.add('slider-arrows--disabled')
                console.log(slideNumber);;
            }
            else if (slideNumber == 3) {
                newDistance = imagesMobileSize;
                sliderList.classList.add('animation');
                slideNumber--;
                sliderList.style.transform = 'translateX(' + `${(0)}px)`;
                paginationItem[1].classList.add('pagination__item--active')
                paginationItem[2].classList.remove('pagination__item--active')
                arrowRight.classList.remove('slider-arrows--disabled')
                console.log(slideNumber);
            };
        })

        arrowRight.addEventListener('click', () => {
            if (slideNumber == 2) {
                newDistance = imagesMobileSize + 11
                sliderList.classList.add('animation');
                slideNumber++;
                sliderList.style.transform = 'translateX(' + `${(-newDistance)}px)`;
                paginationItem[2].classList.add('pagination__item--active')
                paginationItem[1].classList.remove('pagination__item--active')
                arrowRight.classList.add('slider-arrows--disabled')
                console.log(slideNumber);;
            }
            else if (slideNumber == 1) {
                newDistance = imagesMobileSize;
                sliderList.classList.add('animation');
                slideNumber++;
                sliderList.style.transform = 'translateX(' + `${(0)}px)`;
                paginationItem[1].classList.add('pagination__item--active')
                paginationItem[0].classList.remove('pagination__item--active')
                arrowLeft.classList.remove('slider-arrows--disabled')
                console.log(slideNumber);
            };
        })
    } else if (window.innerWidth >= 391) {
        arrowLeft.addEventListener('click', () => {
            if (slideNumber == 2) {
                newDistance = imagesDesktopSize + 60
                sliderList.classList.add('animation');
                slideNumber--;
                sliderList.style.transform = 'translateX(' + `${(newDistance)}px)`;
                paginationItem[0].classList.add('pagination__item--active')
                paginationItem[1].classList.remove('pagination__item--active')
                arrowLeft.classList.add('slider-arrows--disabled')
                console.log(slideNumber);;
            }
            else if (slideNumber == 3) {
                newDistance = imagesDesktopSize;
                sliderList.classList.add('animation');
                slideNumber--;
                sliderList.style.transform = 'translateX(' + `${(0)}px)`;
                paginationItem[1].classList.add('pagination__item--active')
                paginationItem[2].classList.remove('pagination__item--active')
                arrowRight.classList.remove('slider-arrows--disabled')
                console.log(slideNumber);
            };
        })

        arrowRight.addEventListener('click', () => {
            if (slideNumber == 2) {
                newDistance = imagesDesktopSize + 60
                sliderList.classList.add('animation');
                slideNumber++;
                sliderList.style.transform = 'translateX(' + `${(-newDistance)}px)`;
                paginationItem[2].classList.add('pagination__item--active')
                paginationItem[1].classList.remove('pagination__item--active')
                arrowRight.classList.add('slider-arrows--disabled')
                console.log(slideNumber);;
            }
            else if (slideNumber == 1) {
                newDistance = imagesDesktopSize;
                sliderList.classList.add('animation');
                slideNumber++;
                sliderList.style.transform = 'translateX(' + `${(0)}px)`;
                paginationItem[1].classList.add('pagination__item--active')
                paginationItem[0].classList.remove('pagination__item--active')
                arrowLeft.classList.remove('slider-arrows--disabled')
                console.log(slideNumber);
            };
        })
    }
}
    ());


