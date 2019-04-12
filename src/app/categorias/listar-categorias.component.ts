import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../servico/categorias.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {
  categorias: any[];

  constructor(private catser: CategoriasService) { }

  ngOnInit() {
    this.catser.obterCategorias()
    .subscribe(
      res => {this.categorias = res;}
    );
  }

}
