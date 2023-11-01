class Grupo {
    constructor(cantidadFichas, ficha) {
        this.fichas = [];
        for (let i = 0; i < cantidadFichas; i++) {
            // Crea una nueva ficha para cada posición en el grupo
            let nuevaFicha = new Ficha(ficha.posX, ficha.posY - i * 10, ficha.radius, ficha.fill, ficha.ctx, ficha.borde, ficha.img);
            this.fichas.push(nuevaFicha);
        }
    }

    dibujarGrupo() {
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].dibujar();
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
