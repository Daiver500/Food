import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import card from './modules/card';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener("DOMContentLoaded", () => {
    /*const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        card = require('./modules/card'),
        calculator = require('./modules/calculator'),
        server = require('./modules/server'),
        slider = require('./modules/slider');
    
    tabs();
    modal();
    timer();
    card();
    calculator();
    server();
    slider();*/ // старый метод для прнименения с module.exports = calculator 
    
    tabs({
        itemHeaderClass: '.tabheader__item', 
        itemContentClass: '.tabcontent', 
        parentSelectorClass: '.tabheader__items', 
        activeClass:'tabheader__item--active'
    }); // здесь прописываем классы, которые передаем как аргументы функции
    // tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item--active') // альтернативный вариант без деструктуризации
    modal();
    timer(".timer", "2021-12-31");
    card();
    calculator();
    forms("form");    // сюда как аргумент передаем все формы
    slider({  // деструктруризация, можно и без нее (смотри tabs)
        container: '.offer__slider',
        slide: '.offer__slide',
        prevButton: '.offer__slider-prev',
        nextButton: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});
