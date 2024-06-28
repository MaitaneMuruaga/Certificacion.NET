import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { Error404Component } from './error404/error404.component';
import { FormsModule } from '@angular/forms';
import { TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';




@NgModule({
  declarations: [
    HomeComponent,
    PaisesComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule, 
    InputTextModule
  ]
})
export class PaginasModule { }
