let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        nextEl: ".swiper-botton-prev",
    },

});
let loadmMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItems = 3;


loadmMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for (var i = currentItems; i < currentItems + 3; i++) {
        boxes[i].style.display = 'inline-block';


    };
    currentItems += 3;
    if (currentItems >= boxes.length) {
        loadmMoreBtn.style.display = 'none';
    }
}