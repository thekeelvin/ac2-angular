import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://6729633e6d5fa4901b6cfc1d.mockapi.io/usuario';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUsuario(email: string, senha: string): Observable<any | undefined> {
    return new Observable(observer => {
      this.getUsuarios().subscribe(usuarios => {
        const usuario = usuarios.find(
          u => u.email === email && u.senha === senha
        );
        observer.next(usuario);
        observer.complete();
      });
    });
  }
}
