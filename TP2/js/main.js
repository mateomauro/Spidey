//traemos las cosas
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let canvasWidth = canvas.width
let canvasHeight = canvas.height
let elegirTablero = document.querySelector(".elegir-tablero");
let btn4enLinea = document.getElementById("4enLinea");
let btn5enLinea = document.getElementById("5enLinea");
let contenedorFichas = document.querySelector(".fichas");
let fichas = document.querySelectorAll(".ficha");
let textoJugador = document.querySelector(".textoJugador");
let ficha1;
let ficha2;



btn5enLinea.addEventListener("click", () => {
    contenedorFichas.classList.remove("ocultar");
    elegirTablero.classList.add("ocultar");
    tableroJuego = 5;
});

btn4enLinea.addEventListener("click", () => {
    contenedorFichas.classList.remove("ocultar");
    elegirTablero.classList.add("ocultar");
    tableroJuego = 4;
});

fichas.forEach(ficha => {
    ficha.addEventListener("click", () => {
        if (typeof ficha1 === 'undefined') {
            ficha1 = ficha
            ficha.classList.add("ocultar");
            textoJugador.innerHTML = "Jugador 2 seleccionar ficha";
        } else {
            ficha2 = ficha;

            let imgJugador1 = new Image(); //creo la ficha de jugador1
            let imgJugador2 = new Image(); //creo la ficha de jugador2

            // Asigno las imágenes a las variables basándome en las fichas seleccionadas
            imgJugador1.src = ficha1.querySelector('img').src;
            imgJugador2.src = ficha2.querySelector('img').src;

            imgJugador1.onload = () => {
                imgJugador2.onload = () => {
                    canvas.classList.remove("ocultar");
                    contenedorFichas.classList.add("ocultar");

                    if (tableroJuego == 5) {
                        //creo el tablero para el 5 en linea 8x7 centrado
                        let tablero = new Tablero(157.5, 65, 8, 7, '#1F1FFF', ctx);
                        tablero.dibujar();

                        let y = 340;
                        for (let i = 0; i < 28; i++) {
                            let fichaJugador1 = new Ficha(78.75, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                            let fichaJugador2 = new Ficha(596.5, y, 20, '#000000', ctx, '#0000FF', imgJugador2);
                            fichaJugador1.dibujar();
                            fichaJugador2.dibujar();
                            y -= 7;
                        }
                    }

                    if (tableroJuego == 4) {
                        //creo el tablero para el 5 en linea 7x6 centrado
                        let tablero = new Tablero(180, 100, 7, 6, '#1F1FFF', ctx);
                        tablero.dibujar();

                        let y = 340;
                        for (let i = 0; i < 21; i++) {
                            let fichaJugador1 = new Ficha(90, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                            let fichaJugador2 = new Ficha(585, y, 20, '#000000', ctx, '#0000FF', imgJugador2);
                            fichaJugador1.dibujar();
                            fichaJugador2.dibujar();
                            y -= 7;
                        }
                    }

                }
            }
        }
    })
});





//para este hay dudas
// //creo el tablero para el 6 en linea 9x8 centrado
// let tablero = new Tablero(220, 20, 9, 8, '#000000', ctx);
// tablero.dibujar();

// //se crea el grupo de ficha para el 6 en linea
// let y = 340;
// for (let i = 0; i < 28; i++) {
//     // Creo la ficha (posicion en x, posicion en y, medida de la ficha, color, contexto)
//     let fichaJugador1 = new Ficha(110, y, 20, '#000000', ctx, '#0000FF');
//     let fichaJugador2 = new Ficha(690, y, 20, '#000000', ctx, '#0000FF');
//     fichaJugador1.dibujar();
//     fichaJugador2.dibujar();
//     y -= 7;
// }