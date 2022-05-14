import { detalle } from "./detalle"
import { hojaRuta } from "./hojaRuta"
import { vehiculo } from "./vehiculo"

export class TestA {

    public static main(){
        let vehiculo1: vehiculo = new vehiculo("abc123","vw","1998"); 
        let hojaRuta1: hojaRuta = new hojaRuta(new Date("2022/01/01"),1);
        let hojaRuta2: hojaRuta = new hojaRuta(new Date("2022/03/02"),2);
        let hojaRuta3: hojaRuta = new hojaRuta(new Date("2022/05/10"),3);
        let detalle1:detalle = new detalle(120,1864,23,10,0,50);
        let detalle2: detalle = new detalle(1864,2481,2,15,0,50);
        let detalle3: detalle = new detalle(2481,3741,17,17,0,50);

        console.log(
            'Kms recorridos de la primera hoja de ruta: ' + 
            vehiculo1.getHojaRuta()[0].calcularTotalKilometros());
        console.log(
            'Total kms recorridos: ' +
            vehiculo1.calcularTotalKilometrosRecorridos(
                new Date(2022, 1, 1), new Date(2022, 3, 2)));

    }
}