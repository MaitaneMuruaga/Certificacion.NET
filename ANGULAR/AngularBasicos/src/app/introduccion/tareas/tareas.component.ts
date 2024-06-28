import { Component } from '@angular/core';
import { ITarea } from 'src/app/interfaces/tareas.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  //Actividad. Sobre un conjunto de tareas a administrar con una descripción y un nombre, hacer una interface 
  //y un mantenimiento de tareas como el de los amigos

  misTareas: ITarea[] = [
    {
      descripcion: 'Comer',
      realizada: true
    },
    {
      descripcion: 'Viajar',
      realizada: false
    },
    {
      descripcion: 'Conducir',
      realizada: true
    }
  ];

  descripcion: string = '';
  realizada = false; 

  agregarTarea() {
    const nuevaTarea: ITarea = {
      descripcion: this.descripcion, 
      realizada: this.realizada,
    };
    this.misTareas.push(nuevaTarea);
    this.descripcion = '';
    this.realizada = false;
  }

  eliminarTarea(posicion: number) {
    this.misTareas.splice(posicion, 1);
  }

  cambiarEstadoTarea(posicion: number) {
    this.misTareas[posicion].realizada = !this.misTareas[posicion].realizada;
  }
}
