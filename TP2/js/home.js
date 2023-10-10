"use strict"

let carruseles = document.querySelectorAll(".carruseles");
let desplazamiento = 700;

carruseles.forEach((carrusel) => {
    let btnDerecha = carrusel.querySelector(".flecha-derecha");
    let btnIzquierda = carrusel.querySelector(".flecha-izquierda");
    let contenedorCards = carrusel.querySelector(".contenedor-cards");

    btnDerecha.addEventListener("click", () => {
        let cards = contenedorCards.querySelectorAll('.card_box');
        for (let i = cards.length - 1; i >= 0; i--) {
            let card = cards[i];
            setTimeout(function () {
                console.log("Agregando clase a la tarjeta", i); // Para depuración
                card.classList.add('card-efecto');
                // Quita la clase después de 1 segundo
                setTimeout(function () {
                    console.log("Quitando clase de la tarjeta", i); // Para depuración
                    card.classList.remove('card-efecto');
                }, 300);
            }, (cards.length - i) * 100); // Retrasa la adición de la clase en cada tarjeta para crear el efecto de "ola"
        }

        // Desplaza el carrusel inmediatamente cuando se hace clic en el botón
        contenedorCards.scrollLeft += desplazamiento;

    });

    btnIzquierda.addEventListener("click", () => {
        let cards = contenedorCards.querySelectorAll('.card_box');
        cards.forEach(function (card, index) {
            setTimeout(function () {
                console.log("Agregando clase a la tarjeta", index); // Para depuración
                card.classList.add('card-efecto');
                setTimeout(function () {
                    console.log("Quitando clase de la tarjeta", index); // Para depuración
                    card.classList.remove('card-efecto');
                }, 300);
            }, index * 100); // Retrasa la adición de la clase en cada tarjeta para crear el efecto de "ola"
        });

        // Desplaza el carrusel inmediatamente cuando se hace clic en el botón
        contenedorCards.scrollLeft -= desplazamiento;

    });

    // Añade un controlador de eventos a cada botón CartBtn
    let botonesCardBtn = carrusel.querySelectorAll('.CartBtn');
    botonesCardBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            // Encuentra el elemento card-boton-comprar dentro del mismo card_box que el botón CartBtn
            let botonAgregar = this.parentNode.parentNode.querySelector('.card-boton-comprar');
            let botonAgregado = this.parentNode.parentNode.querySelector('.card-boton-agregadoCarrito');
            botonAgregar.classList.add('ocultar');
            botonAgregado.classList.remove('ocultar');

        });
    });

    let botonesCardbtnEliminar = carrusel.querySelectorAll('.tacho-basura');
    botonesCardbtnEliminar.forEach((btn) => {
        btn.addEventListener('click', function () {
            // Encuentra el elemento card-boton-comprar dentro del mismo card_box que el botón CartBtn
            let botonAgregar = this.parentNode.parentNode.querySelector('.card-boton-comprar');
            let botonAgregado = this.parentNode.parentNode.querySelector('.card-boton-agregadoCarrito');
            botonAgregado.classList.add('ocultar');
            botonAgregar.classList.remove('ocultar');

        });
    });


});






// LOADING

let contador = 0;
let tiempo = 5000 / 100;
let contenedorHome = document.querySelector(".contenedor");
let contenedorLoader = document.querySelector(".contenedor-loading");
let incrementador = document.querySelector(".contador");

let temporizador = setInterval(() => {
    if (contador <= 100) {
        incrementador.innerHTML = contador + "%"
        contador++;
    }
    else {
        contenedorHome.classList.remove("ocultar");
        contenedorLoader.classList.add("ocultar");
        clearInterval(temporizador)//Limpio en consola
        console.log("hola")
    }

}, tiempo)