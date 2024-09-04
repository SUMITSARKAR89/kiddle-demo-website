const menuBtn = document.querySelectorAll(".menu-icon")
const mobileNav = document.getElementById("mobile-nav");
const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".close");


open[0].addEventListener("click", () =>{
    mobileNav.style.top ="0";
    open[0].style.display = "none";
    close[0].style.display = "block";
});
close[0].addEventListener("click", () => {
    mobileNav.style.top = "-100%";
    open[0].style.display = "block";
    close[0].style.display = "none";
});


/*image slider*/
const photos = ["img/admission-image-1.jpg", "img/admission-image-2.jpg", "img/day-care-home-gallery-image-1 (1).jpg", "img/day-care-home-gallery-image-2.jpg", "img/day-care-home-gallery-image-3.jpg"
];
let imageSlider = document.querySelector(".image-slider");

let count = 0;

function prev(){
    count--;
    if(count < 0){
        count = photos.length-1;
        imageSlider.src = photos[count];
    }else{
        imageSlider.src = photos[count];
    }

}

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imageSlider.src = photos[count];
    }else{
        imageSlider.src = photos[count];
    }
}

/*image-slider2*/
const photos2 = ["img/admission-image-2.jpg", "img/admission-image-1.jpg", "img/day-care-home-gallery-image-1 (1).jpg", "img/day-care-home-gallery-image-2.jpg", "img/day-care-home-gallery-image-3.jpg"
];
let imageSlider2 = document.querySelector(".image-slider2");

let count2 = 0;

function prev2(){
    count2--;
    if(count2 < 0){
        count2 = photos2.length-1;
        imageSlider2.src = photos2[count2];
    }else{
        imageSlider2.src = photos2[count2];
    }

}

function next2(){
    count2++;
    if(count2 >= photos2.length){
        count2 = 0;
        imageSlider2.src = photos2[count2];
    }else{
        imageSlider2.src = photos2[count2];
    }
}