verificarGanador(jugador) {
    let fichas = jugador.getFichas().getFichas();
    for (let i = 0; i < this.matriz.length; i++) {
        for (let j = 0; j < this.matriz[i].length; j++) {
            if (fichas.includes(this.matriz[i][j])) {
                // Comprueba horizontalmente
                if (j <= this.matriz[i].length - 4 &&
                    fichas.includes(this.matriz[i][j + 1]) &&
                    fichas.includes(this.matriz[i][j + 2]) &&
                    fichas.includes(this.matriz[i][j + 3])) {
                    return true;
                }
                // Comprueba verticalmente
                if (i <= this.matriz.length - 4 &&
                    fichas.includes(this.matriz[i + 1][j]) &&
                    fichas.includes(this.matriz[i + 2][j]) &&
                    fichas.includes(this.matriz[i + 3][j])) {
                    return true;
                }
                // Comprueba diagonalmente hacia abajo
                if (i <= this.matriz.length - 4 && j <= this.matriz[i].length - 4 &&
                    fichas.includes(this.matriz[i + 1][j + 1]) &&
                    fichas.includes(this.matriz[i + 2][j + 2]) &&
                    fichas.includes(this.matriz[i + 3][j + 3])) {
                    return true;
                }
                // Comprueba diagonalmente hacia arriba
                if (i >= 3 && j <= this.matriz[i].length - 4 &&
                    fichas.includes(this.matriz[i - 1][j + 1]) &&
                    fichas.includes(this.matriz[i - 2][j + 2]) &&
                    fichas.includes(this.matriz[i - 3][j + 3])) {
                    return true;
                }
            }
        }
    }
    return false;
}



if (JuegoGeneral) {
    if (JuegoGeneral.verificarGanador(jugador1)) {
        console.log("¡El Jugador 1 ha ganado!");
    } else if (JuegoGeneral.verificarGanador(jugador2)) {
        console.log("¡El Jugador 2 ha ganado!");
    }
}