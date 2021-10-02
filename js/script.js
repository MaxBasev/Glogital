document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let menu = document.querySelector('.menu'),
        menuItems = menu.querySelectorAll('.menu__item'),
        btnHeader = menu.querySelector('.btn-header'),
        hamburger = document.querySelector('.hamburger'),
        close = document.querySelector('.close'),
        smallHeader = document.querySelector('.header-small'),
        overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    function closeSideMenu() {
        menu.classList.remove('open');
        document.body.style.overflow = '';
    }

    close.addEventListener('click', closeSideMenu);

    overlay.addEventListener('click', closeSideMenu);

    menuItems.forEach((item) => {
        item.addEventListener('click', closeSideMenu);
    });

    btnHeader.addEventListener('click', closeSideMenu);

    document.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop >= 60) {
            smallHeader.classList.add('scroll');
        } else {
            smallHeader.classList.remove('scroll');
        }
    });


});