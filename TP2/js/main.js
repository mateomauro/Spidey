//traemos las cosas
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let canvasWidth = canvas.width
let canvasHeight = canvas.height
let elegirTablero = document.querySelector(".elegir-tablero");
let btn4enLinea = document.getElementById("4enLinea");
let btn5enLinea = document.getElementById("5enLinea");
let btn6enLinea = document.getElementById("6enLinea");
let btn7enLinea = document.getElementById("7enLinea");

let contenedorFichas = document.querySelector(".fichas");
let fichas = document.querySelectorAll(".ficha");
let textoJugador = document.querySelector(".textoJugador");
let ficha1;
let ficha2;
let arrastro = false;
let tableroX
let tableroY
let casillerosX
let casillerosY

let GrupoFichas = [];


btn4enLinea.addEventListener("click", () => {
    contenedorFichas.classList.remove("ocultar");
    elegirTablero.classList.add("ocultar");
    tableroJuego = 4;
    tableroX = 287.5;
    tableroY = 210;
    casillerosX = 7;
    casillerosY = 6;
});

btn5enLinea.addEventListener("click", () => {
    contenedorFichas.classList.remove("ocultar");
    elegirTablero.classList.add("ocultar");
    tableroJuego = 5;
    tableroX = 265;
    tableroY = 165;
    casillerosX = 8;
    casillerosY = 7;
});

btn6enLinea.addEventListener("click", () => {
    contenedorFichas.classList.remove("ocultar");
    elegirTablero.classList.add("ocultar");
    tableroJuego = 6;
    tableroX = 242.5;
    tableroY = 120;
    casillerosX = 9;
    casillerosY = 8;
});

btn7enLinea.addEventListener("click", () => {
    contenedorFichas.classList.remove("ocultar");
    elegirTablero.classList.add("ocultar");
    tableroJuego = 7;
    tableroX = 220;
    tableroY = 75;
    casillerosX = 10;
    casillerosY = 9;
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
                    if (tableroJuego == 4) {
                        //creo el tablero para el 4 en linea 7x6 centrado
                        dibujarTablero();

                        let y = 450;
                        for (let i = 0; i < 21; i++) {
                            let fichaJugador1 = new Ficha(143.75, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                            let fichaJugador2 = new Ficha(746.25, y, 20, '#000000', ctx, '#0000FF', imgJugador2);
                            fichaJugador1.dibujar();
                            fichaJugador2.dibujar();
                            y -= 7;
                            GrupoFichas.push(fichaJugador2);
                            GrupoFichas.push(fichaJugador1);
                        }
                        GrupoFichas.reverse();
                    }

                    if (tableroJuego == 5) {
                        //creo el tablero para el 5 en linea 8x7 centrado
                        dibujarTablero();

                        let y = 450;
                        for (let i = 0; i < 28; i++) {
                            let fichaJugador1 = new Ficha(132.5, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                            let fichaJugador2 = new Ficha(757.5, y, 20, '#000000', ctx, '#0000FF', imgJugador2);
                            fichaJugador1.dibujar();
                            fichaJugador2.dibujar();
                            y -= 7;
                            GrupoFichas.push(fichaJugador2);
                            GrupoFichas.push(fichaJugador1);
                        }
                        GrupoFichas.reverse();
                    }

                    if (tableroJuego == 6) {
                        //creo el tablero para el 6 en linea 9x8 centrado
                        dibujarTablero();

                        let y = 450;
                        for (let i = 0; i < 36; i++) {
                            let fichaJugador1 = new Ficha(121.25, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                            let fichaJugador2 = new Ficha(768.75, y, 20, '#000000', ctx, '#0000FF', imgJugador2);
                            fichaJugador1.dibujar();
                            fichaJugador2.dibujar();
                            y -= 7;
                            GrupoFichas.push(fichaJugador2);
                            GrupoFichas.push(fichaJugador1);
                        }
                        GrupoFichas.reverse();
                    }

                    if (tableroJuego == 7) {
                        //creo el tablero para el 7 en linea 10x9 centrado
                        dibujarTablero();

                        let y = 450;
                        for (let i = 0; i < 45; i++) {
                            let fichaJugador1 = new Ficha(110, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                            let fichaJugador2 = new Ficha(780, y, 20, '#000000', ctx, '#0000FF', imgJugador2);
                            fichaJugador1.dibujar();
                            fichaJugador2.dibujar();
                            y -= 7;
                            GrupoFichas.push(fichaJugador2);
                            GrupoFichas.push(fichaJugador1);
                        }
                        GrupoFichas.reverse();
                    }
                }
            }
        }
    })
});

function dibujarTablero() {
    //creo el tablero.
    let tablero = new Tablero(tableroX, tableroY, casillerosX, casillerosY, '#1F1FFF', ctx);
    tablero.dibujar();
}

// Manejo de eventos del mouse
window.addEventListener("load", () => {
    document.addEventListener("mousedown", iniciarArrastre); // Evento cuando se presiona el botón del mouse
    document.addEventListener("mouseup", terminarArrastre); // Evento cuando se suelta el botón del mouse
    document.addEventListener("mousemove", arrastre); // Evento cuando se mueve el mouse
    document.addEventListener("mousemove", cambiarCursor); // cambia el cursor cuando entra a la ficha
});

//inicia el arraste si toca la ficha del jugador
function iniciarArrastre(event) {
    if (GrupoFichas.length > 0) {
        let pos = obtenerMousePosicion(event); // Obtiene la posición actual del mouse
        let fichaX = GrupoFichas[0].getPosicionX();
        let fichaY = GrupoFichas[0].getPosicionY();
        let radioCirculo = 20;
        let distancia = Math.sqrt(Math.pow(pos.x - fichaX, 2) + Math.pow(pos.y - fichaY, 2)); // Calcula la distancia entre la posición del mouse y el centro del círculo
        if (distancia < radioCirculo) { // Si la distancia es menor que el radio del círculo, entonces el mouse está dentro del círculo
            arrastro = true; // Se inicia el arrastre del círculo
        }
    }
}


//obtiene la posicion actual del mouse en el canvas
function obtenerMousePosicion(event) {
    let rect = canvas.getBoundingClientRect(); // Obtiene la posición del canvas en la pantalla
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

//termina el arrastre
function terminarArrastre(event) {
    arrastro = false;
}

function arrastre(event) {
    if (!arrastro) return;

    let pos = obtenerMousePosicion(event);
    if (pos.x > 0 && pos.x < canvasWidth && pos.y > 0 && pos.y < canvasHeight) {
        GrupoFichas[0].mover(pos.x, pos.y);
        GrupoFichas[0].dibujar();
    }
}

function cambiarCursor(event) {
    let pos = obtenerMousePosicion(event); // Obtiene la posición actual del mouse
    let fichaX = GrupoFichas[0].getPosicionX();
    let fichaY = GrupoFichas[0].getPosicionY();
    let radioCirculo = 20;
    let distancia = Math.sqrt(Math.pow(pos.x - fichaX, 2) + Math.pow(pos.y - fichaY, 2)); // Calcula la distancia entre la posición del mouse y el centro del círculo
    if (distancia < radioCirculo) {
        canvas.style.cursor = 'pointer'; // Cambia el cursor a un puntero
    } else {
        canvas.style.cursor = 'default'; // Cambia el cursor a su estado predeterminado
    }
}
