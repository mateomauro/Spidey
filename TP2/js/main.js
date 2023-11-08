//traemos las cosas
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let canvasWidth = canvas.width
let canvasHeight = canvas.height
let elegirTablero = document.querySelector(".elegir-tablero");
let btn4enLinea = document.querySelectorAll(".enLinea4");
let btn5enLinea = document.querySelectorAll(".enLinea5");
let btn6enLinea = document.querySelectorAll(".enLinea6");
let btn7enLinea = document.querySelectorAll(".enLinea7");
let seguro = document.querySelector(".seguro")
let juegoDegradado = document.querySelector(".juego-oculto")
let contenedorFichas = document.querySelector(".fichas");
let textoJugador = document.querySelector(".textoJugador");
let empate = document.querySelector(".empate");
let ficha1;
let ficha2;
let arrastro = false;
let tableroX
let tableroY
let casillerosX
let casillerosY
let pausa = document.getElementById("pause-button");
let replay = document.querySelector(".btn-replay");
let cruz = document.querySelector(".btn-cruz-juego");
let seleccionTablero = document.querySelector(".seleccionTableroHijo")
let opcionJuegoBtn = document.querySelectorAll(".opcion-juego")
let GrupoFichas = [];
let JuegoGeneral;
let grupoFichasJugador1;
let grupoFichasJugador2;
let y = 400;
let jugador1;
let jugador2;
let imgJugador1;
let imgJugador2;
let tablero;
let primeraVez = 0;
let grupo1X;
let grupo2X;
let cantFichas;
let circulo = document.querySelector(".svg-circulo");
let miTemporizador;
let paused = false;
let salir = document.querySelector(".seguro-salir");

agregarEventosAFichas();

//boton para reiniciar el juego si empatan
document.querySelector(".empate-btn").addEventListener("click", () => {
    elegirTablero.classList.remove("ocultar")
    canvas.classList.add("ocultar")
    empate.classList.add("ocultar")
    juegoDegradado.classList.add("ocultar")
    primeraVez = 0;
    var countdownNumberEl = document.getElementById('countdown-number');
    countdownNumberEl.textContent = '';
    contenedorFichas.innerHTML = `<div class="jugador-fichas">
        <h3 class="textoJugador">Jugador 1 seleccionar ficha</h3>
        <div class="contenedor-fichas">
            <div class="ficha">
                <img src="iconos-svg/fichajava.svg">
            </div>
            <div class="ficha">
                <img src="iconos-svg/fichajs.svg">
            </div>
            <div class="ficha">
                <img src="iconos-svg/fifa24.png">
            </div>
        </div>
    </div>`;

    // Restablece las fichas seleccionadas
    ficha1 = undefined;
    ficha2 = undefined;
    agregarEventosAFichas();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
    fichasEnTablero = [];

    // Busca el nuevo elemento h3
    textoJugador = document.querySelector(".textoJugador");

    // Restablece el texto del jugador
    textoJugador.innerHTML = "Jugador 1 seleccionar ficha"
})

//boton para salir del juego
cruz.addEventListener("click", () => {
    juegoDegradado.classList.remove("ocultar")
    salir.classList.remove("ocultar")
    if (!paused) {
        pausar()
    }

    document.querySelector(".cancelar-salir").addEventListener("click", () => {
        juegoDegradado.classList.add("ocultar")
        salir.classList.add("ocultar")
        paused = true;
        pausar()
        if (JuegoGeneral && JuegoGeneral.verificarGanador(fichaClikeada)) {
            if (!paused) {
                document.querySelector(".svg-reanudar").classList.add("ocultar")
                document.querySelector(".svg-pausa").classList.remove("ocultar")
                pausar()
            }
            terminarEventos()
        }
    })

    let aceptar = document.querySelector(".salir-btn");
    aceptar.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
        elegirTablero.classList.remove("ocultar")
        canvas.classList.add("ocultar")
        salir.classList.add("ocultar")
        juegoDegradado.classList.add("ocultar")
        countdown.classList.add("ocultar")
        cruz.classList.add("ocultar")
        replay.classList.add("ocultar")
        pausa.classList.add("ocultar")
        primeraVez = 0;
        fichasEnTablero = [];
        mensajeGanador.classList.add("ocultar")
        // Restablece las fichas seleccionadas
        ficha1 = undefined;
        ficha2 = undefined;
        // Restablece el texto del jugador
        textoJugador.innerHTML = "Jugador 1 seleccionar ficha"
        iniciarEventos()
        let fichasTotales = document.querySelectorAll(".ficha")
        fichasTotales.forEach(fich => {
            fich.classList.remove("ocultar")
        });
        JuegoGeneral.setMatriz([])
        JuegoGeneral.crearMatriz();
        opcionJuegoBtn.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.7';
        });
    })
})

//arranca la animacion del circula de carga del timer
function animacionCirculo() {
    // Reinicia la animación
    var circulo = document.querySelector(".svg-circulo");
    circulo.classList.remove("animar");

    // Forzar un reflow
    void circulo.offsetWidth;

    // Agregar un pequeño retardo antes de reiniciar la animación
    setTimeout(function () {
        circulo.classList.add("animar");
    }, 10);
}

//comienza el tiempo del timer
function comenzarTiempo() {

    var countdownNumberEl = document.getElementById('countdown-number');
    var countdown = 260;

    countdownNumberEl.textContent = countdown;

    circulo.classList.remove("ocultar");

    // Inicia la animación
    circulo.classList.add("animar");

    // Limpia el temporizador existente
    if (miTemporizador) {
        clearInterval(miTemporizador);
    }

    // Establece un nuevo temporizador
    miTemporizador = setInterval(function () {
        if (!paused) {
            countdown--;
            if (countdown === 0) {
                juegoDegradado.classList.remove("ocultar")
                empate.classList.remove("ocultar");
                clearInterval(miTemporizador); // Detiene el temporizador
                pausa.classList.add("ocultar");
                replay.classList.add("ocultar");
                cruz.classList.add("ocultar");
            }

            countdownNumberEl.textContent = countdown >= 0 ? countdown : 0; // Asegura que el contador no vaya a negativo
        }
    }, 1000);
}

if (pausa) {
    // Controlador de eventos para el botón de pausa
    pausa.addEventListener('click', function () {
        pausar()
    });
}

//pausa el timer
function pausar() {
    paused = !paused; // Cambia el estado de pausa
    if (paused) {
        document.querySelector(".svg-reanudar").classList.add("ocultar")
        document.querySelector(".svg-pausa").classList.remove("ocultar")
        terminarEventos()
    } else {
        document.querySelector(".svg-pausa").classList.add("ocultar")
        document.querySelector(".svg-reanudar").classList.remove("ocultar")
        iniciarEventos()
    }
    // Pausa o reanuda la animación
    if (paused) {
        circulo.classList.add("pausado");
    } else {
        circulo.classList.remove("pausado");
    }
}


//reinicia la partida
replay.addEventListener("click", () => {
    if (!paused) {
        pausar()
    }
    juegoDegradado.classList.remove("ocultar")
    document.querySelector(".reiniciarJuego").classList.remove("ocultar")

    //si presiona cancelar se vuelve al juego
    let cancelar = document.querySelector(".cancelar-reinicio");
    cancelar.addEventListener("click", () => {
        document.querySelector(".reiniciarJuego").classList.add("ocultar")
        juegoDegradado.classList.add("ocultar");
        paused = true;
        pausar()
        if (JuegoGeneral && JuegoGeneral.verificarGanador(fichaClikeada)) {
            terminarEventos()
            if (!paused) {
                document.querySelector(".svg-reanudar").classList.add("ocultar")
                document.querySelector(".svg-pausa").classList.remove("ocultar")
                pausar()
            }
        }
    })

    //si presiona aceptar reinicia el juego 
    let aceptar = document.querySelector(".reiniciar-tablero");
    aceptar.addEventListener("click", () => {
        iniciarEventos()
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
        dibujarTablero();
        dibujarFichaGrupoJugador()
        fichasEnTablero = [];
        document.querySelector(".reiniciarJuego").classList.add("ocultar")
        juegoDegradado.classList.add("ocultar");
        pausa.classList.remove("ocultar");
        replay.classList.remove("ocultar");
        animacionCirculo()
        paused = true;
        mensajeGanador.classList.add("ocultar")
        pausar()
        countdown.classList.remove("ocultar")
        pausa.disabled = false;
        dibujarGrupos()
    })
})


//si apreta el boton 4 en linea dependiendo cual sea va quitando y comenzando el juego
btn4enLinea.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (primeraVez == 1) {
            pausar()
            seguro.classList.remove("ocultar");
            juegoDegradado.classList.remove("ocultar")

            if (!paused) {
                document.querySelector(".svg-reanudar").classList.add("ocultar")
                document.querySelector(".svg-pausa").classList.remove("ocultar")
                pausar()
            }

            //si presiona cancelar se vuelve al juego
            let cancelar = document.querySelector(".cancelar-tablero");
            cancelar.addEventListener("click", () => {
                seguro.classList.add("ocultar");
                juegoDegradado.classList.add("ocultar");
                if (!countdown.classList.contains("ocultar")) {
                    paused = true;
                    pausar()
                }
                if (JuegoGeneral && JuegoGeneral.verificarGanador(fichaClikeada)) {
                    terminarEventos()
                }
            })

            //si presiona aceptar reinicia el juego 
            let aceptar = document.querySelector(".cambiar-tablero");
            aceptar.addEventListener("click", () => {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
                //asigna los valores
                tableroJuego = 4;
                tableroX = 287.5;
                tableroY = 210;
                casillerosX = 7;
                casillerosY = 6;
                primeraVez = 1;
                grupo1X = 143.75;
                grupo2X = 746.25;
                cantFichas = 21;
                dibujarTablero();
                dibujarFichaGrupoJugador()
                fichasEnTablero = [];
                seguro.classList.add("ocultar");
                juegoDegradado.classList.add("ocultar");
                pausa.classList.remove("ocultar");
                replay.classList.remove("ocultar");
                animacionCirculo()
                paused = true;
                pausar()
                iniciarEventos()
                mensajeGanador.classList.add("ocultar")
                countdown.classList.remove("ocultar")
                cruz.classList.remove("ocultar")
                pausa.disabled = false;
                dibujarGrupos()
                return
            })
        } else {
            contenedorFichas.classList.remove("ocultar");
            elegirTablero.classList.add("ocultar");
            iniciarEventos()
            tableroJuego = 4;
            tableroX = 287.5;
            tableroY = 210;
            casillerosX = 7;
            casillerosY = 6;
            primeraVez = 1;
            grupo1X = 143.75;
            grupo2X = 746.25;
            cantFichas = 21;
        }
    });
});

//si apreta el boton 5 en linea dependiendo cual sea va quitando y comenzando el juego
btn5enLinea.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (primeraVez == 1) {
            pausar()
            seguro.classList.remove("ocultar");
            juegoDegradado.classList.remove("ocultar")

            if (!paused) {
                document.querySelector(".svg-reanudar").classList.add("ocultar")
                document.querySelector(".svg-pausa").classList.remove("ocultar")
                pausar()
            }

            //si presiona cancelar se vuelve al juego
            let cancelar = document.querySelector(".cancelar-tablero");
            cancelar.addEventListener("click", () => {
                seguro.classList.add("ocultar");
                juegoDegradado.classList.add("ocultar");
                if (!countdown.classList.contains("ocultar")) {
                    paused = true;
                    pausar()
                }
                if (JuegoGeneral && JuegoGeneral.verificarGanador(fichaClikeada)) {
                    terminarEventos()
                    if (!paused) {
                        document.querySelector(".svg-reanudar").classList.add("ocultar")
                        document.querySelector(".svg-pausa").classList.remove("ocultar")
                        pausar()
                    }
                }
            })

            //si presiona aceptar reinicia el juego 
            let aceptar = document.querySelector(".cambiar-tablero");
            aceptar.addEventListener("click", () => {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
                tableroJuego = 5;
                tableroX = 265;
                tableroY = 165;
                casillerosX = 8;
                casillerosY = 7;
                primeraVez = 1;
                grupo1X = 132.5;
                grupo2X = 757.5;
                cantFichas = 28;
                dibujarTablero();
                dibujarFichaGrupoJugador()
                fichasEnTablero = [];
                seguro.classList.add("ocultar");
                juegoDegradado.classList.add("ocultar");
                pausa.classList.remove("ocultar");
                replay.classList.remove("ocultar");
                animacionCirculo()
                paused = true;
                pausar()
                iniciarEventos()
                mensajeGanador.classList.add("ocultar")
                countdown.classList.remove("ocultar")
                cruz.classList.remove("ocultar")
                pausa.disabled = false;
                dibujarGrupos()
                return
            })
        } else {
            contenedorFichas.classList.remove("ocultar");
            elegirTablero.classList.add("ocultar");
            iniciarEventos()
            tableroJuego = 5;
            tableroX = 265;
            tableroY = 165;
            casillerosX = 8;
            casillerosY = 7;
            primeraVez = 1;
            grupo1X = 132.5;
            grupo2X = 757.5;
            cantFichas = 28;
        }
    });
});

//si apreta el boton 6 en linea dependiendo cual sea va quitando y comenzando el juego
btn6enLinea.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (primeraVez == 1) {
            pausar()
            seguro.classList.remove("ocultar");
            juegoDegradado.classList.remove("ocultar")

            if (!paused) {
                document.querySelector(".svg-reanudar").classList.add("ocultar")
                document.querySelector(".svg-pausa").classList.remove("ocultar")
                pausar()
            }

            //si presiona cancelar se vuelve al juego
            let cancelar = document.querySelector(".cancelar-tablero");
            cancelar.addEventListener("click", () => {
                seguro.classList.add("ocultar");
                juegoDegradado.classList.add("ocultar");
                if (!countdown.classList.contains("ocultar")) {
                    paused = true;
                    pausar()
                }
                if (JuegoGeneral && JuegoGeneral.verificarGanador(fichaClikeada)) {
                    terminarEventos()
                    if (!paused) {
                        document.querySelector(".svg-reanudar").classList.add("ocultar")
                        document.querySelector(".svg-pausa").classList.remove("ocultar")
                        pausar()
                    }
                }
            })

            //si presiona aceptar reinicia el juego 
            let aceptar = document.querySelector(".cambiar-tablero");
            aceptar.addEventListener("click", () => {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
                tableroJuego = 6;
                tableroX = 242.5;
                tableroY = 120;
                casillerosX = 9;
                casillerosY = 8;
                primeraVez = 1;
                grupo1X = 121.25;
                grupo2X = 768.75;
                cantFichas = 36;
                dibujarTablero();
                dibujarFichaGrupoJugador()
                fichasEnTablero = [];
                seguro.classList.add("ocultar");
                juegoDegradado.classList.add("ocultar");
                pausa.classList.remove("ocultar");
                replay.classList.remove("ocultar");
                animacionCirculo()
                paused = true;
                pausar()
                iniciarEventos()
                mensajeGanador.classList.add("ocultar")
                countdown.classList.remove("ocultar")
                cruz.classList.remove("ocultar")
                pausa.disabled = false;
                dibujarGrupos()
                return
            })
        } else {
            contenedorFichas.classList.remove("ocultar");
            elegirTablero.classList.add("ocultar");
            iniciarEventos()
            tableroJuego = 6;
            tableroX = 242.5;
            tableroY = 120;
            casillerosX = 9;
            casillerosY = 8;
            primeraVez = 1;
            grupo1X = 121.25;
            grupo2X = 768.75;
            cantFichas = 36;
        }
    });
});

//si apreta el boton 7 en linea dependiendo cual sea va quitando y comenzando el juego
btn7enLinea.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (primeraVez == 1) {
            pausar()
            seguro.classList.remove("ocultar");
            juegoDegradado.classList.remove("ocultar")

            if (!paused) {
                document.querySelector(".svg-reanudar").classList.add("ocultar")
                document.querySelector(".svg-pausa").classList.remove("ocultar")
                pausar()
            }

            //si presiona cancelar se vuelve al juego
            let cancelar = document.querySelector(".cancelar-tablero");
            cancelar.addEventListener("click", () => {
                seguro.classList.add("ocultar");
                juegoDegradado.classList.add("ocultar");
                if (!countdown.classList.contains("ocultar")) {
                    paused = true;
                    pausar()
                }
                if (JuegoGeneral && JuegoGeneral.verificarGanador(fichaClikeada)) {
                    terminarEventos()
                    if (!paused) {
                        pausar()
                    }
                }
            })

            //si presiona aceptar reinicia el juego 
            let aceptar = document.querySelector(".cambiar-tablero");
            aceptar.addEventListener("click", () => {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
                tableroJuego = 7;
                tableroX = 220;
                tableroY = 75;
                casillerosX = 10;
                casillerosY = 9;
                primeraVez = 1;
                grupo1X = 110;
                grupo2X = 780;
                cantFichas = 45;
                dibujarTablero();
                dibujarFichaGrupoJugador()
                fichasEnTablero = [];
                seguro.classList.add("ocultar");
                juegoDegradado.classList.add("ocultar");
                pausa.classList.remove("ocultar");
                replay.classList.remove("ocultar");
                animacionCirculo()
                paused = true;
                pausar()
                iniciarEventos()
                mensajeGanador.classList.add("ocultar")
                countdown.classList.remove("ocultar")
                cruz.classList.remove("ocultar")
                pausa.disabled = false;
                dibujarGrupos()
                return
            })
        } else {
            contenedorFichas.classList.remove("ocultar");
            elegirTablero.classList.add("ocultar");
            iniciarEventos()
            tableroJuego = 7;
            tableroX = 220;
            tableroY = 75;
            casillerosX = 10;
            casillerosY = 9;
            primeraVez = 1;
            grupo1X = 110;
            grupo2X = 780;
            cantFichas = 45;
        }
    });
});


//comienza el juego aqui
function agregarEventosAFichas() {
    let fichas = document.querySelectorAll(".ficha");
    if (juego.classList.contains("ocultar")) {
        opcionJuegoBtn.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.7';
        });
    }
    fichas.forEach(ficha => {
        ficha.addEventListener("click", () => {
            if (typeof ficha1 === 'undefined') {
                ficha1 = ficha
                ficha.classList.add("ocultar");
                textoJugador.innerHTML = "Jugador 2 seleccionar ficha";
            } else {
                ficha2 = ficha;

                imgJugador1 = new Image(); //creo la ficha de jugador1
                imgJugador2 = new Image(); //creo la ficha de jugador2

                // Asigno las imágenes a las variables basándome en las fichas seleccionadas
                imgJugador1.src = ficha1.querySelector('img').src;
                imgJugador2.src = ficha2.querySelector('img').src;

                imgJugador1.onload = () => {
                    imgJugador2.onload = () => {
                        canvas.classList.remove("ocultar");
                        contenedorFichas.classList.add("ocultar");
                        if (tableroJuego == 4) {
                            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
                            //creo el tablero para el 4 en linea 7x6 centrado
                            dibujarTablero();
                            dibujarFichaGrupoJugador()
                            pausa.classList.remove("ocultar");
                            replay.classList.remove("ocultar");
                            animacionCirculo()
                            cruz.classList.remove("ocultar")
                            mensajeGanador.classList.add("ocultar")
                            pausa.disabled = false;
                            countdown.classList.remove("ocultar");
                            if (paused) {
                                pausar()
                            }
                            opcionJuegoBtn.forEach(btn => {
                                btn.disabled = false;
                                btn.style.opacity = '1';
                            });
                            dibujarGrupos()
                        }
                        if (tableroJuego == 5) {
                            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
                            //creo el tablero para el 5 en linea 8x7 centrado
                            dibujarTablero();
                            dibujarFichaGrupoJugador()
                            pausa.classList.remove("ocultar");
                            replay.classList.remove("ocultar");
                            animacionCirculo()
                            cruz.classList.remove("ocultar")
                            mensajeGanador.classList.add("ocultar")
                            pausa.disabled = false;
                            countdown.classList.remove("ocultar");
                            if (paused) {
                                pausar()
                            }
                            opcionJuegoBtn.forEach(btn => {
                                btn.disabled = false;
                                btn.style.opacity = '1';
                            });
                            dibujarGrupos()
                        }
                        if (tableroJuego == 6) {
                            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
                            //creo el tablero para el 6 en linea 9x8 centrado
                            dibujarTablero();
                            dibujarFichaGrupoJugador()
                            pausa.classList.remove("ocultar");
                            replay.classList.remove("ocultar");
                            animacionCirculo()
                            cruz.classList.remove("ocultar")
                            mensajeGanador.classList.add("ocultar")
                            pausa.disabled = false;
                            countdown.classList.remove("ocultar");
                            if (paused) {
                                pausar()
                            }
                            opcionJuegoBtn.forEach(btn => {
                                btn.disabled = false;
                                btn.style.opacity = '1';
                            });
                            dibujarGrupos()
                        }
                        if (tableroJuego == 7) {
                            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
                            //dibuja el tablero
                            dibujarTablero();
                            dibujarFichaGrupoJugador()
                            pausa.classList.remove("ocultar");
                            replay.classList.remove("ocultar");
                            animacionCirculo()
                            cruz.classList.remove("ocultar")
                            mensajeGanador.classList.add("ocultar")
                            pausa.disabled = false;
                            countdown.classList.remove("ocultar");
                            if (paused) {
                                pausar()
                            }
                            opcionJuegoBtn.forEach(btn => {
                                btn.disabled = false;
                                btn.style.opacity = '1';
                            });
                            dibujarGrupos()
                        }
                    }
                }
            }
        })
    });

}

//dibuja el tablero
function dibujarTablero() {
    //creo el tablero.
    tablero = new Tablero(tableroX, tableroY, casillerosX, casillerosY, '#1F1FFF', ctx);
    tablero.dibujar();
}

//dibuja las fichas y el nombre del jugador
function dibujarFichaGrupoJugador() {
    //creamos la ficha del jugador 1
    let fichaJugador1 = new Ficha(grupo1X, y, 20, '#000000', ctx, '#0000FF', imgJugador1, 'jugador 1');
    //creamos la ficha del jugador 2
    let fichaJugador2 = new Ficha(grupo2X, y, 20, '#000000', ctx, '#0000FF', imgJugador2, 'jugador 2');

    //crea el grupo de fichas del jugador 1
    grupoFichasJugador1 = new Grupo(cantFichas, fichaJugador1, 'jugador 1');
    //crea el grupo de fichas del jugador 2
    grupoFichasJugador2 = new Grupo(cantFichas, fichaJugador2, 'jugador 2');

    //creamos al jugador 1 
    jugador1 = new Jugador(grupoFichasJugador1);
    jugador1.setTurno(true);

    //creamos al jugador 2 
    jugador2 = new Jugador(grupoFichasJugador2);
    jugador2.setTurno(false);

    grupoFichasJugador1.dibujarGrupo();
    grupoFichasJugador2.dibujarGrupo();
    grupoFichasJugador1.dibujarNombre();
    grupoFichasJugador2.dibujarNombre();

    comenzarTiempo();

    //crea el juego general
    JuegoGeneral = new Juego(tablero, false, false);
    JuegoGeneral.crearMatriz();

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

//cuando arranca el arraste
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

//mientras arrastra
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
    } else {
        // Si la ficha se arrastra fuera de los límites del tablero, mueve la ficha de vuelta a su posición original
        fichaClikeada.mover(fichaClikeada.posicionOriginal.x, fichaClikeada.posicionOriginal.y);
        arrastro = false; // Detiene el arrastre
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
        dibujarGrupos();
        dibujarTablero();
        // Redibuja todas las fichas en el tablero
        for (let i = 0; i < fichasEnTablero.length; i++) {
            fichasEnTablero[i].dibujar();
        }
    }
}

//previene que seleccione y pueda mover html 
document.addEventListener('dragstart', function (event) {
    event.preventDefault();
});


//termina el arrastre
function terminarArrastre(event) {
    if (arrastro) {
        // Calcula en qué columna del tablero se soltó la ficha
        let columna = Math.floor((fichaClikeada.getPosicionX() - tableroX) / 45);

        // Verifica si la ficha se soltó dentro de los límites del tablero
        if (columna >= 0 && columna < tablero.getCantidadX() && fichaClikeada.getPosicionY() < tableroY) {

            // Busca el casillero más bajo vacío en esa columna
            let fila;
            for (fila = JuegoGeneral.matriz.length - 1; fila >= 0; fila--) {
                if (!JuegoGeneral.matriz[fila][columna]) {
                    break;
                }
            }

            // Si encontró un casillero vacío, coloca la ficha allí
            if (fila >= 0) {
                JuegoGeneral.matriz[fila][columna] = fichaClikeada
                // Actualiza la posición de la ficha para que coincida con el centro del círculo en el casillero
                let centroCasilleroX = columna * 45 + tableroX + 22.5; // Añade la mitad del tamaño del casillero a la posición X
                let centroCasilleroY = fila * 45 + tableroY + 22.5; // Añade la mitad del tamaño del casillero a la posición Y
                fichaClikeada.mover(centroCasilleroX, centroCasilleroY);

                // // Anima la caída de la ficha
                // animarFicha(fichaClikeada, centroCasilleroX, centroCasilleroY, 9000);


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
            } else {
                // Si no se encontró un casillero vacío, mueve la ficha de vuelta a su posición original
                fichaClikeada.mover(fichaClikeada.posicionOriginal.x, fichaClikeada.posicionOriginal.y);
            }

        } else {
            // Si la ficha se soltó fuera de los límites del tablero, mueve la ficha de vuelta a su posición original
            fichaClikeada.mover(fichaClikeada.posicionOriginal.x, fichaClikeada.posicionOriginal.y);
        }

        // Redibuja el tablero y todas las fichas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
        dibujarTablero();

        // Redibuja todas las fichas en el tablero
        for (let i = 0; i < fichasEnTablero.length; i++) {
            fichasEnTablero[i].dibujar();
        }
    }

    // Verifica si el jugador ha ganado
    if (JuegoGeneral && JuegoGeneral.verificarGanador(fichaClikeada)) {
        // Muestra el mensaje de ganador
        let fichaGanadora = document.getElementById('ficha-ganadora');
        fichaGanadora.src = fichaClikeada.img.src; // Actualiza la imagen de la ficha ganadora
        mensajeGanador.classList.remove("ocultar")
        countdown.classList.add("ocultar")
        let textoGanador = mensajeGanador.querySelector('p');
        textoGanador.textContent = `¡El ${fichaClikeada.idJugador} ha ganado!`; // Actualiza el texto del mensaje de ganador
        pausa.disabled = true;

        // Deshabilita el movimiento de fichas
        terminarEventos();
        pausar()
    } else {
        dibujarGrupos();
    }

    arrastro = false;
}

let mensajeGanador = document.getElementById('mensaje-ganador');

//dibuja los grupo de fichas
function dibujarGrupos() {
    if (grupoFichasJugador1 && grupoFichasJugador2) {
        grupoFichasJugador1.dibujarGrupo();
        grupoFichasJugador2.dibujarGrupo();
        if (!JuegoGeneral.verificarGanador()) {
            // Si el juego no ha terminado, dibuja los nombres de los jugadores
            grupoFichasJugador1.dibujarNombre(jugador1.getTurno());
            grupoFichasJugador2.dibujarNombre(jugador2.getTurno());
        }
    }

}

//inicia los eventos
function iniciarEventos() {
    document.addEventListener("mousedown", iniciarArrastre); // Evento cuando se presiona el botón del mouse
    document.addEventListener("mouseup", terminarArrastre); // Evento cuando se suelta el botón del mouse
    document.addEventListener("mousemove", arrastre); // Evento cuando se mueve el mouse
}

//termina los eventos
function terminarEventos() {
    // Deshabilita el movimiento de fichas
    document.removeEventListener("mousedown", iniciarArrastre);
    document.removeEventListener("mouseup", terminarArrastre);
    document.removeEventListener("mousemove", arrastre);
}

//cambia el cursor a pointer
document.addEventListener("mousemove", function (event) {
    // Verifica si los jugadores existen
    if (!jugador1 || !jugador2) {
        return;
    }
    // Verifica si alguien ha ganado el juego
    if (JuegoGeneral && JuegoGeneral.verificarGanador(fichaClikeada)) {
        canvas.style.cursor = 'default';
        return;
    }

    let pos = obtenerMousePosicion(event); // Obtiene la posición actual del mouse
    let radioCirculo = 20;
    let fichaEncontrada = false;

    // Verifica si el mouse está sobre una ficha del jugador actual
    let fichasJugadorActual;
    if (jugador1.getTurno()) {
        fichasJugadorActual = jugador1.getFichas().getFichas();
    } else {
        fichasJugadorActual = jugador2.getFichas().getFichas();
    }

    for (let ficha of fichasJugadorActual) {
        let fichaX = ficha.getPosicionX();
        let fichaY = ficha.getPosicionY();
        let distancia = Math.sqrt(Math.pow(pos.x - fichaX, 2) + Math.pow(pos.y - fichaY, 2)); // Calcula la distancia entre la posición del mouse y el centro del círculo
        if (distancia < radioCirculo) { // Si la distancia es menor que el radio del círculo, entonces el mouse está dentro del círculo
            fichaEncontrada = true;
            break;
        }
    }

    // Cambia el estilo del cursor dependiendo de si el mouse está sobre una ficha o no
    if (fichaEncontrada) {
        canvas.style.cursor = 'pointer';
    } else {
        canvas.style.cursor = 'default';
    }
});



//hace la animacionde caida pero no nos salio bien
// function animarFicha(ficha, posicionFinalX, posicionFinalY, duracion) {
//     let posicionInicialX = ficha.getPosicionX();
//     let posicionInicialY = ficha.getPosicionY();
//     let distanciaX = posicionFinalX - posicionInicialX;
//     let distanciaY = posicionFinalY - posicionInicialY;
//     let inicio = null;

//     function paso(timestamp) {
//         if (!inicio) inicio = timestamp;
//         let progreso = Math.min((timestamp - inicio) / duracion, 10); // Asegura que el progreso no exceda 1

//         // Actualiza la posición X y Y de la ficha basándote en el progreso de la animación
//         ficha.mover(posicionInicialX + distanciaX * progreso, posicionInicialY + distanciaY * progreso);

//         // Redibuja el tablero y todas las fichas
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas

//         // Primero dibuja la ficha que está cayendo
//         ficha.dibujar();

//         // Luego dibuja el resto de las cosas
//         dibujarGrupos();
//         dibujarTablero();
//         for (let i = 0; i < fichasEnTablero.length; i++) {
//             // Solo dibuja la ficha si no es la que está cayendo
//             if (fichasEnTablero[i] !== ficha) {
//                 fichasEnTablero[i].dibujar();
//             }
//         }

//         // Finalmente, dibuja los círculos del tablero
//         for (let i = 0; i < this.cantidadX; i++) {
//             for (let j = 0; j < this.cantidadY; j++) {
//                 let centerX = this.posX + Casillero / 2;
//                 let centerY = this.posY + Casillero / 2;

//                 // Crea un círculo en el centro del cuadrado
//                 this.ctx.beginPath();
//                 this.ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);

//                 // Aplica el color de relleno
//                 this.ctx.fillStyle = '#E2E2FF';
//                 this.ctx.fill();

//                 // Establece el color y el ancho del borde
//                 this.ctx.strokeStyle = '#000000';
//                 this.ctx.lineWidth = 1;

//                 // Dibuja el borde
//                 this.ctx.stroke();

//                 this.ctx.closePath();

//                 this.posY += Casillero;
//             }
//             this.posY = posicionInicialY;
//             this.posX += Casillero;
//         }



//         // Si la animación no ha terminado, solicita el siguiente cuadro
//         if (progreso < 1) {
//             requestAnimationFrame(paso);
//         }
//     }




//     // Inicia la animación
//     requestAnimationFrame(paso);
// }
