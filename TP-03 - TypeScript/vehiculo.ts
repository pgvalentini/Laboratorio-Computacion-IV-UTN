import { detalle } from './detalle';
import { hojaRuta } from './hojaRuta';

export class vehiculo{
    private patente: string;
    private marca: string;
    private modelos: string;
    private hojaRuta: Array<hojaRuta> = new Array<hojaRuta>();

    constructor(patente: string, marca: string, modelos: string) {
        this.patente = patente;
        this.marca = marca;
        this.modelos = modelos;
    }

    public setPatente(patente:string){
        this.patente = patente;
    }

    public getPatente() {
        return this.patente;
    }

    public setMarca(marca:string){
        this.marca = marca;
    }

    public getMarca() {
        return this.marca;
    }

    public setModelos(modelos:string){
        this.modelos = modelos;
    }

    public getModelos() {
        return this.modelos;
    }

    public setHojaRuta(hojaRuta: Array<hojaRuta>){
        this.hojaRuta = hojaRuta;
    }

    public getHojaRuta(){
        return this.hojaRuta;
    }

    public calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta:Date): number{
        let kmTotal: number =0;
        for(let hRuta of this.getHojaRuta()){
            if(hRuta.getFecha().getTime() >= fechaDesde.getTime() && hRuta.getFecha().getTime() <= fechaHasta.getTime()){
                for(let det of this.getHojaRuta()){
                    kmTotal += det.calcularTotalKilometros();
                }
            }
        }
        return kmTotal;
    }
}