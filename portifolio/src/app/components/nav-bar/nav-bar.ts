import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule,
      RouterModule
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
    prefix = "🟦 ";
    name = "Paulo Vitor";
    suffix = " / DESENVOLVEDOR WEB";

    navegation = [
      { name: 'SOBRE', link: '/home' },
      { name: 'CURRÍCULO', link: '/curriculo' },
      { name: 'PROJETOS', link: '/projetos' },
      { name: 'CONTATO', link: '/contato' }
  ];
} 
