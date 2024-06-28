import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BindingComponent } from '../introduccion/binding/binding.component';
import { DirectivasComponent } from '../introduccion/directivas/directivas.component';
import { AngularPipesComponent } from '../pipes/angular-pipes/angular-pipes.component';
import { PipesPersonalizadosComponent } from '../pipes/pipes-personalizados/pipes-personalizados.component';
import { ActividadNgForComponent } from '../introduccion/actividad-ng-for/actividad-ng-for.component';
import { AmigosComponent } from '../introduccion/amigos/amigos.component';
import { TareasComponent } from '../introduccion/tareas/tareas.component';
import { FormularioUsuariosComponent } from '../formularios/formulario-usuarios/formulario-usuarios.component';
import { FormularioClienteComponent } from '../formularios/formulario-cliente/formulario-cliente.component';
import { FormularioUsuariosMejoradoComponent } from '../formularios/formulario-usuarios-mejorado/formulario-usuarios-mejorado.component';
import { FormularioReactivoComponent } from '../formularios/formulario-reactivo/formulario-reactivo.component';
import { RecetasComponent } from '../rest/recetas/recetas.component';
import { PaisesComponent } from '../rest/paises/paises.component';
import { NotFoundComponent } from '../not-found/not-found.component';

  
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'pipes-angular', component: AngularPipesComponent },
  { path: 'pipes-personalizados', component: PipesPersonalizadosComponent },
  { path: 'actividad-ng-for-component', component: ActividadNgForComponent },
  { path: 'amigos-component', component: AmigosComponent },
  { path: 'tareas-component', component: TareasComponent }, 
  { path: 'formulario-usuarios-component', component: FormularioUsuariosComponent }, 
  { path: 'formulario-cliente-component', component: FormularioClienteComponent }, 
  { path: 'formulario-usuarios-mejorados-component', component: FormularioUsuariosMejoradoComponent },
  { path: 'formulario-reactivo', component: FormularioReactivoComponent},
  { path: 'recetas-component', component: RecetasComponent },
  { path: 'paises-component', component: PaisesComponent}, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
