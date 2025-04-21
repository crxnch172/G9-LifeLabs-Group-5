const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const totalSlides = slides.length;

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slides) => {
        slides.classList.remove('active');
    });

    contents.forEach((contents) => {
        contents.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
    
    currentSlide = manual;
}

sliderNav(0);

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    });
});

prevBtn.addEventListener('click', () => {
    let index = currentSlide - 1;
    if(index < 0) {
        index = totalSlides - 1;
    }
    sliderNav(index);
});

nextBtn.addEventListener('click', () => {
    let index = currentSlide + 1;
    if(index >= totalSlides) {
        index = 0;
    }
    sliderNav(index);
});
