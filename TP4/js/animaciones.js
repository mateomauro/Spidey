"use strict"

//traemos las cosas
let duende = document.querySelector(".muñeco-verde");


window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    duende.style.top = 70 + scrollY * -0.05 + '%';
})