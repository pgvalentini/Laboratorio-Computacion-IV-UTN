"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculo = void 0;
class vehiculo {
    constructor(patente, marca, modelos) {
        this.hojaRuta = new Array();
        this.patente = patente;
        this.marca = marca;
        this.modelos = modelos;
    }
    setPatente(patente) {
        this.patente = patente;
    }
    getPatente() {
        return this.patente;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getMarca() {
        return this.marca;
    }
    setModelos(modelos) {
        this.modelos = modelos;
    }
    getModelos() {
        return this.modelos;
    }
    setHojaRuta(hojaRuta) {
        this.hojaRuta = hojaRuta;
    }
    getHojaRuta() {
        return this.hojaRuta;
    }
    calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta) {
        let kmTotal = 0;
        for (let hRuta of this.getHojaRuta()) {
            if (hRuta.getFecha().getTime() >= fechaDesde.getTime() && hRuta.getFecha().getTime() <= fechaHasta.getTime()) {
                for (let det of this.getHojaRuta()) {
                    kmTotal += det.calcularTotalKilometros();
                }
            }
        }
        return kmTotal;
    }
}
exports.vehiculo = vehiculo;
