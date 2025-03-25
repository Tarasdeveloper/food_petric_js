import 'core-js/stable';
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal, { openModal } from './modules/modal';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(
        () => openModal('.modal', modalTimerId),
        50000
    );

    tabs(
        '.tabheader__item',
        '.tabcontent',
        '.tabheader__items',
        '.tabheader__item_active'
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
