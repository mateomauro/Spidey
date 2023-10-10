"use strict"


let btnJugar = document.getElementById("btn-card");
let juego = document.querySelector(".contenedor-jugando");
let btnInstruccion = document.getElementById("btn-instruccion");
let instruccionPopPap = document.querySelector(".pop-pap-instrucciones");
let btnCruzIntruccion = document.getElementById("cruz-pop-pap");
let btnPantallaCompleta = document.getElementById("pantalla-completa");
let juegoCompleto = document.querySelector(".contenedor");
let header = document.querySelector(".header");
let escapePopPap = document.querySelector(".escape");

//cuando le de al boton jugar trae el juego
btnJugar.addEventListener("click", () => {
    btnJugar.classList.add("ocultar");
    juego.classList.remove("ocultar");
})

//cuando clickea las instrucciones que muestre el pop pap de instrucciones
btnInstruccion.addEventListener("click", () => {
    instruccionPopPap.classList.remove("ocultar");
})

//que oculte el pop pap cuando le da a la cruzs
btnCruzIntruccion.addEventListener("click", () => {
    instruccionPopPap.classList.add("ocultar");
})


//agranda o achica el juego cuando apreta el icono
btnPantallaCompleta.addEventListener("click", () => {
    if (juegoCompleto.classList.contains('pantallaCompleta')) {
        // Achicar el juego
        juegoCompleto.classList.remove("pantallaCompleta");
        escapePopPap.classList.remove("ocultar-degradado");
        escapePopPap.classList.add("ocultar")
    } else {
        // Agrandar el juego
        juegoCompleto.classList.add("pantallaCompleta");
        header.classList.add("quitarFixed");
        escapePopPap.classList.remove("ocultar");

        // Espera 1 segundo y luego agrega la clase 'ocultar'
        setTimeout(function () {
            escapePopPap.classList.add("ocultar-degradado");
        }, 1000); // 1000 milisegundos = 1 segundo
    }
});

// Escuchar la tecla 'Escape'
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && juegoCompleto.classList.contains('pantallaCompleta')) {
        juegoCompleto.classList.remove("pantallaCompleta");
        escapePopPap.classList.remove("ocultar-degradado");
        escapePopPap.classList.add("ocultar")
    }
});


