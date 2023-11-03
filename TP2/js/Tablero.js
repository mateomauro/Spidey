"use strict"

class Tablero {
    constructor(posX, posY, cantidadX, cantidadY, fill, contexto) {
        this.posX = posX;
        this.posY = posY;
        this.cantidadX = cantidadX;
        this.cantidadY = cantidadY;
        this.fill = fill;
        this.ctx = contexto;
        this.rangosX = [];
        for (let i = 0; i <= this.cantidadX; i++) {
            this.rangosX.push([this.posX + i * 45, this.posX + (i + 1) * 45]);
        }
    }

    getCantidadX() {
        return this.cantidadX;
    }

    getCantidadY() {
        return this.cantidadY;
    }

    dibujar() {
        //casillero es el tamaño de cada casillero
        let Casillero = 45;
        //reestablecemos la posicion en el eje Y
        let posicionInicialY = this.posY;

        //recorre las columna
        for (let i = 0; i < this.cantidadX; i++) {
            //recorre toda las filas 
            for (let j = 0; j < this.cantidadY; j++) {
                //dibuja el cuadrado
                this.ctx.beginPath();
                this.ctx.fillStyle = this.fill; // Establece el color de relleno a azul
                this.ctx.fillRect(this.posX, this.posY, 45, 45); // Dibuja un cuadrado relleno

                //le poner borde a los casillero
                // // Establece el color del borde
                // this.ctx.strokeStyle = '#00ff22'; // Cambia esto al color que quieras para el borde
                // // Dibuja el borde
                // this.ctx.strokeRect(this.posX, this.posY, 45, 45);

                // Ajusta la posición y el tamaño de los cuadrados y círculos
                let centerX = this.posX + Casillero / 2;
                let centerY = this.posY + Casillero / 2;

                // Crea un círculo en el centro del cuadrado
                this.ctx.beginPath();
                this.ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);

                // Aplica el color de relleno
                this.ctx.fillStyle = '#E2E2FF';
                this.ctx.fill();

                // Establece el color y el ancho del borde
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1;

                // Dibuja el borde
                this.ctx.stroke();

                this.ctx.closePath();

                //suma el tamaño del casillero para que se dibuje despues mas abajo
                this.posY += Casillero;
            }
            this.posY = posicionInicialY;
            //mala solucion para detectar el borde entre casilleros
            this.posX += Casillero;
        }

        // this.ctx.strokeStyle = '#ff0000'; // Cambia esto al color que quieras para las líneas
        // for (let i = 0; i < this.rangosX.length; i++) {
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(this.rangosX[i][0], 0);
        //     this.ctx.lineTo(this.rangosX[i][0], canvasHeight);
        //     this.ctx.stroke();
        // }
    }


}
