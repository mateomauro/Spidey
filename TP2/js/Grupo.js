class Grupo {
    constructor(cantidadFichas, ficha, jugador) {
        this.fichas = [];
        this.nombre = jugador;
        let j = 0;
        for (let i = 0; i < cantidadFichas; i++) {
            let mitad = Math.floor(cantidadFichas / 2);
            if (i <= mitad) {
                // Crea una nueva ficha para cada posición en el grupo
                let nuevaFicha = new Ficha(ficha.posX, ficha.posY - i * 10, ficha.radius, ficha.fill, ficha.ctx, ficha.borde, ficha.img, ficha.idJugador);
                this.fichas.push(nuevaFicha);
            }
            else {
                j++;
                // Crea una nueva ficha para cada posición en el grupo
                let nuevaFicha = new Ficha(ficha.posX + (ficha.radius * 2) + 15, ficha.posY - j * 10, ficha.radius, ficha.fill, ficha.ctx, ficha.borde, ficha.img, ficha.idJugador);
                this.fichas.push(nuevaFicha);
            }
        }
        this.nombrePosX = ficha.posX - 13; // Almacena la posición original de la ficha en la posición [0]
    }

    dibujarGrupo() {
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].dibujar();
        }
    }

    dibujarNombre(turno) {
        // Verifica si el grupo de fichas está vacío
        if (this.fichas.length > 0) {
            // Dibuja el texto debajo del grupo de fichas
            this.fichas[0].ctx.font = '20px Arial';
            this.fichas[0].ctx.fillStyle = 'black';
            // Calcula la posición del nombre basándote en la posición del grupo de fichas
            let nombrePosY = 460;
            this.fichas[0].ctx.fillText(this.nombre, this.nombrePosX, nombrePosY);

            // Si es el turno del jugador y el juego no ha terminado, dibuja un cuadrado alrededor del nombre
            if (turno) {
                let padding = 10; // Define el espacio entre el texto y el borde del cuadrado
                let anchoTexto = this.fichas[0].ctx.measureText(this.nombre).width; // Obtiene el ancho del texto
                let altoTexto = parseInt(this.fichas[0].ctx.font, 10); // Obtiene el alto del texto (tamaño de la fuente)
                this.fichas[0].ctx.strokeStyle = 'red'; // El color del cuadrado será rojo si es el turno del jugador
                this.fichas[0].ctx.strokeRect(this.nombrePosX - padding, nombrePosY - altoTexto - padding, anchoTexto + 2 * padding, altoTexto + 2 * padding);
            }
        }
    }





    reversaFichas() {
        this.fichas.reverse();
    }

    quitarFicha(ficha) {
        let index = this.fichas.indexOf(ficha);
        if (index > -1) {
            this.fichas.splice(index, 1);
            this.cantidadFichas = this.cantidadFichas - 1;
        }
    }


    getFichas() {
        return this.fichas;
    }
}
