import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'almacenamientoArchivosMultiple'
})
export class AlmacenamientoArchivosMultiplePipe implements PipeTransform {
  transform(bytes: number, unidad: string): number {
    switch (unidad) {
      case 'Kb':
        return bytes / 1024;
      case 'Mb':
        return bytes / 1024 / 1024;
      case 'Gb':
        return bytes / 1024 / 1024 / 1024;
      case 'Tb':
        return bytes / 1024 / 1024 / 1024 / 1024;
      default:
        return bytes;
    }
  }
}


