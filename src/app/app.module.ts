import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './navegacao/header/header.component';
import { SidebarComponent } from './navegacao/sidebar/sidebar.component';
import { CriarCategoriaComponent } from './categorias/criar-categoria.component';
import { ListarCategoriasComponent } from './categorias/listar-categorias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CriarFuncionarioComponent } from './funcionarios/criar/criar-funcionario.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PrincipalComponent,
    HeaderComponent,
    SidebarComponent,
    CriarCategoriaComponent,
    ListarCategoriasComponent,
    CriarFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
