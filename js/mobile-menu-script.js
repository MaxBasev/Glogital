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
});