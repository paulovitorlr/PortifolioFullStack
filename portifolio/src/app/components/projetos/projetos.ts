import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
import { CurriculoDirective } from '../../directives/curriculo.directive';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosService, Projeto } from '../../services/projetos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, NavBar, Footer, CurriculoDirective],
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.scss']
})
export class Projetos {

  tittle = "Projetos";
  projetos$!: Observable<Projeto[]>;

  paginaAtual = 1;
  pageSize = 3;


  constructor(private projetosService: ProjetosService) {
   
    this.carregarProjetos();
  }

  carregarProjetos(){
    this.projetos$ = this.projetosService.listar(
      this.paginaAtual,
      this.pageSize
    );
  }

  proximaPagina(){
    this.paginaAtual++;
    this.carregarProjetos();
  }

  paginaAnterior(){
    if(this.paginaAtual > 1){
      this.paginaAtual--;
      this.carregarProjetos();
    }
  }
}