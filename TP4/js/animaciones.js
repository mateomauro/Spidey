"use strict"

//traemos las cosas
let duende = document.querySelector(".muñeco-verde");
let nubesSeccion1 = document.querySelector(".cielo");
let spidermanRojoTelaraña = document.querySelector(".spiderman-rojo-telaraña");
let spidermanNegroTelaraña = document.querySelector(".spiderman-negro-telaraña");
let spidermanBlancoPrincipal = document.querySelector(".spiderman-blanco");
let edificioDerechoPrincipal = document.querySelector(".edificio-derecho");
let edificioMedioPrincipal = document.querySelector(".edificio-medio");
let edificioIzquierdoPrincipal = document.querySelector(".edificio-izquierdo");
let card1_seccion3 = document.querySelector(".spiderman-card1");
let card2_seccion3 = document.querySelector(".spiderman-card2");
let card3_seccion3 = document.querySelector(".spiderman-card3");
let textoCard1 = document.querySelector(".texto-card1");
let textoCard2 = document.querySelector(".texto-card2");
let textoCard3 = document.querySelector(".texto-card3");
let seccion4parte1 = document.querySelector(".seccion-4-parte-1");
let seccion4parte2 = document.querySelector(".seccion-4-parte-2");
let seccion4parte3 = document.querySelector(".seccion-4-parte-3");


window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    //NAVEGACION
    let nav = document.querySelector("nav");
    let header = document.querySelector("header");
    let spidey = document.querySelector(".spidey");

    // Tamaños iniciales y finales
    let anchoInicial = 590;
    let altoInicial = 301;
    let anchoFinal = 133;
    let altoFinal = 68;

    // Diferencias de tamaño
    let difAncho = anchoInicial - anchoFinal;
    let difAlto = altoInicial - altoFinal;

    // Distancia de desplazamiento
    let desplazamiento = 86;

    // Cambios por píxel
    let cambioAnchoPorPixel = difAncho / desplazamiento;
    let cambioAltoPorPixel = difAlto / desplazamiento;

    // Calcula los nuevos tamaños
    let nuevoAncho = anchoInicial - (cambioAnchoPorPixel * scrollY);
    let nuevoAlto = altoInicial - (cambioAltoPorPixel * scrollY);

    // Asegúrate de no reducir el tamaño más allá del tamaño final
    nuevoAncho = Math.max(nuevoAncho, anchoFinal);
    nuevoAlto = Math.max(nuevoAlto, altoFinal);

    // Aplica los nuevos tamaños al elemento
    spidey.style.width = nuevoAncho + 'px';
    spidey.style.height = nuevoAlto + 'px';

    if (scrollY > 76) {
        spidey.style.position = 'fixed';
        spidey.style.top = 17 + 'px'
    } else {
        spidey.style.position = ''
        spidey.style.top = -4.8611111111 + '%'
    }

    if (scrollY > 103) {
        nav.style.background = 'linear-gradient(180deg, #5499F8 0%, #5499F8 87.91%, rgba(84, 153, 248, 0.00) 100%)';
        nav.style.zIndex = '10';
        header.style.zIndex = '20';

    } else {
        nav.style.background = '';
        header.style.zIndex = '2';
    }

    //SECCION 1
    nubesSeccion1.style.backgroundPosition = scrollY * -0.1 + 'px 0';

    // Calcula el nuevo tamaño y opacidad basándote en cuánto se ha desplazado la página
    let newSize = 1 + scrollY * 0.00015; // Ajusta el 0.01 para cambiar cuánto crece el tamaño
    let OpacityPositiva = 0.95 + scrollY * 0.01; // Ajusta el 0.01 para cambiar cuánto cambia la opacidad
    let OpacityNegativa = 1 - scrollY * 0.0006; // Ajusta el 0.01 para cambiar cuánto cambia la opacidad

    // Asegúrate de que la opacidad esté entre 0.9 y 1
    OpacityPositiva = Math.min(1, Math.max(0.9, OpacityPositiva));


    // Aplica el nuevo tamaño y opacidad
    spidermanRojoTelaraña.style.transform = `scale(${newSize})`;
    spidermanRojoTelaraña.style.opacity = OpacityPositiva;

    spidermanNegroTelaraña.style.right = scrollY * -0.005 + '%'
    spidermanNegroTelaraña.style.opacity = OpacityPositiva;
    spidermanNegroTelaraña.style.transform = `scale(${newSize})`;

    spidermanBlancoPrincipal.style.left = 7.03125 + scrollY * -0.005 + '%'
    spidermanBlancoPrincipal.style.opacity = OpacityPositiva;
    spidermanBlancoPrincipal.style.transform = `scale(${newSize})`;

    edificioDerechoPrincipal.style.opacity = OpacityNegativa
    edificioIzquierdoPrincipal.style.opacity = OpacityNegativa
    edificioMedioPrincipal.style.opacity = OpacityNegativa

    //SECCION 2
    duende.style.top = 70 + scrollY * -0.05 + '%';

    //SECCION 3
    if (scrollY > 1582) {

        card1_seccion3.classList.add("animacion-card1")
        card2_seccion3.classList.add("animacion-card2")
        card3_seccion3.classList.add("animacion-card3")

        textoCard1.classList.add("animacion-card1")
        textoCard2.classList.add("animacion-card2")
        textoCard3.classList.add("animacion-card3")

        card1_seccion3.style.opacity = 1;
        card2_seccion3.style.opacity = 1;
        card3_seccion3.style.opacity = 1;

        textoCard1.style.opacity = 1;
        textoCard2.style.opacity = 1;
        textoCard3.style.opacity = 1;
    }

    //SECCION 4
    seccion4parte1.style.top = 100 + scrollY * -0.05 + '%'
    seccion4parte2.style.top = 132 + scrollY * -0.05 + '%'
    seccion4parte3.style.top = 169 + scrollY * -0.05 + '%'

    // //SECCION 5
    // let stickySeccion5 = document.querySelector(".sticky-seccion-5");

    // // Asume que .juego1, .juego2, etc. son los contenedores de las imágenes
    // let juego1 = document.querySelector(".juego1");
    // let juego2 = document.querySelector(".juego2");

    // // Obtiene la posición de .juego1 y .juego2 relativa al documento
    // let juego1Pos = juego1.getBoundingClientRect().top + window.scrollY;
    // let juego2Pos = juego2.getBoundingClientRect().top + window.scrollY;

    // console.log('scroll y: ' + scrollY)
    // console.log("juego1: " + juego1Pos)
    // console.log("juego2: " + juego2Pos)
    // if (juego1Pos > 4212) {
    //     stickySeccion5.classList.remove("ocultar");
    //     stickySeccion5.style.backgroundImage = 'url("img/seccion5-img-2.png")';
    // } else {
    //     stickySeccion5.classList.add("ocultar");
    // }


});


//SECCION 4 HOVER CARDS
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('miPoligono1').addEventListener('mouseover', funcionHover1);
    document.getElementById('miPoligono2').addEventListener('mouseover', funcionHover2);
    document.getElementById('miPoligono3').addEventListener('mouseover', funcionHover3);
    document.getElementById('miPoligono1').addEventListener('mouseout', quitarHover1);
    document.getElementById('miPoligono2').addEventListener('mouseout', quitarHover2);
    document.getElementById('miPoligono3').addEventListener('mouseout', quitarHover3);

    function funcionHover1() {
        seccion4parte1.style.transform = "rotate(-13.078deg) scale(1.2) skewX(-10deg) skewY(12deg)";
    }

    function funcionHover2() {
        seccion4parte2.style.transform = "rotate(-26.474deg) scale(1.2) skewX(-10deg) skewY(12deg)";
    }

    function funcionHover3() {
        seccion4parte3.style.transform = "rotate(-36.016deg) scale(1.2) skewX(-10deg) skewY(12deg)";
    }

    function quitarHover1() {
        seccion4parte1.style.transform = "rotate(-13.078deg) scale(1)";
    }

    function quitarHover2() {
        seccion4parte2.style.transform = "rotate(-26.474deg) scale(1)";
    }

    function quitarHover3() {
        seccion4parte3.style.transform = "rotate(-36.016deg) scale(1)";
    }

});


// // Selecciona los elementos
// let seccion6 = document.querySelector(".seccion-6");
// let seccion6img1 = document.querySelector(".seccion-6-img-1");

// // // Agrega un listener para el evento 'mouseover' a .seccion-6-img-1
// // seccion6img1.addEventListener("mouseover", function () {
// //     // Agrega la clase cuando haces hover
// //     seccion6.classList.add("hover");
// // });

// // // Agrega un listener para el evento 'mouseout' a .seccion-6-img-1
// // seccion6img1.addEventListener("mouseout", function () {
// //     // Elimina la clase cuando dejas de hacer hover
// //     // seccion6.classList.remove("hover");
// // });



//LOADING 
let contador = 0;
let tiempo = 3000 / 100;
let contenedorHome = document.querySelector(".contendor-principal");
let contenedorLoader = document.querySelector(".contenedor-loading");
let incrementador = document.querySelector(".contador");
let body = document.querySelector("body");

body.style.height = 100 + 'vh';


let temporizador = setInterval(() => {
    if (contador <= 100) {
        incrementador.innerHTML = contador + "%"
        contador++;
    }
    else {
        contenedorHome.classList.remove("ocultar");
        contenedorLoader.classList.add("ocultar");
        body.style.height = 8096 + 'px';
        clearInterval(temporizador)//Limpio en consola
    }

}, tiempo)