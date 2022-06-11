import { Component, OnInit } from '@angular/core';
import { InstrumentosService } from 'src/app/servicios/instrumentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  instrumentosArr:any[] = [];

  constructor(private servicioInstrumento:InstrumentosService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.instrumentosArr = this.servicioInstrumento.getInstrumentos();
    console.log(this.instrumentosArr);
  }

  public verInstrumento(idx:string){
    console.log("ID INSTRUMENTO " + idx);
    this.router.navigate(['/detalleInstrumento', idx])
  }
}
