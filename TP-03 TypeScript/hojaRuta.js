"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hojaRuta = void 0;
class hojaRuta {
    constructor(fecha, numero) {
        this.detalle = new Array();
        this.fecha = fecha;
        this.numero = numero;
    }
    setfecha(fecha) {
        this.fecha = fecha;
    }
    getFecha() {
        return this.fecha;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
    setDetalle(detalle) {
        this.detalle = detalle;
    }
    getDetalle() {
        return this.detalle;
    }
    calcularTotalKilometros() {
        let totalKm = 0;
        for (let det of this.getDetalle()) {
            totalKm += det.getKmRegreso() - det.getKmSalida();
        }
        return totalKm;
    }
}
exports.hojaRuta = hojaRuta;
