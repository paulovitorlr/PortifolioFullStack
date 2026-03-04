import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import {map} from 'rxjs'


import { ProjetoTemplate } from '../models/projeto-template.model';

export interface Projeto{
  id: number;
  nome: string;
  descricao: string;
  funcao: string;
  imagemUrl: string;
  ativo: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {

  private API_URL = 'https://localhost:7232/projetos'
  
  constructor(private http: HttpClient) {}

  //Crud API

  listar(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.API_URL);
  }

  criar(projeto: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(this.API_URL, projeto);
  }

  atualizar(id: number, projeto: Projeto): Observable<Projeto> {
    return this.http.put<Projeto>(`${this.API_URL}/${id}`, projeto);
  }

  remover (id: number){
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  //Template

  /*listarFormatado(): Observable<ProjetoTemplate[]> {
    return this.listar().pipe(
      map(projetos =>
        projetos
          .filter(p => p.ativo)
          .map(p => ({
            titulo: p.Nome,
            texto: p.Descricao,
            imagem: p.imagemUrl,
            cargo: p.Funcao,
        }))
      )
    )
  }*/

    listarFormatado(): Observable<ProjetoTemplate[]> {
  return this.listar().pipe(
    map(projetos =>
      projetos
        .filter(p => p.ativo)
        .map(p => ({
          titulo: p.nome,
          cargo: p.funcao,
          texto: p.descricao,
          imagem: p.imagemUrl
        }))
    )
  );
}
}
