import { Injectable } from '@angular/core';
import  *  as  data  from  'src/assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {
  
  instrumentosFile:any  = (data  as  any).default;

  constructor() {
    console.log("Servicio Cargado!!!");
    console.log(this.instrumentosFile);
   }
   
  public getInstrumentos():any[]{
    return this.instrumentosFile.instrumentos;
    console.log(this.instrumentosFile.instrumentos);
  }

  public getPlatoXId(idx:string):any{
      for(let instrumento of this.instrumentosFile.instrumentos){
          if(instrumento.id == idx){
            return instrumento;
          } 
      }
  }

  public buscarInstrumento(termino:string):any[]{
      let instrumentosArr:any[] = [];
      termino = termino.toLowerCase();

      for(let instrumento of this.instrumentosFile.platos){
        let nombre = instrumento.nombre.toLowerCase();
        if(nombre.indexOf(termino) >= 0){
          instrumentosArr.push(instrumento);
        }

      }
      return instrumentosArr;
    }
}
