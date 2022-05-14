const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const allSlides = slides.length;
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function getNextSlide(){
    //console.log("next");
    hideItems();
    if(slidePosition === allSlides -1){
        slidePosition = 0;
    }else{
        slidePosition ++;
    }
    slides[slidePosition].classList.add('visible-item');
}


function getPrevSlide(){
    //console.log("prev");
    hideItems();
    if(slidePosition === 0){
        slidePosition = allSlides -1;
    }else{
        slidePosition --;
    }
    slides[slidePosition].classList.add('visible-item');
}


function hideItems(){
    for(let slide of slides){
        slide.classList.remove('visible-item');
        slide.classList.add('hidden-items')
    }
}


prevButton.addEventListener('click', getPrevSlide);
nextButton.addEventListener('click', getNextSlide);