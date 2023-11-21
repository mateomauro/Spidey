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
    aparicionNavegacionYLogo(scrollY)

    //SECCION 1
    ParallaxSeccion1(scrollY);

    //SECCION 2
    //MUEVE EL DUENDE MAS LENTO QUE EL SCROLL
    duende.style.top = 70 + scrollY * -0.05 + '%';

    //SECCION 3
    aparicionCardsFlotadas(scrollY)

    //SECCION 4
    parallaxSeccion4(scrollY)


    //SECCION 5
    stickySeccion5()

});

let aux = 0
let juego1 = document.querySelector(".juego1");
let juego4 = document.querySelector(".juego4");
let texto1_sticky = document.querySelector(".texto1-sticky");
let texto2_sticky = document.querySelector(".texto2-sticky");
let texto3_sticky = document.querySelector(".texto3-sticky");
let texto4_sticky = document.querySelector(".texto4-sticky");
let texto1aparecer = document.querySelector(".texto1-aparecer")
let texto2aparecer = document.querySelector(".texto2-aparecer")
let texto3aparecer = document.querySelector(".texto3-aparecer")
let texto4aparecer = document.querySelector(".texto4-aparecer")


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


//LOADING 
let contador = 0;
let tiempo = 3 / 100;
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

window.onload = function () {
    nubesSeccion1.classList.add("cielo")
    edificioIzquierdoPrincipal.classList.add("edificio-izquierdo")
    edificioDerechoPrincipal.classList.add("edificio-derecho")
    edificioMedioPrincipal.classList.add("edificio-medio")
    // spidey.classList.add("spidey")
    spidermanBlancoPrincipal.classList.add("spiderman-blanco")
    spidermanRojoTelaraña.classList.add("spiderman-rojo-telaraña")
    spidermanNegroTelaraña.classList.add("spiderman-negro-telaraña")
};


function ParallaxSeccion1(scrollY) {

    //MUEVE LAS NUBES MUY POCO
    nubesSeccion1.style.backgroundPosition = scrollY * -0.1 + 'px';

    //CALCULA EL NUEVO TAMAÑO Y OPACIDAD BASANDOSE EN CUANDO SCROLIO
    let newSize = 1 + scrollY * 0.00025;
    let OpacityPositiva = 0.95 + scrollY * 0.01;
    let OpacityNegativa = 1 - scrollY * 0.0006;

    // ASEGURA QUE LA OPACIDAD ESTE ENTRE 0.9 A 1 
    OpacityPositiva = Math.min(1, Math.max(0.9, OpacityPositiva));


    // LO AGRANDA Y LE SUBE LA OPACIDAD CUANDO SCROLEA 
    spidermanRojoTelaraña.style.transform = `scale(${newSize})`;
    spidermanRojoTelaraña.style.opacity = OpacityPositiva;

    //MUEVE AL SPIDERMAN NEGRO A LA DERECHA LE SUBE LA OPACIDAD Y LO AGRANDA CUANDO SCROLEA
    spidermanNegroTelaraña.style.right = scrollY * -0.02 + '%'
    spidermanNegroTelaraña.style.opacity = OpacityPositiva;
    spidermanNegroTelaraña.style.transform = `scale(${newSize})`;

    //MUEVE AL SPIDERMAN BLANCO A LA IZQUIERDA LE SUBE LA OPACIDAD Y LO AGRANDA CUANDO SCROLEA
    spidermanBlancoPrincipal.style.left = 7.03125 + scrollY * -0.02 + '%'
    spidermanBlancoPrincipal.style.opacity = OpacityPositiva;
    spidermanBlancoPrincipal.style.transform = `scale(${newSize})`;

    //LE DA MENOS OPACIDAD CUANDO SCROLLEA Y MUEVE EL EDIFICIO DERECHO HACIA LA DERECHA
    edificioDerechoPrincipal.style.opacity = OpacityNegativa
    edificioDerechoPrincipal.style.right = (- scrollY * 0.004) + '%';

    //LE DA MENOS OPACIDAD CUANDO SCROLLEA Y MUEVE EL EDIFICIO IZQUIERDO
    edificioIzquierdoPrincipal.style.opacity = OpacityNegativa
    edificioIzquierdoPrincipal.style.left = (-4 - scrollY * 0.004) + '%';

    //LE DA MENOS OPACIDAD Y CUANDO SCROLLEA LO MUEVE HACIA ABAJO 
    edificioMedioPrincipal.style.opacity = OpacityNegativa
    edificioMedioPrincipal.style.bottom = (1.5 - scrollY * 0.004) + 'px';


    //MUESTRA CUANDO LOS MUEVE CUANDO LOS OPACA Y CUANTO LO AGRANDA
    // console.log('nuevo tamaño: ' + newSize)
    // console.log('opacidad positiva: ' + OpacityPositiva)
    // console.log('opacidad negativa: ' + OpacityNegativa)
    // console.log('edificio izquierda: ' + (-4 - scrollY * 0.004) + '%')
    // console.log('edificio derecha: ' + (- scrollY * 0.004) + '%')
    // console.log('edificio del medio abajo: ' + (1.5 - scrollY * 0.004) + 'px')
}


function aparicionCardsFlotadas(scrollY) {
    if (scrollY > 1582) {

        //LE AGREGA LA ANIMACION A LAS CARD QUE TIENEN DISTINTAS VELOCIDADES 
        card1_seccion3.classList.add("animacion-card1")
        card2_seccion3.classList.add("animacion-card2")
        card3_seccion3.classList.add("animacion-card3")

        //LE AGREGA LA ANIMACION A LOS TEXTOS QUE TIENEN DISTINTAS VELOCIDADES 
        textoCard1.classList.add("animacion-card1")
        textoCard2.classList.add("animacion-card2")
        textoCard3.classList.add("animacion-card3")

        //LE DA OPACIDAD DE 1 A LAS CARD
        card1_seccion3.style.opacity = 1;
        card2_seccion3.style.opacity = 1;
        card3_seccion3.style.opacity = 1;

        //LE DA OPACIDAD DE 1 A LOS TEXTOS
        textoCard1.style.opacity = 1;
        textoCard2.style.opacity = 1;
        textoCard3.style.opacity = 1;
    }
}


function parallaxSeccion4(scrollY) {
    //LE DA MOVIMIENTO A LAS CARD QUE ESTAN TORCIDAS CUANDO HACE SCROLL
    seccion4parte1.style.top = 100 + scrollY * -0.05 + '%'
    seccion4parte2.style.top = 132 + scrollY * -0.05 + '%'
    seccion4parte3.style.top = 169 + scrollY * -0.05 + '%'
}


function aparicionNavegacionYLogo(scrollY) {
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

}

function stickySeccion5() {

    let altoViewport = window.innerHeight;
    let rectJuego = juego1.getBoundingClientRect();
    let rectTexto1 = texto1_sticky.getBoundingClientRect();
    let rectTexto2 = texto2_sticky.getBoundingClientRect();
    let rectTexto3 = texto3_sticky.getBoundingClientRect();
    let rectTexto4 = texto4_sticky.getBoundingClientRect();
    let topPorcentajeJuego = ((rectJuego.top * 100) / altoViewport)
    let topPorcentajeTexto1 = ((rectTexto1.top * 100) / altoViewport)
    let topPorcentajeTexto2 = ((rectTexto2.top * 100) / altoViewport)
    let topPorcentajeTexto3 = ((rectTexto3.top * 100) / altoViewport)
    let topPorcentajeTexto4 = ((rectTexto4.top * 100) / altoViewport)
    let tituloSeccion5 = document.querySelector(".titulo-seccion-5");
    let rectTituloSeccion5 = tituloSeccion5.getBoundingClientRect();
    let distancia = rectJuego.top - rectTituloSeccion5.bottom;

    if (topPorcentajeJuego <= 40) {
        juego1.style.position = 'sticky'
        juego1.style.top = 40 + '%'
    }

    if (distancia <= 70) {
        juego1.style.position = ''
        juego1.style.top = 380.5 + 'px'
    }


    if (topPorcentajeTexto2 < 92 && topPorcentajeTexto2 != 0) {
        juego1.innerHTML = '<img src="img/seccion5-img-2.png" alt="">';
        texto2aparecer.style.opacity = 1;
        texto1aparecer.style.opacity = 0;
        texto3aparecer.style.opacity = 0;
    } else {
        texto2aparecer.style.opacity = 0;
        texto1aparecer.style.opacity = 1;
        juego1.innerHTML = '<img src="img/seccion5-img-1.png" alt="">'
    }

    if (topPorcentajeTexto3 < 92 && topPorcentajeTexto3 != 0) {
        juego1.innerHTML = '<img src="img/seccion5-img-3.png" alt="">'
        texto3aparecer.style.opacity = 1;
        texto2aparecer.style.opacity = 0;
        texto4aparecer.style.opacity = 0;

    }

    if (topPorcentajeTexto4 < 92 && topPorcentajeTexto4 != 0) {
        juego1.innerHTML = '<img src="img/seccion5-img-4.png" alt="">'
        texto4aparecer.style.opacity = 1;
        texto3aparecer.style.opacity = 0;
    }

    // Obtén la posición de juego1 y juego4
    let rectJuego1 = juego1.getBoundingClientRect();
    let rectJuego4 = juego4.getBoundingClientRect();

    // Comprueba si juego1 ha alcanzado la posición de juego4
    if (rectJuego1.top >= rectJuego4.top && topPorcentajeTexto1 != 0) {
        // Si es así, oculta juego1
        juego1.style.visibility = 'hidden';
        juego4.style.visibility = 'visible';
    } else {
        // Si no, muestra juego1
        juego1.style.visibility = 'visible';
        juego4.style.visibility = 'hidden';
    }

}

// //PRIMER POP UP
// let primerSpider = document.querySelector(".seccion-6-img-1");
// let popup1 = document.querySelector(".personaje-1");
// let scrollPosition;

// primerSpider.addEventListener('click', function () {
//     //CAPTURO LA POSICION DEL SCROLL TOP ANTES DE OCULTAR TODO EL HOME
//     scrollPosition = document.documentElement.scrollTop;
//     contenedorHome.classList.add("ocultar");

//     body.style.height = 100 + 'vh';

//     popup1.classList.remove("ocultar");

//     let cruz = popup1.querySelector(".cerrar-popup");

//     cruz.addEventListener('click', function () {
//         popup1.classList.add("ocultar");
//         contenedorHome.classList.remove("ocultar");

//         // Vuelve a la posición guardada del scroll
//         window.scrollTo(0, scrollPosition);
//     })

//     document.addEventListener('keydown', function (event) {
//         if (event.key === 'Escape') {
//             popup1.classList.add("ocultar");
//             contenedorHome.classList.remove("ocultar");

//             // Vuelve a la posición guardada del scroll
//             window.scrollTo(0, scrollPosition);
//         }
//     });

// });

// //SEGUNDO POP UP
// let segundoSpider = document.querySelector(".seccion-6-img-2");
// let popup2 = document.querySelector(".personaje-2");

// segundoSpider.addEventListener('click', function () {
//     scrollPosition = document.documentElement.scrollTop;
//     contenedorHome.classList.add("ocultar");

//     body.style.height = 100 + 'vh';

//     popup2.classList.remove("ocultar");

//     let cruz = popup2.querySelector(".cerrar-popup");
//     cruz.addEventListener('click', function () {
//         popup2.classList.add("ocultar");
//         contenedorHome.classList.remove("ocultar");
//         // Vuelve a la posición guardada del scroll
//         window.scrollTo(0, scrollPosition);
//     })

//     document.addEventListener('keydown', function (event) {
//         if (event.key === 'Escape') {
//             popup2.classList.add("ocultar");
//             contenedorHome.classList.remove("ocultar");
//             // Vuelve a la posición guardada del scroll
//             window.scrollTo(0, scrollPosition);
//         }
//     });

// });

// //TERCER POPUP

// let tercerSpider = document.querySelector(".seccion-6-img-3");
// let popup3 = document.querySelector(".personaje-3");

// tercerSpider.addEventListener('click', function () {
//     scrollPosition = document.documentElement.scrollTop;
//     contenedorHome.classList.add("ocultar");

//     body.style.height = 100 + 'vh';

//     popup3.classList.remove("ocultar");

//     let cruz = popup3.querySelector(".cerrar-popup");
//     cruz.addEventListener('click', function () {
//         popup3.classList.add("ocultar");
//         contenedorHome.classList.remove("ocultar");
//         // Vuelve a la posición guardada del scroll
//         window.scrollTo(0, scrollPosition);
//     })

//     document.addEventListener('keydown', function (event) {
//         if (event.key === 'Escape') {
//             popup3.classList.add("ocultar");
//             contenedorHome.classList.remove("ocultar");
//             // Vuelve a la posición guardada del scroll
//             window.scrollTo(0, scrollPosition);
//         }
//     });

// });


let seccionHulk = document.querySelector(".prueba2");
seccionHulk.addEventListener("mousemove", parallax);

function parallax(e) {
    // Obtenemos las coordenadas del centro del div
    let rect = seccionHulk.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;

    // Calculamos la distancia del mouse al centro del div
    let distX = e.clientX - centerX;
    let distY = e.clientY - centerY;

    console.log(distX)
    console.log(distY)
    let x = -distX / 50
    let y = -distY / 50
    console.log(x)
    console.log(y)

    hulk.style.transform = 'translate(' + x + 'px, ' + y + 'px)' + 'rotate(7.515deg)';
    personaje_negro.style.transform = 'translate(' + x + 'px, ' + y + 'px)' + 'rotate(13.615deg)';
    personaje_chica.style.transform = 'translate(' + x + 'px, ' + y + 'px)' + 'rotate(-12.483deg)';
    cieloHulk.style.backgroundPosition = (x / 4) + 'px ' + (y / 4) + 'px';
    arboles_hulk.style.backgroundPosition = (x / 6) + 'px ' + (y / 6) + 'px';
}

let hulk = document.querySelector(".hulk")
let personaje_negro = document.querySelector(".personaje-negro-hulk")
let personaje_chica = document.querySelector(".personaje-chicha-hulk")
let cieloHulk = document.querySelector(".cielo-hulk")
let arboles_hulk = document.querySelector(".arboles-hulk")




let seccion_blanco_hover = document.querySelector(".seccion-6-img-1")
let seccion_rojo_hover = document.querySelector(".seccion-6-img-2")
let seccion_negro_hover = document.querySelector(".seccion-6-img-3")
let spiderman_blanco_hover = document.querySelector(".hover-img1-seccion6")
let spiderman_rojo_hover = document.querySelector(".hover-img2-seccion6")
let spiderman_negro_hover = document.querySelector(".hover-img3-seccion6")

spiderman_blanco_hover.addEventListener("mouseover", () => {
    seccion_blanco_hover.style.transform = 'scale(1.6)';
    seccion_blanco_hover.style.filter = 'blur(0px)';
    seccion_rojo_hover.style.transform = 'scale(0.77)';
    seccion_rojo_hover.style.filter = 'blur(5px)';
    seccion_negro_hover.style.transform = 'scale(0.77)';
    seccion_negro_hover.style.filter = 'blur(5px)';
})
seccion_blanco_hover.addEventListener('mouseout', () => {
    seccion_blanco_hover.style.transform = 'scale(1)';
    seccion_blanco_hover.style.filter = 'blur(0px)';
    seccion_rojo_hover.style.transform = 'scale(1)';
    seccion_rojo_hover.style.filter = 'blur(0px)';
    seccion_negro_hover.style.transform = 'scale(1)';
    seccion_negro_hover.style.filter = 'blur(0px)';
});

spiderman_rojo_hover.addEventListener("mouseover", () => {
    seccion_rojo_hover.style.transform = 'scale(1.47)';
    seccion_rojo_hover.style.filter = 'blur(0px)';
    seccion_blanco_hover.style.transform = 'scale(0.77)';
    seccion_blanco_hover.style.filter = 'blur(5px)';
    seccion_negro_hover.style.transform = 'scale(0.77)';
    seccion_negro_hover.style.filter = 'blur(5px)';
})
spiderman_rojo_hover.addEventListener("mouseout", () => {
    seccion_rojo_hover.style.transform = 'scale(1)';
    seccion_rojo_hover.style.filter = 'blur(0px)';
    seccion_blanco_hover.style.transform = 'scale(1)';
    seccion_blanco_hover.style.filter = 'blur(0px)';
    seccion_negro_hover.style.transform = 'scale(1)';
    seccion_negro_hover.style.filter = 'blur(0px)';
})

spiderman_negro_hover.addEventListener("mouseover", () => {
    seccion_negro_hover.style.transform = 'scale(1.6)';
    seccion_negro_hover.style.filter = 'blur(0px)';
    seccion_blanco_hover.style.transform = 'scale(0.77)';
    seccion_blanco_hover.style.filter = 'blur(5px)';
    seccion_rojo_hover.style.transform = 'scale(0.77)';
    seccion_rojo_hover.style.filter = 'blur(5px)';
})
spiderman_negro_hover.addEventListener("mouseout", () => {
    seccion_negro_hover.style.transform = 'scale(1)';
    seccion_negro_hover.style.filter = 'blur(0px)';
    seccion_blanco_hover.style.transform = 'scale(1)';
    seccion_blanco_hover.style.filter = 'blur(0px)';
    seccion_rojo_hover.style.transform = 'scale(1)';
    seccion_rojo_hover.style.filter = 'blur(0px)';
})
