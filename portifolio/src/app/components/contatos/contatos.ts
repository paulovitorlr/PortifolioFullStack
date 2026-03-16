import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
import { Navbarmobile } from '../navbarmobile/navbarmobile';
@Component({
  selector: 'app-contatos',
  imports: [NavBar, Footer,Navbarmobile],
  templateUrl: './contatos.html',
  styleUrl: './contatos.scss',
})
export class Contato {

}
