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
let JuegoGeneral;

let grupoFichasJugador1;
let grupoFichasJugador2;

let y = 450;

let jugador1;
let jugador2;

let tablero;

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

                        //creamos la ficha del jugador 1
                        let fichaJugador1 = new Ficha(143.75, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                        //creamos la ficha del jugador 2
                        let fichaJugador2 = new Ficha(746.25, y, 20, '#000000', ctx, '#0000FF', imgJugador2);

                        //crea el grupo de fichas del jugador 1
                        grupoFichasJugador1 = new Grupo(21, fichaJugador1);
                        //crea el grupo de fichas del jugador 2
                        grupoFichasJugador2 = new Grupo(21, fichaJugador2);

                        //creamos al jugador 1 
                        jugador1 = new Jugador(grupoFichasJugador1);
                        jugador1.setTurno(true);

                        //creamos al jugador 2 
                        jugador2 = new Jugador(grupoFichasJugador2);
                        jugador2.setTurno(false);

                        grupoFichasJugador1.dibujarGrupo();
                        grupoFichasJugador2.dibujarGrupo();

                        //crea el juego general
                        JuegoGeneral = new Juego(tablero, false, false);
                        JuegoGeneral.crearMatriz();

                    }

                    if (tableroJuego == 5) {
                        //creo el tablero para el 5 en linea 8x7 centrado
                        dibujarTablero();

                        //creamos la ficha del jugador 1
                        let fichaJugador1 = new Ficha(132.5, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                        //creamos la ficha del jugador 2
                        let fichaJugador2 = new Ficha(757.5, y, 20, '#000000', ctx, '#0000FF', imgJugador2);

                        //crea el grupo de fichas del jugador 1
                        grupoFichasJugador1 = new Grupo(28, fichaJugador1);
                        //crea el grupo de fichas del jugador 2
                        grupoFichasJugador2 = new Grupo(28, fichaJugador2);

                        //creamos al jugador 1 
                        jugador1 = new Jugador(grupoFichasJugador1);
                        jugador1.setTurno(true);

                        //creamos al jugador 2 
                        jugador2 = new Jugador(grupoFichasJugador2);
                        jugador2.setTurno(false);

                        grupoFichasJugador1.dibujarGrupo();
                        grupoFichasJugador2.dibujarGrupo();

                        //crea el juego general
                        JuegoGeneral = new Juego(tablero, false, false);
                        JuegoGeneral.crearMatriz();

                    }

                    if (tableroJuego == 6) {
                        //creo el tablero para el 6 en linea 9x8 centrado
                        dibujarTablero();

                        //creamos la ficha del jugador 1
                        let fichaJugador1 = new Ficha(121.25, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                        //creamos la ficha del jugador 2
                        let fichaJugador2 = new Ficha(768.75, y, 20, '#000000', ctx, '#0000FF', imgJugador2);


                        //crea el grupo de fichas del jugador 1
                        grupoFichasJugador1 = new Grupo(36, fichaJugador1);
                        //crea el grupo de fichas del jugador 2
                        grupoFichasJugador2 = new Grupo(36, fichaJugador2);

                        //creamos al jugador 1 
                        jugador1 = new Jugador(grupoFichasJugador1);
                        jugador1.setTurno(true);

                        //creamos al jugador 2 
                        jugador2 = new Jugador(grupoFichasJugador2);
                        jugador2.setTurno(false);

                        grupoFichasJugador1.dibujarGrupo();
                        grupoFichasJugador2.dibujarGrupo();

                        //crea el juego general
                        JuegoGeneral = new Juego(tablero, false, false);
                        JuegoGeneral.crearMatriz();

                    }

                    if (tableroJuego == 7) {
                        //dibuja el tablero
                        dibujarTablero();

                        //creamos la ficha del jugador 1
                        let fichaJugador1 = new Ficha(110, y, 20, '#000000', ctx, '#0000FF', imgJugador1);
                        //creamos la ficha del jugador 2
                        let fichaJugador2 = new Ficha(780, y, 20, '#000000', ctx, '#0000FF', imgJugador2);

                        //crea el grupo de fichas del jugador 1
                        grupoFichasJugador1 = new Grupo(45, fichaJugador1);
                        //crea el grupo de fichas del jugador 2
                        grupoFichasJugador2 = new Grupo(45, fichaJugador2);

                        //creamos al jugador 1 
                        jugador1 = new Jugador(grupoFichasJugador1);
                        jugador1.setTurno(true);

                        //creamos al jugador 2 
                        jugador2 = new Jugador(grupoFichasJugador2);
                        jugador2.setTurno(false);

                        grupoFichasJugador1.dibujarGrupo();
                        grupoFichasJugador2.dibujarGrupo();

                        //crea el juego general
                        JuegoGeneral = new Juego(tablero, false, false);
                        JuegoGeneral.crearMatriz();
                    }
                }
            }
        }
    })
});


function dibujarTablero() {
    //creo el tablero.
    tablero = new Tablero(tableroX, tableroY, casillerosX, casillerosY, '#1F1FFF', ctx);
    tablero.dibujar();
}


// Manejo de eventos del mouse
window.addEventListener("load", () => {
    document.addEventListener("mousedown", iniciarArrastre); // Evento cuando se presiona el botón del mouse
    document.addEventListener("mouseup", terminarArrastre); // Evento cuando se suelta el botón del mouse
    document.addEventListener("mousemove", arrastre); // Evento cuando se mueve el mouse
});

let fichaClikeada;
let grupoActual;
let posicionOriginal;

function iniciarArrastre(event) {
    if (jugador1 && jugador1.tengoFichas() == true && jugador1.getTurno() == true) {
        //recorre las ficha del jugador 1
        grupoFichasJugador1.getFichas().forEach(ficha => {
            let pos = obtenerMousePosicion(event); // Obtiene la posición actual del mouse
            let fichaX = ficha.getPosicionX();
            let fichaY = ficha.getPosicionY();
            let radioCirculo = 20;
            let distancia = Math.sqrt(Math.pow(pos.x - fichaX, 2) + Math.pow(pos.y - fichaY, 2)); // Calcula la distancia entre la posición del mouse y el centro del círculo
            if (distancia < radioCirculo) { // Si la distancia es menor que el radio del círculo, entonces el mouse está dentro del círculo
                arrastro = true; // Se inicia el arrastre del círculo
                fichaClikeada = ficha;
                fichaClikeada.posicionOriginal = { x: fichaClikeada.getPosicionX(), y: fichaClikeada.getPosicionY() }; // Almacena la posición original de la ficha
            }
        });
    } else if (jugador2 && jugador2.tengoFichas() == true && jugador2.getTurno() == true) {
        //recorre las ficha del jugador 2
        grupoFichasJugador2.getFichas().forEach(ficha => {
            let pos = obtenerMousePosicion(event); // Obtiene la posición actual del mouse
            let fichaX = ficha.getPosicionX();
            let fichaY = ficha.getPosicionY();
            let radioCirculo = 20;
            let distancia = Math.sqrt(Math.pow(pos.x - fichaX, 2) + Math.pow(pos.y - fichaY, 2)); // Calcula la distancia entre la posición del mouse y el centro del círculo
            if (distancia < radioCirculo) { // Si la distancia es menor que el radio del círculo, entonces el mouse está dentro del círculo
                arrastro = true; // Se inicia el arrastre del círculo
                fichaClikeada = ficha;
                fichaClikeada.posicionOriginal = { x: fichaClikeada.getPosicionX(), y: fichaClikeada.getPosicionY() }; // Almacena la posición original de la ficha
            }
        });
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

let fichasEnTablero = []; // Array para almacenar las fichas en el tablero

function arrastre(event) {
    if (!arrastro) return;

    let pos = obtenerMousePosicion(event);
    if (pos.x > 0 && pos.x < canvasWidth && pos.y > 0 && pos.y < canvasHeight) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
        dibujarGrupos();
        dibujarTablero();
        fichaClikeada.mover(pos.x, pos.y);
        fichaClikeada.dibujar();

        // Redibuja todas las fichas en el tablero
        for (let i = 0; i < fichasEnTablero.length; i++) {
            fichasEnTablero[i].dibujar();
        }
    }
}


function terminarArrastre(event) {
    if (arrastro) {
        // Calcula en qué columna del tablero se soltó la ficha
        let columna = Math.floor((fichaClikeada.getPosicionX() - tableroX) / 45);

        // Verifica si la ficha se soltó dentro de los límites del tablero
        if (columna >= 0 && columna < tablero.getCantidadX() && fichaClikeada.getPosicionY() < tableroY) {

            // Añade la ficha a la lista de fichas en el tablero
            fichasEnTablero.push(fichaClikeada);

            // Quita la ficha del grupo del jugador
            if (jugador1.getFichas().getFichas().includes(fichaClikeada)) {
                jugador1.getFichas().quitarFicha(fichaClikeada);
                jugador1.setTurno(false); // Cambia el turno del jugador 1 a false
                jugador2.setTurno(true); // Cambia el turno del jugador 2 a true
            } else if (jugador2.getFichas().getFichas().includes(fichaClikeada)) {
                jugador2.getFichas().quitarFicha(fichaClikeada);
                jugador2.setTurno(false); // Cambia el turno del jugador 2 a false
                jugador1.setTurno(true); // Cambia el turno del jugador 1 a true
            }


            // Busca el casillero más bajo vacío en esa columna
            let fila;
            for (fila = JuegoGeneral.matriz.length - 1; fila >= 0; fila--) {
                if (!JuegoGeneral.matriz[fila][columna]) {
                    break;
                }
            }

            // Si encontró un casillero vacío, coloca la ficha allí
            if (fila >= 0) {
                JuegoGeneral.matriz[fila][columna] = fichaClikeada;
                // Actualiza la posición de la ficha para que coincida con el centro del círculo en el casillero
                let centroCasilleroX = columna * 45 + tableroX + 22.5; // Añade la mitad del tamaño del casillero a la posición X
                let centroCasilleroY = fila * 45 + tableroY + 22.5; // Añade la mitad del tamaño del casillero a la posición Y
                fichaClikeada.mover(centroCasilleroX, centroCasilleroY);
            }
        } else {
            // Si la ficha se soltó fuera de los límites del tablero, mueve la ficha de vuelta a su posición original
            fichaClikeada.mover(fichaClikeada.posicionOriginal.x, fichaClikeada.posicionOriginal.y);
        }

        // Redibuja el tablero y todas las fichas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
        dibujarGrupos();
        dibujarTablero();

        // Redibuja todas las fichas en el tablero
        for (let i = 0; i < fichasEnTablero.length; i++) {
            fichasEnTablero[i].dibujar();
        }
        console.log(JuegoGeneral.getMatriz())
    }

    if (JuegoGeneral) {
        if (JuegoGeneral.verificarGanador(jugador1)) {
            console.log("¡El Jugador 1 ha ganado!");
        } else if (JuegoGeneral.verificarGanador(jugador2)) {
            console.log("¡El Jugador 2 ha ganado!");
        }
    }
    arrastro = false;
}


function dibujarGrupos() {
    grupoFichasJugador1.dibujarGrupo();
    grupoFichasJugador2.dibujarGrupo();
}
