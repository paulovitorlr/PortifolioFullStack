import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarmobile',
  imports: [],
  templateUrl: './navbarmobile.html',
  styleUrl: './navbarmobile.scss',
})
export class Navbarmobile {

  menuAberto = false;

toggleMenu() {
  this.menuAberto = !this.menuAberto;
}
}
