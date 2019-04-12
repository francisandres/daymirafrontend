import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListarCategoriasComponent } from './categorias/listar-categorias.component';
import { CriarCategoriaComponent } from './categorias/criar-categoria.component';
import { CriarFuncionarioComponent } from './funcionarios/criar/criar-funcionario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PrincipalComponent, children: [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    {path: 'listar', component: ListarCategoriasComponent},
    {path: 'criar', component: CriarCategoriaComponent}

  ]},

  {path: 'funcionarios', component: CriarFuncionarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
