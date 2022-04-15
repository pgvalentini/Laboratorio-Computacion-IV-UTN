"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestA = void 0;
const detalle_1 = require("./detalle");
const hojaRuta_1 = require("./hojaRuta");
const vehiculo_1 = require("./vehiculo");
class TestA {
    static main() {
        let vehiculo1 = new vehiculo_1.vehiculo("abc123", "vw", "1998");
        let hojaRuta1 = new hojaRuta_1.hojaRuta(new Date("2022/01/01"), 1);
        let hojaRuta2 = new hojaRuta_1.hojaRuta(new Date("2022/03/02"), 2);
        let hojaRuta3 = new hojaRuta_1.hojaRuta(new Date("2022/05/10"), 3);
        let detalle1 = new detalle_1.detalle(120, 1864, 23, 10, 0, 50);
        let detalle2 = new detalle_1.detalle(1864, 2481, 2, 15, 0, 50);
        let detalle3 = new detalle_1.detalle(2481, 3741, 17, 17, 0, 50);
        console.log('Kms recorridos de la primera hoja de ruta: ' +
            vehiculo1.getHojaRuta()[0].calcularTotalKilometros());
        console.log('Total kms recorridos: ' +
            vehiculo1.calcularTotalKilometrosRecorridos(new Date(2022, 1, 1), new Date(2022, 3, 2)));
    }
}
exports.TestA = TestA;
