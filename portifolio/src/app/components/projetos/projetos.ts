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

  projetos$: Observable<Projeto[]>;

  constructor(private projetosService: ProjetosService) {
    debugger
    this.projetos$ = this.projetosService.listar();
  }

}