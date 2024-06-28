import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';
import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './paises.component';



@NgModule({
  declarations: [
    ContenedorComponent,
    ConsultaPaisesComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule, 
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
