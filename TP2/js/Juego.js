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
let contenedorVideo = document.querySelector(".contenedor-video");

//cuando le de al boton jugar trae el juego
btnJugar.addEventListener("click", () => {
    btnJugar.classList.add("ocultar");
    juego.classList.remove("ocultar");
    contenedorVideo.classList.add("ocultar");
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


class Juego {
    constructor(tablero, jugador1, jugador2) {
        this.tablero = tablero;
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.matriz = [];
    }

    crearMatriz() {
        let columnas = this.tablero.getCantidadX();
        let filas = this.tablero.getCantidadY();
        // Llena la matriz
        for (let i = 0; i < filas; i++) {
            // Crea una nueva fila (arreglo vacío)
            let fila = [];
            for (let j = 0; j < columnas; j++) {
                // Llena la fila con valores. En este caso, usamos 0.
                fila.push(0);
            }
            // Agrega la fila a la matriz
            this.matriz.push(fila);
        }
    }

    getMatriz() {
        return this.matriz;
    }

    setMatriz(newMatriz) {
        this.matriz = newMatriz;
    }
    verificarGanador(ficha) {
        if (!ficha) {
            return false;
        }

        let matriz = this.getMatriz();
        let jugador = ficha.idJugador;
        let posX = Math.floor((ficha.getPosicionX() - tableroX) / 45);
        let posY = Math.floor((ficha.getPosicionY() - tableroY) / 45);

        // El número de fichas en línea necesarias para ganar se basa en el tamaño del tablero
        let fichasParaGanar = this.tablero.getCantidadX() - 3;

        // Verificar horizontal
        let contador = 0;
        let fichasGanadoras = [];
        for (let x = 0; x < matriz[0].length; x++) {
            if (matriz[posY] && matriz[posY][x] && matriz[posY][x].idJugador === jugador) {
                contador++;
                fichasGanadoras.push(matriz[posY][x]);
                if (contador === fichasParaGanar) {
                    fichasGanadoras.forEach(f => f.resaltar());
                    return true;
                }
            } else {
                contador = 0;
                fichasGanadoras = [];
            }
        }

        // Verificar vertical
        contador = 0;
        fichasGanadoras = [];
        for (let y = 0; y < matriz.length; y++) {
            if (matriz[y] && matriz[y][posX] && matriz[y][posX].idJugador === jugador) {
                contador++;
                fichasGanadoras.push(matriz[y][posX]);
                if (contador === fichasParaGanar) {
                    fichasGanadoras.forEach(f => f.resaltar());
                    return true;
                }
            } else {
                contador = 0;
                fichasGanadoras = [];
            }
        }

        // Verificar diagonal descendente
        contador = 0;
        let colInicio = posX - Math.min(posX, posY);
        let filaInicio = posY - Math.min(posX, posY);
        for (let i = 0; i < matriz.length; i++) {
            if (matriz[filaInicio + i] && matriz[filaInicio + i][colInicio + i] && matriz[filaInicio + i][colInicio + i].idJugador === jugador) {
                contador++;
                fichasGanadoras.push(matriz[filaInicio + i][colInicio + i]);
                if (contador === fichasParaGanar) {
                    fichasGanadoras.forEach(f => f.resaltar());
                    return true;
                }
            } else {
                contador = 0;
                fichasGanadoras = [];
            }
        }

        // Verificar diagonal ascendente
        contador = 0;
        colInicio = posX + Math.min(matriz[0].length - posX - 1, posY);
        filaInicio = posY - Math.min(matriz[0].length - posX - 1, posY);
        for (let i = 0; i < matriz.length; i++) {
            if (matriz[filaInicio + i] && matriz[filaInicio + i][colInicio - i] && matriz[filaInicio + i][colInicio - i].idJugador === jugador) {
                contador++;
                fichasGanadoras.push(matriz[filaInicio + i][colInicio - i]);
                if (contador === fichasParaGanar) {
                    fichasGanadoras.forEach(f => f.resaltar());
                    return true;
                }
            } else {
                contador = 0;
                fichasGanadoras = [];
            }
        }

        return false;
    }
}








