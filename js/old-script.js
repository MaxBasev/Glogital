'use strict';

let 
        divider = document.querySelectorAll('.divider'),
        dividerHeight = 
            window.getComputedStyle(divider[0]).height.replace('px', '').replace('%', ''),
        percent,
        increase,
        decrease,
        angleStandard = [
            `polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)`,
            `polygon(0% 0%, 100% 100%, 100% 100%, 0% 100%)`,
            `polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)`,
            `polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)`
            ],
        massiv = [1, 2, 0, 3, 0],
        reverseMassiv = [0, 3, 1, 2, 1];

    function dividerChange(a) {
        percent = divider[a].getBoundingClientRect().top / 
            ((document.documentElement.clientHeight - dividerHeight) / 100);
        increase = percent;
        decrease = 100 - percent;
        return getPolygon(massiv[a], increase, decrease);
    }
    
    function getPolygon(a, inc, dec) {
        let polygon;
        if (a == 0) {
            polygon = `polygon(0% ${inc}%, 100% ${dec}%, 100% 100%, 0% 100%)`;
        } else if (a == 1) {
            polygon = `polygon(0% ${dec}%, 100% ${inc}%, 100% 100%, 0% 100%)`;
        } else if (a == 2) {
            polygon = `polygon(0% 0%, 100% 0%, 100% ${dec}%, 0% ${inc}%)`;
        } else {
            polygon = `polygon(0% 0%, 100% 0%, 100% ${inc}%, 0% ${dec}%)`;
        }
        return polygon;
    }
    
    divider.forEach((item, key) => {
        let dividerClipPath;
        if (document.documentElement.scrollTop == 0 || 
            divider[key].getBoundingClientRect().top < 0) {
            divider[key].style.clipPath = angleStandard[massiv[key]];
            dividerClipPath = angleStandard[massiv[key]];
        } else {
            if (divider[key].getBoundingClientRect().top > 
            document.documentElement.clientHeight - dividerHeight) {
                divider[key].style.clipPath = angleStandard[reverseMassiv[key]];
                dividerClipPath = angleStandard[reverseMassiv[key]];
            } else {
                divider[key].style.clipPath = dividerChange(key);
                dividerClipPath = dividerChange(key);
            }
        }
        // console.log(`Fist load. Divider number: ${key}; 
        // massiv number: ${massiv[key]}; 
        // reverse massiv number: ${reverseMassiv[key]}; 
        // clipPath: ${dividerClipPath}`);
    });
    
    document.addEventListener('scroll', () => {
        divider.forEach((item, key) => {
            if (divider[key].getBoundingClientRect().top >= 0 && 
            divider[key].getBoundingClientRect().top <= 
            document.documentElement.clientHeight - dividerHeight) {
                divider[key].style.clipPath = dividerChange(key);
            }
        });
    });
