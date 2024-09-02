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