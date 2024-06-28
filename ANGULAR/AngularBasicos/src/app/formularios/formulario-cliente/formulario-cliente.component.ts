import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICliente } from 'src/app/interfaces/cliente-formulario.interface';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit{
  //ACTIVIDAD UNO. Sobre la base de formulario anterior, desarrollar un formulario para
  //dar soporte a un cliente con estas propiedades:
  //Incluir un input para todas las propiedades menos para moroso

  // ACTIVIDAD DOS. Sobre la actividad anterior, mejorar el formulario de acuerdo a lo siguiente
  //La familia del producto será una lista desplegable con los valores: hogar, alimientación y tecnología
  //La propiedad moroso será un checkbox
  //Sacar errores personalizados si:
    //El nombre no se incluye (deberá ser obligatorio)
    //La facturacionAnual es inferior a 0
  @ViewChild('formulario') miFormulario!: NgForm;
  
  categoria = [
    { value: 'house', display: 'Hogar'},
    { value: 'food', display: 'Alimentación'},
    { value: 'tech', display: 'Tecnología'}
  ];

  cliente: ICliente = {
    nombre: '',
    categoria: this.categoria[0].value,
    email: '',
    facturacionAnual: 0,
    localidad: '',
    moroso: false,
    reset: undefined
  }

  ngOnInit() {
  
  }
  
  guardar() {
    console.log(this.cliente);
  }
}
