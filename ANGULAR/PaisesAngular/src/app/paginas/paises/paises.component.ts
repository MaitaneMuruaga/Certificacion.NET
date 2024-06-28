import { Component } from '@angular/core';
import { IPaises } from 'src/app/paises';
import { PaisesService } from 'src/app/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  continenteInput: string = '';
  paises: IPaises[]= [];
  mostrarError = false;
  moneda: string = ' ';
  monedaInput: string = '';

  constructor(private paisesService: PaisesService) {}

  getPaises() {
    this.paisesService.getPaises(this.monedaInput).subscribe({
      next: (data: IPaises[]) => {
        console.log(data);
        this.paises = data;
        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true),
      complete: () => console.log('ok')
    });
  }
}
