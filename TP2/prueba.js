"use strict"

// Inicialización de variables
let canvas = document.getElementById('canvas') // Obtiene el elemento canvas del HTML
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext('2d') // Obtiene el contexto de dibujo 2D del canvas
let canvasWidth = canvas.width // Ancho del canvas
let canvasHeight = canvas.height // Alto del canvas
let arrastro = false; // Variable para saber si se está arrastrando el círculo

// Posición inicial del círculo
let circuloX = 200;
let circuloY = 200;
let radioCirculo = 20;

// Dibuja un círculo en la posición actual
function dibujarCirculo() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Limpia el canvas
    ctx.beginPath(); // Comienza un nuevo camino de dibujo
    ctx.arc(circuloX, circuloY, radioCirculo, 0, 2 * Math.PI); // Dibuja un círculo en la posición actual
    ctx.fillStyle = '#E2E2FF'; // Establece el color de relleno del círculo
    ctx.fill(); // Rellena el círculo con el color establecido
    ctx.strokeStyle = '#000000'; // Establece el color del borde del círculo
    ctx.lineWidth = 1; // Establece el ancho del borde del círculo
    ctx.stroke(); // Dibuja el borde del círculo
    ctx.closePath(); // Cierra el camino de dibujo
}

dibujarCirculo(); // Dibuja el círculo inicial

// Manejo de eventos del mouse
window.addEventListener("load", () => {
    document.addEventListener("mousedown", iniciarArrastre); // Evento cuando se presiona el botón del mouse
    document.addEventListener("mouseup", terminarArrastre); // Evento cuando se suelta el botón del mouse
    document.addEventListener("mousemove", arrastre); // Evento cuando se mueve el mouse
});

function iniciarArrastre(event) {
    let pos = obtenerMousePosicion(event); // Obtiene la posición actual del mouse
    let distancia = Math.sqrt(Math.pow(pos.x - circuloX, 2) + Math.pow(pos.y - circuloY, 2)); // Calcula la distancia entre la posición del mouse y el centro del círculo
    if (distancia < radioCirculo) { // Si la distancia es menor que el radio del círculo, entonces el mouse está dentro del círculo
        arrastro = true; // Se inicia el arrastre del círculo
    }
}

function obtenerMousePosicion(event) {
    return {
        x: Math.round(event.clientX - canvas.offsetLeft), // Calcula la posición x del mouse relativa al canvas
        y: Math.round(event.clientY - canvas.offsetTop) // Calcula la posición y del mouse relativa al canvas
    }
}

function terminarArrastre(event) {
    arrastro = false; // Se termina el arrastre del círculo
}

function arrastre(event) {
    if (!arrastro) return; // Si no se está arrastrando el círculo, no hace nada

    let pos = obtenerMousePosicion(event); // Obtiene la posición actual del mouse
    if (pos.x > 0 && pos.x < canvasWidth && pos.y > 0 && pos.y < canvasHeight) {
        circuloX = pos.x; // Actualiza la posición x del círculo a la posición x del mouse
        circuloY = pos.y; // Actualiza la posición y del círculo a la posición y del mouse
        dibujarCirculo(); // Dibuja nuevamente el círculo en la nueva posición
    }
}

// Cambia el cursor a un puntero cuando pasa por encima del círculo
canvas.addEventListener('mousemove', function (e) {
    let pos = obtenerMousePosicion(e); // Obtiene la posición actual del mouse
    // Calcula la distancia entre la posición del mouse y el centro del círculo
    let distancia = Math.sqrt(Math.pow(pos.x - circuloX, 2) + Math.pow(pos.y - circuloY, 2));
    // Si la distancia es menor que el radio del círculo, entonces el mouse está dentro del círculo
    if (distancia < radioCirculo) {
        canvas.style.cursor = 'pointer'; // Cambia el cursor a un puntero
    } else {
        canvas.style.cursor = 'default'; // Cambia el cursor a su estado predeterminado
    }
});
