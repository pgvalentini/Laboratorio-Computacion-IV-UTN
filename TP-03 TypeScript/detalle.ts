import { hojaRuta } from './hojaRuta';

export class detalle{
    private kmSalida: number;
    private kmRegreso: number;
    private horaRegreso: number;
    private horaSalida: number;
    private minutoSalida: number;
    private minutoRegreso: number;


    constructor(kmSalida:number,kmRegreso:number,horaRegreso:number,horaSalida:number,minutoSalida:number,minutoRegreso:number){
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaRegreso =horaRegreso;
        this.horaSalida =horaSalida;
        this.minutoSalida =minutoSalida;
        this.minutoRegreso = minutoRegreso;
    }

    public setKmSalida(kmSalida:number){
        this.kmSalida = kmSalida;
    }
    public getKmSalida(){
        return this.kmSalida;
    }

    public setKmRegreso(kmRegreso:number){
        this.kmRegreso = kmRegreso;
    }

    public getKmRegreso(){
        return this.kmRegreso;
    }

    public setHoraRegreso(horaRegreso:number){
        this.horaRegreso = horaRegreso;
    }

    public getHoraRegreso(){
        return this.horaRegreso;
    }

    public setHoraSalida(horaSalida:number){
        this.horaSalida = horaSalida;
    }

    public getHoraSalida(){
        return this.horaSalida;
    }

    public setMinutoSalida(minutoSalida: number){
        this.minutoSalida = minutoSalida;
    }

    public getMinutoSalida(){
        return this.minutoSalida;
    }

    public setMinutoRegreso(minutoRegreso: number){
        this.minutoRegreso = minutoRegreso;
    }

    public getMinutoRegreso() {
        return this.minutoRegreso;
    }

}

