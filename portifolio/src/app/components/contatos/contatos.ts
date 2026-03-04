import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-contatos',
  imports: [NavBar, Footer],
  templateUrl: './contatos.html',
  styleUrl: './contatos.scss',
})
export class Contato {

}
