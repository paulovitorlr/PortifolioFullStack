import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { NavBar } from '../nav-bar/nav-bar';
import { Apresentacao } from '../apresentacao/apresentacao';
import { Footer } from '../footer/footer'
import { Navbarmobile } from '../navbarmobile/navbarmobile';

//directives
import { OlaDirective } from "../../directives/ola.directive";


@Component({
  selector: 'app-home',
  imports: [NavBar,CommonModule,Apresentacao, OlaDirective, Footer,
    Navbarmobile
    
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
