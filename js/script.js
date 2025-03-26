import tabs from './modules/tabs.js';
import modal, { openModal } from './modules/modal.js';
import calc from './modules/calc.js';
import cards from './modules/cards.js';
import forms from './modules/forms.js';
import slider from './modules/slider.js';
import timer from './modules/timer.js';
// import 'nodelist-foreach-polyfill';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(
        () => openModal('.modal', modalTimerId),
        50000
    );

    tabs(
        '.tabheader__item',
        '.tabcontent',
        '.tabheader__items',
        'tabheader__item_active'
    );
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2025-04-02');
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide',
    });
    calc();
    cards();
});
