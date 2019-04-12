import { Component, OnInit } from '@angular/core';
import { Categoria } from './Categoria';
import { CategoriasService } from '../servico/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent implements OnInit {
  categoria: Categoria;

  constructor(private catser: CategoriasService, private router: Router) { }

  ngOnInit() {
    this.categoria = new Categoria();
  }

  salvar() {


     this.catser.adicionarCategoria(this.categoria).subscribe(
      (data: Categoria) => {this.router.navigate(['/home/listar']);


    }, (err: any) => console.log(err)
    );


  }

  cancelar() {
    this.router.navigate(['/home/listar']);


  }

}
