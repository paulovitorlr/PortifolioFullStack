import { Component } from '@angular/core';
//components
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
//diretivas
import { CurriculoDirective } from '../../directives/curriculo.directive';
import { CurriculoCDirective } from '../../directives/curriculoColumn.directive';
@Component({
  selector: 'app-curriculo',
  imports: [NavBar,
    Footer,
    CurriculoDirective,
    CurriculoCDirective
  ],
  templateUrl: './curriculo.html',
  styleUrl: './curriculo.scss',
})
export class Curriculo {
 titulo = "🟦 Currículo";

}
