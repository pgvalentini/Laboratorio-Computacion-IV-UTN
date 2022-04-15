"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detalle = void 0;
class detalle {
    constructor(kmSalida, kmRegreso, horaRegreso, horaSalida, minutoSalida, minutoRegreso) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaRegreso = horaRegreso;
        this.horaSalida = horaSalida;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
    }
    setKmSalida(kmSalida) {
        this.kmSalida = kmSalida;
    }
    getKmSalida() {
        return this.kmSalida;
    }
    setKmRegreso(kmRegreso) {
        this.kmRegreso = kmRegreso;
    }
    getKmRegreso() {
        return this.kmRegreso;
    }
    setHoraRegreso(horaRegreso) {
        this.horaRegreso = horaRegreso;
    }
    getHoraRegreso() {
        return this.horaRegreso;
    }
    setHoraSalida(horaSalida) {
        this.horaSalida = horaSalida;
    }
    getHoraSalida() {
        return this.horaSalida;
    }
    setMinutoSalida(minutoSalida) {
        this.minutoSalida = minutoSalida;
    }
    getMinutoSalida() {
        return this.minutoSalida;
    }
    setMinutoRegreso(minutoRegreso) {
        this.minutoRegreso = minutoRegreso;
    }
    getMinutoRegreso() {
        return this.minutoRegreso;
    }
}
exports.detalle = detalle;
