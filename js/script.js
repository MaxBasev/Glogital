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
        document.body.style.overflowY = 'hidden';
    });

    function closeSideMenu() {
        menu.classList.remove('open');
        document.body.style.overflowY = '';
    }

    close.addEventListener('click', closeSideMenu);

    overlay.addEventListener('click', closeSideMenu);

    // menuItems.forEach((item) => {
    //     item.addEventListener('click', closeSideMenu);
    // });

    // btnHeader.addEventListener('click', closeSideMenu);

    document.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop >= 60) {
            smallHeader.classList.add('scroll');
        } else {
            smallHeader.classList.remove('scroll');
        }
    });

    // Smooth Scroll. Source: https://qna.habr.com/q/500813
    let anchorLinks = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        smoothScrollSpeed = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    anchorLinks.forEach((item) => {
        item.addEventListener('click', (e) => {
            closeSideMenu();
            e.preventDefault();
            let pxFromTop = window.scrollY, //
                hash = item.href.replace(/[^#]*(.*)/, '$1'),
                pxToId = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            console.log(pxFromTop);
            console.log(pxToId);
            console.log(hash);
            requestAnimationFrame(step); 
            function step(time) {
                if (start === null) { start = time; }
                let progress = time - start,
                    r = (pxToId < 0 ? Math.max(pxFromTop - progress/smoothScrollSpeed, pxFromTop + pxToId) : Math.min(pxFromTop + progress/smoothScrollSpeed, pxFromTop + pxToId)); // -100 — отступ до ID
                window.scrollTo(0,r);
                if (r != pxFromTop + pxToId) {
                    requestAnimationFrame(step);
                    console.log('step');
                } else {
                    location.hash = hash;  // URL с хэшем
                }
            }
        });
    }, false);


});