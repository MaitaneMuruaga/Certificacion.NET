import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RelojComponent } from './reloj/reloj.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RelojComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    NavbarComponent, 
    RelojComponent, 
    FooterComponent
  ]
})
export class SharedModule { }
