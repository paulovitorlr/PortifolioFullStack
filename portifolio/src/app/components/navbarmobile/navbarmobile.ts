import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbarmobile',
  imports: [RouterLink],
  templateUrl: './navbarmobile.html',
  styleUrl: './navbarmobile.scss',
})
export class Navbarmobile {

  menuAberto = false;

toggleMenu() {
  this.menuAberto = !this.menuAberto;
}
}
