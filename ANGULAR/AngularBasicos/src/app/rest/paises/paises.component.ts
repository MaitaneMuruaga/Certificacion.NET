import { Component } from '@angular/core';
import { IPais } from 'src/app/interfaces/pais.interface';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  continenteInput: string = '';
  paises: IPais[]= [];
  mostrarError = false;

  constructor(private paisesService: PaisesService) {}

  getPaises() {
    this.paisesService.getPaises(this.continenteInput).subscribe({
      next: (data: IPais[]) => {
        console.log(data);
        this.paises = data;
        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true),
      complete: () => console.log('ok')
    });
  }
}
