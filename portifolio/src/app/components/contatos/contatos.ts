import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';
import { Navbarmobile } from '../navbarmobile/navbarmobile';
import {HttpClient} from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contatos',
  imports: [NavBar, Footer,Navbarmobile, FormsModule],
  templateUrl: './contatos.html',
  styleUrl: './contatos.scss',
})
export class Contato {

constructor(private http: HttpClient) {}

form = {
  nome: '',
  sobrenome: '',
  email: '',
  assunto: '',
  mensagem: ''
};

enviarEmail() {
 
  console.log(this.form); // testa primeiro

 this.http.post('https://localhost:7232/projetos/email', this.form)
    .subscribe({
      next: () => {
        alert('Email enviado!');
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao enviar');
      }
    });
}
}
