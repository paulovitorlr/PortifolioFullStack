import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Projeto{
  id: number;
  nome: string;
  descricao: string;
  funcao: string;
  ano: number;
  imagemUrl: string;
  ativo: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {

  private API_URL = 'https://localhost:7232/projetos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.API_URL);
  }

  criar(projeto: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(this.API_URL, projeto);
  }

  atualizar(id: number, projeto: Projeto): Observable<Projeto> {
    return this.http.put<Projeto>(`${this.API_URL}/${id}`, projeto);
  }

  remover(id: number){
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}