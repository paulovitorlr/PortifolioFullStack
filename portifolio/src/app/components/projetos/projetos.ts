
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
import { CurriculoDirective } from '../../directives/curriculo.directive';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosService } from '../../services/projetos';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, NavBar, Footer, CurriculoDirective],
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.scss']
})
export class Projetos implements OnInit {

  projetos: any[] = [];

  constructor(private projetosService: ProjetosService) {}

  ngOnInit(): void {
    this.projetosService.listar().subscribe({
      next: (res) => {
        console.log("DADOS RECEBIDOS:", res);
        this.projetos = res;
      },
      error: (err) => {
        console.error("ERRO:", err);
      }
    });
  }
}
