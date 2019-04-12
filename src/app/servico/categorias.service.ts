import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../categorias/Categoria';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {


  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:53057/api/categorias';

  obterCategorias(): Observable<Categoria[]> {

    return this.http.get<Categoria[]>(this.Url);
  }

  adicionarCategoria(categoria: Categoria): Observable<Categoria> {

    return this.http.post<Categoria>(this.Url, categoria, httpOptions);
  }
}
