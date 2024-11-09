import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarios: any[] = []; // Lista completa de usuários
  usuariosFiltrados: any[] = []; // Lista de usuários filtrados
  nomeFiltro: string = ''; // Valor para o filtro de nome

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
        this.usuariosFiltrados = data; // Inicialmente, a lista filtrada é igual à lista completa
      },
      (error) => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
  }

  filtrarUsuarios(): void {
    if (this.nomeFiltro.trim()) {
      this.usuariosFiltrados = this.usuarios.filter(usuario =>
        usuario.nome.toLowerCase().includes(this.nomeFiltro.toLowerCase())
      );
    } else {
      this.usuariosFiltrados = [...this.usuarios];
    }
  }
}
