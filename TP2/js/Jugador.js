class Jugador {
    constructor(grupoFichas) {
        this.grupoFichas = grupoFichas
        this.turno = false;
    }

    setTurno(turno) {
        this.turno = turno;
    }

    getTurno() {
        return this.turno;
    }

    tengoFichas() {
        if (this.grupoFichas.getFichas().length > 0) {
            return true;
        }
        return false;
    }

    getFichas() {
        return this.grupoFichas;
    }
}