import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erroMensagem: string = ''; // Mensagem de erro para exibir no template

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.usuarioService.getUsuario(this.email, this.senha).subscribe(usuario => {
      if (usuario) {
        // Usuário autenticado, redireciona para a tela principal
        this.router.navigate(['/principal']);
      } else {
        // Credenciais incorretas, exibe mensagem de erro
        this.erroMensagem = 'E-mail ou senha inválido!';
      }
    });
  }
}
