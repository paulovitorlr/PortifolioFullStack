import { Routes } from '@angular/router';
import { Home } from '../app/components/home/home'
import { Curriculo } from './components/curriculo/curriculo'
import { Projetos } from './components/projetos/projetos';
import { Contato } from './components/contatos/contatos';
export const routes: Routes = [
     {path: 'home', component: Home},
     {path: 'curriculo', component: Curriculo},
     {path: 'projetos', component: Projetos},
     {path: 'contato', component: Contato}
];
