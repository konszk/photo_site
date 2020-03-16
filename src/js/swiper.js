import Swiper from 'swiper';
import "../css/menu.css";
import "../css/home.css";

console.log('loading');

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    centeredSlides : true,
    effect: 'coverflow',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function(){
           console.log('initialized');
        }
    }
});