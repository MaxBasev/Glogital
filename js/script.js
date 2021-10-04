document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let mobileMenu = document.querySelector('.menu-mobile'),
        menuHamburger = document.querySelector('.menu-horizontal__hamburger-icon'),
        closeMenuIcon = document.querySelector('.menu-mobile__close-icon'),
        horizontalMenu = document.querySelector('.menu-horizontal'),
        openMenuOverlay = document.querySelector('.menu-mobile__overlay');

    function openSideMenu() {
        mobileMenu.classList.add('open');
        document.body.style.overflowY = 'hidden';
    }
    function closeSideMenu() {
        mobileMenu.classList.remove('open');
        document.body.style.overflowY = '';
    }

    menuHamburger.addEventListener('click', openSideMenu);
    closeMenuIcon.addEventListener('click', closeSideMenu);
    openMenuOverlay.addEventListener('click', closeSideMenu);

    document.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop >= 60) {
            horizontalMenu.classList.add('scroll');
        } else {
            horizontalMenu.classList.remove('scroll');
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
                pxToId = item.getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step); 
            function step(time) {
                if (start === null) { start = time; }
                let progress = time - start,
                    r = (pxToId < 100 ? Math.max(pxFromTop - progress/smoothScrollSpeed, pxFromTop + pxToId) : Math.min(pxFromTop + progress/smoothScrollSpeed, pxFromTop + pxToId)); // -100 — отступ до ID
                window.scrollTo(0,r);
                if (r != pxFromTop + pxToId) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;  // URL с хэшем
                }
            }
        });
    }, false);


});