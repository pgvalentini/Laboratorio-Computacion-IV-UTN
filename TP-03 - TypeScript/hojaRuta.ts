import { vehiculo } from './vehiculo';
import { detalle } from './detalle';

export class hojaRuta{
    private fecha: Date;
    private numero: number;
    private detalle:Array<detalle> = new Array<detalle>();

    constructor(fecha: Date, numero: number){
        this.fecha = fecha;
        this.numero = numero;
    }

    public setfecha(fecha:Date){
        this.fecha = fecha;
    }

    public getFecha() {
        return this.fecha;
    }

    public setNumero(numero:number){
        this.numero = numero;
    }

    public getNumero() {
        return this.numero;
    }

    public setDetalle(detalle:Array<detalle>){
        this.detalle = detalle;
    }

    public getDetalle() {
        return this.detalle;
    }

    public calcularTotalKilometros(): number {
        let totalKm: number=0;
        for(let det of this.getDetalle()){
            totalKm += det.getKmRegreso()-det.getKmSalida();
        }
        return totalKm;
    } 
}