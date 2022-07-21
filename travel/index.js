console.log("1.Вёрстка соответствует макету.Ширина экрана 390px + 48\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки.Весь контент страницы при этом сохраняется: не обрезается и не удаляется + 15 \n3.На ширине экрана 390рх и меньше реализовано адаптивное меню + 22\nМоя оценка: 85 / 85 баллов");

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
            popUp.classList.remove('pop-up--active')
            body.classList.remove('body--active');
        } else return
        }))
            
        account.addEventListener('click', () => {
            popUp.classList.add('pop-up--active');
            body.classList.add('body--active');
        })

       submit.addEventListener('click', () => {
            alert('Login: ' + loginInput.value + ' ' + 'Password: ' + passInput.value)
       })

       registerBtn.addEventListener('click', () => {
          popUpTitle.innerHTML = "Create account";
          popUpFormSocialList.remove();
          popUpFormText.remove();
          popUpFormForgotLink.remove();
          popUpFormRegisterText.innerHTML = "Already have an account?";
          registerBtn.innerHTML = "Log in";
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

       }
       ());