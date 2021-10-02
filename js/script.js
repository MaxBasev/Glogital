document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let menu = document.querySelector('.menu'),
        hamburger = document.querySelector('.hamburger'),
        close = document.querySelector('.close'),
        smallHeader = document.querySelector('.header-small'),
        overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.style.overflow = '';
    });

    document.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop >= 60) {
            smallHeader.classList.add('scroll');
        } else {
            smallHeader.classList.remove('scroll');
        }
    });


});