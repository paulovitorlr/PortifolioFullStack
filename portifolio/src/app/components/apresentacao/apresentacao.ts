import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//diretivas
import { ApresentacaoDirective } from '../../directives/apresentacao.directive';


@Component({
  selector: 'app-apresentacao',
  imports: [
    ApresentacaoDirective,
    CommonModule
    
  ],
  templateUrl: './apresentacao.html',
  styleUrl: './apresentacao.scss',
})
export class Apresentacao {
  nome = "Paulo Vitor";
  profissao = "DESENVOLVEDOR WEB"
}
