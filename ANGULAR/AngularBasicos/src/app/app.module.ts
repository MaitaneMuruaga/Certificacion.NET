import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Cambiar el locale de la app. Cambiamos el idioma de la aplicación a nivel global
//Importar los idiomas deseados (por lo general será solo el castellano (es))
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
//Ahora los registramos
import { registerLocaleData } from '@angular/common';


import { AppComponent } from './app.component';
import { BindingComponent } from './introduccion/binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivasComponent } from './introduccion/directivas/directivas.component';
import { ActividadNgForComponent } from './introduccion/actividad-ng-for/actividad-ng-for.component';
import { AmigosComponent } from './introduccion/amigos/amigos.component';
import { TareasComponent } from './introduccion/tareas/tareas.component';
import { FormularioUsuariosComponent } from './formularios/formulario-usuarios/formulario-usuarios.component';
import { FormularioClienteComponent } from './formularios/formulario-cliente/formulario-cliente.component';
import { FormularioUsuariosMejoradoComponent } from './formularios/formulario-usuarios-mejorado/formulario-usuarios-mejorado.component';
import { FormularioReactivoComponent } from './formularios/formulario-reactivo/formulario-reactivo.component';
import { AngularPipesComponent } from './pipes/angular-pipes/angular-pipes.component';
import { PipesPersonalizadosComponent } from './pipes/pipes-personalizados/pipes-personalizados.component';
import { AlmacenamientoArchivosPipe } from './pipes/almacenamiento-archivos.pipe';
import { AlmacenamientoArchivosMultiplePipe } from './pipes/almacenamiento-archivos-multiple.pipe';
import { DistanciasPipe } from './pipes/distancias.pipe';
import { RecetasComponent } from './rest/recetas/recetas.component';
import { ComisionesPipe } from './pipes/comisiones.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaisesComponent } from './rest/paises/paises.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { IGifComponent } from './rest/actividad/actividad.component';


//Registrar los idiomas importados arriba
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivasComponent,
    ActividadNgForComponent,
    AmigosComponent,
    TareasComponent,
    FormularioUsuariosComponent,
    FormularioClienteComponent,
    FormularioUsuariosMejoradoComponent,
    AngularPipesComponent,
    PipesPersonalizadosComponent,
    AlmacenamientoArchivosPipe,
    AlmacenamientoArchivosMultiplePipe,
    DistanciasPipe,
    ComisionesPipe,
    RecetasComponent,
    PaisesComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    IGifComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  //Configuramos el idioma por defecto de la app
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
