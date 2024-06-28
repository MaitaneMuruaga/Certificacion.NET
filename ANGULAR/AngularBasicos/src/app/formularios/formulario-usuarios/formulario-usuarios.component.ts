import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {

  @ViewChild('formulario') miFormulario!: NgForm;
  
  usuario: IUsuario = {
    nombre: '',
    rol: '',
    edad: 0,
    genero: ''
  };

  ngOnInit() {
  
  }

  guardar() {
    console.log(this.usuario);
    this.usuario = {
      nombre: '',
      rol: '',
      edad: 0,
      genero: ''
    };
  }
}
