showMenu = () => {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('menu_visible')) {
        menu.classList.remove('menu_visible');
        document.body.style.position = 'static';
        document.querySelector('.header__menu-btn_hide').style.visibility = 'visible'
        document.querySelector('.header__menu-btn_visible').style.visibility = 'hidden'
    }
    else {
        menu.classList.add('menu_visible');
        document.body.style.position = 'fixed';
        document.querySelector('.header__menu-btn_hide').style.visibility = 'hidden'
        document.querySelector('.header__menu-btn_visible').style.visibility = 'visible'
    }
};

showMailForm = () => {
    document.getElementById('mail-form__form-wrp').classList.toggle('mail-form__form-wrp_active')
}