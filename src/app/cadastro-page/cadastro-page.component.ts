import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-page',
  standalone: true,
  templateUrl: './cadastro-page.component.html',
  styleUrls: ['./cadastro-page.component.scss']
})
export class CadastroPageComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private router: Router) {}

  // Métodos para capturar os valores dos campos
  updateNome(event: Event): void {
    this.nome = (event.target as HTMLInputElement).value;
  }

  updateEmail(event: Event): void {
    this.email = (event.target as HTMLInputElement).value;
  }

  updateSenha(event: Event): void {
    this.senha = (event.target as HTMLInputElement).value;
  }

  updateConfirmarSenha(event: Event): void {
    this.confirmarSenha = (event.target as HTMLInputElement).value;
  }

  // Método para realizar o cadastro
  cadastrar(): void {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem. Tente novamente.');
      return;
    }

    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Mensagem de sucesso
    alert('Cadastro realizado com sucesso!');

    // Redireciona para a página "controle-page"
    this.router.navigate(['/']);
  }
}
