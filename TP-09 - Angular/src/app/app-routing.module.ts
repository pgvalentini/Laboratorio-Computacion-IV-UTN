import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'donde-estamos', component: DondeEstamosComponent},
  {path: 'productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
