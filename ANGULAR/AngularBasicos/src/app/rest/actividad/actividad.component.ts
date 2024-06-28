import { Component } from '@angular/core';
import { IGif } from 'src/app/interfaces/actividad';
import { GifService } from 'src/app/service/actividad.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class IGifComponent {
  data: string ='';
  sticker: IGif []= [];
  mostrarError = false;

  constructor(private gifService: GifService) {}

  getGif() {
    this.gifService.getGif(this.data).subscribe({
      next: (data: IGif[]) => {
        console.log(data);
        this.sticker = data;
        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true),
      complete: () => console.log('ok')
    });
  }
}
