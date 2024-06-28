import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecetasModule } from '../recetas/recetas.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent, 
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
