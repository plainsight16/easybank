let hamburger = document.querySelector(".nav__hamburger");
let overlay = document.querySelector(".overlay");
let mobile_menu = document.querySelector(".mobile_menu");
let body = document.querySelector("body");

hamburger.addEventListener("click", ()=>{
    if(hamburger.classList.contains("nav__hamburger__open")){
        closeElements();
    }else{
       openElements();
    }
    
});


closeElements = ()=>{
    hamburger.classList.remove("nav__hamburger__open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    mobile_menu.classList.add("fade-out");
    mobile_menu.classList.remove("fade-in");
    body.classList.remove("noScroll");

}

openElements =()=>{
    hamburger.classList.add("nav__hamburger__open");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    mobile_menu.classList.remove("fade-out");
    mobile_menu.classList.add("fade-in");
    body.classList.add("noScroll");
}