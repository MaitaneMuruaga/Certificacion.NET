import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../recetas.service';
import { ICategoriasMeal, IMeals } from '../meal.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-consulta-recetas',
  templateUrl: './consulta-recetas.component.html',
  styleUrls: ['./consulta-recetas.component.css']
})
export class ConsultaRecetasComponent implements OnInit {
  categoriaSeleccionada: string = '';
  recetario: IMeals = {
    meals: []
  };
  mostrarError = false;
  categorias: ICategoriasMeal = {
    meals: []
  };

  cols: any[] = [];

  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.cols = [
      { field: 'strMeal', header: 'Título' },
      { field: 'strMealThumb', header: 'Foto' }
    ];
    
    this.recetasService.getCategorias().subscribe({
      next: (data: ICategoriasMeal) => {
        console.log(data);
        this.categorias = data;

        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true)
    });
  }

  getRecetas() {
    this.recetasService.getRecetas(this.categoriaSeleccionada).subscribe({
      next: (data: IMeals) => {
        console.log(data);
        this.recetario = data;

        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true),
      complete: () => console.log('ok')
    });
  }

  clear(table: Table) {
    table.clear();
  }
}


