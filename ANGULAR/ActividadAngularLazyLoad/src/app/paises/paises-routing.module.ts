import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './paises.component';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';
import { ContenedorComponent } from './contenedor/contenedor.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PaisesComponent,
    children: [
      { path: '', redirectTo: '/paises/consulta-paises', pathMatch: 'full' },
      { path: 'consulta-paises', component: ConsultaPaisesComponent },
      {
        path: 'contenedor/:paises',
        component: ContenedorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
