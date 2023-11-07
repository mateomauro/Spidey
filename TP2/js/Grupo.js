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

        // // Dibuja el texto debajo del grupo de fichas
        // this.fichas[0].ctx.font = '20px Arial';
        // this.fichas[0].ctx.fillStyle = 'black';
        // this.fichas[0].ctx.fillText(this.nombre, this.fichas[0].posX - 13, this.fichas[0].posY + 50);
    }

    dibujarNombre() {
        // Dibuja el texto debajo del grupo de fichas
        this.fichas[0].ctx.font = '20px Arial';
        this.fichas[0].ctx.fillStyle = 'black';
        // Calcula la posición del nombre basándote en la posición del grupo de fichas
        let nombrePosY = 460;
        this.fichas[0].ctx.fillText(this.nombre, this.nombrePosX, nombrePosY);
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
