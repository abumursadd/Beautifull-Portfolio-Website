// Sticky Nav Menu JS

let nav = document.querySelector('nav');
let scrlBtn = document.querySelector('.scroll-btn a')

let val;

window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('sticky');
        scrlBtn.style.display = 'block';
    }
    else{
        nav.classList.remove('sticky');
        scrlBtn.style.display = 'none';
    }
}



// Side Nav Menu



let body = document.querySelector('body');
let navBar = document.querySelector('.navbar');
let menuBtn = document.querySelector('.menu-btn');
let cancelBtn = document.querySelector('.cancel-btn');

menuBtn.onclick = function () {
    navBar.classList.add('active');
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrlBtn.style.pointerEvents = 'none';
}

cancelBtn.onclick = function () {
    navBar.classList.remove('active');
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrlBtn.style.pointerEvents = 'auto';
}


// close side bar on click


let navLinks = document.querySelectorAll('.menu li a');
for (var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function () {
        navBar.classList.remove('active');
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    })
}